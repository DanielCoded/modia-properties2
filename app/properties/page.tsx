import Link from "next/link"
import Image from "next/image"
import { Filter, Maximize2, MapPin, Search, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
    category: "Modia Estate Phase 5",
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
    category: "Modia Estate Phase 5",
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
    category: "Modia Estate Phase 5",
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
    category: "Modia Estate Phase 4",
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
    category: "Modia Estate Phase 4",
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
    category: "KOKO Court",
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
    category: "KOKO Court",
  },
]

export default function PropertiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-neutral-50 py-16">
        <div className="container">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Properties</h1>
          <div className="mt-4 h-1 w-20 bg-[#E32929]"></div>
          <p className="mt-6 max-w-3xl text-neutral-600">
            Explore our exclusive collection of properties in prime locations
          </p>
        </div>
      </div>

      <div className="container py-16">
        {/* Search and Filter */}
        <div className="mb-12 rounded-xl border bg-white p-6 shadow-md">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                <Input placeholder="Search by location, property name..." className="pl-10 border-neutral-300" />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Select defaultValue="any">
                <SelectTrigger className="w-full sm:w-[150px] border-neutral-300">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Type</SelectItem>
                  <SelectItem value="detached-duplex">Detached Duplex</SelectItem>
                  <SelectItem value="semi-detached">Semi Detached</SelectItem>
                  <SelectItem value="bungalow">Bungalow</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="any">
                <SelectTrigger className="w-full sm:w-[150px] border-neutral-300">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Location</SelectItem>
                  <SelectItem value="kuje">Kuje</SelectItem>
                  <SelectItem value="kurudu">Kurudu</SelectItem>
                  <SelectItem value="galadimawa">Galadimawa</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="any">
                <SelectTrigger className="w-full sm:w-[150px] border-neutral-300">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Price</SelectItem>
                  <SelectItem value="0-2m">Up to ₦2M</SelectItem>
                  <SelectItem value="2-10m">₦2M - ₦10M</SelectItem>
                  <SelectItem value="10-50m">₦10M - ₦50M</SelectItem>
                  <SelectItem value="50m+">₦50M+</SelectItem>
                </SelectContent>
              </Select>
              <Button className="flex items-center gap-2 bg-[#E32929] hover:bg-[#c71f1f] text-white">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Modia Estate Phase 5 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Modia Estate Phase 5, Kuje Abuja</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {properties
              .filter((property) => property.category === "Modia Estate Phase 5")
              .map((property) => (
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
        </div>

        {/* Modia Estate Phase 4 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Modia Estate Phase 4, Kurudu By Army Estate Abuja</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {properties
              .filter((property) => property.category === "Modia Estate Phase 4")
              .map((property) => (
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
        </div>

        {/* KOKO Court */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">KOKO Court, Galadimawa Abuja</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {properties
              .filter((property) => property.category === "KOKO Court")
              .map((property) => (
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
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" disabled className="border-neutral-300">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8 bg-[#E32929] text-white border-[#E32929]">
              1
            </Button>
            <Button variant="outline" size="icon" disabled className="border-neutral-300">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

