import { Input } from "@/components/ui/input";
import {
  ArrowUpRight,
  Building2,
  MapPin,
  Search,
  Phone,
  Clock,
  Stethoscope,
} from "lucide-react";

const PROVIDERS = [
  {
    name: "St. Nicholas Medical Centre",
    location: "Lagos Island, Lagos",
    tags: ["General Hospital", "24/7 Emergency"],
    distance: "2.4 km",
    open: true,
  },
  {
    name: "Zenith Dental Diagnostics",
    location: "Ikeja, Lagos",
    tags: ["Specialist", "Dental"],
    distance: "5.1 km",
    open: true,
  },
  {
    name: "Cedarcrest Hospitals",
    location: "Apo, Abuja",
    tags: ["General Hospital", "Maternity"],
    distance: "11.8 km",
    open: true,
  },
  {
    name: "Reddington Multi-Specialist",
    location: "Victoria Island, Lagos",
    tags: ["Specialist", "Cardiology"],
    distance: "6.0 km",
    open: false,
  },
  {
    name: "Olive Branch Diagnostics",
    location: "Ilorin, Kwara",
    tags: ["Diagnostic Lab"],
    distance: "0.8 km",
    open: true,
  },
];

export default function FindProviderPage() {
  return (
    <div className="flex flex-col">
      {/* Hero / Search */}
      <section className="px-4 md:px-6 lg:px-10 pt-10 md:pt-16 pb-10 border-b border-ink/15 relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[36rem] h-[36rem] halftone opacity-[0.06]" />

        <div className="flex items-center justify-between mb-10 text-[11px] uppercase tracking-[0.22em] font-mono text-ink-soft">
          <span className="stamp">§ Provider Directory</span>
          <span className="hidden md:inline">All 36 states + FCT</span>
        </div>

        <div className="grid grid-cols-12 gap-6 items-end mb-12">
          <h1 className="col-span-12 lg:col-span-8 font-display font-light tracking-[-0.04em] leading-[0.86] text-[12vw] md:text-[10vw] lg:text-[7.5vw]">
            500+ hospitals.
            <br />
            <span className="font-italic-serif text-wine">One</span> standard of
            care.
          </h1>
          <p className="col-span-12 lg:col-span-4 text-ink-soft text-lg leading-relaxed lg:pb-4 text-pretty">
            We don't partner with just any hospital. Our network is strictly vetted
            for clinical excellence, facility standards, and patient satisfaction.
          </p>
        </div>

        {/* Search bar — magazine-form style */}
        <form className="grid grid-cols-12 gap-px bg-ink border-2 border-ink rounded-md overflow-hidden">
          <div className="col-span-12 md:col-span-5 bg-cream relative">
            <label className="absolute top-2 left-12 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
              Where
            </label>
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink" />
            <Input
              placeholder="State, city or zip"
              className="border-0 bg-transparent h-16 pl-12 pt-6 text-base focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-ink-mute/70"
            />
          </div>
          <div className="col-span-12 md:col-span-5 bg-cream relative">
            <label className="absolute top-2 left-12 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
              What
            </label>
            <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink" />
            <Input
              placeholder="Hospital, specialty or service"
              className="border-0 bg-transparent h-16 pl-12 pt-6 text-base focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-ink-mute/70"
            />
          </div>
          <button
            type="submit"
            className="col-span-12 md:col-span-2 bg-ink text-cream hover:bg-wine transition-colors flex items-center justify-center gap-2 h-16 group"
          >
            <Search className="w-5 h-5" />
            <span className="font-mono text-xs uppercase tracking-[0.2em]">
              Search
            </span>
          </button>
        </form>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mr-1 self-center">
            Quick filters →
          </span>
          {[
            "24/7 Emergency",
            "Dental",
            "Maternity",
            "Diagnostic Lab",
            "Eye Clinic",
            "Pediatrics",
          ].map((f) => (
            <button
              key={f}
              className="text-xs px-3 py-1.5 border border-ink/20 rounded-full hover:bg-ink hover:text-cream hover:border-ink transition-colors"
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Results layout */}
      <section className="px-4 md:px-6 lg:px-10 py-12 md:py-16">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar list */}
          <aside className="col-span-12 lg:col-span-5 xl:col-span-4">
            <div className="flex items-baseline justify-between mb-6 pb-4 border-b-2 border-ink">
              <h2 className="font-display text-3xl tracking-tight">
                Featured providers
              </h2>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-mute">
                {PROVIDERS.length} results
              </span>
            </div>

            <ol className="divide-y divide-ink/15 border-b border-ink/15">
              {PROVIDERS.map((p, i) => (
                <li key={p.name}>
                  <button className="group w-full text-left py-5 -mx-2 px-2 hover:bg-cream-deep/40 transition-colors flex flex-col gap-3">
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-ink-mute pt-1">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-display text-2xl tracking-tight leading-tight group-hover:text-wine transition-colors">
                          {p.name}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-5 h-5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-ink-soft pl-9">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {p.location}
                      </span>
                      <span className="text-ink-mute">·</span>
                      <span>{p.distance}</span>
                      <span
                        className={`ml-auto font-mono text-[10px] uppercase tracking-[0.18em] flex items-center gap-1 ${
                          p.open ? "text-moss" : "text-clay"
                        }`}
                      >
                        <Clock className="w-3 h-3" />
                        {p.open ? "Open" : "Closed"}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pl-9">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-[0.15em] font-mono px-2 py-1 border border-ink/20 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </button>
                </li>
              ))}
            </ol>
          </aside>

          {/* Map area */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-8 lg:sticky lg:top-32 lg:self-start lg:h-[calc(100vh-10rem)] min-h-[480px]">
            <div className="relative h-full bg-cream-deep border-2 border-ink rounded-md overflow-hidden">
              {/* faux map */}
              <div className="absolute inset-0 halftone opacity-30" />
              <div className="absolute inset-0 stripes opacity-[0.04]" />

              {/* pins */}
              {[
                { top: "22%", left: "30%", lbl: "ST" },
                { top: "44%", left: "58%", lbl: "ZD" },
                { top: "60%", left: "22%", lbl: "OB" },
                { top: "70%", left: "70%", lbl: "RM" },
                { top: "32%", left: "75%", lbl: "CH" },
              ].map((pin, i) => (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-full"
                  style={{ top: pin.top, left: pin.left }}
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-wine text-cream grid place-items-center font-mono text-[10px] tracking-widest border-2 border-cream shadow-lg">
                      {pin.lbl}
                    </div>
                    <div className="w-0 h-0 mx-auto border-x-[6px] border-x-transparent border-t-[10px] border-t-wine" />
                  </div>
                </div>
              ))}

              {/* compass */}
              <div className="absolute top-5 right-5 w-14 h-14 rounded-full border-2 border-ink bg-cream grid place-items-center font-display text-xl">
                N
                <span className="absolute top-1 font-mono text-[8px] tracking-widest">
                  ↑
                </span>
              </div>

              {/* legend card */}
              <div className="absolute bottom-5 left-5 right-5 md:right-auto md:max-w-sm bg-cream border-2 border-ink p-5 rounded-md">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-2">
                  Live directory · Beta
                </p>
                <h3 className="font-display text-2xl tracking-tight mb-2">
                  Interactive map
                </h3>
                <p className="text-sm text-ink-soft">
                  Our live geographical directory will appear here based on your
                  search parameters. For urgent care call our 24/7 helpline.
                </p>
                <a
                  href="tel:+2348000000000"
                  className="mt-4 inline-flex items-center gap-2 text-wine editorial-link"
                >
                  <Phone className="w-4 h-4" />
                  +234 (800) 000 0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom rail — partner CTA */}
      <section className="px-4 md:px-6 lg:px-10 py-20 border-t border-ink/15 bg-cream-soft">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-8">
            <p className="stamp mb-4">For Hospitals & Clinics</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
              Partner with{" "}
              <span className="font-italic-serif text-wine">MHL</span>.
            </h2>
            <p className="mt-4 text-ink-soft max-w-2xl text-pretty">
              Join Nigeria's most technologically advanced HMO network. Benefit from
              automated claims processing, 24/7 provider support, and a steady stream
              of satisfied enrollees.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <a
              href="/providers/join"
              className="group inline-flex items-center gap-3 bg-ink text-cream pl-6 pr-3 py-4 rounded-full hover:bg-wine transition-colors"
            >
              <Building2 className="w-5 h-5" />
              <span>Pre-qualify your facility</span>
              <span className="w-10 h-10 rounded-full bg-cream text-ink grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
