import Link from "next/link"
import { Home } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-[#E32929]">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 max-w-md text-neutral-600">The page you are looking for doesn't exist or has been moved.</p>
      <Button className="mt-8 bg-[#E32929] hover:bg-[#c71f1f] text-white" asChild>
        <Link href="/" className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  )
}

