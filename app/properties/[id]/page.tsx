import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronLeft, Heart, Maximize2, MapPin, Phone, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Import the getPath function
import { getPath } from "@/lib/navigation"

// Updated property data with only the specified properties
const properties = [
  {
    id: 1,
    title: "5 Bedroom Detached Duplex Plot & BQ",
    description:
      "This premium 500 Sqm plot is perfect for building a luxurious 5 bedroom detached duplex with BQ. Located in the serene Modia Estate Phase 5 in Kuje, Abuja, this plot offers an excellent opportunity for both residential and investment purposes.",
    location: "Modia Estate Phase 5, Kuje, Abuja",
    price: "₦2,000,000",
    size: "500 Sqm",
    yearAvailable: 2025,
    type: "For Sale",
    features: [
      "Prime location in Kuje",
      "Secure environment",
      "Good road network",
      "Proximity to amenities",
      "Serene environment",
      "Dry land",
      "Ready for development",
      "Clean title documents",
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop",
    ],
    agent: {
      name: "Modia Properties",
      phone: "+234 803 974 3274",
      email: "info@modiaproperties.org",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
  {
    id: 2,
    title: "4 Bedroom Detached Duplex Plot",
    description:
      "A 400 Sqm plot ideal for constructing a spacious 4 bedroom detached duplex. Located in the developing Modia Estate Phase 5 in Kuje, Abuja, this plot offers excellent value for money and potential for appreciation.",
    location: "Modia Estate Phase 5, Kuje, Abuja",
    price: "₦1,500,000",
    size: "400 Sqm",
    yearAvailable: 2025,
    type: "For Sale",
    features: [
      "Prime location in Kuje",
      "Secure environment",
      "Good road network",
      "Proximity to amenities",
      "Serene environment",
      "Dry land",
      "Ready for development",
      "Clean title documents",
    ],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop",
    ],
    agent: {
      name: "Modia Properties",
      phone: "+234 803 974 3274",
      email: "info@modiaproperties.org",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
  {
    id: 3,
    title: "3 Bedroom Detached Bungalow Plot",
    description:
      "A 400 Sqm plot perfect for building a comfortable 3 bedroom detached bungalow. Located in the peaceful Modia Estate Phase 5 in Kuje, Abuja, this plot is ideal for small families or as a starter home.",
    location: "Modia Estate Phase 5, Kuje, Abuja",
    price: "₦1,500,000",
    size: "400 Sqm",
    yearAvailable: 2025,
    type: "For Sale",
    features: [
      "Prime location in Kuje",
      "Secure environment",
      "Good road network",
      "Proximity to amenities",
      "Serene environment",
      "Dry land",
      "Ready for development",
      "Clean title documents",
    ],
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop",
    ],
    agent: {
      name: "Modia Properties",
      phone: "+234 803 974 3274",
      email: "info@modiaproperties.org",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
  {
    id: 4,
    title: "3 Bedroom Detached Bungalow Plot",
    description:
      "A premium 400 Sqm plot in the desirable Modia Estate Phase 4, Kurudu By Army Estate, Abuja. This plot is perfect for building a spacious 3 bedroom detached bungalow in a well-developed area with excellent infrastructure.",
    location: "Modia Estate Phase 4, Kurudu, Abuja",
    price: "₦5,000,000",
    size: "400 Sqm",
    yearAvailable: 2025,
    type: "For Sale",
    features: [
      "Prime location near Army Estate",
      "Developed neighborhood",
      "Excellent infrastructure",
      "Good road network",
      "Proximity to amenities",
      "Serene environment",
      "Dry land",
      "Clean title documents",
    ],
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
    ],
    agent: {
      name: "Modia Properties",
      phone: "+234 803 974 3274",
      email: "info@modiaproperties.org",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
  {
    id: 5,
    title: "3 Bedroom Semi Detached Bungalow Plot",
    description:
      "A 280 Sqm plot ideal for building a 3 bedroom semi-detached bungalow in the established Modia Estate Phase 4, Kurudu By Army Estate, Abuja. This plot offers excellent value in a well-developed area.",
    location: "Modia Estate Phase 4, Kurudu, Abuja",
    price: "₦3,000,000",
    size: "280 Sqm",
    yearAvailable: 2025,
    type: "For Sale",
    features: [
      "Prime location near Army Estate",
      "Developed neighborhood",
      "Excellent infrastructure",
      "Good road network",
      "Proximity to amenities",
      "Serene environment",
      "Dry land",
      "Clean title documents",
    ],
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
    ],
    agent: {
      name: "Modia Properties",
      phone: "+234 803 974 3274",
      email: "info@modiaproperties.org",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
  {
    id: 6,
    title: "5 Bedroom Detached Duplex Plot",
    description:
      "A premium 450 Sqm plot in the exclusive KOKO Court, Galadimawa, Abuja. This plot is perfect for building a luxurious 5 bedroom detached duplex in one of Abuja's most prestigious neighborhoods.",
    location: "KOKO Court, Galadimawa, Abuja",
    price: "₦60,000,000",
    size: "450 Sqm",
    yearAvailable: 2025,
    type: "For Sale",
    features: [
      "Exclusive neighborhood",
      "Gated community",
      "24/7 security",
      "Paved roads",
      "Drainage system",
      "Proximity to major roads",
      "Close to shopping centers",
      "Clean title documents",
    ],
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
    ],
    agent: {
      name: "Modia Properties",
      phone: "+234 803 974 3274",
      email: "info@modiaproperties.org",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
  {
    id: 7,
    title: "4 Bedroom Semi Detached Duplex Plot",
    description:
      "A 370 Sqm plot ideal for building a 4 bedroom semi-detached duplex in the prestigious KOKO Court, Galadimawa, Abuja. This plot offers an excellent opportunity to build in one of Abuja's most sought-after locations.",
    location: "KOKO Court, Galadimawa, Abuja",
    price: "₦45,000,000",
    size: "370 Sqm",
    yearAvailable: 2025,
    type: "For Sale",
    features: [
      "Exclusive neighborhood",
      "Gated community",
      "24/7 security",
      "Paved roads",
      "Drainage system",
      "Proximity to major roads",
      "Close to shopping centers",
      "Clean title documents",
    ],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
    ],
    agent: {
      name: "Modia Properties",
      phone: "+234 803 974 3274",
      email: "info@modiaproperties.org",
      image: "/placeholder.svg?height=200&width=200",
    },
  },
]

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const propertyId = Number.parseInt(params.id)
  const property = properties.find((p) => p.id === propertyId) || properties[0]

  // Find similar properties (same location but different ID)
  const similarProperties = properties
    .filter((p) => p.location.includes(property.location.split(",")[0]) && p.id !== property.id)
    .slice(0, 2)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Property Header */}
      <div className="bg-neutral-50 py-8">
        <div className="container">
          <Link
            href={getPath("/properties")}
            className="mb-4 flex items-center text-sm font-medium text-neutral-600 hover:text-[#E32929] transition-colors"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Properties
          </Link>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{property.title}</h1>
              <div className="mt-1 flex items-center text-neutral-600">
                <MapPin className="mr-1 h-4 w-4 text-[#E32929]" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="border-neutral-300">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to favorites</span>
              </Button>
              <Button variant="outline" size="icon" className="border-neutral-300">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share property</span>
              </Button>
              <p className="text-2xl font-bold text-[#E32929]">{property.price}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Property Images */}
      <div className="container py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:col-span-2 md:row-span-2">
            <Image
              src={property.images[0] || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          {property.images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${property.title} - Image ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Property Details */}
      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="mb-8 flex flex-wrap gap-4 rounded-lg border p-6 bg-white shadow-sm">
              <div className="flex items-center gap-2">
                <Maximize2 className="h-5 w-5 text-[#E32929]" />
                <div>
                  <p className="text-sm text-neutral-600">Plot Size</p>
                  <p className="font-medium">{property.size}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#E32929]" />
                <div>
                  <p className="text-sm text-neutral-600">Year Available</p>
                  <p className="font-medium">{property.yearAvailable}</p>
                </div>
              </div>
            </div>

            <Tabs defaultValue="description">
              <TabsList className="mb-4 bg-neutral-100">
                <TabsTrigger value="description" className="data-[state=active]:bg-white">
                  Description
                </TabsTrigger>
                <TabsTrigger value="features" className="data-[state=active]:bg-white">
                  Features
                </TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="space-y-4">
                <p className="text-neutral-700">{property.description}</p>
                <div className="grid gap-4 sm:grid-cols-2 mt-6">
                  <div>
                    <h3 className="mb-2 font-semibold">Property Details</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Property Type:</span>
                        <span>Land Plot</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Plot Size:</span>
                        <span>{property.size}</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Location:</span>
                        <span>{property.location.split(",")[0]}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Additional Details</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Status:</span>
                        <span>{property.type}</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Property ID:</span>
                        <span>MP{property.id}2025</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-neutral-600">Listed:</span>
                        <span>Available Now</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="features">
                <div className="grid gap-2 sm:grid-cols-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 py-2">
                      <div className="h-2 w-2 rounded-full bg-[#E32929]" />
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="border-none shadow-md overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={property.agent.image || "/placeholder.svg"}
                      alt={property.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{property.agent.name}</h3>
                    <p className="text-sm text-neutral-600">Listing Agent</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <Button className="w-full bg-[#E32929] hover:bg-[#c71f1f] text-white" asChild>
                    <Link
                      href={`https://wa.me/2348083351686?text=${encodeURIComponent(`I'm interested in ${property.title} at ${property.location} priced at ${property.price}. Please provide more information.`)}`}
                      target="_blank"
                      className="flex items-center justify-center gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      Contact via WhatsApp
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full border-neutral-300">
                    Schedule Viewing
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h3 className="mb-4 font-semibold">Similar Properties</h3>
              <div className="space-y-4">
                {similarProperties.map((similarProperty) => (
                  <Link
                    href={getPath(`/properties/${similarProperty.id}`)}
                    key={similarProperty.id}
                    className="group block"
                  >
                    <div className="flex gap-4 p-4 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
                      <div className="relative aspect-[4/3] w-24 overflow-hidden rounded-lg sm:w-32">
                        <Image
                          src={similarProperty.images[0] || "/placeholder.svg"}
                          alt={similarProperty.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium group-hover:text-[#E32929] transition-colors">
                          {similarProperty.title}
                        </h4>
                        <p className="text-sm text-neutral-600">{similarProperty.location}</p>
                        <p className="mt-1 text-sm font-medium text-[#E32929]">{similarProperty.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

