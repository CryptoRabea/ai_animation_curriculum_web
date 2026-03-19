import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { roadmapMilestones, getCurriculumStats, getTotalCurriculumHours, getTotalLessons } from "@/lib/roadmap-data";
import { CheckCircle2, Clock, BookOpen, Zap, Target, Award } from "lucide-react";
import { useLocation } from "wouter";
import { getModuleSlug } from "@/lib/module-slugs";

/**
 * Design Philosophy: Modern Tech-Forward Minimalism
 * Visual roadmap showing the complete learning journey
 */

export function VisualRoadmap() {
  const [, navigate] = useLocation();
  const stats = getCurriculumStats();

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
          Your Learning Roadmap
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A structured path from beginner to advanced AI animation creator. Each phase builds upon the previous one, progressively unlocking new capabilities.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="card-elevated p-4 bg-blue-50 border border-blue-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-heading">Total Phases</p>
              <p className="font-display text-2xl text-blue-600">{stats.totalPhases}</p>
            </div>
          </div>
        </Card>

        <Card className="card-elevated p-4 bg-green-50 border border-green-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-heading">Total Lessons</p>
              <p className="font-display text-2xl text-green-600">{stats.totalLessons}</p>
            </div>
          </div>
        </Card>

        <Card className="card-elevated p-4 bg-purple-50 border border-purple-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-heading">Total Hours</p>
              <p className="font-display text-2xl text-purple-600">{stats.totalHours.toFixed(1)}h</p>
            </div>
          </div>
        </Card>

        <Card className="card-elevated p-4 bg-orange-50 border border-orange-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <Zap className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-heading">Avg per Module</p>
              <p className="font-display text-2xl text-orange-600">{stats.averageHoursPerModule}h</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Roadmap Timeline */}
      <div className="space-y-6">
        {roadmapMilestones.map((milestone, index) => {
          const isLast = index === roadmapMilestones.length - 1;
          const difficultyColor = {
            "Beginner": "bg-green-50 border-green-200 text-green-700",
            "Intermediate": "bg-blue-50 border-blue-200 text-blue-700",
            "Advanced": "bg-purple-50 border-purple-200 text-purple-700"
          }[milestone.difficulty];

          return (
            <div key={milestone.id}>
              {/* Timeline Node */}
              <div className="flex gap-6">
                {/* Timeline Line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-heading text-sm">
                    {milestone.phase}
                  </div>
                  {!isLast && (
                    <div className="w-1 h-24 bg-gradient-to-b from-blue-300 to-slate-200 mt-2" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 pb-6">
                  <Card className="card-elevated p-6 hover:shadow-lg transition-shadow">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-heading text-xl text-foreground mb-1">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {milestone.moduleName}
                        </p>
                      </div>
                      <span className={`text-xs font-heading px-3 py-1 rounded-full border ${difficultyColor}`}>
                        {milestone.difficulty}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {milestone.description}
                    </p>

                    {/* Metadata */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 pb-4 border-b border-border">
                      <div>
                        <p className="text-xs text-muted-foreground font-heading mb-1">Duration</p>
                        <p className="text-sm font-heading text-foreground">{milestone.duration}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-heading mb-1">Lessons</p>
                        <p className="text-sm font-heading text-foreground">{milestone.lessons} lessons</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-heading mb-1">Hours</p>
                        <p className="text-sm font-heading text-foreground">{milestone.estimatedHours}h</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground font-heading mb-1">Tools</p>
                        <p className="text-sm font-heading text-foreground">{milestone.tools.length} tools</p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground font-heading mb-2">Skills You'll Learn:</p>
                      <div className="flex flex-wrap gap-2">
                        {milestone.skills.slice(0, 3).map((skill, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                            {skill}
                          </span>
                        ))}
                        {milestone.skills.length > 3 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                            +{milestone.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Key Outcomes */}
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground font-heading mb-2">Key Outcomes:</p>
                      <ul className="space-y-1">
                        {milestone.keyOutcomes.map((outcome, idx) => (
                          <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground font-heading mb-2">Tools & Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {milestone.tools.map((tool, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-mono">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Prerequisites */}
                    {milestone.prerequisites.length > 0 && (
                      <div className="mb-4 p-3 rounded-lg bg-amber-50 border border-amber-200">
                        <p className="text-xs text-amber-900 font-heading mb-1">Prerequisites:</p>
                        <p className="text-sm text-amber-800">
                          {milestone.prerequisites.join(", ")}
                        </p>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Button
                      onClick={() => navigate(`/module/${getModuleSlug(milestone.moduleId)}`)}
                      className="w-full gradient-accent text-white"
                    >
                      Start {milestone.title}
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
          );
        })}

        {/* Completion Card */}
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex-1">
            <Card className="card-elevated p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
              <h3 className="font-heading text-xl text-green-900 mb-2">
                🎓 Curriculum Complete!
              </h3>
              <p className="text-sm text-green-800 mb-4">
                After completing all 6 phases and achieving an average quiz score of 80% or higher, you'll earn your official AI Animation Curriculum Certificate and be ready to create professional-quality AI animations.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-100">
                  View Certificate Requirements
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <Card className="card-elevated p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-center">
        <h3 className="font-heading text-2xl text-foreground mb-2">Ready to Start Your Journey?</h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Begin with Phase 1 and progress through each module at your own pace. Most learners complete the entire curriculum in 20-25 hours.
        </p>
        <Button
          size="lg"
          className="gradient-accent text-white"
          onClick={() => navigate(`/module/${getModuleSlug("module-1")}`)}
        >
          Start Phase 1: Foundations
        </Button>
      </Card>
    </div>
  );
}
