"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PropertySearch() {
  const router = useRouter()
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const [bedrooms, setBedrooms] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Format the message for WhatsApp
    const whatsappMessage = encodeURIComponent(
      `*Property Search Inquiry*\n\n` +
        `*Location:* ${location || "Any"}\n` +
        `*Property Type:* ${propertyType || "Any"}\n` +
        `*Price Range:* ${priceRange || "Any"}\n` +
        `*Bedrooms:* ${bedrooms || "Any"}\n\n` +
        `Please send me information about available properties matching these criteria.`,
    )

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/2348083351686?text=${whatsappMessage}`, "_blank")
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <form
        onSubmit={handleSearch}
        className="grid gap-4 p-6 bg-white rounded-xl shadow-lg sm:grid-cols-2 md:grid-cols-5"
      >
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <Input
              placeholder="Location"
              className="pl-10 border-neutral-300"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="border-neutral-300">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Type</SelectItem>
              <SelectItem value="detached-duplex">Detached Duplex</SelectItem>
              <SelectItem value="semi-detached">Semi Detached</SelectItem>
              <SelectItem value="bungalow">Bungalow</SelectItem>
              <SelectItem value="land">Land Plot</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger className="border-neutral-300">
              <SelectValue placeholder="Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Bedrooms</SelectItem>
              <SelectItem value="3">3 Bedrooms</SelectItem>
              <SelectItem value="4">4 Bedrooms</SelectItem>
              <SelectItem value="5">5 Bedrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Button type="submit" className="w-full bg-[#E32929] hover:bg-[#c71f1f] text-white">
            Search via WhatsApp
          </Button>
        </div>
      </form>
    </div>
  )
}

