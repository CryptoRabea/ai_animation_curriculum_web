import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ChevronLeft } from "lucide-react";
import { ProgressDashboard } from "@/components/ProgressDashboard";

/**
 * Design Philosophy: Modern Tech-Forward Minimalism
 * Dedicated progress tracking page
 */

export default function Progress() {
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
            Back to Curriculum
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <ProgressDashboard />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-slate-50 mt-16">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading text-foreground mb-4">Curriculum</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-foreground transition">All Modules</a></li>
                <li><a href="/progress" className="hover:text-foreground transition">My Progress</a></li>
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
