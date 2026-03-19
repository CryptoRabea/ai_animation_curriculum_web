/**
 * Curriculum Roadmap Data
 * Comprehensive learning path information with milestones and progression
 */

export interface RoadmapMilestone {
  id: string;
  moduleId: string;
  moduleName: string;
  phase: number;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  skills: string[];
  tools: string[];
  prerequisites: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  keyOutcomes: string[];
  estimatedHours: number;
}

export const roadmapMilestones: RoadmapMilestone[] = [
  {
    id: "milestone-1",
    moduleId: "module-1",
    moduleName: "Foundations of AI Image Generation",
    phase: 1,
    title: "Understanding Diffusion Models",
    description: "Learn the fundamental concepts behind AI image generation, including how diffusion models work and the principles of Stable Diffusion.",
    duration: "4-5 hours",
    lessons: 6,
    skills: [
      "Understanding diffusion model architecture",
      "Text prompt engineering fundamentals",
      "Image-to-image translation basics",
      "Negative prompt optimization",
      "Sampling methods and schedulers",
      "Model selection and configuration"
    ],
    tools: ["Stable Diffusion WebUI", "A1111"],
    prerequisites: [],
    difficulty: "Beginner",
    keyOutcomes: [
      "Generate high-quality images from text descriptions",
      "Master prompt engineering techniques",
      "Understand model parameters and their effects",
      "Create variations and iterations of images"
    ],
    estimatedHours: 4.5
  },
  {
    id: "milestone-2",
    moduleId: "module-2",
    moduleName: "AI Animation with A1111",
    phase: 2,
    title: "Creating Animated Sequences",
    description: "Master animation creation using AnimateDiff, Deforum, and other extensions in the A1111 WebUI environment.",
    duration: "3-4 hours",
    lessons: 5,
    skills: [
      "AnimateDiff extension setup and configuration",
      "Deforum scripting for dynamic animations",
      "Keyframe interpolation techniques",
      "Motion control and camera movements",
      "Animation loop creation",
      "Frame-by-frame refinement"
    ],
    tools: ["A1111 WebUI", "AnimateDiff", "Deforum"],
    prerequisites: ["Foundations of AI Image Generation"],
    difficulty: "Intermediate",
    keyOutcomes: [
      "Create smooth animated sequences",
      "Control motion and camera movements",
      "Generate consistent character animations",
      "Optimize animation quality and performance"
    ],
    estimatedHours: 3.5
  },
  {
    id: "milestone-3",
    moduleId: "module-3",
    moduleName: "Advanced Workflows with ComfyUI",
    phase: 3,
    title: "Node-Based Animation Workflows",
    description: "Explore advanced node-based workflows using ComfyUI for maximum flexibility and control over animation generation.",
    duration: "4-5 hours",
    lessons: 6,
    skills: [
      "ComfyUI node system fundamentals",
      "Custom node creation and integration",
      "Complex workflow design patterns",
      "Batch processing and optimization",
      "Advanced sampling techniques",
      "Workflow debugging and troubleshooting"
    ],
    tools: ["ComfyUI", "Custom Nodes", "Python"],
    prerequisites: ["AI Animation with A1111"],
    difficulty: "Advanced",
    keyOutcomes: [
      "Design complex animation workflows",
      "Create reusable workflow templates",
      "Optimize rendering performance",
      "Integrate custom nodes and extensions"
    ],
    estimatedHours: 4.5
  },
  {
    id: "milestone-4",
    moduleId: "module-4",
    moduleName: "Forge Optimization & Performance",
    phase: 4,
    title: "High-Performance Animation Generation",
    description: "Learn to optimize animation generation using Forge for faster rendering and better resource management.",
    duration: "3-4 hours",
    lessons: 5,
    skills: [
      "Forge installation and configuration",
      "Memory optimization techniques",
      "Batch processing workflows",
      "GPU acceleration setup",
      "Performance profiling and monitoring",
      "Quality vs. speed trade-offs"
    ],
    tools: ["Forge", "CUDA", "Performance Tools"],
    prerequisites: ["Advanced Workflows with ComfyUI"],
    difficulty: "Advanced",
    keyOutcomes: [
      "Reduce rendering time significantly",
      "Optimize memory usage",
      "Process large batches efficiently",
      "Achieve production-ready performance"
    ],
    estimatedHours: 3.5
  },
  {
    id: "milestone-5",
    moduleId: "module-5",
    moduleName: "Stability Matrix & Multi-Tool Integration",
    phase: 5,
    title: "Unified Tool Management",
    description: "Master Stability Matrix for seamless integration of multiple AI animation tools and environments.",
    duration: "2-3 hours",
    lessons: 4,
    skills: [
      "Stability Matrix installation and setup",
      "Environment management across tools",
      "Model library organization",
      "Cross-tool workflow integration",
      "Version management and updates",
      "Troubleshooting multi-tool setups"
    ],
    tools: ["Stability Matrix", "A1111", "ComfyUI", "Forge"],
    prerequisites: ["Forge Optimization & Performance"],
    difficulty: "Intermediate",
    keyOutcomes: [
      "Manage multiple AI tools efficiently",
      "Switch between tools seamlessly",
      "Organize and maintain model libraries",
      "Create unified workflow pipelines"
    ],
    estimatedHours: 2.5
  },
  {
    id: "milestone-6",
    moduleId: "module-6",
    moduleName: "Advanced Techniques & Production",
    phase: 6,
    title: "Professional Animation Production",
    description: "Learn advanced techniques for creating production-ready animations with professional quality and optimization.",
    duration: "5-6 hours",
    lessons: 7,
    skills: [
      "Advanced prompt engineering strategies",
      "Character consistency techniques",
      "Scene composition and framing",
      "Color grading and post-processing",
      "Video encoding and export optimization",
      "Workflow automation and scripting",
      "Quality assurance and testing"
    ],
    tools: ["All Tools", "FFmpeg", "Python", "Video Editing"],
    prerequisites: ["Stability Matrix & Multi-Tool Integration"],
    difficulty: "Advanced",
    keyOutcomes: [
      "Create professional-quality animations",
      "Maintain character and scene consistency",
      "Automate repetitive tasks",
      "Deliver production-ready content",
      "Troubleshoot complex issues"
    ],
    estimatedHours: 5.5
  }
];

