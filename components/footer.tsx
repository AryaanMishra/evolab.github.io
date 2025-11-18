import Link from "next/link"
import { Link2Icon as Lab2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Lab2 className="h-6 w-6" />
          <span className="font-semibold">EvoLab</span>
        </div>
        <nav className="flex gap-4 text-sm">
          <Link href="/privacy" className="hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline underline-offset-4">
            Terms of Service
          </Link>
        </nav>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} EvoLab. All rights reserved.</p>
      </div>
    </footer>
  )
}
