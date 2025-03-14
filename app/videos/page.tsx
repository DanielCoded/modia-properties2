import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import PropertyVideos from "@/components/property-videos"

export default function VideosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-neutral-50 py-16">
        <div className="container">
          <Link
            href="/"
            className="mb-6 flex items-center text-sm font-medium text-neutral-600 hover:text-[#E32929] transition-colors"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Property Videos</h1>
          <div className="mt-4 h-1 w-20 bg-[#E32929]"></div>
          <p className="mt-6 max-w-3xl text-neutral-600">
            Take a virtual tour of our exceptional properties and developments
          </p>
        </div>
      </div>

      <div className="container py-16">
        <PropertyVideos />

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">About Our Video Tours</h2>
          <p className="text-neutral-600 mb-4">
            At Modia Properties, we believe in providing our clients with comprehensive information about our
            properties. Our video tours allow you to experience the ambiance and features of our developments from the
            comfort of your home.
          </p>
          <p className="text-neutral-600 mb-4">
            These videos showcase the quality of construction, the surrounding environment, and the unique features that
            make each of our properties special. Whether you're looking for a plot to build your dream home or
            interested in our development projects, these videos offer valuable insights.
          </p>
          <p className="text-neutral-600">
            For more information about any of the properties featured in our videos, please don't hesitate to
            <Link href="/contact" className="text-[#E32929] hover:underline">
              {" "}
              contact us
            </Link>
            . Our team is ready to answer your questions and help you find the perfect property.
          </p>
        </div>
      </div>
    </div>
  )
}

