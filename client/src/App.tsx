import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ProgressProvider } from "./contexts/ProgressContext";
import Home from "./pages/Home";
import ModuleDetail from "./pages/ModuleDetail";
import LessonContent from "./pages/LessonContent";
import Progress from "./pages/Progress";
import Roadmap from "./pages/Roadmap";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/module/:slug"} component={ModuleDetail} />
      <Route path={"/lesson/:moduleId/:lessonId"} component={LessonContent} />
      <Route path={"/progress"} component={Progress} />
      <Route path={"/roadmap"} component={Roadmap} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <ProgressProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ProgressProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
