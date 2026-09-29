"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import { Sun01Icon, Moon01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"

const emptySubscribe = () => () => {}

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const mounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon-sm" className="opacity-0" aria-label="Toggle theme">
        <span className="size-4" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Switch to light gallery mode" : "Switch to darkroom mode"}
      aria-label="Toggle visual theme"
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      {isDark ? (
        <HugeiconsIcon icon={Sun01Icon} className="size-4" strokeWidth={1.75} />
      ) : (
        <HugeiconsIcon icon={Moon01Icon} className="size-4" strokeWidth={1.75} />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
