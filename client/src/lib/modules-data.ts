/**
 * Curriculum Modules Data
 * Contains detailed information about each module, lessons, and learning objectives
 */

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  objectives: string[];
  topics: string[];
  preview: string;
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  lessons: Lesson[];
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  prerequisites: string[];
  image: string;
  color: string;
}

export const modulesData: Module[] = [
  {
    id: "module-1",
    slug: "foundations-ai-image-generation",
    title: "Foundations of AI Image Generation",
    description: "Learn the core principles of Stable Diffusion and master text-to-image generation with effective prompt engineering.",
    fullDescription: "This foundational module introduces you to the world of AI image generation. You'll understand how diffusion models work, learn to craft effective prompts, and explore various image manipulation techniques. By the end, you'll be able to generate high-quality images from text descriptions and manipulate existing images using AI.",
    icon: "BookOpen",
    level: "Beginner",
    duration: "4-5 hours",
    prerequisites: [],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262110696/QKxk8x4NSBGLqrdaE2aMPV/module-illustration-1-CqbTuqisJZK5xGDUfySa94.webp",
    color: "from-blue-600 to-cyan-500",
    lessons: [
      {
        id: "lesson-1-1",
        title: "Introduction to Diffusion Models",
        duration: "45 min",
        description: "Understand the fundamental concepts behind diffusion models and how Stable Diffusion works.",
        objectives: [
          "Explain what diffusion models are and how they differ from other AI models",
          "Understand the denoising process and latent space representation",
          "Learn about the U-Net architecture used in Stable Diffusion",
          "Recognize the role of text encoders (CLIP) in image generation"
        ],
        topics: ["Diffusion Process", "Latent Space", "U-Net Architecture", "Text Encoding (CLIP)"],
        preview: "Diffusion models work by gradually removing noise from random data. This process, guided by text prompts, transforms pure noise into coherent images. We'll explore how this elegant approach has revolutionized AI image generation."
      },
      {
        id: "lesson-1-2",
        title: "Setting Up Stable Diffusion WebUI (A1111)",
        duration: "1 hour",
        description: "Install and configure the Automatic1111 WebUI for image generation.",
        objectives: [
          "Successfully install Stable Diffusion WebUI on your system",
          "Configure GPU settings for optimal performance",
          "Download and manage model checkpoints",
          "Understand the WebUI interface and basic settings"
        ],
        topics: ["Installation", "GPU Configuration", "Model Management", "WebUI Interface"],
        preview: "The Automatic1111 WebUI is the most popular interface for Stable Diffusion. We'll walk through the installation process, configure your GPU for maximum performance, and familiarize you with all the essential controls."
      },
      {
        id: "lesson-1-3",
        title: "Prompt Engineering Fundamentals",
        duration: "1.5 hours",
        description: "Master the art of crafting effective prompts for high-quality image generation.",
        objectives: [
          "Write clear, descriptive prompts that produce desired results",
          "Use prompt weights and syntax to emphasize important elements",
          "Craft negative prompts to exclude unwanted features",
          "Understand the impact of different prompt structures on output"
        ],
        topics: ["Prompt Syntax", "Weights and Emphasis", "Negative Prompts", "Style Keywords"],
        preview: "Prompt engineering is both an art and a science. You'll learn proven techniques for writing prompts that consistently produce stunning results, including how to use weights, parentheses, and negative prompts effectively."
      },
      {
        id: "lesson-1-4",
        title: "Image-to-Image Generation & Variations",
        duration: "1 hour",
        description: "Use existing images as starting points for AI generation with denoising strength control.",
        objectives: [
          "Understand how image-to-image generation differs from text-to-image",
          "Control creativity using denoising strength parameter",
          "Generate variations of existing images",
          "Apply style transfer techniques"
        ],
        topics: ["Denoising Strength", "Variation Generation", "Style Transfer", "Image Conditioning"],
        preview: "Image-to-image generation allows you to use an existing image as a starting point. By controlling the denoising strength, you can create variations while maintaining key elements of the original."
      },
      {
        id: "lesson-1-5",
        title: "Inpainting & Outpainting Techniques",
        duration: "1 hour",
        description: "Modify specific areas of images and extend image boundaries using AI.",
        objectives: [
          "Use inpainting to modify specific regions of an image",
          "Extend image boundaries with outpainting",
          "Create seamless edits and extensions",
          "Apply inpainting for creative composition"
        ],
        topics: ["Inpainting Masks", "Outpainting", "Seamless Editing", "Composition Techniques"],
        preview: "Inpainting lets you selectively modify parts of an image, while outpainting extends the boundaries. These powerful techniques enable creative control and composition adjustments."
      },
      {
        id: "lesson-1-6",
        title: "ControlNet Basics & Structural Guidance",
        duration: "1 hour",
        description: "Guide image generation using structural inputs like poses, depth, and edges.",
        objectives: [
          "Understand ControlNet and its purpose in guided generation",
          "Use common ControlNet models (Canny, OpenPose, Depth, Lineart)",
          "Combine ControlNet with text prompts for precise control",
          "Apply ControlNet to achieve specific compositions"
        ],
        topics: ["ControlNet Models", "Structural Guidance", "Pose Control", "Depth Maps"],
        preview: "ControlNet is a powerful extension that lets you guide image generation using structural information. Whether you need specific poses, depth maps, or edge guidance, ControlNet gives you unprecedented control."
      }
    ]
  },
  {
    id: "module-2",
    slug: "ai-animation-a1111",
    title: "AI Animation with A1111",
    description: "Create animated sequences using AnimateDiff and Deforum extensions in the A1111 WebUI environment.",
    fullDescription: "This module teaches you how to generate animations using the powerful A1111 WebUI extensions. You'll learn to create smooth video sequences from text prompts, control camera movements, and schedule prompt changes over time. By the end, you'll be able to produce professional-quality short animations.",
    icon: "Zap",
    level: "Intermediate",
    duration: "3-4 hours",
    prerequisites: ["module-1"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262110696/QKxk8x4NSBGLqrdaE2aMPV/module-illustration-2-DHBUNtKdgyJAENVpeZ5rfu.webp",
    color: "from-cyan-500 to-blue-600",
    lessons: [
      {
        id: "lesson-2-1",
        title: "Animation Fundamentals & Frame Concepts",
        duration: "45 min",
        description: "Understand the basics of animation, frames, and motion principles.",
        objectives: [
          "Explain frames per second (FPS) and its impact on animation quality",
          "Understand keyframes and their role in animation",
          "Learn basic animation principles (timing, spacing, motion)",
          "Recognize the relationship between frame count and animation length"
        ],
        topics: ["FPS & Frame Rate", "Keyframes", "Animation Principles", "Motion Planning"],
        preview: "Animation is the art of creating motion through sequential images. We'll explore fundamental concepts like FPS, keyframes, and timing that form the foundation of all animation work."
      },
      {
        id: "lesson-2-2",
        title: "Installing AnimateDiff Extension",
        duration: "45 min",
        description: "Set up AnimateDiff in A1111 for basic animation generation.",
        objectives: [
          "Install AnimateDiff extension in A1111",
          "Download and configure motion modules",
          "Understand AnimateDiff settings and parameters",
          "Generate your first short animation"
        ],
        topics: ["Extension Installation", "Motion Modules", "Parameter Configuration", "Basic Generation"],
        preview: "AnimateDiff is the most accessible way to create animations with Stable Diffusion. We'll install it, configure the motion modules, and generate your first animated sequence."
      },
      {
        id: "lesson-2-3",
        title: "Creating Basic Animations with AnimateDiff",
        duration: "1 hour",
        description: "Generate smooth animations from text prompts with motion control.",
        objectives: [
          "Generate animations from text prompts using AnimateDiff",
          "Control motion intensity and direction",
          "Use different motion modules for various animation styles",
          "Optimize frame count and FPS for desired results"
        ],
        topics: ["Text-to-Animation", "Motion Control", "Motion Modules", "Frame Optimization"],
        preview: "With AnimateDiff, you can generate smooth, coherent animations directly from text prompts. Learn to control motion intensity, choose appropriate motion modules, and optimize your settings for professional results."
      },
      {
        id: "lesson-2-4",
        title: "Advanced Deforum for Complex Animations",
        duration: "1 hour",
        description: "Master Deforum for camera control and prompt scheduling.",
        objectives: [
          "Understand Deforum's advanced features and parameters",
          "Create complex camera paths and movements",
          "Schedule prompt changes throughout the animation",
          "Use keyframing for precise control over animation parameters"
        ],
        topics: ["Camera Paths", "Prompt Scheduling", "Keyframing", "Parameter Animation"],
        preview: "Deforum is the advanced animation tool in A1111, offering unprecedented control over camera movements and prompt evolution. Create cinematic camera paths and dynamic prompt changes throughout your animation."
      },
      {
        id: "lesson-2-5",
        title: "Video Processing & Post-Production Basics",
        duration: "45 min",
        description: "Process generated frames into videos and apply basic post-production.",
        objectives: [
          "Convert frame sequences into video files",
          "Adjust video quality and codec settings",
          "Apply basic post-processing to improve quality",
          "Export videos in various formats"
        ],
        topics: ["Frame-to-Video Conversion", "Video Codecs", "Post-Processing", "Export Formats"],
        preview: "Once you've generated your animation frames, we'll process them into smooth videos. Learn about codecs, quality settings, and basic post-production techniques to enhance your final output."
      }
    ]
  },
  {
    id: "module-3",
    slug: "advanced-workflows-comfyui",
    title: "Advanced Workflows with ComfyUI",
    description: "Master ComfyUI's powerful node-based interface for creating complex and efficient animation workflows.",
    fullDescription: "ComfyUI represents the next evolution in AI image and animation generation. This module teaches you to build sophisticated, reusable workflows using its intuitive node-based interface. You'll create complex pipelines combining multiple techniques and achieve unprecedented control over your generations.",
    icon: "Grid3x3",
    level: "Advanced",
    duration: "5-6 hours",
    prerequisites: ["module-1"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262110696/QKxk8x4NSBGLqrdaE2aMPV/module-illustration-3-nEHsKg2jgtz5nHeTQMYwTr.webp",
    color: "from-blue-500 to-indigo-600",
    lessons: [
      {
        id: "lesson-3-1",
        title: "ComfyUI Interface & Node Basics",
        duration: "1 hour",
        description: "Learn to navigate ComfyUI and understand the node-based workflow system.",
        objectives: [
          "Navigate the ComfyUI canvas and interface",
          "Understand nodes, connections, and data flow",
          "Create basic workflows by connecting nodes",
          "Save and load workflows for reuse"
        ],
        topics: ["Canvas Navigation", "Node System", "Data Flow", "Workflow Management"],
        preview: "ComfyUI's node-based interface provides unprecedented flexibility. We'll explore how nodes represent operations, how connections define data flow, and how to build workflows from scratch."
      },
      {
        id: "lesson-3-2",
        title: "Building Custom Image Generation Workflows",
        duration: "1.5 hours",
        description: "Create sophisticated image generation pipelines in ComfyUI.",
        objectives: [
          "Build complete image generation workflows from scratch",
          "Combine multiple conditioning techniques",
          "Integrate ControlNet and other extensions",
          "Optimize workflows for performance"
        ],
        topics: ["Workflow Architecture", "Conditioning Pipeline", "Node Optimization", "Performance Tuning"],
        preview: "Build powerful image generation workflows by connecting nodes for model loading, conditioning, sampling, and output. Learn to structure workflows for maximum flexibility and reusability."
      },
      {
        id: "lesson-3-3",
        title: "AnimateDiff in ComfyUI with Advanced Control",
        duration: "1.5 hours",
        description: "Implement AnimateDiff in ComfyUI for superior animation control.",
        objectives: [
          "Integrate AnimateDiff nodes into ComfyUI workflows",
          "Control motion parameters with precision",
          "Create complex animation sequences",
          "Combine AnimateDiff with other conditioning techniques"
        ],
        topics: ["AnimateDiff Nodes", "Motion Control", "Frame Interpolation", "Advanced Conditioning"],
        preview: "ComfyUI's implementation of AnimateDiff offers more control than A1111. Create sophisticated animations by combining motion modules with advanced conditioning and custom parameters."
      },
      {
        id: "lesson-3-4",
        title: "Multi-ControlNet & Advanced Conditioning",
        duration: "1 hour",
        description: "Combine multiple ControlNet models and advanced conditioning techniques.",
        objectives: [
          "Use multiple ControlNet models simultaneously",
          "Layer different conditioning inputs for precise control",
          "Balance competing conditioning signals",
          "Create complex, controlled animations"
        ],
        topics: ["Multi-ControlNet", "Conditioning Stacking", "Signal Balancing", "Advanced Guidance"],
        preview: "Combine multiple ControlNet models to achieve unprecedented control. Learn to layer different types of guidance—pose, depth, edges—for complex, precisely-controlled animations."
      },
      {
        id: "lesson-3-5",
        title: "Batch Processing & Automation",
        duration: "1 hour",
        description: "Automate animation generation with batch processing and workflow optimization.",
        objectives: [
          "Set up batch processing for multiple generations",
          "Automate parameter variations and iterations",
          "Optimize workflows for faster rendering",
          "Manage resources efficiently for large projects"
        ],
        topics: ["Batch Processing", "Parameter Variation", "Workflow Optimization", "Resource Management"],
        preview: "Learn to automate your animation generation process. Set up batch workflows to generate multiple variations, optimize for speed, and manage resources efficiently for large projects."
      },
      {
        id: "lesson-3-6",
        title: "Advanced Workflow Techniques & Custom Nodes",
        duration: "1 hour",
        description: "Explore advanced techniques and extend ComfyUI with custom nodes.",
        objectives: [
          "Implement advanced workflow patterns",
          "Install and use custom nodes from the community",
          "Create reusable workflow templates",
          "Debug and optimize complex workflows"
        ],
        topics: ["Custom Nodes", "Workflow Patterns", "Community Extensions", "Workflow Debugging"],
        preview: "Take your ComfyUI skills to the next level. Explore custom nodes from the community, create reusable templates, and implement advanced patterns for professional-grade workflows."
      }
    ]
  },
  {
    id: "module-4",
    slug: "optimizing-performance-forge",
    title: "Optimizing Performance with Forge",
    description: "Leverage Stable Diffusion WebUI Forge for improved performance and efficiency in AI animation tasks.",
    fullDescription: "Stable Diffusion WebUI Forge is an optimized variant of A1111 designed for speed and efficiency. This module teaches you how to migrate your workflows to Forge, leverage its performance improvements, and achieve faster generation times without sacrificing quality.",
    icon: "Settings",
    level: "Intermediate",
    duration: "2-3 hours",
    prerequisites: ["module-1"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262110696/QKxk8x4NSBGLqrdaE2aMPV/module-illustration-1-CqbTuqisJZK5xGDUfySa94.webp",
    color: "from-indigo-600 to-blue-500",
    lessons: [
      {
        id: "lesson-4-1",
        title: "Introduction to Stable Diffusion WebUI Forge",
        duration: "45 min",
        description: "Understand Forge's architecture and performance improvements over A1111.",
        objectives: [
          "Explain the differences between Forge and A1111",
          "Understand Forge's optimized backend architecture",
          "Recognize performance benefits and use cases",
          "Evaluate whether Forge is right for your workflow"
        ],
        topics: ["Forge Architecture", "Performance Improvements", "Comparison with A1111", "Use Cases"],
        preview: "Forge is a reimplementation of Stable Diffusion WebUI with a focus on performance. We'll explore how its optimized backend achieves faster generation times and lower VRAM usage."
      },
      {
        id: "lesson-4-2",
        title: "Installing & Configuring Forge",
        duration: "45 min",
        description: "Set up Forge and optimize it for your hardware.",
        objectives: [
          "Install Stable Diffusion WebUI Forge",
          "Configure GPU settings for optimal performance",
          "Migrate models and extensions from A1111",
          "Benchmark performance improvements"
        ],
        topics: ["Installation", "GPU Configuration", "Model Migration", "Performance Benchmarking"],
        preview: "Install Forge and get it running on your system. We'll configure your GPU settings, migrate your existing models, and measure the performance improvements you can expect."
      },
      {
        id: "lesson-4-3",
        title: "Forge-Specific Features & Optimizations",
        duration: "45 min",
        description: "Leverage Forge's unique features for faster, more efficient generation.",
        objectives: [
          "Use Forge's optimized sampling methods",
          "Leverage advanced scheduler options",
          "Apply Forge-specific performance tweaks",
          "Understand memory optimization techniques"
        ],
        topics: ["Optimized Samplers", "Scheduler Options", "Memory Optimization", "Performance Tweaks"],
        preview: "Discover Forge-specific features that enhance performance. From optimized samplers to advanced memory management, learn techniques that make Forge significantly faster than A1111."
      },
      {
        id: "lesson-4-4",
        title: "Migrating Workflows from A1111 to Forge",
        duration: "45 min",
        description: "Transition your existing A1111 workflows to Forge with minimal changes.",
        objectives: [
          "Understand compatibility between A1111 and Forge",
          "Migrate extensions and custom nodes",
          "Adapt workflows for Forge's architecture",
          "Troubleshoot common migration issues"
        ],
        topics: ["Compatibility", "Extension Migration", "Workflow Adaptation", "Troubleshooting"],
        preview: "If you're already using A1111, migrating to Forge is straightforward. We'll walk through the process of moving your models, extensions, and workflows to Forge."
      }
    ]
  },
  {
    id: "module-5",
    slug: "streamlining-stability-matrix",
    title: "Streamlining with Stability Matrix",
    description: "Simplify management of multiple Stable Diffusion installations and models with Stability Matrix.",
    fullDescription: "Stability Matrix is a comprehensive manager for Stable Diffusion installations. This module teaches you how to use it to manage multiple environments, switch between A1111, Forge, and ComfyUI, and keep your tools and models organized and up-to-date.",
    icon: "Layers",
    level: "Beginner",
    duration: "2-3 hours",
    prerequisites: [],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262110696/QKxk8x4NSBGLqrdaE2aMPV/module-illustration-2-DHBUNtKdgyJAENVpeZ5rfu.webp",
    color: "from-cyan-600 to-blue-500",
    lessons: [
      {
        id: "lesson-5-1",
        title: "Overview of Stability Matrix",
        duration: "45 min",
        description: "Understand Stability Matrix's purpose and benefits.",
        objectives: [
          "Explain what Stability Matrix is and why it's useful",
          "Understand the benefits of centralized management",
          "Recognize supported tools and distributions",
          "Evaluate whether Stability Matrix fits your workflow"
        ],
        topics: ["Stability Matrix Overview", "Benefits", "Supported Tools", "Use Cases"],
        preview: "Stability Matrix simplifies the management of multiple Stable Diffusion installations. Instead of juggling different installations, manage everything from one unified interface."
      },
      {
        id: "lesson-5-2",
        title: "Installing & Setting Up Stability Matrix",
        duration: "1 hour",
        description: "Install and configure Stability Matrix on your system.",
        objectives: [
          "Download and install Stability Matrix",
          "Configure initial settings and preferences",
          "Set up your first Stable Diffusion environment",
          "Understand the Stability Matrix interface"
        ],
        topics: ["Installation", "Initial Configuration", "Environment Setup", "Interface Navigation"],
        preview: "Get Stability Matrix up and running. We'll walk through installation, initial configuration, and setting up your first Stable Diffusion environment."
      },
      {
        id: "lesson-5-3",
        title: "Managing Multiple Environments",
        duration: "45 min",
        description: "Create and manage multiple Stable Diffusion installations.",
        objectives: [
          "Create separate environments for different tools (A1111, Forge, ComfyUI)",
          "Switch between environments seamlessly",
          "Manage environment-specific settings",
          "Keep environments organized and clean"
        ],
        topics: ["Environment Creation", "Environment Switching", "Settings Management", "Organization"],
        preview: "One of Stability Matrix's greatest strengths is managing multiple environments. Create separate installations for A1111, Forge, and ComfyUI, and switch between them with a single click."
      },
      {
        id: "lesson-5-4",
        title: "Model & Extension Management",
        duration: "45 min",
        description: "Centrally manage models, LoRAs, and extensions across environments.",
        objectives: [
          "Download and organize model checkpoints",
          "Manage LoRA files and embeddings",
          "Install and update extensions",
          "Share models and extensions across environments"
        ],
        topics: ["Model Management", "LoRA Organization", "Extension Installation", "Resource Sharing"],
        preview: "Stability Matrix provides centralized management of your models, LoRAs, and extensions. Download, organize, and share resources across all your environments efficiently."
      }
    ]
  },
  {
    id: "module-6",
    slug: "advanced-techniques-future-trends",
    title: "Advanced AI Animation Techniques & Future Trends",
    description: "Explore SVD, consistency techniques, storyboarding, and emerging tools in AI animation.",
    fullDescription: "This capstone module explores advanced techniques for professional AI animation production. You'll learn about Stable Video Diffusion (SVD), consistency techniques for maintaining coherence across frames, professional storyboarding practices, and ethical considerations in AI-generated content.",
    icon: "Sparkles",
    level: "Advanced",
    duration: "4-5 hours",
    prerequisites: ["module-1", "module-2"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663262110696/QKxk8x4NSBGLqrdaE2aMPV/module-illustration-3-nEHsKg2jgtz5nHeTQMYwTr.webp",
    color: "from-blue-600 to-cyan-500",
    lessons: [
      {
        id: "lesson-6-1",
        title: "Stable Video Diffusion (SVD) & Direct Video Generation",
        duration: "1 hour",
        description: "Generate videos directly from images using Stable Video Diffusion.",
        objectives: [
          "Understand SVD's approach to video generation",
          "Generate video clips from static images",
          "Control video length and motion intensity",
          "Integrate SVD into your animation pipeline"
        ],
        topics: ["SVD Basics", "Image-to-Video", "Motion Control", "Pipeline Integration"],
        preview: "Stable Video Diffusion represents a new approach to AI video generation. Instead of generating frame-by-frame, SVD generates videos directly from images, producing smooth, coherent results."
      },
      {
        id: "lesson-6-2",
        title: "Consistency Techniques & Frame Coherence",
        duration: "1.5 hours",
        description: "Maintain character and style consistency throughout animations.",
        objectives: [
          "Understand consistency challenges in AI animation",
          "Use IP-Adapter for character consistency",
          "Apply Reference-Only ControlNet techniques",
          "Implement frame-to-frame coherence strategies"
        ],
        topics: ["IP-Adapter", "Reference ControlNet", "Character Consistency", "Style Preservation"],
        preview: "One of the biggest challenges in AI animation is maintaining consistency. Learn advanced techniques like IP-Adapter and Reference-Only ControlNet to keep characters and styles consistent across frames."
      },
      {
        id: "lesson-6-3",
        title: "Professional Storyboarding for AI Animation",
        duration: "1 hour",
        description: "Plan animations effectively using professional storyboarding techniques.",
        objectives: [
          "Create detailed storyboards for animation projects",
          "Translate narrative into visual sequences",
          "Plan camera movements and transitions",
          "Use storyboards to guide AI generation"
        ],
        topics: ["Storyboard Design", "Narrative Planning", "Visual Composition", "Animation Planning"],
        preview: "Professional animation starts with planning. Learn to create detailed storyboards that guide your AI generation process and ensure your final animation tells a coherent story."
      },
      {
        id: "lesson-6-4",
        title: "Ethical Considerations & Responsible AI Use",
        duration: "45 min",
        description: "Understand ethical implications and best practices in AI-generated content.",
        objectives: [
          "Understand copyright and intellectual property in AI-generated content",
          "Recognize bias in AI models and mitigation strategies",
          "Follow ethical guidelines for AI art creation",
          "Properly attribute AI-generated content"
        ],
        topics: ["Copyright & IP", "AI Bias", "Ethical Guidelines", "Attribution"],
        preview: "As AI animation creators, we have a responsibility to use these tools ethically. We'll explore copyright issues, bias in AI models, and best practices for responsible AI use."
      },
      {
        id: "lesson-6-5",
        title: "Emerging Tools & Future Directions",
        duration: "1 hour",
        description: "Stay updated with the latest developments in AI animation.",
        objectives: [
          "Explore emerging AI animation tools and techniques",
          "Understand research directions in generative AI",
          "Evaluate new tools and decide what to learn",
          "Build a learning strategy for staying current"
        ],
        topics: ["Emerging Tools", "Research Trends", "Community Resources", "Continuous Learning"],
        preview: "The field of AI animation is rapidly evolving. We'll explore emerging tools, research directions, and strategies for staying current with the latest developments."
      }
    ]
  }
];

export function getModuleBySlug(slug: string): Module | undefined {
  return modulesData.find(module => module.slug === slug);
}

export function getModuleById(id: string): Module | undefined {
  return modulesData.find(module => module.id === id);
}

export function getLessonById(moduleId: string, lessonId: string): Lesson | undefined {
  const module = getModuleById(moduleId);
  return module?.lessons.find(lesson => lesson.id === lessonId);
}
