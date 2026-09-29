import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Camera01Icon,
  CheckmarkCircle01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"
import { artistPortraitPhoto, photographerProfile } from "@/lib/portfolio-data"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-border bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-border">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Practice & Perspective
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-foreground mt-1">
            About the Practice
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Artist Portrait Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-4/5 w-full overflow-hidden border border-border bg-muted">
              <Image
                src={artistPortraitPhoto.src}
                alt={artistPortraitPhoto.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white font-mono text-[11px] bg-black/50 backdrop-blur-xs px-2.5 py-1 border border-white/10">
                {photographerProfile.name} · Studio Portrait
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground px-1">
              <span>Placeholder ID: {artistPortraitPhoto.id}</span>
              <span className="italic">4:5 vertical orientation</span>
            </div>

            {/* Equipment & Tools box */}
            <div className="mt-6 border border-border bg-card p-5 space-y-3">
              <div className="flex items-center gap-2 border-b border-border pb-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <HugeiconsIcon icon={Camera01Icon} className="size-3.5 text-foreground" />
                <span>Working Equipment & Mediums</span>
              </div>
              <div className="space-y-2 text-xs font-mono text-muted-foreground">
                <div>
                  <span className="text-foreground/90 font-medium">Bodies: </span>
                  {photographerProfile.equipment.cameras.join(" · ")}
                </div>
                <div>
                  <span className="text-foreground/90 font-medium">Optics: </span>
                  {photographerProfile.equipment.lenses.join(" · ")}
                </div>
                <div>
                  <span className="text-foreground/90 font-medium">Film & Output: </span>
                  {photographerProfile.equipment.mediums.join(" · ")}
                </div>
              </div>
            </div>
          </div>

          {/* Text & Philosophy Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-foreground/90 font-sans">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug text-foreground">
                Observing the stillness within constructed spaces and fleeting daylight.
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                {photographerProfile.statement}
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                Over the past decade, my work has focused on architectural commissions, editorial sittings, and long-term documentary essays throughout Southeast Asia and Japan. I work deliberately—often waiting hours for a single line of raking light across a concrete parapet or a quiet gesture during an artist studio sitting.
              </p>
            </div>

            {/* Guiding Principles */}
            <div className="space-y-3 border-t border-border pt-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Methodological Principles
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {photographerProfile.philosophy.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-foreground/80 leading-relaxed font-mono"
                  >
                    <HugeiconsIcon
                      icon={CheckmarkCircle01Icon}
                      className="size-3.5 text-foreground shrink-0 mt-0.5"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Selected Clients & Publications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-border pt-6">
              <div className="space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Selected Collaborations
                </h4>
                <ul className="space-y-1 text-xs font-mono text-muted-foreground">
                  {photographerProfile.clients.map((client, i) => (
                    <li key={i} className="hover:text-foreground transition-colors">
                      — {client}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Selected Publications
                </h4>
                <ul className="space-y-1 text-xs font-mono text-muted-foreground">
                  {photographerProfile.publications.map((pub, i) => (
                    <li key={i} className="hover:text-foreground transition-colors">
                      — {pub}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct inquiry CTA */}
            <div className="border-t border-border pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground font-mono">
                Available for selected commissions, architectural surveys, and cultural assignments.
              </p>
              <a
                href="#contact"
                className="inline-flex h-9 shrink-0 items-center justify-center gap-2 bg-foreground px-4 text-xs font-medium text-background transition-opacity hover:opacity-90"
              >
                <HugeiconsIcon icon={Mail01Icon} className="size-3.5" />
                <span>Discuss an Assignment</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
