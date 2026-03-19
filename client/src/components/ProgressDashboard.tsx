import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/contexts/ProgressContext";
import { CheckCircle2, Clock, Award, TrendingUp, Download, RotateCcw } from "lucide-react";

/**
 * Design Philosophy: Modern Tech-Forward Minimalism
 * Dashboard showing overall curriculum progress and achievements
 */

export function ProgressDashboard() {
  const { progress, stats, exportProgress, resetProgress } = useProgress();

  if (!progress || !stats) {
    return (
      <Card className="card-elevated p-8 text-center">
        <p className="text-muted-foreground">Loading progress...</p>
      </Card>
    );
  }

  const handleExport = () => {
    const data = exportProgress();
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `curriculum-progress-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      resetProgress();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-4xl text-foreground mb-2">Your Progress</h1>
        <p className="text-muted-foreground">
          Track your learning journey through the AI Animation Curriculum
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Completion */}
        <Card className="card-elevated p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground font-heading mb-1">Completion</p>
              <p className="font-display text-3xl text-blue-600">{stats.completionPercentage}%</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            {progress.lessonsCompleted} of {progress.totalLessons} lessons completed
          </p>
        </Card>

        {/* Modules */}
        <Card className="card-elevated p-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground font-heading mb-1">Modules</p>
              <p className="font-display text-3xl text-green-600">
                {progress.modulesCompleted}/{progress.totalModules}
              </p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            {progress.totalModules - progress.modulesCompleted} modules remaining
          </p>
        </Card>

        {/* Quiz Score */}
        <Card className="card-elevated p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground font-heading mb-1">Avg Quiz Score</p>
              <p className="font-display text-3xl text-purple-600">{progress.averageQuizScore}%</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            {progress.quizzesCompleted} quizzes completed
          </p>
        </Card>

        {/* Time Estimate */}
        <Card className="card-elevated p-6 bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground font-heading mb-1">Est. Time Left</p>
              <p className="font-display text-3xl text-orange-600">{stats.estimatedTimeRemaining}h</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            At current pace
          </p>
        </Card>
      </div>

      {/* Certificate Status */}
      {progress.certificateEarned ? (
        <Card className="card-elevated p-6 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-300">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-lg text-yellow-900 mb-1">
                🎉 Congratulations!
              </h3>
              <p className="text-sm text-yellow-800">
                You've earned your AI Animation Curriculum Certificate! All modules completed with an average quiz score of {progress.averageQuizScore}%.
              </p>
            </div>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white" size="sm">
              Download Certificate
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="card-elevated p-6 bg-blue-50 border border-blue-200">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-lg text-blue-900 mb-1">
                Keep Going!
              </h3>
              <p className="text-sm text-blue-800">
                Complete all {progress.totalModules} modules and achieve an average quiz score of 80% or higher to earn your certificate.
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Module Progress */}
      <div>
        <h2 className="font-heading text-2xl text-foreground mb-4">Module Progress</h2>
        <div className="space-y-3">
          {progress.modules.map((module) => {
            const moduleCompletion = Math.round((module.lessonsCompleted / module.totalLessons) * 100);
            return (
              <Card key={module.moduleId} className="card-elevated p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-heading text-foreground">{module.moduleName}</h3>
                    <p className="text-sm text-muted-foreground">
                      {module.lessonsCompleted} of {module.totalLessons} lessons • Avg Score: {module.averageQuizScore}%
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl text-blue-600">{moduleCompletion}%</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300"
                    style={{ width: `${moduleCompletion}%` }}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4">
        <Button
          onClick={handleExport}
          variant="outline"
          className="gap-2"
        >
          <Download className="w-4 h-4" />
          Export Progress
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          className="gap-2 text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50"
        >
          <RotateCcw className="w-4 h-4" />
          Reset Progress
        </Button>
      </div>
    </div>
  );
}
