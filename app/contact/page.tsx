"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // Format the message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*New Inquiry from Website*\n\n` +
        `*Name:* ${firstName} ${lastName}\n` +
        `*Email:* ${email}\n` +
        `*Phone:* ${phone}\n\n` +
        `*Message:*\n${message}`,
    )

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/2348083351686?text=${whatsappMessage}`, "_blank")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-neutral-50 py-16">
        <div className="container">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Us</h1>
          <div className="mt-4 h-1 w-20 bg-[#E32929]"></div>
          <p className="mt-6 max-w-3xl text-neutral-600">
            Get in touch with our team of real estate experts to find your dream property
          </p>
        </div>
      </div>

      <div className="container flex-1 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Get in Touch</h2>
              <p className="text-neutral-600">
                Our team of experienced real estate professionals is here to help you find your dream property. Fill out
                the form below and we'll get back to you as soon as possible via WhatsApp.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none">
                      First Name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      className="border-neutral-300"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none">
                      Last Name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      className="border-neutral-300"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border-neutral-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium leading-none">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="border-neutral-300"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your property needs"
                    className="min-h-[120px] border-neutral-300"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-[#E32929] hover:bg-[#c71f1f] text-white">
                  Send Message via WhatsApp
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative h-[300px] overflow-hidden rounded-lg sm:h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
                alt="Modia Properties office"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Visit Our Office</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-5 w-5 text-[#E32929]" />
                    <div>
                      <p>11, Suit A06, Al-maliha Commercial Complex,</p>
                      <p>No2 Michila Street, Off Ahmadu Bello Way,</p>
                      <p>Garki, Abuja</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="mt-2 border-neutral-300" asChild>
                      <Link href="https://maps.google.com" target="_blank">
                        Get Directions
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-[#E32929]" />
                    <p>+234 803 974 3274</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#E32929]" />
                    <p>info@modiaproperties.org</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between border-b border-neutral-100 py-2">
                    <span className="font-medium">Monday - Thursday</span>
                    <span className="text-neutral-600">9:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

