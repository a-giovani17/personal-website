"use client"

import * as React from "react"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Mail01Icon,
  Image01Icon,
  Cancel01Icon,
  FilterHorizontalIcon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { PlaceholderGuideModal } from "@/components/placeholder-guide-modal"
import { photographerProfile, placeholderRegistry } from "@/lib/portfolio-data"

export function Navigation() {
  const [guideOpen, setGuideOpen] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Pricing & Commissions", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo / Identity */}
          <Link
            href="/"
            className="group flex flex-col items-start focus-visible:outline-none"
          >
            <span className="font-serif text-lg tracking-tight text-foreground transition-opacity group-hover:opacity-75 sm:text-xl">
              {photographerProfile.name}
            </span>
            <span className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground">
              Photographer · Visual Arts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Placeholder Guide trigger button */}
            <Button
              variant="outline"
              size="xs"
              onClick={() => setGuideOpen(true)}
              className="hidden lg:flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground hover:text-foreground border-border"
              title="View placeholder image replacement list"
            >
              <HugeiconsIcon icon={Image01Icon} className="size-3.5" strokeWidth={1.75} />
              <span>Image Guide</span>
              <span className="ml-0.5 rounded-none bg-muted px-1.5 py-0.2 text-[10px] text-foreground font-mono">
                {placeholderRegistry.length}
              </span>
            </Button>

            <ThemeToggle />

            {/* Direct Email Link Button */}
            <a
              href={`mailto:${photographerProfile.email}`}
              className="inline-flex h-8 items-center gap-1.5 border border-foreground/20 bg-foreground px-3 text-xs font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-none"
              title={`Direct email to ${photographerProfile.email}`}
            >
              <HugeiconsIcon icon={Mail01Icon} className="size-3.5" strokeWidth={1.75} />
              <span className="hidden sm:inline">Inquire</span>
            </a>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon-sm"
              className="md:hidden text-muted-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <HugeiconsIcon
                icon={mobileMenuOpen ? Cancel01Icon : FilterHorizontalIcon}
                className="size-4"
                strokeWidth={1.75}
              />
            </Button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-border bg-background px-4 py-6 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-lg text-foreground hover:text-muted-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setGuideOpen(true)
                  }}
                  className="w-full justify-start gap-2 font-mono text-xs"
                >
                  <HugeiconsIcon icon={Image01Icon} className="size-4" />
                  <span>Image Replacement Guide ({placeholderRegistry.length} slots)</span>
                </Button>

                <a
                  href={`mailto:${photographerProfile.email}`}
                  className="inline-flex h-9 w-full items-center justify-center gap-2 bg-foreground text-background font-mono text-xs"
                >
                  <HugeiconsIcon icon={Mail01Icon} className="size-4" />
                  <span>{photographerProfile.email}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Placeholder Image Guide Dialog */}
      <PlaceholderGuideModal open={guideOpen} onOpenChange={setGuideOpen} />
    </>
  )
}
