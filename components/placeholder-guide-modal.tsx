"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Image01Icon,
  InformationCircleIcon,
  Copy01Icon,
  CheckmarkCircle01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { placeholderRegistry } from "@/lib/portfolio-data"

interface PlaceholderGuideModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PlaceholderGuideModal({ open, onOpenChange }: PlaceholderGuideModalProps) {
  const [copiedId, setCopiedId] = React.useState<string | null>(null)

  const copyPath = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 bg-card border-border">
        <DialogHeader className="space-y-2 border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-none bg-muted text-foreground">
              <HugeiconsIcon icon={Image01Icon} className="size-4" strokeWidth={1.75} />
            </span>
            <DialogTitle className="font-serif text-2xl font-normal tracking-tight">
              Image Replacement Registry
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs text-muted-foreground leading-relaxed">
            All photography across this portfolio currently uses curated Unsplash placeholders.
            Below is the complete inventory of all {placeholderRegistry.length} image slots, their
            target dimensions, aspect ratios, and the exact lines in{" "}
            <code className="bg-muted px-1.5 py-0.5 font-mono text-[11px] text-foreground">
              lib/portfolio-data.ts
            </code>{" "}
            where you can replace them with your own photographic works.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <div className="flex items-start gap-3 rounded-none bg-muted/50 p-3 text-xs text-muted-foreground border border-border">
            <HugeiconsIcon
              icon={InformationCircleIcon}
              className="size-4 text-foreground shrink-0 mt-0.5"
              strokeWidth={1.75}
            />
            <p className="leading-relaxed">
              <strong className="text-foreground font-medium">Quick Replacement Tip:</strong> You
              can drop your final exported JPEG/WebP images into the{" "}
              <code className="font-mono text-foreground">public/photos/</code> directory, then
              update the <code className="font-mono text-foreground">src</code> property in{" "}
              <code className="font-mono text-foreground">lib/portfolio-data.ts</code> to point to{" "}
              <code className="font-mono text-foreground">/photos/your-image.jpg</code>.
            </p>
          </div>

          <div className="divide-y divide-border border border-border">
            {placeholderRegistry.map((item, index) => (
              <div
                key={item.id}
                className="p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <div className="space-y-1.5 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] text-muted-foreground">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-serif text-base font-medium text-foreground tracking-tight">
                      {item.title}
                    </h4>
                    <Badge variant="outline" className="text-[10px] font-mono tracking-normal py-0">
                      {item.aspectRatio}
                    </Badge>
                  </div>

                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 font-mono text-[11px] text-muted-foreground">
                    <span>
                      <strong className="font-normal text-foreground/75">Location:</strong>{" "}
                      {item.locationInSite}
                    </span>
                    <span>
                      <strong className="font-normal text-foreground/75">Target:</strong>{" "}
                      {item.recommendedSize}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto pt-2 sm:pt-0">
                  <Button
                    variant="outline"
                    size="xs"
                    onClick={() => copyPath(item.codeLocation, item.id)}
                    className="font-mono text-[10px] gap-1"
                    title="Copy code reference"
                  >
                    {copiedId === item.id ? (
                      <>
                        <HugeiconsIcon icon={CheckmarkCircle01Icon} className="size-3 text-emerald-600 dark:text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <HugeiconsIcon icon={Copy01Icon} className="size-3" strokeWidth={1.5} />
                        <span>Copy Ref</span>
                      </>
                    )}
                  </Button>

                  <a
                    href={item.currentSrc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground hover:text-foreground underline underline-offset-4 px-2 py-1"
                  >
                    <span>View Current</span>
                    <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
