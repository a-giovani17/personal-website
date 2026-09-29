import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, Camera01Icon, Location01Icon } from "@hugeicons/core-free-icons"
import { heroPhoto, photographerProfile } from "@/lib/portfolio-data"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro Typographic Statement */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-end pb-12 sm:pb-16 border-b border-border">
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-foreground/40" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Visual Documentation · Jakarta & Worldwide
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] tracking-tight text-foreground">
              Light, geometry, and the quiet rhythm of spaces.
            </h1>

            <p className="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              {photographerProfile.shortBio}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between gap-6 lg:items-end">
            <div className="space-y-2 text-xs text-muted-foreground lg:text-right font-mono">
              <div className="flex items-center gap-1.5 lg:justify-end text-foreground/80">
                <HugeiconsIcon icon={Location01Icon} className="size-3.5" />
                <span>Jakarta · Kyoto · Bandung · Yogyakarta</span>
              </div>
              <p>Specializing in Architecture, Portraits & Documentaries</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex h-9 items-center gap-2 bg-foreground px-4 text-xs font-medium text-background transition-opacity hover:opacity-90"
              >
                <span>Selected Works</span>
                <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5" />
              </a>

              <a
                href="#pricing"
                className="inline-flex h-9 items-center gap-2 border border-border bg-background px-4 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              >
                <span>Commissions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Featured Cover Photograph */}
        <div className="mt-10 sm:mt-14 space-y-3">
          <div className="group relative aspect-16/9 w-full overflow-hidden bg-muted border border-border">
            <Image
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 sm:opacity-60" />

            {/* In-image Meta Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-white/70">
                  Featured Plate · {heroPhoto.categoryLabel}
                </p>
                <h3 className="font-serif text-lg sm:text-2xl font-normal text-white tracking-tight">
                  {heroPhoto.title}
                </h3>
                <p className="text-xs text-white/80 font-mono mt-0.5">
                  {heroPhoto.location} · {heroPhoto.year}
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px] text-white/75 bg-black/40 backdrop-blur-xs px-3 py-1.5 border border-white/10 self-start sm:self-auto">
                <HugeiconsIcon icon={Camera01Icon} className="size-3.5" />
                <span>{heroPhoto.camera} · {heroPhoto.settings}</span>
              </div>
            </div>
          </div>

          {/* Understated caption & placeholder note */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1 text-xs text-muted-foreground font-mono">
            <p className="line-clamp-1 italic">{heroPhoto.caption}</p>
            <span className="shrink-0 text-[11px] text-muted-foreground/80">
              Placeholder ID: {heroPhoto.id} (Replace in lib/portfolio-data.ts)
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
