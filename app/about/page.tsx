import Image from "next/image"
import Link from "next/link"
import { Award, Building, Clock, Users, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1600&auto=format&fit=crop"
          alt="Modia Properties"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              About Modia Properties
            </h1>
            <div className="mx-auto h-1 w-20 bg-[#E32929]"></div>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Redefining real estate excellence in Abuja since our inception
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="container py-24">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg md:aspect-auto md:h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop"
              alt="Modia Properties office"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Our Story</h2>
              <div className="mt-4 h-1 w-20 bg-[#E32929]"></div>
            </div>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Founded with a vision to redefine the real estate experience, Modia Properties has established itself as a
              premier real estate agency specializing in luxury properties. Our journey began with a simple mission: to
              provide exceptional service and expertise to discerning clients seeking extraordinary homes.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Over the years, we've built a reputation for integrity, professionalism, and an unwavering commitment to
              client satisfaction. Our team of experienced agents combines deep market knowledge with personalized
              service to ensure that every client finds their perfect property.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Today, Modia Properties is recognized as a leader in the luxury real estate market, with a portfolio of
              exceptional properties and a network of satisfied clients who trust us with their most important
              investments.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full bg-neutral-50 py-24">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight">Our Core Values</h2>
            <div className="mt-4 h-1 w-20 bg-[#E32929]"></div>
            <p className="mt-6 max-w-2xl text-lg text-neutral-600">
              At Modia Properties, we're guided by a set of core values that define our approach to real estate and
              client service
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-none shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#E32929]/10">
                  <Award className="h-8 w-8 text-[#E32929]" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold">Excellence</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We strive for excellence in every aspect of our business, from property selection to client
                  communication.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#E32929]/10">
                  <Users className="h-8 w-8 text-[#E32929]" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold">Integrity</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We operate with complete transparency and honesty, building trust with our clients through every
                  interaction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#E32929]/10">
                  <Building className="h-8 w-8 text-[#E32929]" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold">Expertise</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our team brings deep market knowledge and professional expertise to help clients make informed
                  decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#E32929]/10">
                  <Clock className="h-8 w-8 text-[#E32929]" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold">Dedication</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We're committed to going above and beyond to ensure our clients find their perfect property.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container py-24">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="bg-white p-12 rounded-2xl shadow-lg border border-neutral-100">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#E32929]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E32929"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              To be the most trusted and respected real estate company in Abuja, known for our exceptional properties,
              personalized service, and unwavering commitment to client satisfaction.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We envision a future where every client finds not just a property, but a place they can truly call home.
            </p>
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-lg border border-neutral-100">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#E32929]/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E32929"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              To provide exceptional real estate services that exceed client expectations through integrity, expertise,
              and dedication to excellence.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We are committed to helping our clients make informed decisions about their real estate investments,
              ensuring they achieve their property goals with confidence and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="w-full bg-neutral-900 text-white py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white">Our Achievements</h2>
            <div className="mt-4 mx-auto h-1 w-20 bg-[#E32929]"></div>
          </div>
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div className="bg-neutral-800/50 p-10 rounded-xl transform transition-transform duration-300 hover:scale-105">
              <p className="text-5xl font-bold text-[#E32929] mb-4">15+</p>
              <p className="text-xl">Years of Experience</p>
            </div>
            <div className="bg-neutral-800/50 p-10 rounded-xl transform transition-transform duration-300 hover:scale-105">
              <p className="text-5xl font-bold text-[#E32929] mb-4">500+</p>
              <p className="text-xl">Properties Sold</p>
            </div>
            <div className="bg-neutral-800/50 p-10 rounded-xl transform transition-transform duration-300 hover:scale-105">
              <p className="text-5xl font-bold text-[#E32929] mb-4">98%</p>
              <p className="text-xl">Client Satisfaction</p>
            </div>
            <div className="bg-neutral-800/50 p-10 rounded-xl transform transition-transform duration-300 hover:scale-105">
              <p className="text-5xl font-bold text-[#E32929] mb-4">24</p>
              <p className="text-xl">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <div className="rounded-2xl bg-gradient-to-r from-neutral-50 to-neutral-100 p-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-6">Ready to Work With Us?</h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 mb-10">
            Contact our team at +234 803 974 3274 or visit our office in Garki, Abuja
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="bg-[#E32929] hover:bg-[#c71f1f] text-white text-lg px-8 py-6 h-auto" size="lg" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-neutral-300 text-lg px-8 py-6 h-auto" asChild>
              <Link href="/properties">View Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

