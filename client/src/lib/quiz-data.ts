/**
 * Quiz Data for Curriculum Lessons
 * Contains interactive quiz questions for each lesson
 */

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

export interface QuizQuestion {
  id: string;
  lessonId: string;
  question: string;
  type: "multiple-choice" | "true-false";
  options: QuizOption[];
  explanation: string;
}

export const quizData: QuizQuestion[] = [
  // Module 1: Foundations of AI Image Generation
  {
    id: "q1-1-1",
    lessonId: "lesson-1-1",
    question: "What is the primary mechanism by which diffusion models generate images?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "By gradually removing noise from random data", isCorrect: true, explanation: "Correct! Diffusion models work by iteratively denoising random noise into coherent images." },
      { id: "b", text: "By copying and pasting from existing images", isCorrect: false, explanation: "Incorrect. Diffusion models don't copy from existing images; they generate new images from scratch." },
      { id: "c", text: "By using GANs to compete with discriminators", isCorrect: false, explanation: "Incorrect. That's how GANs work, not diffusion models." },
      { id: "d", text: "By encoding text directly into pixels", isCorrect: false, explanation: "Incorrect. Text is encoded separately using CLIP, not directly into pixels." }
    ],
    explanation: "Diffusion models are based on the principle of gradually removing noise from random data. This process, guided by text embeddings from CLIP, transforms pure noise into coherent images that match the text description."
  },
  {
    id: "q1-1-2",
    lessonId: "lesson-1-1",
    question: "What is the role of CLIP in Stable Diffusion?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "It generates the images directly", isCorrect: false, explanation: "Incorrect. CLIP encodes the text, but the U-Net generates the images." },
      { id: "b", text: "It encodes text prompts into embeddings that guide image generation", isCorrect: true, explanation: "Correct! CLIP converts text prompts into embeddings that condition the diffusion process." },
      { id: "c", text: "It compresses images into latent space", isCorrect: false, explanation: "Incorrect. The VAE encoder does that, not CLIP." },
      { id: "d", text: "It removes noise from the generated images", isCorrect: false, explanation: "Incorrect. The U-Net performs the denoising, not CLIP." }
    ],
    explanation: "CLIP (Contrastive Language-Image Pre-training) is a text encoder that converts your text prompts into numerical embeddings. These embeddings guide the U-Net during the denoising process to generate images that match your description."
  },
  {
    id: "q1-1-3",
    lessonId: "lesson-1-1",
    question: "True or False: Latent space representation means the model works directly with pixel values.",
    type: "true-false",
    options: [
      { id: "true", text: "True", isCorrect: false, explanation: "Incorrect. Latent space is a compressed representation, not pixel values." },
      { id: "false", text: "False", isCorrect: true, explanation: "Correct! Stable Diffusion works in latent space (compressed representation) rather than pixel space, which is more efficient." }
    ],
    explanation: "Stable Diffusion uses a VAE (Variational Autoencoder) to compress images into a lower-dimensional latent space. Working in latent space is more computationally efficient than working directly with pixels."
  },
  {
    id: "q1-2-1",
    lessonId: "lesson-1-2",
    question: "What is the primary purpose of the 'Steps' parameter in Stable Diffusion?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "To control the number of denoising iterations", isCorrect: true, explanation: "Correct! More steps generally lead to higher quality but slower generation." },
      { id: "b", text: "To control the image resolution", isCorrect: false, explanation: "Incorrect. Resolution is controlled by the width and height parameters." },
      { id: "c", text: "To control the randomness of generation", isCorrect: false, explanation: "Incorrect. That's controlled by the seed and guidance scale." },
      { id: "d", text: "To control the model size", isCorrect: false, explanation: "Incorrect. Model size is determined by which checkpoint you load." }
    ],
    explanation: "The Steps parameter controls how many denoising iterations the model performs. More steps (typically 20-50) produce higher quality images but take longer. Fewer steps are faster but may produce lower quality results."
  },
  {
    id: "q1-2-2",
    lessonId: "lesson-1-2",
    question: "What does CFG Scale (Classifier Free Guidance) control?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "How closely the image follows your text prompt", isCorrect: true, explanation: "Correct! Higher CFG scales make the model adhere more strictly to your prompt." },
      { id: "b", text: "The speed of image generation", isCorrect: false, explanation: "Incorrect. Speed is controlled by the number of steps." },
      { id: "c", text: "The file size of the output image", isCorrect: false, explanation: "Incorrect. File size depends on resolution and format." },
      { id: "d", text: "The GPU memory usage", isCorrect: false, explanation: "Incorrect. Memory usage depends on model size and resolution." }
    ],
    explanation: "CFG Scale (typically 7-15) controls how much the model should follow your text prompt. Higher values make the image more aligned with your prompt, while lower values give the model more creative freedom."
  },
  {
    id: "q1-3-1",
    lessonId: "lesson-1-3",
    question: "Which of these is the BEST practice for writing effective prompts?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "Be vague and let the AI surprise you", isCorrect: false, explanation: "Incorrect. Vague prompts lead to unpredictable results." },
      { id: "b", text: "Use specific, descriptive language with style and quality keywords", isCorrect: true, explanation: "Correct! Specific prompts with style keywords produce more consistent, higher-quality results." },
      { id: "c", text: "Use only one word to keep it simple", isCorrect: false, explanation: "Incorrect. One-word prompts lack detail and produce inconsistent results." },
      { id: "d", text: "Copy prompts from other people without modification", isCorrect: false, explanation: "Incorrect. Customized prompts work better for your specific vision." }
    ],
    explanation: "Effective prompts are specific and descriptive. Include details about the subject, style, composition, lighting, and quality. For example: 'A serene mountain landscape at sunset, oil painting style, golden hour lighting, highly detailed, 8k resolution' produces much better results than 'mountain'."
  },
  {
    id: "q1-3-2",
    lessonId: "lesson-1-3",
    question: "What is the purpose of negative prompts?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "To make the image darker", isCorrect: false, explanation: "Incorrect. Negative prompts don't affect brightness." },
      { id: "b", text: "To tell the model what NOT to include in the image", isCorrect: true, explanation: "Correct! Negative prompts exclude unwanted elements from the generated image." },
      { id: "c", text: "To reduce the file size", isCorrect: false, explanation: "Incorrect. Negative prompts don't affect file size." },
      { id: "d", text: "To speed up generation", isCorrect: false, explanation: "Incorrect. Negative prompts don't affect generation speed." }
    ],
    explanation: "Negative prompts tell the model what to avoid. For example, if you don't want blurry images, you'd include 'blurry, low quality' in your negative prompt. This helps produce cleaner, more focused results."
  },
  {
    id: "q1-4-1",
    lessonId: "lesson-1-4",
    question: "What does the 'Denoising Strength' parameter control in image-to-image generation?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "How much the output differs from the input image", isCorrect: true, explanation: "Correct! Higher denoising strength means more creative changes to the input." },
      { id: "b", text: "The quality of the output image", isCorrect: false, explanation: "Incorrect. Quality is controlled by steps and CFG scale." },
      { id: "c", text: "The file size of the output", isCorrect: false, explanation: "Incorrect. File size depends on resolution." },
      { id: "d", text: "The processing speed", isCorrect: false, explanation: "Incorrect. Speed depends on steps and model size." }
    ],
    explanation: "Denoising Strength (0-1) controls how much the model modifies the input image. A value of 0 returns the original image unchanged, while 1.0 allows maximum creative transformation. Values around 0.5-0.7 work well for variations."
  },
  {
    id: "q1-5-1",
    lessonId: "lesson-1-5",
    question: "What is the main difference between inpainting and outpainting?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "Inpainting modifies existing areas; outpainting extends boundaries", isCorrect: true, explanation: "Correct! Inpainting edits existing image regions, while outpainting adds new content beyond the original boundaries." },
      { id: "b", text: "They are the same thing with different names", isCorrect: false, explanation: "Incorrect. They serve different purposes." },
      { id: "c", text: "Inpainting is faster than outpainting", isCorrect: false, explanation: "Incorrect. Speed depends on resolution and steps, not the technique." },
      { id: "d", text: "Outpainting requires a mask; inpainting doesn't", isCorrect: false, explanation: "Incorrect. Both techniques can use masks." }
    ],
    explanation: "Inpainting allows you to selectively modify parts of an image by masking areas you want to change. Outpainting extends the image beyond its original boundaries, useful for expanding compositions or changing aspect ratios."
  },
  {
    id: "q1-6-1",
    lessonId: "lesson-1-6",
    question: "What is ControlNet used for?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "To control the color palette of generated images", isCorrect: false, explanation: "Incorrect. ControlNet doesn't control colors directly." },
      { id: "b", text: "To guide image generation using structural information like poses or edges", isCorrect: true, explanation: "Correct! ControlNet provides structural guidance for precise control over image composition." },
      { id: "c", text: "To speed up image generation", isCorrect: false, explanation: "Incorrect. ControlNet adds computational overhead." },
      { id: "d", text: "To reduce VRAM usage", isCorrect: false, explanation: "Incorrect. ControlNet increases VRAM usage." }
    ],
    explanation: "ControlNet is an extension that lets you guide image generation using structural inputs like poses (OpenPose), edges (Canny), depth maps, or line art. This provides unprecedented control over composition and structure."
  },
  // Module 2: AI Animation with A1111
  {
    id: "q2-1-1",
    lessonId: "lesson-2-1",
    question: "What does FPS stand for in animation?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "Frames Per Second", isCorrect: true, explanation: "Correct! FPS determines how many individual frames are shown per second." },
      { id: "b", text: "First Person Shooter", isCorrect: false, explanation: "Incorrect. That's a video game genre, not an animation term." },
      { id: "c", text: "File Processing Speed", isCorrect: false, explanation: "Incorrect. That's not an animation term." },
      { id: "d", text: "Frame Pixel Size", isCorrect: false, explanation: "Incorrect. That's not what FPS means." }
    ],
    explanation: "FPS (Frames Per Second) is the number of individual images shown per second. Common values are 24 FPS (film), 30 FPS (video), and 60 FPS (smooth motion). Higher FPS creates smoother motion but requires more frames."
  },
  {
    id: "q2-1-2",
    lessonId: "lesson-2-1",
    question: "True or False: A 10-second animation at 24 FPS requires 240 frames.",
    type: "true-false",
    options: [
      { id: "true", text: "True", isCorrect: true, explanation: "Correct! 10 seconds × 24 frames/second = 240 frames." },
      { id: "false", text: "False", isCorrect: false, explanation: "Incorrect. The math is: 10 × 24 = 240 frames." }
    ],
    explanation: "To calculate the number of frames needed: Duration (seconds) × FPS = Total frames. So a 10-second animation at 24 FPS requires 240 individual frames."
  },
  {
    id: "q2-2-1",
    lessonId: "lesson-2-2",
    question: "What is a motion module in AnimateDiff?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "A model that controls how objects move in animations", isCorrect: true, explanation: "Correct! Motion modules define the style and quality of motion in the animation." },
      { id: "b", text: "A hardware component for faster rendering", isCorrect: false, explanation: "Incorrect. Motion modules are software, not hardware." },
      { id: "c", text: "A type of video codec", isCorrect: false, explanation: "Incorrect. That's a video encoding format, not related to motion modules." },
      { id: "d", text: "A plugin for Adobe Premiere", isCorrect: false, explanation: "Incorrect. Motion modules are for AI animation, not video editing software." }
    ],
    explanation: "Motion modules are pre-trained models in AnimateDiff that control the motion characteristics of animations. Different modules produce different motion styles, from smooth and subtle to dynamic and energetic."
  },
  {
    id: "q2-3-1",
    lessonId: "lesson-2-3",
    question: "What is the main advantage of AnimateDiff over frame-by-frame generation?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "It's faster and produces more coherent motion", isCorrect: true, explanation: "Correct! AnimateDiff generates smooth, coherent animations much faster than generating each frame separately." },
      { id: "b", text: "It produces higher resolution images", isCorrect: false, explanation: "Incorrect. Resolution is independent of the animation method." },
      { id: "c", text: "It requires less VRAM", isCorrect: false, explanation: "Incorrect. AnimateDiff requires similar or more VRAM." },
      { id: "d", text: "It doesn't require a GPU", isCorrect: false, explanation: "Incorrect. AnimateDiff still requires GPU acceleration." }
    ],
    explanation: "AnimateDiff generates entire animation sequences in a single pass, producing smooth, coherent motion. This is much faster and more efficient than generating each frame separately and trying to maintain consistency."
  },
  {
    id: "q2-4-1",
    lessonId: "lesson-2-4",
    question: "What does Deforum allow you to do that AnimateDiff doesn't?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "Create complex camera movements and schedule prompt changes", isCorrect: true, explanation: "Correct! Deforum provides advanced control over camera paths and prompt evolution throughout the animation." },
      { id: "b", text: "Generate faster animations", isCorrect: false, explanation: "Incorrect. Deforum is typically slower due to its complexity." },
      { id: "c", text: "Generate higher resolution videos", isCorrect: false, explanation: "Incorrect. Resolution is independent of the animation tool." },
      { id: "d", text: "Use less VRAM", isCorrect: false, explanation: "Incorrect. Deforum typically uses more VRAM due to its advanced features." }
    ],
    explanation: "Deforum is an advanced animation extension that allows you to define complex camera paths (zoom, pan, rotate) and schedule prompt changes throughout the animation. This enables cinematic animations with evolving scenes."
  },
  // Module 3: Advanced Workflows with ComfyUI
  {
    id: "q3-1-1",
    lessonId: "lesson-3-1",
    question: "What is a node in ComfyUI?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "A visual representation of an operation or process", isCorrect: true, explanation: "Correct! Nodes represent individual operations that can be connected to create workflows." },
      { id: "b", text: "A type of GPU", isCorrect: false, explanation: "Incorrect. That's hardware, not related to ComfyUI nodes." },
      { id: "c", text: "A video file format", isCorrect: false, explanation: "Incorrect. Nodes aren't file formats." },
      { id: "d", text: "A network connection", isCorrect: false, explanation: "Incorrect. Nodes aren't network connections." }
    ],
    explanation: "In ComfyUI, nodes are visual blocks representing operations like loading models, conditioning, sampling, or saving images. You connect nodes together with lines to define the data flow and create workflows."
  },
  {
    id: "q3-2-1",
    lessonId: "lesson-3-2",
    question: "What is an advantage of ComfyUI's node-based approach?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "It provides more flexibility and control than traditional UIs", isCorrect: true, explanation: "Correct! Node-based workflows allow you to create complex, customized pipelines with full control." },
      { id: "b", text: "It's faster than other tools", isCorrect: false, explanation: "Incorrect. Speed depends on hardware, not the UI type." },
      { id: "c", text: "It requires less VRAM", isCorrect: false, explanation: "Incorrect. VRAM usage depends on the operations, not the UI." },
      { id: "d", text: "It's easier for beginners", isCorrect: false, explanation: "Incorrect. Node-based interfaces have a steeper learning curve." }
    ],
    explanation: "ComfyUI's node-based approach provides unprecedented flexibility. You can create complex, reusable workflows by visually connecting operations, enabling sophisticated pipelines that would be difficult or impossible in traditional interfaces."
  },
  {
    id: "q3-4-1",
    lessonId: "lesson-3-4",
    question: "What is the benefit of using multiple ControlNet models simultaneously?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "It allows combining different types of guidance for precise control", isCorrect: true, explanation: "Correct! Multiple ControlNets let you layer different types of guidance (pose, depth, edges) for complex control." },
      { id: "b", text: "It speeds up generation", isCorrect: false, explanation: "Incorrect. Multiple ControlNets slow down generation." },
      { id: "c", text: "It reduces VRAM usage", isCorrect: false, explanation: "Incorrect. Multiple ControlNets increase VRAM usage." },
      { id: "d", text: "It's required for all animations", isCorrect: false, explanation: "Incorrect. Single ControlNets work fine for many tasks." }
    ],
    explanation: "Combining multiple ControlNet models allows you to apply different types of guidance simultaneously. For example, you could use OpenPose for character pose and Depth for spatial layout, achieving complex, precise control."
  },
  // Module 4: Optimizing Performance with Forge
  {
    id: "q4-1-1",
    lessonId: "lesson-4-1",
    question: "What is the main focus of Stable Diffusion WebUI Forge?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "Performance optimization and faster generation", isCorrect: true, explanation: "Correct! Forge is designed to be faster and more efficient than A1111." },
      { id: "b", text: "Adding new features", isCorrect: false, explanation: "Incorrect. Forge focuses on optimization, not new features." },
      { id: "c", text: "Changing the user interface", isCorrect: false, explanation: "Incorrect. The UI is similar to A1111." },
      { id: "d", text: "Supporting new models", isCorrect: false, explanation: "Incorrect. Model support is similar to A1111." }
    ],
    explanation: "Stable Diffusion WebUI Forge is a performance-focused reimplementation of A1111. It achieves faster generation times through optimized backend architecture, making it ideal for users who prioritize speed."
  },
  {
    id: "q4-3-1",
    lessonId: "lesson-4-3",
    question: "True or False: Forge uses significantly more VRAM than A1111.",
    type: "true-false",
    options: [
      { id: "true", text: "True", isCorrect: false, explanation: "Incorrect. Forge typically uses similar or less VRAM due to optimizations." },
      { id: "false", text: "False", isCorrect: true, explanation: "Correct! Forge is optimized to use similar or less VRAM while being faster." }
    ],
    explanation: "One of Forge's key advantages is that it achieves faster generation times without requiring more VRAM. In fact, it often uses similar or slightly less VRAM than A1111 due to its optimized architecture."
  },
  // Module 5: Streamlining with Stability Matrix
  {
    id: "q5-1-1",
    lessonId: "lesson-5-1",
    question: "What is the primary purpose of Stability Matrix?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "To centrally manage multiple Stable Diffusion installations", isCorrect: true, explanation: "Correct! Stability Matrix simplifies managing A1111, Forge, ComfyUI, and other tools from one interface." },
      { id: "b", text: "To generate images", isCorrect: false, explanation: "Incorrect. Stability Matrix is a manager, not a generator." },
      { id: "c", text: "To train new models", isCorrect: false, explanation: "Incorrect. Stability Matrix doesn't train models." },
      { id: "d", text: "To edit images", isCorrect: false, explanation: "Incorrect. Stability Matrix doesn't edit images." }
    ],
    explanation: "Stability Matrix is a unified manager for Stable Diffusion tools. Instead of managing separate A1111, Forge, and ComfyUI installations, you manage everything from Stability Matrix, making it easy to switch between tools."
  },
  {
    id: "q5-3-1",
    lessonId: "lesson-5-3",
    question: "What is an advantage of managing multiple environments in Stability Matrix?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "You can use different tools without uninstalling and reinstalling", isCorrect: true, explanation: "Correct! Stability Matrix lets you switch between A1111, Forge, and ComfyUI instantly." },
      { id: "b", text: "It generates images faster", isCorrect: false, explanation: "Incorrect. Speed depends on hardware, not environment management." },
      { id: "c", text: "It requires less disk space", isCorrect: false, explanation: "Incorrect. Multiple environments use more disk space." },
      { id: "d", text: "It's easier for beginners", isCorrect: false, explanation: "Incorrect. Multiple environments add complexity." }
    ],
    explanation: "Stability Matrix allows you to create separate environments for A1111, Forge, and ComfyUI. You can switch between them instantly without uninstalling and reinstalling, making it easy to use the right tool for each task."
  },
  // Module 6: Advanced Techniques & Future Trends
  {
    id: "q6-1-1",
    lessonId: "lesson-6-1",
    question: "How does Stable Video Diffusion (SVD) differ from frame-by-frame animation generation?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "SVD generates videos directly from images instead of frame-by-frame", isCorrect: true, explanation: "Correct! SVD takes an image and generates a smooth video sequence directly." },
      { id: "b", text: "SVD is slower than frame-by-frame generation", isCorrect: false, explanation: "Incorrect. SVD is typically faster." },
      { id: "c", text: "SVD requires more VRAM", isCorrect: false, explanation: "Incorrect. SVD typically uses less VRAM." },
      { id: "d", text: "SVD only works with specific image sizes", isCorrect: false, explanation: "Incorrect. SVD is flexible with input sizes." }
    ],
    explanation: "Stable Video Diffusion (SVD) represents a paradigm shift in AI video generation. Instead of generating frames individually, SVD takes a single image and generates a smooth, coherent video sequence directly, producing superior results."
  },
  {
    id: "q6-2-1",
    lessonId: "lesson-6-2",
    question: "What is IP-Adapter used for in AI animation?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "To maintain character and style consistency across frames", isCorrect: true, explanation: "Correct! IP-Adapter helps preserve character identity and visual style throughout animations." },
      { id: "b", text: "To speed up animation generation", isCorrect: false, explanation: "Incorrect. IP-Adapter adds computational overhead." },
      { id: "c", text: "To reduce file sizes", isCorrect: false, explanation: "Incorrect. IP-Adapter doesn't affect file sizes." },
      { id: "d", text: "To convert videos to images", isCorrect: false, explanation: "Incorrect. IP-Adapter works with images, not video conversion." }
    ],
    explanation: "IP-Adapter (Image Prompt Adapter) is a technique that helps maintain consistency in AI-generated animations. By providing reference images, you can ensure characters and styles remain consistent throughout your animation sequence."
  },
  {
    id: "q6-3-1",
    lessonId: "lesson-6-3",
    question: "Why is storyboarding important for AI animation projects?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "It helps plan the animation and guide AI generation", isCorrect: true, explanation: "Correct! Storyboards provide a visual plan that guides the AI generation process." },
      { id: "b", text: "It speeds up the generation process", isCorrect: false, explanation: "Incorrect. Storyboarding is a planning step, not a generation optimization." },
      { id: "c", text: "It reduces VRAM usage", isCorrect: false, explanation: "Incorrect. Storyboarding doesn't affect VRAM usage." },
      { id: "d", text: "It's only for professional animators", isCorrect: false, explanation: "Incorrect. Storyboarding is useful for all skill levels." }
    ],
    explanation: "Storyboarding is crucial for AI animation projects. It helps you plan your narrative, visualize camera movements, and create a coherent visual flow. This planning translates to better AI-generated results and more efficient production."
  },
  {
    id: "q6-4-1",
    lessonId: "lesson-6-4",
    question: "What is an important ethical consideration when using AI-generated content?",
    type: "multiple-choice",
    options: [
      { id: "a", text: "Properly attributing AI-generated content and understanding copyright implications", isCorrect: true, explanation: "Correct! Attribution and understanding copyright are crucial ethical considerations." },
      { id: "b", text: "Using the highest quality settings always", isCorrect: false, explanation: "Incorrect. Quality settings aren't an ethical consideration." },
      { id: "c", text: "Generating as many images as possible", isCorrect: false, explanation: "Incorrect. Quantity isn't an ethical consideration." },
      { id: "d", text: "Using the most expensive GPU available", isCorrect: false, explanation: "Incorrect. Hardware choice isn't an ethical consideration." }
    ],
    explanation: "When using AI-generated content, it's important to properly attribute your work, understand copyright implications, and be transparent about AI involvement. This maintains ethical standards in the creative community."
  }
];

export function getQuestionsByLessonId(lessonId: string): QuizQuestion[] {
  return quizData.filter(q => q.lessonId === lessonId);
}
