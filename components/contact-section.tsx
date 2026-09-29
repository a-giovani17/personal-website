"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Mail01Icon,
  Copy01Icon,
  CheckmarkCircle01Icon,
  Location01Icon,
  ArrowRight01Icon,
  Calendar01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { photographerProfile } from "@/lib/portfolio-data"

export function ContactSection() {
  const [copied, setCopied] = React.useState(false)
  const [formSubmitted, setFormSubmitted] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    projectType: "architecture",
    timeline: "",
    message: "",
  })

  const copyEmail = () => {
    navigator.clipboard.writeText(photographerProfile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-border bg-muted/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Inquiries & Commissions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground">
                Start a Conversation
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                Whether you have an upcoming architectural project, an editorial assignment, or wish to acquire a limited print edition, I welcome direct correspondence.
              </p>
            </div>

            {/* Prominent Direct Email Box (Easy to Find requirement) */}
            <div className="border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                <HugeiconsIcon icon={Mail01Icon} className="size-3.5 text-foreground" />
                <span>Direct Studio Email</span>
              </div>

              <div className="space-y-2">
                <a
                  href={`mailto:${photographerProfile.email}`}
                  className="block font-serif text-lg sm:text-xl font-normal text-foreground hover:underline underline-offset-4 break-all"
                  title="Click to compose email"
                >
                  {photographerProfile.email}
                </a>

                <p className="text-[11px] font-mono text-muted-foreground">
                  Typical response window: 24–48 business hours
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyEmail}
                  className="gap-1.5 font-mono text-xs"
                >
                  {copied ? (
                    <>
                      <HugeiconsIcon icon={CheckmarkCircle01Icon} className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Email Copied</span>
                    </>
                  ) : (
                    <>
                      <HugeiconsIcon icon={Copy01Icon} className="size-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </Button>

                <a
                  href={`mailto:${photographerProfile.email}?subject=Commission Inquiry`}
                  className="inline-flex h-7 items-center gap-1.5 bg-foreground text-background px-3 text-xs font-medium transition-opacity hover:opacity-90"
                >
                  <span>Compose Mail</span>
                  <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
                </a>
              </div>
            </div>

            {/* Studio location and logistics */}
            <div className="space-y-4 text-xs font-mono text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <HugeiconsIcon icon={Location01Icon} className="size-4 text-foreground shrink-0 mt-0.5" />
                <div>
                  <strong className="font-normal text-foreground block">Studio Address:</strong>
                  <span>South Jakarta, Indonesia · Passport & travel ready</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <HugeiconsIcon icon={Calendar01Icon} className="size-4 text-foreground shrink-0 mt-0.5" />
                <div>
                  <strong className="font-normal text-foreground block">Current Availability:</strong>
                  <span>Booking Q4 2026 & Q1 2027 commissions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Inquiry Form */}
          <div className="lg:col-span-7 border border-border bg-card p-6 sm:p-10">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex size-12 items-center justify-center rounded-none bg-muted text-foreground">
                  <HugeiconsIcon icon={CheckmarkCircle01Icon} className="size-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-serif text-2xl font-normal text-foreground">
                  Message Prepared
                </h3>
                <p className="max-w-md mx-auto text-xs text-muted-foreground leading-relaxed font-mono">
                  Thank you, {formData.name || "friend"}. Your inquiry regarding{" "}
                  <span className="text-foreground">{formData.projectType}</span> has been logged. You may also send an email directly to{" "}
                  <a href={`mailto:${photographerProfile.email}`} className="underline text-foreground">
                    {photographerProfile.email}
                  </a>.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "architecture",
                        timeline: "",
                        message: "",
                      })
                    }}
                    className="font-mono text-xs"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-foreground">
                    Commission Inquiry
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Please provide essential details regarding the scope, subject, or timing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      Your Name *
                    </label>
                    <Input
                      required
                      placeholder="e.g. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-none bg-background text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      Email Address *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="e.g. maya@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-none bg-background text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      Engagement Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full h-8 px-2.5 rounded-none border border-input bg-background text-xs font-mono text-foreground focus-visible:border-ring outline-none"
                    >
                      <option value="architecture">Architectural Documentation</option>
                      <option value="editorial">Editorial / Feature Assignment</option>
                      <option value="portrait">Portraiture / Artist Profile</option>
                      <option value="print">Fine Art Collector Print</option>
                      <option value="other">General Inquiries / Licensing</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                      Estimated Date / Timeline
                    </label>
                    <Input
                      placeholder="e.g. November 2026 or Flexible"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="rounded-none bg-background text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    Project Overview / Brief *
                  </label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Describe the subject, location, deliverables, and any specific lighting or architectural details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-none bg-background text-xs resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-[11px] font-mono text-muted-foreground">
                    Direct messages reach <span className="text-foreground">{photographerProfile.email}</span>.
                  </p>

                  <Button
                    type="submit"
                    className="h-9 px-6 bg-foreground text-background text-xs font-medium hover:opacity-90 self-start sm:self-auto"
                  >
                    <span>Submit Inquiry</span>
                    <HugeiconsIcon icon={ArrowRight01Icon} className="size-3.5 ml-1" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
