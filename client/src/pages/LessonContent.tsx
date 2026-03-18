import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Clock, BookOpen, Play, CheckCircle2, Lock, ArrowRight } from "lucide-react";
import { getLessonById } from "@/lib/modules-data";
import { getVideosByLessonId } from "@/lib/video-data";
import { getQuestionsByLessonId } from "@/lib/quiz-data";
import { VideoPlayer, VideoThumbnail } from "@/components/VideoPlayer";
import { Quiz } from "@/components/Quiz";
import { useState } from "react";

/**
 * Design Philosophy: Modern Tech-Forward Minimalism
 * Detailed lesson content page with videos, quizzes, and learning materials
 */

interface LessonParams {
  moduleId: string;
  lessonId: string;
}

export default function LessonContent() {
  const { moduleId, lessonId } = useParams<LessonParams>();
  const [, navigate] = useLocation();
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  const lesson = moduleId && lessonId ? getLessonById(moduleId, lessonId) : undefined;
  const videos = lessonId ? getVideosByLessonId(lessonId) : [];
  const quizQuestions = lessonId ? getQuestionsByLessonId(lessonId) : [];

  if (!lesson) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="container py-4 flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(`/module/${moduleId}`)}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Module
            </Button>
          </div>
        </nav>

        <div className="container py-16 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">
            Lesson Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The lesson you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/")} className="gradient-accent text-white">
            Return to Curriculum
          </Button>
        </div>
      </div>
    );
  }

  const selectedVideo = videos.find(v => v.id === selectedVideoId) || videos[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate(`/module/${moduleId}`)}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Module
          </Button>
          <Button variant="default" size="sm">
            Mark Complete
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-cyan-50 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="text-sm text-muted-foreground mb-4 font-mono">
              Curriculum / Module / {lesson.title}
            </div>

            {/* Title & Description */}
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              {lesson.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {lesson.description}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="font-mono">{lesson.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Play className="w-4 h-4" />
                <span className="font-mono">{videos.length} Videos</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-mono">{quizQuestions.length} Quiz Questions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="videos">
                Videos {videos.length > 0 && <span className="ml-2 text-xs">({videos.length})</span>}
              </TabsTrigger>
              <TabsTrigger value="quiz">
                Quiz {quizQuestions.length > 0 && <span className="ml-2 text-xs">({quizQuestions.length})</span>}
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              {/* Learning Objectives */}
              <Card className="card-elevated p-8">
                <h2 className="font-heading text-2xl text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Learning Objectives
                </h2>
                <ul className="space-y-4">
                  {lesson.objectives.map((objective, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center flex-shrink-0 text-sm font-heading text-blue-700 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-muted-foreground leading-relaxed">
                        {objective}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Topics Covered */}
              <Card className="card-elevated p-8">
                <h2 className="font-heading text-2xl text-foreground mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  Topics Covered
                </h2>
                <div className="flex flex-wrap gap-3">
                  {lesson.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-heading border border-blue-200"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Content Preview */}
              <Card className="card-elevated p-8">
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Lesson Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {lesson.preview}
                </p>
                <Button className="gradient-accent text-white" onClick={() => setActiveTab("videos")}>
                  <span>Watch Videos</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos" className="space-y-8">
              {videos.length === 0 ? (
                <Card className="card-elevated p-8 text-center">
                  <p className="text-muted-foreground">No videos available for this lesson yet.</p>
                </Card>
              ) : (
                <>
                  {/* Main Video Player */}
                  {selectedVideo && (
                    <Card className="card-elevated overflow-hidden">
                      <VideoPlayer
                        videoUrl={selectedVideo.videoUrl}
                        title={selectedVideo.title}
                        duration={selectedVideo.duration}
                      />
                      <div className="p-6">
                        <h2 className="font-heading text-2xl text-foreground mb-2">
                          {selectedVideo.title}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {selectedVideo.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedVideo.topics.map((topic, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  )}

                  {/* Video Playlist */}
                  {videos.length > 1 && (
                    <div>
                      <h3 className="font-heading text-lg text-foreground mb-4">
                        Playlist ({videos.length} videos)
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {videos.map((video) => (
                          <button
                            key={video.id}
                            onClick={() => setSelectedVideoId(video.id)}
                            className={`text-left transition-all ${
                              selectedVideoId === video.id ? "ring-2 ring-blue-500 rounded-lg overflow-hidden" : ""
                            }`}
                          >
                            <VideoThumbnail
                              thumbnail={video.thumbnail}
                              title={video.title}
                              duration={video.duration}
                              onClick={() => setSelectedVideoId(video.id)}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </TabsContent>

            {/* Quiz Tab */}
            <TabsContent value="quiz">
              {quizQuestions.length === 0 ? (
                <Card className="card-elevated p-8 text-center">
                  <p className="text-muted-foreground">No quiz available for this lesson yet.</p>
                </Card>
              ) : (
                <div className="space-y-6">
                  <Card className="card-elevated p-6 bg-blue-50 border border-blue-200">
                    <h3 className="font-heading text-foreground mb-2">
                      Test Your Knowledge
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Complete this quiz to test your understanding of the lesson material. You need to score at least 60% to pass.
                    </p>
                  </Card>
                  <Quiz questions={quizQuestions} lessonTitle={lesson.title} />
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Navigation to Next Lesson */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-cyan-50 border-t border-border">
        <div className="container max-w-5xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Next Lesson</p>
              <h3 className="font-heading text-lg text-foreground">
                Ready to move forward?
              </h3>
            </div>
            <Button className="gradient-accent text-white">
              <span>Next Lesson</span>
              <ArrowRight className="w-4 h-4 ml-2" />
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
