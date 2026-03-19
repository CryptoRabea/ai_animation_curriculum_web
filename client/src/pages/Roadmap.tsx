import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ChevronLeft } from "lucide-react";
import { VisualRoadmap } from "@/components/VisualRoadmap";

/**
 * Design Philosophy: Modern Tech-Forward Minimalism
 * Dedicated roadmap page showing the complete learning journey
 */

export default function Roadmap() {
  const [, navigate] = useLocation();

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
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <VisualRoadmap />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-slate-50 mt-16">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-foreground mb-4">Curriculum</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition cursor-pointer">All Modules</a></li>
                <li><a href="/roadmap" className="hover:text-foreground transition cursor-pointer">Learning Roadmap</a></li>
                <li><a href="/progress" className="hover:text-foreground transition cursor-pointer">My Progress</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition cursor-pointer">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition cursor-pointer">FAQ</a></li>
                <li><a href="mailto:support@aianimationcurriculum.com" className="hover:text-foreground transition cursor-pointer">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-foreground mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition cursor-pointer">Discord</a></li>
                <li><a href="#" className="hover:text-foreground transition cursor-pointer">Forum</a></li>
                <li><a href="#" className="hover:text-foreground transition cursor-pointer">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-foreground mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition cursor-pointer">Tutorials</a></li>
                <li><a href="#" className="hover:text-foreground transition cursor-pointer">Tools</a></li>
                <li><a href="#" className="hover:text-foreground transition cursor-pointer">Models</a></li>
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
