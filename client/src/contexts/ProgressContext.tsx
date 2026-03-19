import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CurriculumProgress, initializeProgress, updateLessonProgress, calculateProgressStats, ProgressStats } from "@/lib/progress-data";
import { modulesData } from "@/lib/modules-data";

interface ProgressContextType {
  progress: CurriculumProgress | null;
  stats: ProgressStats | null;
  isLoading: boolean;
  updateLessonProgress: (moduleId: string, lessonId: string, updates: any) => void;
  markLessonComplete: (moduleId: string, lessonId: string) => void;
  recordQuizAttempt: (moduleId: string, lessonId: string, score: number) => void;
  exportProgress: () => string;
  importProgress: (jsonString: string) => boolean;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = "curriculum_progress";

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<CurriculumProgress | null>(null);
  const [stats, setStats] = useState<ProgressStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize progress from localStorage
  useEffect(() => {
    const loadProgress = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as CurriculumProgress;
          setProgress(parsed);
          setStats(calculateProgressStats(parsed));
        } else {
          const initialProgress = initializeProgress(modulesData);
          setProgress(initialProgress);
          setStats(calculateProgressStats(initialProgress));
          localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProgress));
        }
      } catch (error) {
        console.error("Failed to load progress:", error);
        const initialProgress = initializeProgress(modulesData);
        setProgress(initialProgress);
        setStats(calculateProgressStats(initialProgress));
      } finally {
        setIsLoading(false);
      }
    };

    loadProgress();
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (progress) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      setStats(calculateProgressStats(progress));
    }
  }, [progress]);

  const handleUpdateLessonProgress = (moduleId: string, lessonId: string, updates: any) => {
    if (!progress) return;
    const updated = updateLessonProgress(progress, moduleId, lessonId, updates);
    setProgress(updated);
  };

  const handleMarkLessonComplete = (moduleId: string, lessonId: string) => {
    if (!progress) return;
    const updated = updateLessonProgress(progress, moduleId, lessonId, {
      completed: true,
      completedAt: new Date().toISOString()
    });
    setProgress(updated);
  };

  const handleRecordQuizAttempt = (moduleId: string, lessonId: string, score: number) => {
    if (!progress) return;
    const updated = updateLessonProgress(progress, moduleId, lessonId, {
      quizTaken: true,
      quizScore: score,
      quizPassed: score >= 60
    });
    setProgress(updated);
  };

  const handleExportProgress = (): string => {
    if (!progress) return "";
    return JSON.stringify(progress, null, 2);
  };

  const handleImportProgress = (jsonString: string): boolean => {
    try {
      const imported = JSON.parse(jsonString) as CurriculumProgress;
      setProgress(imported);
      return true;
    } catch (error) {
      console.error("Failed to import progress:", error);
      return false;
    }
  };

  const handleResetProgress = () => {
    const initialProgress = initializeProgress(modulesData);
    setProgress(initialProgress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProgress));
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        stats,
        isLoading,
        updateLessonProgress: handleUpdateLessonProgress,
        markLessonComplete: handleMarkLessonComplete,
        recordQuizAttempt: handleRecordQuizAttempt,
        exportProgress: handleExportProgress,
        importProgress: handleImportProgress,
        resetProgress: handleResetProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return context;
}
