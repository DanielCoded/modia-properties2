"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    quote:
      "Working with Modia Properties was an absolute pleasure. Their team went above and beyond to help us find our dream home. The process was smooth, and their expertise in the luxury market is unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Investor",
    quote:
      "As an investor, I appreciate Modia's deep market knowledge and attention to detail. They've helped me acquire several high-performing properties and their after-sale support is exceptional.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "First-time Buyer",
    quote:
      "Despite being a first-time buyer in a competitive market, Modia Properties made the process stress-free. Their patience, guidance, and negotiation skills helped me secure a beautiful property at a great price.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative">
      <Card className="border-none bg-neutral-50 shadow-md">
        <CardContent className="p-8 sm:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="relative aspect-square h-24 w-24 overflow-hidden rounded-full sm:h-32 sm:w-32">
              <Image
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={currentTestimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <Quote className="mb-4 h-10 w-10 text-[#E32929]/20" />
              <p className="text-lg italic md:text-xl">{currentTestimonial.quote}</p>
              <div className="mt-6">
                <p className="font-semibold">{currentTestimonial.name}</p>
                <p className="text-sm text-neutral-600">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          className="h-10 w-10 rounded-full border-neutral-300"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="h-10 w-10 rounded-full border-neutral-300"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </div>
  )
}

