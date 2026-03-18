/**
 * Downloadable Resources Data for Curriculum Lessons
 * Contains prompt templates, workflow files, and reference guides
 */

export interface PromptTemplate {
  id: string;
  name: string;
  description: string;
  category: "positive" | "negative" | "full";
  content: string;
  useCases: string[];
}

export interface WorkflowFile {
  id: string;
  name: string;
  description: string;
  format: "json" | "txt" | "pdf";
  tool: "a1111" | "comfyui" | "forge" | "deforum";
  fileSize: string;
  downloadUrl: string;
}

export interface Resource {
  id: string;
  lessonId: string;
  type: "prompt-template" | "workflow" | "guide" | "reference";
  name: string;
  description: string;
  promptTemplates?: PromptTemplate[];
  workflowFiles?: WorkflowFile[];
  downloadUrl?: string;
}

export const promptTemplates: PromptTemplate[] = [
  // Module 1: Foundations
  {
    id: "prompt-1-1-1",
    name: "Professional Portrait Photography",
    description: "High-quality portrait prompt with lighting and composition details",
    category: "positive",
    content: "A professional portrait photograph of [SUBJECT], studio lighting, sharp focus, shallow depth of field, bokeh background, 85mm lens, professional photography, highly detailed face, perfect skin, award-winning, 8k resolution, cinematic lighting",
    useCases: ["Character design", "Portrait generation", "Professional headshots"]
  },
  {
    id: "prompt-1-1-2",
    name: "Cinematic Landscape",
    description: "Epic landscape with cinematic composition and lighting",
    category: "positive",
    content: "A breathtaking cinematic landscape of [LOCATION], golden hour lighting, dramatic sky, volumetric fog, cinematic composition, depth of field, professional photography, highly detailed, 8k resolution, award-winning, trending on artstation, unreal engine 5",
    useCases: ["Environment design", "Background creation", "Scene composition"]
  },
  {
    id: "prompt-1-1-3",
    name: "Fantasy Character",
    description: "Detailed fantasy character design prompt",
    category: "positive",
    content: "[CHARACTER_NAME], fantasy character design, intricate armor, detailed clothing, fantasy setting, professional character art, highly detailed, sharp focus, trending on artstation, unreal engine 5, cinematic lighting, 8k resolution, award-winning",
    useCases: ["Character design", "Fantasy art", "Game assets"]
  },
  {
    id: "prompt-1-2-1",
    name: "Common Artifacts to Avoid",
    description: "Negative prompt to reduce common AI artifacts",
    category: "negative",
    content: "blurry, low quality, distorted, deformed, ugly, bad anatomy, bad hands, missing fingers, extra fingers, worst quality, jpeg artifacts, compression artifacts, watermark, signature, text",
    useCases: ["All image generation", "Quality improvement", "Artifact reduction"]
  },
  {
    id: "prompt-1-2-2",
    name: "Realistic Face Preservation",
    description: "Negative prompt for maintaining realistic faces",
    category: "negative",
    content: "cartoon, anime, illustration, painting, sketch, watercolor, digital art, stylized, unrealistic, bad face, distorted face, ugly face, bad eyes, cross-eyed, looking away",
    useCases: ["Portrait generation", "Realistic rendering", "Face preservation"]
  },
  {
    id: "prompt-1-3-1",
    name: "Oil Painting Style",
    description: "Complete prompt for oil painting aesthetic",
    category: "full",
    content: "[SUBJECT], oil painting, classical art style, masterpiece, highly detailed brushwork, rich colors, dramatic lighting, museum quality, trending on artstation, by [ARTIST_NAME], 8k resolution",
    useCases: ["Artistic rendering", "Classical style", "Fine art generation"]
  },
  {
    id: "prompt-1-3-2",
    name: "Anime/Manga Style",
    description: "Complete prompt for anime and manga aesthetics",
    category: "full",
    content: "[SUBJECT], anime style, manga art, beautiful detailed eyes, intricate details, sharp focus, trending on pixiv, by [ARTIST_NAME], vibrant colors, 8k resolution",
    useCases: ["Anime generation", "Manga art", "Japanese art style"]
  },
  {
    id: "prompt-1-4-1",
    name: "Variation Prompt",
    description: "Prompt for generating variations of existing images",
    category: "positive",
    content: "a variation of the image, similar composition, same subject, different angle, different lighting, different mood, creative interpretation, high quality",
    useCases: ["Image variations", "Style transfer", "Creative exploration"]
  },
  {
    id: "prompt-1-5-1",
    name: "Inpainting Subject",
    description: "Prompt for inpainting specific areas",
    category: "positive",
    content: "[SUBJECT_TO_INPAINT], seamlessly integrated, matching lighting, matching style, professional quality, highly detailed, sharp focus",
    useCases: ["Inpainting", "Object replacement", "Area editing"]
  },
  {
    id: "prompt-1-6-1",
    name: "ControlNet Pose Reference",
    description: "Prompt for pose-controlled generation",
    category: "positive",
    content: "[CHARACTER], [POSE_DESCRIPTION], detailed clothing, professional character art, highly detailed, sharp focus, 8k resolution",
    useCases: ["Pose control", "Character animation", "Consistent poses"]
  },
  // Module 2: AI Animation
  {
    id: "prompt-2-1-1",
    name: "Smooth Camera Pan",
    description: "Prompt for smooth camera movement animation",
    category: "positive",
    content: "A beautiful landscape with gentle camera pan from left to right, smooth motion, cinematic, 4k quality, professional animation",
    useCases: ["Camera animation", "Landscape animation", "Cinematic motion"]
  },
  {
    id: "prompt-2-2-1",
    name: "Character Walk Cycle",
    description: "Prompt for character walking animation",
    category: "positive",
    content: "[CHARACTER], walking forward, smooth gait, natural movement, detailed clothing, professional animation, 4k quality",
    useCases: ["Character animation", "Walk cycles", "Motion capture"]
  },
  {
    id: "prompt-2-3-1",
    name: "Particle Effects",
    description: "Prompt for animated particle effects",
    category: "positive",
    content: "magical particles, floating dust, light rays, volumetric effects, cinematic, smooth animation, 4k quality",
    useCases: ["VFX animation", "Particle systems", "Special effects"]
  },
  {
    id: "prompt-2-4-1",
    name: "Scene Transition",
    description: "Prompt for smooth scene transitions",
    category: "positive",
    content: "smooth transition from [SCENE_A] to [SCENE_B], cinematic dissolve, seamless motion, professional animation, 4k quality",
    useCases: ["Scene transitions", "Deforum animation", "Narrative flow"]
  },
  // Module 3: ComfyUI
  {
    id: "prompt-3-1-1",
    name: "Basic Generation",
    description: "Simple prompt for ComfyUI basic workflow",
    category: "positive",
    content: "[SUBJECT], professional quality, highly detailed, sharp focus, 8k resolution",
    useCases: ["Basic generation", "Testing", "Workflow development"]
  },
  {
    id: "prompt-3-3-1",
    name: "Animation Sequence",
    description: "Prompt for AnimateDiff in ComfyUI",
    category: "positive",
    content: "[SUBJECT], smooth motion, cinematic animation, 4k quality, professional animation sequence",
    useCases: ["AnimateDiff", "Motion generation", "Video creation"]
  },
  {
    id: "prompt-3-4-1",
    name: "Controlled Generation",
    description: "Prompt for ControlNet-guided generation",
    category: "positive",
    content: "[SUBJECT], following pose/depth/edge guidance, precise control, professional quality, highly detailed",
    useCases: ["ControlNet", "Guided generation", "Precise control"]
  },
  // Module 4: Forge
  {
    id: "prompt-4-1-1",
    name: "High-Speed Generation",
    description: "Optimized prompt for Forge fast generation",
    category: "positive",
    content: "[SUBJECT], professional quality, detailed, 8k resolution",
    useCases: ["Fast generation", "Batch processing", "Performance testing"]
  },
  // Module 5: Stability Matrix
  {
    id: "prompt-5-1-1",
    name: "Cross-Tool Compatible",
    description: "Prompt that works across all tools",
    category: "positive",
    content: "[SUBJECT], professional quality, highly detailed, sharp focus, 8k resolution, trending on artstation",
    useCases: ["Multi-tool testing", "Comparison", "Compatibility"]
  },
  // Module 6: Advanced Techniques
  {
    id: "prompt-6-1-1",
    name: "Video Generation (SVD)",
    description: "Prompt for Stable Video Diffusion",
    category: "positive",
    content: "[SUBJECT], smooth video motion, cinematic quality, 4k resolution, professional video generation",
    useCases: ["SVD", "Video generation", "Motion synthesis"]
  },
  {
    id: "prompt-6-2-1",
    name: "Consistent Character",
    description: "Prompt for IP-Adapter character consistency",
    category: "positive",
    content: "[CHARACTER_NAME], same character, consistent appearance, [ACTION_DESCRIPTION], professional quality",
    useCases: ["Character consistency", "IP-Adapter", "Series generation"]
  }
];

