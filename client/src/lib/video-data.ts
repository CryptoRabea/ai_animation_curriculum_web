/**
 * Video Tutorial Data for Curriculum Lessons
 * Contains video information for each lesson
 */

export interface VideoTutorial {
  id: string;
  lessonId: string;
  title: string;
  description: string;
  duration: string;
  videoUrl: string; // YouTube or Vimeo embed URL
  thumbnail: string;
  topics: string[];
}

export const videoData: VideoTutorial[] = [
  // Module 1: Foundations of AI Image Generation
  {
    id: "vid-1-1-1",
    lessonId: "lesson-1-1",
    title: "Understanding Diffusion Models",
    description: "A comprehensive introduction to how diffusion models work, from noise to images.",
    duration: "12:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Diffusion Process", "Denoising", "CLIP Encoding"]
  },
  {
    id: "vid-1-1-2",
    lessonId: "lesson-1-1",
    title: "Latent Space Explained",
    description: "Deep dive into latent space representation and why it matters for efficient generation.",
    duration: "8:32",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Latent Space", "VAE Encoding", "Compression"]
  },
  {
    id: "vid-1-2-1",
    lessonId: "lesson-1-2",
    title: "Installing Stable Diffusion WebUI A1111",
    description: "Step-by-step guide to installing and configuring the A1111 WebUI on your system.",
    duration: "15:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Installation", "GPU Setup", "Model Loading"]
  },
  {
    id: "vid-1-2-2",
    lessonId: "lesson-1-2",
    title: "Optimizing GPU Settings for Performance",
    description: "Learn how to configure GPU settings for maximum performance and minimum VRAM usage.",
    duration: "10:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["GPU Configuration", "VRAM Optimization", "Performance Tuning"]
  },
  {
    id: "vid-1-3-1",
    lessonId: "lesson-1-3",
    title: "Mastering Prompt Engineering",
    description: "Advanced techniques for writing prompts that consistently produce stunning results.",
    duration: "18:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Prompt Syntax", "Weights", "Style Keywords"]
  },
  {
    id: "vid-1-3-2",
    lessonId: "lesson-1-3",
    title: "Using Negative Prompts Effectively",
    description: "Learn how to craft negative prompts to exclude unwanted elements from your images.",
    duration: "7:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Negative Prompts", "Quality Control", "Exclusion Techniques"]
  },
  {
    id: "vid-1-4-1",
    lessonId: "lesson-1-4",
    title: "Image-to-Image Generation Basics",
    description: "Learn how to use existing images as starting points for AI generation.",
    duration: "11:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Image Input", "Denoising Strength", "Variations"]
  },
  {
    id: "vid-1-4-2",
    lessonId: "lesson-1-4",
    title: "Creating Image Variations and Style Transfer",
    description: "Techniques for generating variations and applying style transfer to images.",
    duration: "13:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Variations", "Style Transfer", "Creative Control"]
  },
  {
    id: "vid-1-5-1",
    lessonId: "lesson-1-5",
    title: "Inpainting and Outpainting Techniques",
    description: "Master selective editing and image extension with inpainting and outpainting.",
    duration: "14:50",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Inpainting", "Outpainting", "Mask Creation"]
  },
  {
    id: "vid-1-5-2",
    lessonId: "lesson-1-5",
    title: "Advanced Masking and Seamless Editing",
    description: "Learn advanced masking techniques for seamless, professional-quality edits.",
    duration: "12:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Advanced Masking", "Seamless Blending", "Composition"]
  },
  {
    id: "vid-1-6-1",
    lessonId: "lesson-1-6",
    title: "Introduction to ControlNet",
    description: "Learn how ControlNet provides structural guidance for precise image generation.",
    duration: "16:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["ControlNet Basics", "Structural Guidance", "Model Types"]
  },
  {
    id: "vid-1-6-2",
    lessonId: "lesson-1-6",
    title: "Using Different ControlNet Models",
    description: "Explore Canny, OpenPose, Depth, and other ControlNet models for different effects.",
    duration: "19:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Canny Edges", "OpenPose", "Depth Maps", "Lineart"]
  },
  // Module 2: AI Animation with A1111
  {
    id: "vid-2-1-1",
    lessonId: "lesson-2-1",
    title: "Animation Fundamentals",
    description: "Essential concepts of animation including FPS, keyframes, and motion principles.",
    duration: "13:40",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["FPS", "Keyframes", "Motion Principles"]
  },
  {
    id: "vid-2-2-1",
    lessonId: "lesson-2-2",
    title: "Installing AnimateDiff Extension",
    description: "Complete guide to installing and configuring AnimateDiff in A1111.",
    duration: "11:25",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Installation", "Motion Modules", "Configuration"]
  },
  {
    id: "vid-2-2-2",
    lessonId: "lesson-2-2",
    title: "Choosing and Using Motion Modules",
    description: "Learn about different motion modules and how to select the right one for your animation.",
    duration: "9:50",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Motion Modules", "Motion Styles", "Selection Guide"]
  },
  {
    id: "vid-2-3-1",
    lessonId: "lesson-2-3",
    title: "Creating Your First Animation with AnimateDiff",
    description: "Step-by-step tutorial for generating your first smooth animation.",
    duration: "15:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Text-to-Animation", "Motion Control", "Frame Generation"]
  },
  {
    id: "vid-2-3-2",
    lessonId: "lesson-2-3",
    title: "Controlling Motion Intensity and Direction",
    description: "Advanced techniques for fine-tuning motion characteristics in your animations.",
    duration: "12:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Motion Intensity", "Direction Control", "Fine-tuning"]
  },
  {
    id: "vid-2-4-1",
    lessonId: "lesson-2-4",
    title: "Advanced Deforum for Complex Animations",
    description: "Master Deforum's advanced features for cinematic camera movements and prompt scheduling.",
    duration: "20:40",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Camera Paths", "Prompt Scheduling", "Keyframing"]
  },
  {
    id: "vid-2-4-2",
    lessonId: "lesson-2-4",
    title: "Creating Dynamic Scene Transitions",
    description: "Learn to create smooth transitions between different scenes and prompts.",
    duration: "14:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Scene Transitions", "Prompt Evolution", "Timing"]
  },
  {
    id: "vid-2-5-1",
    lessonId: "lesson-2-5",
    title: "Converting Frames to Video",
    description: "Learn how to process generated frames into smooth, professional-quality videos.",
    duration: "10:35",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Frame Conversion", "Video Codecs", "Export Settings"]
  },
  // Module 3: Advanced Workflows with ComfyUI
  {
    id: "vid-3-1-1",
    lessonId: "lesson-3-1",
    title: "ComfyUI Interface Overview",
    description: "Complete walkthrough of the ComfyUI interface and basic navigation.",
    duration: "14:25",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Interface", "Navigation", "Basic Operations"]
  },
  {
    id: "vid-3-1-2",
    lessonId: "lesson-3-1",
    title: "Understanding Nodes and Data Flow",
    description: "Learn how nodes work and how to connect them to create workflows.",
    duration: "12:50",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Nodes", "Connections", "Data Flow"]
  },
  {
    id: "vid-3-2-1",
    lessonId: "lesson-3-2",
    title: "Building Your First ComfyUI Workflow",
    description: "Step-by-step guide to creating a complete image generation workflow from scratch.",
    duration: "18:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Workflow Creation", "Model Loading", "Sampling"]
  },
  {
    id: "vid-3-3-1",
    lessonId: "lesson-3-3",
    title: "AnimateDiff in ComfyUI",
    description: "Learn how to implement AnimateDiff in ComfyUI for superior animation control.",
    duration: "16:40",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["AnimateDiff Nodes", "Motion Control", "Animation Workflows"]
  },
  {
    id: "vid-3-4-1",
    lessonId: "lesson-3-4",
    title: "Multi-ControlNet Workflows",
    description: "Advanced techniques for combining multiple ControlNet models in ComfyUI.",
    duration: "17:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Multi-ControlNet", "Conditioning", "Advanced Control"]
  },
  {
    id: "vid-3-5-1",
    lessonId: "lesson-3-5",
    title: "Batch Processing and Automation",
    description: "Learn to automate your workflow with batch processing and parameter variations.",
    duration: "13:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Batch Processing", "Automation", "Parameter Variation"]
  },
  // Module 4: Optimizing Performance with Forge
  {
    id: "vid-4-1-1",
    lessonId: "lesson-4-1",
    title: "Introduction to Stable Diffusion WebUI Forge",
    description: "Overview of Forge and its performance advantages over A1111.",
    duration: "11:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Forge Overview", "Performance", "Comparison"]
  },
  {
    id: "vid-4-2-1",
    lessonId: "lesson-4-2",
    title: "Installing and Configuring Forge",
    description: "Complete installation and setup guide for Stable Diffusion WebUI Forge.",
    duration: "13:50",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Installation", "Configuration", "GPU Setup"]
  },
  {
    id: "vid-4-3-1",
    lessonId: "lesson-4-3",
    title: "Forge-Specific Performance Optimizations",
    description: "Learn Forge-specific features and settings for maximum performance.",
    duration: "12:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Optimizations", "Samplers", "Memory Management"]
  },
  // Module 5: Streamlining with Stability Matrix
  {
    id: "vid-5-1-1",
    lessonId: "lesson-5-1",
    title: "What is Stability Matrix?",
    description: "Introduction to Stability Matrix and its benefits for managing multiple tools.",
    duration: "9:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Overview", "Benefits", "Use Cases"]
  },
  {
    id: "vid-5-2-1",
    lessonId: "lesson-5-2",
    title: "Installing Stability Matrix",
    description: "Step-by-step guide to installing and setting up Stability Matrix.",
    duration: "11:15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Installation", "Setup", "Initial Configuration"]
  },
  {
    id: "vid-5-3-1",
    lessonId: "lesson-5-3",
    title: "Managing Multiple Environments",
    description: "Learn to create and manage multiple Stable Diffusion environments in Stability Matrix.",
    duration: "13:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Environment Management", "Switching", "Organization"]
  },
  // Module 6: Advanced Techniques & Future Trends
  {
    id: "vid-6-1-1",
    lessonId: "lesson-6-1",
    title: "Stable Video Diffusion (SVD) Explained",
    description: "Introduction to SVD and how it revolutionizes AI video generation.",
    duration: "14:30",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["SVD Basics", "Video Generation", "Image-to-Video"]
  },
  {
    id: "vid-6-2-1",
    lessonId: "lesson-6-2",
    title: "Maintaining Consistency with IP-Adapter",
    description: "Learn techniques for maintaining character and style consistency in animations.",
    duration: "15:40",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["IP-Adapter", "Consistency", "Character Control"]
  },
  {
    id: "vid-6-3-1",
    lessonId: "lesson-6-3",
    title: "Professional Storyboarding for AI Animation",
    description: "Learn professional storyboarding techniques to plan AI animation projects.",
    duration: "16:25",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    topics: ["Storyboarding", "Planning", "Visual Composition"]
  }
];

export function getVideosByLessonId(lessonId: string): VideoTutorial[] {
  return videoData.filter(v => v.lessonId === lessonId);
}
