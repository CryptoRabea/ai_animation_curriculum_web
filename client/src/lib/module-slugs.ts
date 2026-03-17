/**
 * Module ID to Slug Mapping
 * Maps module IDs to their URL-friendly slugs
 */

export const moduleSlugMap: Record<string, string> = {
  "module-1": "foundations-ai-image-generation",
  "module-2": "ai-animation-a1111",
  "module-3": "advanced-workflows-comfyui",
  "module-4": "optimizing-performance-forge",
  "module-5": "streamlining-stability-matrix",
  "module-6": "advanced-techniques-future-trends"
};

export function getModuleSlug(moduleId: string): string {
  return moduleSlugMap[moduleId] || "";
}

export function getModuleIdFromSlug(slug: string): string {
  const entry = Object.entries(moduleSlugMap).find(([, s]) => s === slug);
  return entry ? entry[0] : "";
}