export const workflowFiles: WorkflowFile[] = [
  // Module 1
  {
    id: "workflow-1-1-1",
    name: "Basic Text-to-Image (A1111)",
    description: "Simple text-to-image workflow for A1111",
    format: "json",
    tool: "a1111",
    fileSize: "2.3 KB",
    downloadUrl: "#"
  },
  {
    id: "workflow-1-2-1",
    name: "ControlNet Setup (A1111)",
    description: "Complete ControlNet workflow with multiple models",
    format: "json",
    tool: "a1111",
    fileSize: "4.1 KB",
    downloadUrl: "#"
  },
  {
    id: "workflow-1-3-1",
    name: "Inpainting Workflow (A1111)",
    description: "Inpainting and outpainting setup",
    format: "json",
    tool: "a1111",
    fileSize: "3.2 KB",
    downloadUrl: "#"
  },
  // Module 2
  {
    id: "workflow-2-1-1",
    name: "AnimateDiff Basic (A1111)",
    description: "Basic animation workflow with AnimateDiff",
    format: "json",
    tool: "a1111",
    fileSize: "3.8 KB",
    downloadUrl: "#"
  },
  {
    id: "workflow-2-2-1",
    name: "Deforum Advanced (A1111)",
    description: "Advanced Deforum animation with camera paths",
    format: "json",
    tool: "a1111",
    fileSize: "5.6 KB",
    downloadUrl: "#"
  },
  {
    id: "workflow-2-3-1",
    name: "Frame Processing Script",
    description: "Python script for converting frames to video",
    format: "txt",
    tool: "a1111",
    fileSize: "2.1 KB",
    downloadUrl: "#"
  },
  // Module 3
  {
    id: "workflow-3-1-1",
    name: "Basic ComfyUI Workflow",
    description: "Fundamental ComfyUI node setup",
    format: "json",
    tool: "comfyui",
    fileSize: "2.8 KB",
    downloadUrl: "#"
  },
  {
    id: "workflow-3-2-1",
    name: "AnimateDiff in ComfyUI",
    description: "Complete AnimateDiff workflow for ComfyUI",
    format: "json",
    tool: "comfyui",
    fileSize: "4.2 KB",
    downloadUrl: "#"
  },
  {
    id: "workflow-3-3-1",
    name: "Multi-ControlNet Workflow",
    description: "Advanced multi-ControlNet setup in ComfyUI",
    format: "json",
    tool: "comfyui",
    fileSize: "5.9 KB",
    downloadUrl: "#"
  },
  {
    id: "workflow-3-4-1",
    name: "Batch Processing Setup",
    description: "Batch processing workflow for multiple generations",
    format: "json",
    tool: "comfyui",
    fileSize: "3.5 KB",
    downloadUrl: "#"
  },
  // Module 4
  {
    id: "workflow-4-1-1",
    name: "Optimized Forge Workflow",
    description: "Performance-optimized Forge workflow",
    format: "json",
    tool: "forge",
    fileSize: "2.6 KB",
    downloadUrl: "#"
  },
  {
    id: "workflow-4-2-1",
    name: "Forge ControlNet Setup",
    description: "ControlNet configuration for Forge",
    format: "json",
    tool: "forge",
    fileSize: "3.9 KB",
    downloadUrl: "#"
  },
  // Module 5
  {
    id: "workflow-5-1-1",
    name: "Environment Setup Guide",
    description: "Step-by-step guide for Stability Matrix setup",
    format: "pdf",
    tool: "a1111",
    fileSize: "1.2 MB",
    downloadUrl: "#"
  },
  // Module 6
  {
    id: "workflow-6-1-1",
    name: "SVD Video Generation",
    description: "Stable Video Diffusion workflow",
    format: "json",
    tool: "comfyui",
    fileSize: "3.3 KB",
    downloadUrl: "#"
  },
  {
    id: "workflow-6-2-1",
    name: "IP-Adapter Setup",
    description: "IP-Adapter configuration for consistency",
    format: "json",
    tool: "comfyui",
    fileSize: "4.1 KB",
    downloadUrl: "#"
  }
];

