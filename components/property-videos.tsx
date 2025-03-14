"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getYouTubeThumbnail } from "@/lib/utils"

interface Video {
  id: string
  title: string
  type: "video" | "short"
  thumbnail?: string
}

const videos: Video[] = [
  {
    id: "bFO2Z0wQeaQ",
    title: "Modia Properties Showcase",
    type: "video",
  },
  {
    id: "Y-kI7NXVhfA",
    title: "Modia Properties Development",
    type: "video",
  },
  {
    id: "kbr1VJHt2gU",
    title: "Modia Properties Tour",
    type: "short",
  },
]

export default function PropertyVideos() {
  const [activeVideo, setActiveVideo] = useState(videos[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const handleVideoSelect = (video: Video) => {
    setActiveVideo(video)
    setIsPlaying(true)
  }

  const getEmbedUrl = (video: Video) => {
    if (video.type === "short") {
      return `https://www.youtube.com/embed/${video.id}?autoplay=1&loop=1&modestbranding=1&rel=0`
    }
    return `https://www.youtube.com/embed/${video.id}?autoplay=1&modestbranding=1&rel=0`
  }

  return (
    <div className="w-full">
      <div className="grid gap-8 md:grid-cols-3 md:gap-12">
        <div className="md:col-span-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-neutral-100 shadow-lg">
            {isPlaying ? (
              <iframe
                src={getEmbedUrl(activeVideo)}
                title={activeVideo.title}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="relative h-full w-full">
                <img
                  src={activeVideo.thumbnail || getYouTubeThumbnail(activeVideo.id)}
                  alt={activeVideo.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Button
                    onClick={() => setIsPlaying(true)}
                    className="h-16 w-16 rounded-full bg-[#E32929]/90 hover:bg-[#E32929] text-white"
                  >
                    <Play className="h-8 w-8 fill-current" />
                    <span className="sr-only">Play video</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
          <h3 className="mt-4 text-xl font-semibold">{activeVideo.title}</h3>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-4 text-xl font-semibold">More Property Videos</h3>
          <div className="grid gap-4">
            {videos.map((video) => (
              <div
                key={video.id}
                className={`group cursor-pointer rounded-lg overflow-hidden border transition-all ${
                  activeVideo.id === video.id
                    ? "border-[#E32929] shadow-md"
                    : "border-neutral-200 hover:border-neutral-300"
                }`}
                onClick={() => handleVideoSelect(video)}
              >
                <div className="flex gap-4 p-3">
                  <div className="relative aspect-video w-24 overflow-hidden rounded sm:w-32">
                    <img
                      src={video.thumbnail || getYouTubeThumbnail(video.id)}
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <h4 className="font-medium group-hover:text-[#E32929] transition-colors line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="mt-1 text-xs text-neutral-500">
                      {video.type === "short" ? "YouTube Short" : "YouTube Video"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