export function getRoadmapMilestones(): RoadmapMilestone[] {
  return roadmapMilestones;
}

export function getMilestoneById(id: string): RoadmapMilestone | undefined {
  return roadmapMilestones.find(m => m.id === id);
}

export function getMilestonesByPhase(phase: number): RoadmapMilestone[] {
  return roadmapMilestones.filter(m => m.phase === phase);
}

export function getTotalCurriculumHours(): number {
  return roadmapMilestones.reduce((sum, m) => sum + m.estimatedHours, 0);
}

export function getTotalLessons(): number {
  return roadmapMilestones.reduce((sum, m) => sum + m.lessons, 0);
}

export function getCurriculumStats() {
  return {
    totalPhases: 6,
    totalModules: roadmapMilestones.length,
    totalLessons: getTotalLessons(),
    totalHours: getTotalCurriculumHours(),
    averageHoursPerModule: Math.round(getTotalCurriculumHours() / roadmapMilestones.length * 10) / 10,
    averageLessonsPerModule: Math.round(getTotalLessons() / roadmapMilestones.length)
  };
}

export function getSkillProgression(): string[] {
  const allSkills = new Set<string>();
  roadmapMilestones.forEach(milestone => {
    milestone.skills.forEach(skill => allSkills.add(skill));
  });
  return Array.from(allSkills);
}

export function getToolProgression(): string[] {
  const allTools = new Set<string>();
  roadmapMilestones.forEach(milestone => {
    milestone.tools.forEach(tool => allTools.add(tool));
  });
  return Array.from(allTools);
}
