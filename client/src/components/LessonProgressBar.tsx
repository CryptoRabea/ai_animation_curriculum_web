import { useProgress } from "@/contexts/ProgressContext";
import { CheckCircle2, Circle } from "lucide-react";

interface LessonProgressBarProps {
  moduleId: string;
  lessonId: string;
  lessonTitle: string;
}

/**
 * Design Philosophy: Modern Tech-Forward Minimalism
 * Compact progress indicator for individual lessons
 */

export function LessonProgressBar({ moduleId, lessonId, lessonTitle }: LessonProgressBarProps) {
  const { progress } = useProgress();

  if (!progress) return null;

  const module = progress.modules.find(m => m.moduleId === moduleId);
  if (!module) return null;

  const lesson = module.lessons.find(l => l.lessonId === lessonId);
  if (!lesson) return null;

  const isCompleted = lesson.completed;
  const quizPassed = lesson.quizPassed;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isCompleted ? (
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          ) : (
            <Circle className="w-5 h-5 text-slate-300" />
          )}
          <span className="text-sm font-heading text-foreground">{lessonTitle}</span>
        </div>
        {quizPassed && (
          <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 font-heading">
            Quiz Passed
          </span>
        )}
      </div>

      {/* Sub-progress */}
      <div className="ml-7 space-y-1 text-xs text-muted-foreground">
        {lesson.videosWatched > 0 && (
          <div>Videos: {lesson.videosWatched}/{lesson.totalVideos}</div>
        )}
        {lesson.quizTaken && (
          <div>Quiz Score: {lesson.quizScore}%</div>
        )}
      </div>
    </div>
  );
}

interface ModuleProgressBarProps {
  moduleId: string;
  moduleName: string;
}

export function ModuleProgressBar({ moduleId, moduleName }: ModuleProgressBarProps) {
  const { progress } = useProgress();

  if (!progress) return null;

  const module = progress.modules.find(m => m.moduleId === moduleId);
  if (!module) return null;

  const completionPercentage = Math.round((module.lessonsCompleted / module.totalLessons) * 100);
  const isCompleted = module.completed;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isCompleted ? (
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          ) : (
            <Circle className="w-5 h-5 text-slate-300" />
          )}
          <span className="font-heading text-foreground">{moduleName}</span>
        </div>
        <span className="text-sm font-heading text-blue-600">{completionPercentage}%</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>

      {/* Stats */}
      <div className="text-xs text-muted-foreground">
        {module.lessonsCompleted} of {module.totalLessons} lessons • Avg Score: {module.averageQuizScore}%
      </div>
    </div>
  );
}
