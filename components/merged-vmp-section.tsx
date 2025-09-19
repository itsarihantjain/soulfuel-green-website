import { CheckCircle2 } from "lucide-react"

export default function MergedVisionMissionPurpose() {
  return (
    <section aria-labelledby="vmp-title" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 id="vmp-title" className="text-balance text-center text-3xl md:text-4xl font-semibold tracking-tight">
          Our Core Belief System
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Vision */}
          <article
            className="group flex h-full flex-col rounded-2xl border border-emerald-100 bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
            aria-labelledby="vmp-vision"
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 transition-colors group-hover:ring-emerald-300"
              >
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <h3 id="vmp-vision" className="text-lg font-medium">
                  Vision
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To become India&apos;s leading clean energy company, creating a circular economy that turns waste into
                  wealth.
                </p>
              </div>
            </div>
          </article>

          {/* Mission */}
          <article
            className="group flex h-full flex-col rounded-2xl border border-emerald-100 bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
            aria-labelledby="vmp-mission"
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 transition-colors group-hover:ring-emerald-300"
              >
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <h3 id="vmp-mission" className="text-lg font-medium">
                  Mission
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To transform agricultural waste into sustainable energy solutions that benefit farmers, industries,
                  and the environment.
                </p>
              </div>
            </div>
          </article>

          {/* Purpose */}
          <article
            className="group flex h-full flex-col rounded-2xl border border-emerald-100 bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
            aria-labelledby="vmp-purpose"
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 transition-colors group-hover:ring-emerald-300"
              >
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <h3 id="vmp-purpose" className="text-lg font-medium">
                  Purpose
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Founded on the belief that sustainable energy should be accessible, affordable, and beneficial to all.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
