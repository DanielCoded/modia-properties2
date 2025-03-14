import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Mail, MapPin, Phone } from "lucide-react"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import "./globals.css"

// Update the Link components to use the base path
import { getPath } from "@/lib/navigation"

export const metadata = {
  title: "Modia Properties | Luxury Real Estate",
  description: "Find your dream property with Modia Properties, specialists in luxury real estate.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-20 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="lg:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="font-montserrat">
                      <Link href={getPath("/")} className="flex items-center mb-8">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/116428749_150444476706619_5091404093001730072_n-removebg-preview-t6IUSXmY741S87xFOUPVd3lKGIicvg.png"
                          alt="Modia Properties Logo"
                          width={240}
                          height={80}
                          className="h-auto w-auto"
                        />
                      </Link>
                      <nav className="flex flex-col gap-6">
                        <Link
                          href={getPath("/")}
                          className="text-lg font-medium tracking-wide hover:text-[#E32929] transition-colors"
                        >
                          Home
                        </Link>
                        <Link
                          href={getPath("/properties")}
                          className="text-lg font-medium tracking-wide hover:text-[#E32929] transition-colors"
                        >
                          Properties
                        </Link>
                        <Link
                          href={getPath("/about")}
                          className="text-lg font-medium tracking-wide hover:text-[#E32929] transition-colors"
                        >
                          About
                        </Link>
                        <Link
                          href={getPath("/contact")}
                          className="text-lg font-medium tracking-wide hover:text-[#E32929] transition-colors"
                        >
                          Contact
                        </Link>
                      </nav>
                    </SheetContent>
                  </Sheet>
                  <Link href={getPath("/")} className="flex items-center">
                    <div className="relative h-16 w-[240px]">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/116428749_150444476706619_5091404093001730072_n-removebg-preview-t6IUSXmY741S87xFOUPVd3lKGIicvg.png"
                        alt="Modia Properties Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </div>
                <nav className="hidden gap-8 lg:flex">
                  <Link
                    href={getPath("/")}
                    className="text-sm font-medium tracking-wide uppercase hover:text-[#E32929] transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href={getPath("/properties")}
                    className="text-sm font-medium tracking-wide uppercase hover:text-[#E32929] transition-colors"
                  >
                    Properties
                  </Link>
                  <Link
                    href={getPath("/about")}
                    className="text-sm font-medium tracking-wide uppercase hover:text-[#E32929] transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href={getPath("/contact")}
                    className="text-sm font-medium tracking-wide uppercase hover:text-[#E32929] transition-colors"
                  >
                    Contact
                  </Link>
                </nav>
                <div className="flex items-center gap-2">
                  <Button className="bg-[#E32929] hover:bg-[#c71f1f] text-white font-medium tracking-wide" asChild>
                    <Link href={getPath("/contact")}>Contact Us</Link>
                  </Button>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t bg-neutral-50">
              <div className="container py-12">
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                  <div>
                    <Link href={getPath("/")} className="flex items-center">
                      <div className="relative h-16 w-[240px]">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/116428749_150444476706619_5091404093001730072_n-removebg-preview-t6IUSXmY741S87xFOUPVd3lKGIicvg.png"
                          alt="Modia Properties Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </Link>
                    <p className="mt-6 text-sm text-neutral-600">
                      Luxury real estate specialists connecting discerning clients with exceptional properties.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link
                          href={getPath("/properties")}
                          className="text-neutral-600 hover:text-[#E32929] transition-colors"
                        >
                          Properties
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={getPath("/about")}
                          className="text-neutral-600 hover:text-[#E32929] transition-colors"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={getPath("/contact")}
                          className="text-neutral-600 hover:text-[#E32929] transition-colors"
                        >
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link href={getPath("#")} className="text-neutral-600 hover:text-[#E32929] transition-colors">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Property Types</h3>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link href={getPath("#")} className="text-neutral-600 hover:text-[#E32929] transition-colors">
                          Luxury Homes
                        </Link>
                      </li>
                      <li>
                        <Link href={getPath("#")} className="text-neutral-600 hover:text-[#E32929] transition-colors">
                          Detached Duplexes
                        </Link>
                      </li>
                      <li>
                        <Link href={getPath("#")} className="text-neutral-600 hover:text-[#E32929] transition-colors">
                          Bungalows
                        </Link>
                      </li>
                      <li>
                        <Link href={getPath("#")} className="text-neutral-600 hover:text-[#E32929] transition-colors">
                          Land Plots
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
                    <ul className="space-y-4 text-sm">
                      <li className="flex items-start gap-2">
                        <MapPin className="mt-0.5 h-4 w-4 text-[#E32929]" />
                        <span className="text-neutral-600">
                          11, Suit A06, Al-maliha Commercial Complex,
                          <br />
                          No2 Michila Street, Off Ahmadu Bello Way,
                          <br />
                          Garki, Abuja
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-[#E32929]" />
                        <Link
                          href="tel:+2348039743274"
                          className="text-neutral-600 hover:text-[#E32929] transition-colors"
                        >
                          +234 803 974 3274
                        </Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-[#E32929]" />
                        <Link
                          href="mailto:info@modiaproperties.org"
                          className="text-neutral-600 hover:text-[#E32929] transition-colors"
                        >
                          info@modiaproperties.org
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-t py-6 bg-neutral-100">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                  <p className="text-center text-sm text-neutral-600 md:text-left">
                    &copy; {new Date().getFullYear()} Modia Properties. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'