"use client"

import * as React from "react"
import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Cancel01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Camera01Icon,
  Location01Icon,
  Calendar01Icon,
  Mail01Icon,
  InformationCircleIcon,
} from "@hugeicons/core-free-icons"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PhotoItem, photographerProfile } from "@/lib/portfolio-data"

interface PhotoLightboxProps {
  photo: PhotoItem | null
  photos: PhotoItem[]
  open: boolean
  onClose: () => void
  onSelectPhoto: (photo: PhotoItem) => void
}

export function PhotoLightbox({
  photo,
  photos,
  open,
  onClose,
  onSelectPhoto,
}: PhotoLightboxProps) {
  const currentIndex = photo ? photos.findIndex((p) => p.id === photo.id) : -1

  const handlePrev = React.useCallback(() => {
    if (currentIndex > 0) {
      onSelectPhoto(photos[currentIndex - 1])
    } else if (photos.length > 0) {
      onSelectPhoto(photos[photos.length - 1])
    }
  }, [currentIndex, onSelectPhoto, photos])

  const handleNext = React.useCallback(() => {
    if (currentIndex < photos.length - 1) {
      onSelectPhoto(photos[currentIndex + 1])
    } else if (photos.length > 0) {
      onSelectPhoto(photos[0])
    }
  }, [currentIndex, onSelectPhoto, photos])

  React.useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [open, handlePrev, handleNext, onClose])

  if (!photo) return null

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

  const firstName = photographerProfile.name.split(" ")[0]
  const inquireSubject = encodeURIComponent(`Inquiry regarding "${photo.title}"`)
  const inquireBody = encodeURIComponent(
    `Hello ${firstName},\n\nI was viewing your portfolio and would like to inquire about the photograph "${photo.title}" (${photo.id}, ${photo.location}) or a related assignment.\n\nBest regards,`
  )

  return (
    <Dialog open={open} onOpenChange={(val) => !val && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-w-6xl max-h-[95vh] w-[96vw] overflow-y-auto p-0 bg-background border-border"
      >
        <div className="relative flex flex-col lg:grid lg:grid-cols-12 min-h-[600px]">
          {/* Main Visual Display */}
          <div className="lg:col-span-8 relative bg-black/95 flex items-center justify-center min-h-[360px] sm:min-h-[500px] lg:min-h-[650px] p-4 sm:p-8">
            {/* Top Close Button for Mobile */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 flex size-8 items-center justify-center bg-black/70 text-white/80 hover:text-white border border-white/20 transition-colors lg:hidden"
              aria-label="Close photo view"
            >
              <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center bg-black/60 text-white/70 hover:text-white hover:bg-black/90 border border-white/10 transition-all"
              aria-label="Previous image"
              title="Previous photo (Left arrow)"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} className="size-4" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex size-9 items-center justify-center bg-black/60 text-white/70 hover:text-white hover:bg-black/90 border border-white/10 transition-all"
              aria-label="Next image"
              title="Next photo (Right arrow)"
            >
              <HugeiconsIcon icon={ArrowRight01Icon} className="size-4" />
            </button>

            {/* Photo Container */}
            <div className={`relative w-full max-h-[78vh] ${getAspectClass(photo.aspectRatio)} max-w-[850px]`}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-contain"
              />
            </div>

            {/* Plate counter */}
            <div className="absolute bottom-3 left-4 font-mono text-[11px] text-white/60 tracking-wider">
              PLATE {currentIndex + 1} / {photos.length}
            </div>
          </div>

          {/* Metadata & Narrative Column */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border bg-card">
            <div className="space-y-6">
              {/* Header with Close */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge variant="outline" className="font-mono text-[10px] tracking-wide mb-2 py-0">
                    {photo.categoryLabel}
                  </Badge>
                  <DialogTitle className="font-serif text-2xl font-normal tracking-tight text-foreground">
                    {photo.title}
                  </DialogTitle>
                </div>

                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={onClose}
                  className="hidden lg:flex text-muted-foreground hover:text-foreground shrink-0"
                  aria-label="Close modal"
                >
                  <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
                </Button>
              </div>

              {/* Geographic and temporal metadata */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-border text-xs font-mono text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <HugeiconsIcon icon={Location01Icon} className="size-3.5 text-foreground/70 shrink-0" />
                  <span className="truncate">{photo.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HugeiconsIcon icon={Calendar01Icon} className="size-3.5 text-foreground/70 shrink-0" />
                  <span>{photo.year}</span>
                </div>
              </div>

              {/* Curatorial narrative */}
              <div className="space-y-2">
                <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  Observations
                </h4>
                <p className="text-xs text-foreground/90 leading-relaxed font-sans">
                  {photo.caption}
                </p>
              </div>

              {/* Capture specifications */}
              <div className="space-y-2 bg-muted/40 p-3 border border-border">
                <h4 className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  <HugeiconsIcon icon={Camera01Icon} className="size-3" />
                  <span>Technical Specifications</span>
                </h4>
                <div className="space-y-1 font-mono text-[11px] text-muted-foreground">
                  <p><strong className="font-normal text-foreground/80">Camera:</strong> {photo.camera}</p>
                  <p><strong className="font-normal text-foreground/80">Lens:</strong> {photo.lens}</p>
                  <p><strong className="font-normal text-foreground/80">Exposure:</strong> {photo.settings}</p>
                  {photo.filmStock && (
                    <p><strong className="font-normal text-foreground/80">Medium:</strong> {photo.filmStock}</p>
                  )}
                </div>
              </div>

              {/* Placeholder replacement notice */}
              <div className="flex items-start gap-2 bg-background p-2.5 border border-border text-[11px] font-mono text-muted-foreground">
                <HugeiconsIcon
                  icon={InformationCircleIcon}
                  className="size-3.5 text-foreground shrink-0 mt-0.5"
                />
                <div className="space-y-0.5">
                  <p className="text-foreground/80 font-medium">Placeholder Item: {photo.id}</p>
                  <p className="text-[10px] leading-tight text-muted-foreground">
                    {photo.replacementNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Inquire Action */}
            <div className="pt-6 mt-6 border-t border-border flex items-center justify-between gap-3">
              <a
                href={`mailto:${photographerProfile.email}?subject=${inquireSubject}&body=${inquireBody}`}
                className="inline-flex h-9 w-full items-center justify-center gap-2 bg-foreground text-background text-xs font-medium transition-opacity hover:opacity-90"
              >
                <HugeiconsIcon icon={Mail01Icon} className="size-3.5" />
                <span>Inquire About This Work</span>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
