// Helper functions for navigation with base path support

/**
 * Get the correct path with the base path included
 * @param path The path without the base path
 * @returns The path with the base path
 */
export function getPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  // Ensure path starts with a slash and doesn't duplicate slashes
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}

/**
 * Get the correct image path with the base path included
 * @param src The image source path
 * @returns The image source with the base path
 */
export function getImagePath(src: string): string {
  // If the src is an external URL, return it as is
  if (src.startsWith("http") || src.startsWith("data:")) {
    return src
  }

  // Otherwise, add the base path
  return getPath(src)
}