export const resources: Resource[] = [
  // Module 1: Foundations
  {
    id: "res-1-1",
    lessonId: "lesson-1-1",
    type: "prompt-template",
    name: "Diffusion Basics Prompts",
    description: "Essential prompt templates for understanding diffusion models",
    promptTemplates: [
      promptTemplates[0], // Professional Portrait
      promptTemplates[1], // Cinematic Landscape
      promptTemplates[3]  // Common Artifacts
    ]
  },
  {
    id: "res-1-2",
    lessonId: "lesson-1-2",
    type: "workflow",
    name: "A1111 Setup Files",
    description: "Configuration files and workflows for A1111",
    workflowFiles: [
      workflowFiles[0] // Basic Text-to-Image
    ]
  },
  {
    id: "res-1-3",
    lessonId: "lesson-1-3",
    type: "prompt-template",
    name: "Prompt Engineering Templates",
    description: "Advanced prompt templates for different styles",
    promptTemplates: [
      promptTemplates[2], // Fantasy Character
      promptTemplates[5], // Oil Painting
      promptTemplates[6]  // Anime/Manga
    ]
  },
  {
    id: "res-1-4",
    lessonId: "lesson-1-4",
    type: "prompt-template",
    name: "Image-to-Image Prompts",
    description: "Prompts optimized for image-to-image generation",
    promptTemplates: [
      promptTemplates[7], // Variation Prompt
      promptTemplates[4]  // Realistic Face
    ]
  },
  {
    id: "res-1-5",
    lessonId: "lesson-1-5",
    type: "workflow",
    name: "Inpainting Workflow",
    description: "Complete inpainting and outpainting setup",
    workflowFiles: [
      workflowFiles[2] // Inpainting Workflow
    ]
  },
  {
    id: "res-1-6",
    lessonId: "lesson-1-6",
    type: "workflow",
    name: "ControlNet Workflows",
    description: "ControlNet setup and configuration files",
    workflowFiles: [
      workflowFiles[1] // ControlNet Setup
    ]
  },
  // Module 2: AI Animation
  {
    id: "res-2-1",
    lessonId: "lesson-2-1",
    type: "guide",
    name: "Animation Fundamentals Guide",
    description: "Reference guide for animation concepts and terminology",
    downloadUrl: "#"
  },
  {
    id: "res-2-2",
    lessonId: "lesson-2-2",
    type: "workflow",
    name: "AnimateDiff Workflows",
    description: "AnimateDiff setup and motion module configurations",
    workflowFiles: [
      workflowFiles[3] // AnimateDiff Basic
    ]
  },
  {
    id: "res-2-3",
    lessonId: "lesson-2-3",
    type: "prompt-template",
    name: "Animation Prompts",
    description: "Prompts optimized for smooth animations",
    promptTemplates: [
      promptTemplates[10], // Smooth Camera Pan
      promptTemplates[11]  // Character Walk Cycle
    ]
  },
  {
    id: "res-2-4",
    lessonId: "lesson-2-4",
    type: "workflow",
    name: "Deforum Advanced Setup",
    description: "Complex Deforum workflows with camera paths and transitions",
    workflowFiles: [
      workflowFiles[4] // Deforum Advanced
    ]
  },
  {
    id: "res-2-5",
    lessonId: "lesson-2-5",
    type: "guide",
    name: "Video Processing Tools",
    description: "Scripts and tools for frame-to-video conversion",
    workflowFiles: [
      workflowFiles[5] // Frame Processing Script
    ]
  },
  // Module 3: ComfyUI
  {
    id: "res-3-1",
    lessonId: "lesson-3-1",
    type: "workflow",
    name: "ComfyUI Basics",
    description: "Fundamental ComfyUI workflows and node setups",
    workflowFiles: [
      workflowFiles[6] // Basic ComfyUI Workflow
    ]
  },
  {
    id: "res-3-2",
    lessonId: "lesson-3-2",
    type: "workflow",
    name: "ComfyUI Advanced Workflows",
    description: "Advanced node-based workflows for complex tasks",
    workflowFiles: [
      workflowFiles[6] // Basic ComfyUI Workflow
    ]
  },
  {
    id: "res-3-3",
    lessonId: "lesson-3-3",
    type: "workflow",
    name: "AnimateDiff in ComfyUI",
    description: "Complete AnimateDiff implementation in ComfyUI",
    workflowFiles: [
      workflowFiles[7] // AnimateDiff in ComfyUI
    ]
  },
  {
    id: "res-3-4",
    lessonId: "lesson-3-4",
    type: "workflow",
    name: "Multi-ControlNet Workflows",
    description: "Advanced multi-ControlNet setups for precise control",
    workflowFiles: [
      workflowFiles[8] // Multi-ControlNet Workflow
    ]
  },
  {
    id: "res-3-5",
    lessonId: "lesson-3-5",
    type: "workflow",
    name: "Batch Processing Setup",
    description: "Automated batch processing workflows",
    workflowFiles: [
      workflowFiles[9] // Batch Processing Setup
    ]
  },
  // Module 4: Forge
  {
    id: "res-4-1",
    lessonId: "lesson-4-1",
    type: "guide",
    name: "Forge Overview",
    description: "Introduction to Forge and its advantages",
    downloadUrl: "#"
  },
  {
    id: "res-4-2",
    lessonId: "lesson-4-2",
    type: "guide",
    name: "Forge Installation Guide",
    description: "Step-by-step installation and configuration",
    downloadUrl: "#"
  },
  {
    id: "res-4-3",
    lessonId: "lesson-4-3",
    type: "workflow",
    name: "Forge Optimization Workflows",
    description: "Performance-optimized Forge configurations",
    workflowFiles: [
      workflowFiles[10], // Optimized Forge Workflow
      workflowFiles[11]  // Forge ControlNet Setup
    ]
  },
  // Module 5: Stability Matrix
  {
    id: "res-5-1",
    lessonId: "lesson-5-1",
    type: "guide",
    name: "Stability Matrix Overview",
    description: "Introduction to Stability Matrix and its benefits",
    downloadUrl: "#"
  },
  {
    id: "res-5-2",
    lessonId: "lesson-5-2",
    type: "guide",
    name: "Installation & Setup",
    description: "Complete setup guide for Stability Matrix",
    workflowFiles: [
      workflowFiles[12] // Environment Setup Guide
    ]
  },
  {
    id: "res-5-3",
    lessonId: "lesson-5-3",
    type: "guide",
    name: "Multi-Environment Management",
    description: "Managing multiple tool environments",
    downloadUrl: "#"
  },
  // Module 6: Advanced Techniques
  {
    id: "res-6-1",
    lessonId: "lesson-6-1",
    type: "workflow",
    name: "SVD Video Generation",
    description: "Stable Video Diffusion workflows and configurations",
    workflowFiles: [
      workflowFiles[13] // SVD Video Generation
    ]
  },
  {
    id: "res-6-2",
    lessonId: "lesson-6-2",
    type: "workflow",
    name: "IP-Adapter Setup",
    description: "IP-Adapter configuration for character consistency",
    workflowFiles: [
      workflowFiles[14] // IP-Adapter Setup
    ]
  },
  {
    id: "res-6-3",
    lessonId: "lesson-6-3",
    type: "guide",
    name: "Storyboarding Guide",
    description: "Professional storyboarding techniques for AI animation",
    downloadUrl: "#"
  },
  {
    id: "res-6-4",
    lessonId: "lesson-6-4",
    type: "guide",
    name: "Ethics & Best Practices",
    description: "Ethical considerations and best practices guide",
    downloadUrl: "#"
  }
];

export function getResourcesByLessonId(lessonId: string): Resource[] {
  return resources.filter(r => r.lessonId === lessonId);
}

export function getPromptTemplatesByLessonId(lessonId: string): PromptTemplate[] {
  const lessonResources = getResourcesByLessonId(lessonId);
  const templates: PromptTemplate[] = [];
  lessonResources.forEach(resource => {
    if (resource.promptTemplates) {
      templates.push(...resource.promptTemplates);
    }
  });
  return templates;
}

export function getWorkflowsByLessonId(lessonId: string): WorkflowFile[] {
  const lessonResources = getResourcesByLessonId(lessonId);
  const workflows: WorkflowFile[] = [];
  lessonResources.forEach(resource => {
    if (resource.workflowFiles) {
      workflows.push(...resource.workflowFiles);
    }
  });
  return workflows;
}
