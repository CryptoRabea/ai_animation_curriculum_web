/**
 * Progress Tracking Data Structure and Utilities
 * Manages learner progress, quiz scores, and completion status
 */

export interface LessonProgress {
  lessonId: string;
  moduleId: string;
  completed: boolean;
  completedAt?: string;
  videosWatched: number;
  totalVideos: number;
  quizTaken: boolean;
  quizScore?: number;
  quizPassed: boolean;
  resourcesDownloaded: number;
}

export interface ModuleProgress {
  moduleId: string;
  moduleName: string;
  completed: boolean;
  completedAt?: string;
  lessonsCompleted: number;
  totalLessons: number;
  averageQuizScore: number;
  lessons: LessonProgress[];
}

export interface CurriculumProgress {
  userId?: string;
  startedAt: string;
  lastAccessedAt: string;
  modulesCompleted: number;
  totalModules: number;
  lessonsCompleted: number;
  totalLessons: number;
  quizzesCompleted: number;
  averageQuizScore: number;
  certificateEarned: boolean;
  modules: ModuleProgress[];
}

export interface ProgressStats {
  completionPercentage: number;
  estimatedTimeRemaining: number; // in hours
  currentStreak: number; // days
  totalTimeSpent: number; // in hours
  quizzesAttempted: number;
  quizzesPassedCount: number;
  averageQuizScore: number;
}

// Initialize empty progress structure
export function initializeProgress(modules: any[]): CurriculumProgress {
  const now = new Date().toISOString();
  
  return {
    startedAt: now,
    lastAccessedAt: now,
    modulesCompleted: 0,
    totalModules: modules.length,
    lessonsCompleted: 0,
    totalLessons: modules.reduce((sum, m) => sum + m.lessons.length, 0),
    quizzesCompleted: 0,
    averageQuizScore: 0,
    certificateEarned: false,
    modules: modules.map(module => ({
      moduleId: module.id,
      moduleName: module.title,
      completed: false,
      lessonsCompleted: 0,
      totalLessons: module.lessons.length,
      averageQuizScore: 0,
      lessons: module.lessons.map((lesson: any) => ({
        lessonId: lesson.id,
        moduleId: module.id,
        completed: false,
        videosWatched: 0,
        totalVideos: 0, // Will be populated from video data
        quizTaken: false,
        quizPassed: false,
        resourcesDownloaded: 0
      }))
    }))
  };
}

// Get lesson progress
export function getLessonProgress(progress: CurriculumProgress, moduleId: string, lessonId: string): LessonProgress | undefined {
  const module = progress.modules.find(m => m.moduleId === moduleId);
  if (!module) return undefined;
  return module.lessons.find(l => l.lessonId === lessonId);
}

// Update lesson progress
export function updateLessonProgress(
  progress: CurriculumProgress,
  moduleId: string,
  lessonId: string,
  updates: Partial<LessonProgress>
): CurriculumProgress {
  const newProgress = JSON.parse(JSON.stringify(progress)) as CurriculumProgress;
  const module = newProgress.modules.find(m => m.moduleId === moduleId);
  
  if (!module) return newProgress;
  
  const lesson = module.lessons.find(l => l.lessonId === lessonId);
  if (!lesson) return newProgress;
  
  // Update lesson
  Object.assign(lesson, updates);
  
  // Update module stats
  const completedLessons = module.lessons.filter(l => l.completed).length;
  module.lessonsCompleted = completedLessons;
  module.completed = completedLessons === module.totalLessons;
  
  if (lesson.quizTaken && lesson.quizScore !== undefined) {
    const quizScores = module.lessons
      .filter(l => l.quizTaken && l.quizScore !== undefined)
      .map(l => l.quizScore as number);
    module.averageQuizScore = quizScores.length > 0
      ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
      : 0;
  }
  
  // Update curriculum stats
  const completedModules = newProgress.modules.filter(m => m.completed).length;
  newProgress.modulesCompleted = completedModules;
  
  const allCompletedLessons = newProgress.modules.reduce((sum, m) => sum + m.lessonsCompleted, 0);
  newProgress.lessonsCompleted = allCompletedLessons;
  
  const allQuizzesCompleted = newProgress.modules.reduce(
    (sum, m) => sum + m.lessons.filter(l => l.quizTaken).length,
    0
  );
  newProgress.quizzesCompleted = allQuizzesCompleted;
  
  const allQuizScores = newProgress.modules.flatMap(m =>
    m.lessons.filter(l => l.quizTaken && l.quizScore !== undefined).map(l => l.quizScore as number)
  );
  newProgress.averageQuizScore = allQuizScores.length > 0
    ? Math.round(allQuizScores.reduce((a, b) => a + b, 0) / allQuizScores.length)
    : 0;
  
  // Check if certificate earned (all modules completed with 80%+ average)
  if (completedModules === newProgress.totalModules && newProgress.averageQuizScore >= 80) {
    newProgress.certificateEarned = true;
  }
  
  newProgress.lastAccessedAt = new Date().toISOString();
  
  return newProgress;
}

// Mark lesson as completed
export function markLessonComplete(
  progress: CurriculumProgress,
  moduleId: string,
  lessonId: string
): CurriculumProgress {
  return updateLessonProgress(progress, moduleId, lessonId, {
    completed: true,
    completedAt: new Date().toISOString()
  });
}

// Record quiz attempt
export function recordQuizAttempt(
  progress: CurriculumProgress,
  moduleId: string,
  lessonId: string,
  score: number
): CurriculumProgress {
  return updateLessonProgress(progress, moduleId, lessonId, {
    quizTaken: true,
    quizScore: score,
    quizPassed: score >= 60
  });
}

// Calculate progress stats
export function calculateProgressStats(progress: CurriculumProgress): ProgressStats {
  const completionPercentage = Math.round(
    (progress.lessonsCompleted / progress.totalLessons) * 100
  );
  
  const remainingLessons = progress.totalLessons - progress.lessonsCompleted;
  const estimatedTimePerLesson = 1.5; // hours
  const estimatedTimeRemaining = Math.ceil(remainingLessons * estimatedTimePerLesson);
  
  // Calculate streak (simplified - would need date tracking in production)
  const currentStreak = 0;
  const totalTimeSpent = 0;
  
  const quizzesPassedCount = progress.modules.reduce(
    (sum, m) => sum + m.lessons.filter(l => l.quizPassed).length,
    0
  );
  
  return {
    completionPercentage,
    estimatedTimeRemaining,
    currentStreak,
    totalTimeSpent,
    quizzesAttempted: progress.quizzesCompleted,
    quizzesPassedCount,
    averageQuizScore: progress.averageQuizScore
  };
}

// Get module progress
export function getModuleProgress(progress: CurriculumProgress, moduleId: string): ModuleProgress | undefined {
  return progress.modules.find(m => m.moduleId === moduleId);
}

// Export progress as JSON
export function exportProgressAsJSON(progress: CurriculumProgress): string {
  return JSON.stringify(progress, null, 2);
}

// Import progress from JSON
export function importProgressFromJSON(jsonString: string): CurriculumProgress | null {
  try {
    return JSON.parse(jsonString) as CurriculumProgress;
  } catch (error) {
    console.error("Failed to import progress:", error);
    return null;
  }
}
