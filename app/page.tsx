import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Maximize2, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FeaturedProperties from "@/components/featured-properties"
import PropertySearch from "@/components/property-search"
import PropertyVideos from "@/components/property-videos"

// Import the getPath function
import { getPath } from "@/lib/navigation"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
          alt="Luxury real estate"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Find Your Dream Property
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Discover exclusive properties in prime locations with our premium real estate services
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-[#E32929] hover:bg-[#c71f1f] text-white" asChild>
                <Link href={getPath("/properties")}>View Properties</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 text-white backdrop-blur-sm border-white/30 hover:bg-white/20"
                asChild
              >
                <Link href={getPath("/contact")}>Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Search */}
      <section className="relative -mt-24 z-10 px-4 mb-12">
        <PropertySearch />
      </section>

      {/* Featured Properties */}
      <section className="w-full py-20">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Properties</h2>
            <div className="mt-4 h-1 w-20 bg-[#E32929]"></div>
            <p className="mt-6 text-neutral-600 max-w-2xl">
              Explore our handpicked selection of premium properties in the most desirable locations
            </p>
          </div>
          <FeaturedProperties />
          <div className="mt-12 flex justify-center">
            <Button variant="outline" className="group" asChild>
              <Link href={getPath("/properties")} className="flex items-center gap-2">
                View All Properties
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Property Videos Section */}
      <section className="w-full bg-neutral-50 py-20">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Property Videos</h2>
            <div className="mt-4 h-1 w-20 bg-[#E32929]"></div>
            <p className="mt-6 text-neutral-600 max-w-2xl">
              Take a virtual tour of our exceptional properties and developments
            </p>
          </div>
          <PropertyVideos />
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-auto md:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
                alt="Modia Properties team"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Modia Properties</h2>
              <div className="h-1 w-20 bg-[#E32929]"></div>
              <p className="text-neutral-600">
                At Modia Properties, we specialize in connecting discerning clients with exceptional properties. Our
                team of experienced real estate professionals is dedicated to providing personalized service and expert
                guidance throughout your property journey.
              </p>
              <p className="text-neutral-600">
                With years of experience in the luxury real estate market, we understand that finding the perfect
                property is about more than just location and amenities—it's about finding a place that feels like home.
              </p>
              <div className="pt-4">
                <Button className="bg-[#E32929] hover:bg-[#c71f1f] text-white" asChild>
                  <Link href={getPath("/about")}>Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase */}
      <section className="w-full bg-neutral-50 py-20">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Properties</h2>
            <div className="mt-4 h-1 w-20 bg-[#E32929]"></div>
            <p className="mt-6 text-neutral-600 max-w-2xl">
              Explore our collection of exceptional properties in the most prestigious locations
            </p>
          </div>

          <div className="space-y-12">
            {/* Modia Estate Phase 5 */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Modia Estate Phase 5, Kuje Abuja</h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: 1,
                    title: "5 Bedroom Detached Duplex Plot & BQ",
                    location: "Kuje, Abuja",
                    price: "₦2,000,000",
                    size: "500 Sqm",
                    image:
                      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
                  },
                  {
                    id: 2,
                    title: "4 Bedroom Detached Duplex Plot",
                    location: "Kuje, Abuja",
                    price: "₦1,500,000",
                    size: "400 Sqm",
                    image:
                      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
                  },
                  {
                    id: 3,
                    title: "3 Bedroom Detached Bungalow Plot",
                    location: "Kuje, Abuja",
                    price: "₦1,500,000",
                    size: "400 Sqm",
                    image:
                      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop",
                  },
                ].map((property) => (
                  <Card key={property.id} className="overflow-hidden border-none shadow-lg group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                      <div className="flex items-center text-neutral-600 mb-4">
                        <MapPin className="mr-1 h-4 w-4 text-[#E32929]" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <p className="font-semibold text-xl text-[#E32929] mb-4">{property.price}</p>
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="flex items-center gap-1">
                          <Maximize2 className="h-4 w-4 text-neutral-500" />
                          <span className="text-sm">{property.size}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Modia Estate Phase 4 */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Modia Estate Phase 4, Kurudu By Army Estate Abuja</h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: 4,
                    title: "3 Bedroom Detached Bungalow Plot",
                    location: "Kurudu, Abuja",
                    price: "₦5,000,000",
                    size: "400 Sqm",
                    image:
                      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop",
                  },
                  {
                    id: 5,
                    title: "3 Bedroom Semi Detached Bungalow Plot",
                    location: "Kurudu, Abuja",
                    price: "₦3,000,000",
                    size: "280 Sqm",
                    image:
                      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800&auto=format&fit=crop",
                  },
                ].map((property) => (
                  <Card key={property.id} className="overflow-hidden border-none shadow-lg group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                      <div className="flex items-center text-neutral-600 mb-4">
                        <MapPin className="mr-1 h-4 w-4 text-[#E32929]" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <p className="font-semibold text-xl text-[#E32929] mb-4">{property.price}</p>
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="flex items-center gap-1">
                          <Maximize2 className="h-4 w-4 text-neutral-500" />
                          <span className="text-sm">{property.size}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* KOKO Court */}
            <div>
              <h3 className="text-2xl font-bold mb-6">KOKO Court, Galadimawa Abuja</h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    id: 6,
                    title: "5 Bedroom Detached Duplex Plot",
                    location: "Galadimawa, Abuja",
                    price: "₦60,000,000",
                    size: "450 Sqm",
                    image:
                      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop",
                  },
                  {
                    id: 7,
                    title: "4 Bedroom Semi Detached Duplex Plot",
                    location: "Galadimawa, Abuja",
                    price: "₦45,000,000",
                    size: "370 Sqm",
                    image:
                      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
                  },
                ].map((property) => (
                  <Card key={property.id} className="overflow-hidden border-none shadow-lg group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                      <div className="flex items-center text-neutral-600 mb-4">
                        <MapPin className="mr-1 h-4 w-4 text-[#E32929]" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <p className="font-semibold text-xl text-[#E32929] mb-4">{property.price}</p>
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="flex items-center gap-1">
                          <Maximize2 className="h-4 w-4 text-neutral-500" />
                          <span className="text-sm">{property.size}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Button className="bg-[#E32929] hover:bg-[#c71f1f] text-white" asChild>
              <Link href={getPath("/properties")} className="flex items-center gap-2">
                View All Properties
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-neutral-900 text-white py-20">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Find Your Dream Property?</h2>
            <div className="mt-4 h-1 w-20 bg-[#E32929]"></div>
            <p className="mt-6 max-w-2xl text-neutral-300">
              Contact our team of experts today at +234 803 974 3274 or visit our office in Garki, Abuja
            </p>
            <div className="mt-8">
              <Button className="bg-[#E32929] hover:bg-[#c71f1f] text-white" size="lg" asChild>
                <Link href={getPath("/contact")}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

