"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Import the getPath function
import { getPath } from "@/lib/navigation"

// Updated property data with only the specified properties
const properties = [
  {
    id: 1,
    title: "5 Bedroom Detached Duplex Plot & BQ",
    location: "Modia Estate Phase 5, Kuje, Abuja",
    price: "₦2,000,000",
    size: "500 Sqm",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
    featured: true,
  },
  {
    id: 2,
    title: "4 Bedroom Detached Duplex Plot",
    location: "Modia Estate Phase 5, Kuje, Abuja",
    price: "₦1,500,000",
    size: "400 Sqm",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
    featured: true,
  },
  {
    id: 3,
    title: "3 Bedroom Detached Bungalow Plot",
    location: "Modia Estate Phase 5, Kuje, Abuja",
    price: "₦1,500,000",
    size: "400 Sqm",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
    featured: true,
  },
  {
    id: 4,
    title: "3 Bedroom Detached Bungalow Plot",
    location: "Modia Estate Phase 4, Kurudu, Abuja",
    price: "₦5,000,000",
    size: "400 Sqm",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
    featured: true,
  },
  {
    id: 5,
    title: "3 Bedroom Semi Detached Bungalow Plot",
    location: "Modia Estate Phase 4, Kurudu, Abuja",
    price: "₦3,000,000",
    size: "280 Sqm",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
    featured: true,
  },
  {
    id: 6,
    title: "5 Bedroom Detached Duplex Plot",
    location: "KOKO Court, Galadimawa, Abuja",
    price: "₦60,000,000",
    size: "450 Sqm",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
    featured: true,
  },
  {
    id: 7,
    title: "4 Bedroom Semi Detached Duplex Plot",
    location: "KOKO Court, Galadimawa, Abuja",
    price: "₦45,000,000",
    size: "370 Sqm",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    type: "For Sale",
    featured: true,
  },
]

export default function FeaturedProperties() {
  const [startIndex, setStartIndex] = useState(0)
  const visibleProperties = properties.slice(startIndex, startIndex + 3)

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1))
  }

  const handleNext = () => {
    setStartIndex(Math.min(properties.length - 3, startIndex + 1))
  }

  return (
    <div className="relative">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleProperties.map((property) => (
          <Link href={getPath(`/properties/${property.id}`)} key={property.id} className="group">
            <Card className="overflow-hidden border-none shadow-lg h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Badge className="absolute left-3 top-3 z-10 bg-[#E32929]">{property.type}</Badge>
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{property.title}</h3>
                    <div className="mt-1 flex items-center text-neutral-600">
                      <MapPin className="mr-1 h-4 w-4 text-[#E32929]" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                  </div>
                  <p className="font-semibold text-xl text-[#E32929]">{property.price}</p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-1">
                    <Maximize2 className="h-4 w-4 text-neutral-500" />
                    <span className="text-sm">{property.size}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          disabled={startIndex === 0}
          className="h-10 w-10 rounded-full border-neutral-300"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={startIndex >= properties.length - 3}
          className="h-10 w-10 rounded-full border-neutral-300"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}

