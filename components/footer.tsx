"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Mail01Icon,
  ArrowRight01Icon,
  Image01Icon,
} from "@hugeicons/core-free-icons"
import { photographerProfile, placeholderRegistry } from "@/lib/portfolio-data"
import { PlaceholderGuideModal } from "@/components/placeholder-guide-modal"

export function Footer() {
  const [guideOpen, setGuideOpen] = React.useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <footer className="border-t border-border bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-border">
            {/* Identity & Mission */}
            <div className="md:col-span-6 space-y-3">
              <span className="font-serif text-2xl font-normal text-foreground">
                {photographerProfile.name}
              </span>
              <p className="text-xs text-muted-foreground max-w-md leading-relaxed">
                Dedicated to spatial geometry, natural daylight, and understated visual documentation. Based in Jakarta, available for commissions and editorial assignments worldwide.
              </p>
              <div className="pt-2 font-mono text-xs">
                <a
                  href={`mailto:${photographerProfile.email}`}
                  className="inline-flex items-center gap-1.5 text-foreground hover:underline underline-offset-4"
                >
                  <HugeiconsIcon icon={Mail01Icon} className="size-3.5" />
                  <span>{photographerProfile.email}</span>
                </a>
              </div>
            </div>

            {/* Navigation links */}
            <div className="md:col-span-3 space-y-3 font-mono text-xs">
              <h4 className="text-[11px] uppercase tracking-wider text-foreground font-medium">
                Navigation
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#work" className="hover:text-foreground transition-colors">
                    Selected Works
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-foreground transition-colors">
                    About the Practice
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground transition-colors">
                    Commissions & Valuation
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors">
                    Contact & Inquiries
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Actions & Placeholder Catalog */}
            <div className="md:col-span-3 space-y-3 font-mono text-xs">
              <h4 className="text-[11px] uppercase tracking-wider text-foreground font-medium">
                Portfolio Tools
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button
                    onClick={() => setGuideOpen(true)}
                    className="inline-flex items-center gap-1.5 text-foreground/90 hover:text-foreground transition-colors underline underline-offset-4"
                  >
                    <HugeiconsIcon icon={Image01Icon} className="size-3.5" />
                    <span>Image Replacement List ({placeholderRegistry.length})</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={scrollToTop}
                    className="hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    <span>Return to top</span>
                    <HugeiconsIcon icon={ArrowRight01Icon} className="size-3 -rotate-90" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Colophon & Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {photographerProfile.name}. All photographic plates copyright protected.
            </p>

            <p className="text-[10px]">
              Set in Newsreader and Geist · Built on Next.js with shadcn/ui
            </p>
          </div>
        </div>
      </footer>

      {/* Guide dialog */}
      <PlaceholderGuideModal open={guideOpen} onOpenChange={setGuideOpen} />
    </>
  )
}
