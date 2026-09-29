"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
  Calendar01Icon,
  InformationCircleIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons"
import { pricingTiers, printOptions, commissionInclusions } from "@/lib/portfolio-data"
import { Badge } from "@/components/ui/badge"

export function PricingSection() {
  const [activeTab, setActiveTab] = React.useState<"commissions" | "prints">("commissions")

  return (
    <section id="pricing" className="py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Engagement & Valuation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-foreground">
              Commissions & Investment
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
              Transparent, structured parameters for visual assignments, spatial documentation, and limited print editions. Custom scopes are scoped individually upon request.
            </p>
          </div>

          {/* View switcher */}
          <div className="flex items-center gap-1 border border-border p-1 bg-muted/40">
            <button
              onClick={() => setActiveTab("commissions")}
              className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                activeTab === "commissions"
                  ? "bg-background text-foreground shadow-xs font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Commissions ({pricingTiers.length})
            </button>
            <button
              onClick={() => setActiveTab("prints")}
              className={`px-3 py-1.5 text-xs font-mono transition-colors ${
                activeTab === "prints"
                  ? "bg-background text-foreground shadow-xs font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Archival Prints ({printOptions.length})
            </button>
          </div>
        </div>

        {/* Tab 1: Commission Engagements */}
        {activeTab === "commissions" && (
          <div className="mt-12 space-y-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between border border-border bg-card p-6 sm:p-8 transition-all hover:border-foreground/30 hover:shadow-xs"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-2 border-b border-border pb-4">
                      <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-wider py-0">
                        {tier.rateDetail}
                      </Badge>
                      <h3 className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-foreground pt-1">
                        {tier.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {tier.subtitle}
                      </p>
                    </div>

                    {/* Investment figure */}
                    <div className="space-y-1">
                      <div className="font-serif text-3xl font-normal text-foreground">
                        {tier.investment}
                      </div>
                      <p className="font-mono text-[11px] text-muted-foreground">
                        Baseline valuation · Expenses billed at cost
                      </p>
                    </div>

                    {/* Deliverables checklist */}
                    <div className="space-y-2.5 pt-2">
                      <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        Included Deliverables
                      </h4>
                      <ul className="space-y-2">
                        {tier.deliverables.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-foreground/85 leading-normal"
                          >
                            <HugeiconsIcon
                              icon={CheckmarkCircle01Icon}
                              className="size-3.5 text-foreground/70 shrink-0 mt-0.5"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline & Licensing note */}
                    <div className="space-y-2 border-t border-border pt-4 text-[11px] font-mono text-muted-foreground">
                      <div className="flex items-start gap-1.5">
                        <HugeiconsIcon icon={Calendar01Icon} className="size-3 text-foreground/70 shrink-0 mt-0.5" />
                        <span>{tier.timeline}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <HugeiconsIcon icon={InformationCircleIcon} className="size-3 text-foreground/70 shrink-0 mt-0.5" />
                        <span>{tier.licensing}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA button */}
                  <div className="pt-6 mt-6 border-t border-border">
                    <a
                      href={`#contact?scope=${tier.id}`}
                      className="inline-flex h-9 w-full items-center justify-center gap-2 border border-border bg-background px-4 text-xs font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                    >
                      <span>Inquire About This Scope</span>
                      <HugeiconsIcon icon={ArrowRight01Icon} className="size-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Standard Inclusions Checklist */}
            <div className="border border-border bg-muted/20 p-6 sm:p-8">
              <div className="max-w-2xl mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Commitment to Quality
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-normal text-foreground mt-1">
                  Standard Inclusions Across All Commissions
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
                {commissionInclusions.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <h5 className="font-serif text-sm font-medium text-foreground">
                      {item.title}
                    </h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Limited Print Editions */}
        {activeTab === "prints" && (
          <div className="mt-12 space-y-12">
            <div className="border border-border bg-card p-6 sm:p-8">
              <div className="max-w-3xl space-y-2 mb-8 border-b border-border pb-6">
                <Badge variant="outline" className="font-mono text-[10px] uppercase tracking-wider py-0">
                  Museum Archival Specifications
                </Badge>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-foreground">
                  Archival Pigment Prints
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Every photograph in the index is available as an individual collector print. Crafted on 100% cotton rag archival papers using eleven-color pigment inks, ensuring lightfast stability in excess of 100 years. Each print is inspected, numbered, and pencil-signed verso with an accompanied Certificate of Authenticity.
                </p>
              </div>

              {/* Print pricing table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground uppercase text-[11px] tracking-wider">
                      <th className="py-3 pr-4 font-normal">Format / Edition</th>
                      <th className="py-3 px-4 font-normal">Dimensions</th>
                      <th className="py-3 px-4 font-normal">Edition Run</th>
                      <th className="py-3 px-4 font-normal">Archival Substrate</th>
                      <th className="py-3 pl-4 text-right font-normal">Valuation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {printOptions.map((opt, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="py-4 pr-4 font-serif text-sm font-medium text-foreground">
                          {opt.size}
                        </td>
                        <td className="py-4 px-4 text-muted-foreground">{opt.dimensions}</td>
                        <td className="py-4 px-4">
                          <span className="bg-muted px-2 py-0.5 text-foreground text-[11px]">
                            {opt.edition}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-muted-foreground">{opt.paper}</td>
                        <td className="py-4 pl-4 text-right font-serif text-base text-foreground font-normal">
                          {opt.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
                <p>
                  Prints ship flat in acid-free archival sleeves. Worldwide insured international courier delivery available.
                </p>
                <a
                  href="#contact"
                  className="inline-flex h-8 items-center gap-1.5 bg-foreground text-background px-3 text-xs font-sans font-medium shrink-0 hover:opacity-90"
                >
                  <HugeiconsIcon icon={Mail01Icon} className="size-3.5" />
                  <span>Order Print Edition</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
