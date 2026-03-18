import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Clock, BookOpen, Target, CheckCircle2, Lock } from "lucide-react";
import { getModuleBySlug, Module, Lesson } from "@/lib/modules-data";
import { useState } from "react";

/**
 * Design Philosophy: Modern Tech-Forward Minimalism
 * Detailed module page showing lessons, objectives, and content preview
 */

function LessonCard({ lesson, index, isLocked, moduleId }: { lesson: Lesson; index: number; isLocked: boolean; moduleId: string }) {
  const [, navigate] = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="card-elevated overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-sm font-heading text-blue-700">
                {index + 1}
              </div>
              <h3 className="font-heading text-lg text-foreground">
                {lesson.title}
              </h3>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{lesson.duration}</span>
              </div>
            </div>
          </div>
          {isLocked && (
            <Lock className="w-5 h-5 text-muted-foreground" />
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4">
          {lesson.description}
        </p>

        {/* Topics Preview */}
        <div className="mb-4 flex flex-wrap gap-2">
          {lesson.topics.slice(0, 3).map((topic, idx) => (
            <span
              key={idx}
              className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono"
            >
              {topic}
            </span>
          ))}
          {lesson.topics.length > 3 && (
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono">
              +{lesson.topics.length - 3} more
            </span>
          )}
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="pt-4 border-t border-border space-y-4">
            {/* Learning Objectives */}
            <div>
              <h4 className="font-heading text-sm text-foreground mb-3 flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600" />
                Learning Objectives
              </h4>
              <ul className="space-y-2">
                {lesson.objectives.map((objective, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Preview */}
            <div>
              <h4 className="font-heading text-sm text-foreground mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Content Preview
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {lesson.preview}
              </p>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-heading text-blue-600 hover:text-blue-700 transition"
          >
            {isExpanded ? "Hide Details" : "View Details"}
          </button>
          {!isLocked && (
            <button
              onClick={() => navigate(`/lesson/${moduleId}/${lesson.id}`)}
              className="text-sm font-heading text-blue-600 hover:text-blue-700 transition ml-auto"
            >
              Start Lesson →
            </button>
          )}
        </div>
      </div>
    </Card>
  );
}

function ModuleOverview({ module }: { module: Module }) {
  return (
    <div className="space-y-6">
      {/* Module Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="card-elevated p-6 text-center">
          <div className="font-heading text-2xl text-blue-600 mb-2">
            {module.lessons.length}
          </div>
          <div className="text-sm text-muted-foreground">Lessons</div>
        </Card>
        <Card className="card-elevated p-6 text-center">
          <div className="font-heading text-2xl text-blue-600 mb-2">
            {module.duration}
          </div>
          <div className="text-sm text-muted-foreground">Total Duration</div>
        </Card>
        <Card className="card-elevated p-6 text-center">
          <div className="font-heading text-2xl text-blue-600 mb-2">
            {module.level}
          </div>
          <div className="text-sm text-muted-foreground">Difficulty Level</div>
        </Card>
        <Card className="card-elevated p-6 text-center">
          <div className="font-heading text-2xl text-blue-600 mb-2">
            {module.lessons.reduce((sum, l) => {
              const minutes = parseInt(l.duration);
              return sum + minutes;
            }, 0)} min
          </div>
          <div className="text-sm text-muted-foreground">Learning Time</div>
        </Card>
      </div>

      {/* Full Description */}
      <Card className="card-elevated p-8">
        <h2 className="font-heading text-2xl text-foreground mb-4">
          About This Module
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {module.fullDescription}
        </p>

        {/* Prerequisites */}
        {module.prerequisites.length > 0 && (
          <div>
            <h3 className="font-heading text-sm text-foreground mb-3">
              Prerequisites
            </h3>
            <p className="text-sm text-muted-foreground">
              {module.prerequisites.length === 0
                ? "No prerequisites - you can start this module anytime!"
                : `Complete these modules first: ${module.prerequisites.join(", ")}`}
            </p>
          </div>
        )}
      </Card>

      {/* Learning Path */}
      <Card className="card-elevated p-8">
        <h2 className="font-heading text-2xl text-foreground mb-4">
          What You'll Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {module.lessons.map((lesson) => (
            <div key={lesson.id} className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-heading text-sm text-foreground">
                  {lesson.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {lesson.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function LessonsList({ module }: { module: Module }) {
  return (
    <div className="space-y-4">
      {module.lessons.map((lesson, index) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          index={index}
          isLocked={false}
          moduleId={module.id}
        />
      ))}
    </div>
  );
}

export default function ModuleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  const module = slug ? getModuleBySlug(slug) : undefined;

  if (!module) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="container py-4 flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Curriculum
            </Button>
          </div>
        </nav>

        <div className="container py-16 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">
            Module Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The module you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/")} className="gradient-accent text-white">
            Return to Curriculum
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Curriculum
          </Button>
          <Button variant="default" size="sm">
            Enroll Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-16 bg-gradient-to-br from-blue-50 to-cyan-50 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="text-sm text-muted-foreground mb-4 font-mono">
              Curriculum / {module.title}
            </div>

            {/* Title & Description */}
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              {module.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {module.description}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="w-4 h-4" />
                <span className="font-mono">{module.lessons.length} Lessons</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{module.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Target className="w-4 h-4" />
                <span className="font-mono">{module.level}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="lessons">Lessons</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <ModuleOverview module={module} />
            </TabsContent>

            <TabsContent value="lessons" className="space-y-6">
              <LessonsList module={module} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-cyan-50 border-t border-border">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl text-foreground mb-4">
              Ready to Start This Module?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Begin your journey through {module.title} and master AI animation.
            </p>
            <Button size="lg" className="gradient-accent text-white border-0">
              Enroll Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-slate-50">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-foreground mb-4">Curriculum</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition">All Modules</a></li>
                <li><a href="#" className="hover:text-foreground transition">Projects</a></li>
                <li><a href="#" className="hover:text-foreground transition">Resources</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-foreground mb-4">Tools</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Stable Diffusion</a></li>
                <li><a href="#" className="hover:text-foreground transition">ComfyUI</a></li>
                <li><a href="#" className="hover:text-foreground transition">Forge</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-foreground mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Discord</a></li>
                <li><a href="#" className="hover:text-foreground transition">Forum</a></li>
                <li><a href="#" className="hover:text-foreground transition">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition">Feedback</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2026 AI Animation Curriculum. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
