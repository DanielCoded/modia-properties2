import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to format currency
export function formatCurrency(amount: number | string, currency = "₦") {
  const numAmount = typeof amount === "string" ? Number.parseFloat(amount) : amount

  return `${currency}${numAmount.toLocaleString("en-NG")}`
}

// Function to get YouTube thumbnail URL
export function getYouTubeThumbnail(
  videoId: string,
  quality: "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault" = "maxresdefault",
) {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
}

