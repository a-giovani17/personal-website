"use client"

import * as React from "react"
import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Camera01Icon,
  Maximize01Icon,
} from "@hugeicons/core-free-icons"
import { portfolioPhotos, PhotoItem } from "@/lib/portfolio-data"
import { PhotoLightbox } from "@/components/photo-lightbox"
import { Badge } from "@/components/ui/badge"

type CategoryFilter = "all" | "architecture" | "editorial" | "documentary" | "landscape"

export function GallerySection() {
  const [activeCategory, setActiveCategory] = React.useState<CategoryFilter>("all")
  const [selectedPhoto, setSelectedPhoto] = React.useState<PhotoItem | null>(null)
  const [lightboxOpen, setLightboxOpen] = React.useState(false)

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: "all", label: "All Works" },
    { key: "architecture", label: "Architecture" },
    { key: "editorial", label: "Editorial & Portrait" },
    { key: "documentary", label: "Documentary" },
    { key: "landscape", label: "Landscape" },
  ]

  const filteredPhotos = React.useMemo(() => {
    if (activeCategory === "all") return portfolioPhotos
    return portfolioPhotos.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const handleOpenPhoto = (photo: PhotoItem) => {
    setSelectedPhoto(photo)
    setLightboxOpen(true)
  }

  const getAspectClass = (ratio: string) => {
    switch (ratio) {
      case "4/5":
        return "aspect-4/5"
      case "1/1":
        return "aspect-square"
      case "16/9":
        return "aspect-16/9"
      case "2/3":
        return "aspect-2/3"
      case "3/2":
      default:
        return "aspect-3/2"
    }
  }

  return (
    <section id="work" className="py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Index of Plates · 2024–2025
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
              Selected Works
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            {categories.map((cat) => {
              const count =
                cat.key === "all"
                  ? portfolioPhotos.length
                  : portfolioPhotos.filter((p) => p.category === cat.key).length

              const isActive = activeCategory === cat.key

              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono transition-all border ${
                    isActive
                      ? "border-foreground bg-foreground text-background font-medium"
                      : "border-border bg-background text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] ${isActive ? "text-background/80" : "text-muted-foreground"}`}>
                    ({count})
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {filteredPhotos.map((photo, index) => {
            const aspectClass = getAspectClass(photo.aspectRatio)

            return (
              <article
                key={photo.id}
                onClick={() => handleOpenPhoto(photo)}
                className="group relative cursor-pointer overflow-hidden border border-border bg-card transition-all duration-300 hover:border-foreground/40 hover:shadow-sm"
              >
                {/* Image Container */}
                <div className={`relative w-full ${aspectClass} overflow-hidden bg-muted`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Hover vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Corner plate tag */}
                  <div className="absolute top-3 left-3 opacity-90">
                    <Badge
                      variant="outline"
                      className="bg-black/40 text-white border-white/20 font-mono text-[10px] tracking-wider uppercase py-0"
                    >
                      {String(index + 1).padStart(2, "0")} · {photo.category}
                    </Badge>
                  </div>

                  {/* Hover Expand Trigger Icon */}
                  <div className="absolute top-3 right-3 flex size-7 items-center justify-center bg-black/50 text-white/90 border border-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <HugeiconsIcon icon={Maximize01Icon} className="size-3.5" />
                  </div>

                  {/* Hover Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="font-serif text-lg font-normal tracking-tight text-white leading-tight">
                      {photo.title}
                    </p>
                    <div className="mt-1 flex items-center justify-between text-[11px] font-mono text-white/80">
                      <span>{photo.location}</span>
                      <span>{photo.year}</span>
                    </div>
                  </div>
                </div>

                {/* Subtitle / Plate caption below image */}
                <div className="p-3.5 flex items-center justify-between gap-2 border-t border-border bg-card text-xs font-mono">
                  <div className="min-w-0">
                    <h3 className="font-serif text-sm font-medium text-foreground truncate group-hover:text-muted-foreground transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-[11px] text-muted-foreground truncate">
                      {photo.location} · {photo.year}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground shrink-0">
                    <HugeiconsIcon icon={Camera01Icon} className="size-3" />
                    <span>{photo.aspectRatio}</span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom gallery note */}
        <div className="mt-12 text-center border-t border-border pt-8">
          <p className="text-xs text-muted-foreground font-mono">
            All images are available as limited archival prints or for editorial publication licensing. Click any frame for technical plate specifications.
          </p>
        </div>
      </div>

      {/* Lightbox dialog */}
      <PhotoLightbox
        photo={selectedPhoto}
        photos={filteredPhotos}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
      />
    </section>
  )
}
