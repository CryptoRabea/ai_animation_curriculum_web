import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, BookOpen, Zap, Grid3x3, Settings, Layers, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { getModuleSlug } from "@/lib/module-slugs";

/**
 * Design Philosophy: Modern Tech-Forward Minimalism
 * - Clean, spacious layouts with generous whitespace
 * - Indigo (#1e3a8a) + Cyan (#06b6d4) color scheme
 * - Poppins for headings, Inter for body, Roboto Mono for code
 * - Smooth transitions and hover elevation effects
 */

interface ModuleItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  lessons: number;
  duration: string;
  image: string;
  color: string;
}

const modules: ModuleItem[] = [
  {
    id: "module-1",
    title: "Foundations of AI Image Generation",
    description: "Learn the core principles of Stable Diffusion and master text-to-image generation with effective prompt engineering.",
    icon: <BookOpen className="w-6 h-6" />,
    lessons: 6,
    duration: "4-5 hours",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262110696/QKxk8x4NSBGLqrdaE2aMPV/module-illustration-1-CqbTuqisJZK5xGDUfySa94.webp",
    color: "from-blue-600 to-cyan-500"
  },
  {
    id: "module-2",
    title: "AI Animation with A1111",
    description: "Create animated sequences using AnimateDiff and Deforum extensions in the A1111 WebUI environment.",
    icon: <Zap className="w-6 h-6" />,
    lessons: 5,
    duration: "3-4 hours",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262110696/QKxk8x4NSBGLqrdaE2aMPV/module-illustration-2-DHBUNtKdgyJAENVpeZ5rfu.webp",
    color: "from-cyan-500 to-blue-600"
  },
  {
    id: "module-3",
    title: "Advanced Workflows with ComfyUI",
    description: "Master ComfyUI's powerful node-based interface for creating complex and efficient animation workflows.",
    icon: <Grid3x3 className="w-6 h-6" />,
    lessons: 7,
    duration: "5-6 hours",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262110696/QKxk8x4NSBGLqrdaE2aMPV/module-illustration-3-nEHsKg2jgtz5nHeTQMYwTr.webp",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: "module-4",
    title: "Optimizing Performance with Forge",
    description: "Leverage Stable Diffusion WebUI Forge for improved performance and efficiency in AI animation tasks.",
    icon: <Settings className="w-6 h-6" />,
    lessons: 4,
    duration: "2-3 hours",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262110696/QKxk8x4NSBGLqrdaE2aMPV/module-illustration-1-CqbTuqisJZK5xGDUfySa94.webp",
    color: "from-indigo-600 to-blue-500"
  },
  {
    id: "module-5",
    title: "Streamlining with Stability Matrix",
    description: "Simplify management of multiple Stable Diffusion installations and models with Stability Matrix.",
    icon: <Layers className="w-6 h-6" />,
    lessons: 4,
    duration: "2-3 hours",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262110696/QKxk8x4NSBGLqrdaE2aMPV/module-illustration-2-DHBUNtKdgyJAENVpeZ5rfu.webp",
    color: "from-cyan-600 to-blue-500"
  },
  {
    id: "module-6",
    title: "Advanced Techniques & Future Trends",
    description: "Explore SVD, consistency techniques, storyboarding, and emerging tools in AI animation.",
    icon: <Sparkles className="w-6 h-6" />,
    lessons: 5,
    duration: "4-5 hours",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262110696/QKxk8x4NSBGLqrdaE2aMPV/module-illustration-3-nEHsKg2jgtz5nHeTQMYwTr.webp",
    color: "from-blue-600 to-cyan-500"
  }
];

function ModuleCard({ module, index }: { module: ModuleItem; index: number }) {
  const [, navigate] = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="animate-slide-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Card className="card-elevated overflow-hidden group cursor-pointer h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
          <img
            src={module.image}
            alt={module.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 text-blue-700">
                {module.icon}
              </div>
              <div>
                <h3 className="font-heading text-lg text-foreground leading-tight">
                  {module.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 flex-1">
            {module.description}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-between mb-4 pt-4 border-t border-border">
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span className="font-mono">{module.lessons} lessons</span>
              <span className="font-mono">{module.duration}</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="w-full group/btn"
            onClick={() => navigate(`/module/${getModuleSlug(module.id)}`)}
          >
            <span>Start Learning</span>
            <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default function Home() {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-heading text-xl text-foreground">AI Animation Curriculum</h1>
          </div>
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663262110696/QKxk8x4NSBGLqrdaE2aMPV/hero-background-kAHS4UQU9WpqEPXaiUk3Dz.webp')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-2xl">
            {/* Accent Line */}
            <div className="divider-accent mb-6" />

            {/* Heading */}
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              Master AI Animation
            </h2>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              A comprehensive curriculum designed to teach you everything about creating stunning AI-generated animations using Stable Diffusion, ComfyUI, Forge, and more.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-accent text-white border-0">
                Start Learning Now
              </Button>
              <Button size="lg" variant="outline">
                View Curriculum
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="font-heading text-2xl text-foreground">6</div>
                <div className="text-sm text-muted-foreground">Comprehensive Modules</div>
              </div>
              <div>
                <div className="font-heading text-2xl text-foreground">25+</div>
                <div className="text-sm text-muted-foreground">Lessons & Tutorials</div>
              </div>
              <div>
                <div className="font-heading text-2xl text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">Hours of Content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 md:py-24 bg-white/50">
        <div className="container">
          {/* Section Header */}
          <div className="mb-12">
            <div className="divider-accent mb-4" />
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Curriculum Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Each module builds upon the previous one, taking you from beginner to advanced AI animation creator.
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <ModuleCard key={module.id} module={module} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="divider-accent mb-4" />
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">
            What You'll Learn
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Text-to-Image Generation",
                description: "Master prompt engineering and create stunning images with Stable Diffusion"
              },
              {
                title: "Animation Creation",
                description: "Generate smooth, coherent animations using AnimateDiff, Deforum, and SVD"
              },
              {
                title: "Node-Based Workflows",
                description: "Build complex, reusable workflows with ComfyUI's powerful interface"
              },
              {
                title: "Performance Optimization",
                description: "Leverage Forge for faster generation and efficient resource management"
              },
              {
                title: "Consistency & Quality",
                description: "Maintain character, style, and background consistency across animations"
              },
              {
                title: "Professional Pipeline",
                description: "Learn storyboarding, planning, and best practices for AI animation projects"
              }
            ].map((feature, index) => (
              <div key={index} className="card-elevated p-6">
                <div className="w-12 h-12 rounded-lg gradient-accent mb-4 flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-cyan-50 border-t border-border">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Ready to Start Your AI Animation Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of creators learning to harness the power of AI for animation production.
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
                <li><a href="#" className="hover:text-foreground transition">Modules</a></li>
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
