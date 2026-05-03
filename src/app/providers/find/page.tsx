"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  ArrowUpRight,
  Building2,
  MapPin,
  Search,
  Phone,
  Mail,
  X,
} from "lucide-react";
import {
  PROVIDERS,
  PROVIDER_STATES,
  PROVIDER_COUNT,
  type Provider,
} from "@/data/providers";

const ALL = "All states" as const;
type StateFilter = typeof ALL | (typeof PROVIDER_STATES)[number];

export default function FindProviderPage() {
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] = useState<StateFilter>(ALL);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROVIDERS.filter((p) => {
      if (stateFilter !== ALL && p.state !== stateFilter) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.town.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.state.toLowerCase().includes(q)
      );
    });
  }, [query, stateFilter]);

  const grouped = useMemo(() => {
    const map = new Map<string, Provider[]>();
    for (const p of filtered) {
      const arr = map.get(p.state) ?? [];
      arr.push(p);
      map.set(p.state, arr);
    }
    return Array.from(map.entries()).sort(
      ([a], [b]) => PROVIDER_STATES.indexOf(a as never) - PROVIDER_STATES.indexOf(b as never)
    );
  }, [filtered]);

  const stateCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of PROVIDERS) counts[p.state] = (counts[p.state] ?? 0) + 1;
    return counts;
  }, []);

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="px-4 md:px-6 lg:px-10 pt-10 md:pt-16 pb-10 border-b border-ink/15 relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[36rem] h-[36rem] halftone opacity-[0.05]" />

        <div className="flex items-center justify-between mb-10 text-[11px] uppercase tracking-[0.22em] font-mono text-ink-soft">
          <span className="stamp">§ Provider Directory</span>
          <span className="hidden md:inline">
            Accredited HCFs across {PROVIDER_STATES.length} states
          </span>
        </div>

        <div className="grid grid-cols-12 gap-6 items-end mb-12">
          <h1 className="col-span-12 lg:col-span-8 font-display font-light tracking-[-0.04em] leading-[0.86] text-[12vw] md:text-[10vw] lg:text-[7.5vw]">
            {PROVIDER_COUNT}+ accredited{" "}
            <span className="font-italic-serif text-wine">facilities</span>.
          </h1>
          <p className="col-span-12 lg:col-span-4 text-ink-soft text-lg leading-relaxed lg:pb-4 text-pretty">
            Every clinic, hospital and diagnostic centre in our network is vetted
            for clinical excellence, facility standards, and patient satisfaction.
            Search by name, town or state.
          </p>
        </div>

        {/* Search bar */}
        <form
          className="grid grid-cols-12 gap-px bg-ink border-2 border-ink rounded-md overflow-hidden"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="col-span-12 md:col-span-9 bg-cream relative">
            <label className="absolute top-2 left-12 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
              Search the directory
            </label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Anchormed, Ilorin, Sokoto, eye clinic"
              className="border-0 bg-transparent h-16 pl-12 pt-6 text-base focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-ink-mute/70"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-mute hover:text-wine"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="col-span-12 md:col-span-3 bg-ink text-cream flex items-center justify-center font-mono text-xs uppercase tracking-[0.2em] py-5 md:py-0">
            {filtered.length} result{filtered.length === 1 ? "" : "s"}
          </div>
        </form>

        {/* State filter chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mr-1 self-center">
            Filter →
          </span>
          <FilterChip
            active={stateFilter === ALL}
            onClick={() => setStateFilter(ALL)}
            label={ALL}
            count={PROVIDER_COUNT}
          />
          {PROVIDER_STATES.map((s) => (
            <FilterChip
              key={s}
              active={stateFilter === s}
              onClick={() => setStateFilter(s)}
              label={s}
              count={stateCounts[s] ?? 0}
            />
          ))}
        </div>
      </section>

      {/* RESULTS */}
      <section className="px-4 md:px-6 lg:px-10 py-12 md:py-16">
        {filtered.length === 0 ? (
          <div className="border-2 border-dashed border-ink/20 rounded-md p-16 text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute mb-3">
              No matches
            </p>
            <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-4">
              We couldn't find a provider for that search.
            </h3>
            <p className="text-ink-soft mb-6">
              Try a broader term, clear the state filter, or call our 24/7
              helpline and we'll point you to one.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setStateFilter(ALL);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink/30 hover:bg-ink hover:text-cream hover:border-ink transition-colors text-sm"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="space-y-16 md:space-y-20">
            {grouped.map(([state, list]) => (
              <div key={state}>
                <header className="flex items-baseline justify-between mb-6 pb-4 border-b-2 border-ink">
                  <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                    {state}{" "}
                    <span className="font-italic-serif text-wine">state</span>
                  </h2>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
                    {list.length} provider{list.length === 1 ? "" : "s"}
                  </span>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/15">
                  {list.map((p, i) => (
                    <ProviderCard
                      key={`${state}-${p.name}-${i}`}
                      provider={p}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* PROVIDER CTA */}
      <section className="px-4 md:px-6 lg:px-10 py-20 border-t border-ink/15 bg-cream-soft">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-8">
            <p className="stamp mb-4">For Hospitals & Clinics</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95]">
              Partner with{" "}
              <span className="font-italic-serif text-wine">MHL</span>.
            </h2>
            <p className="mt-4 text-ink-soft max-w-2xl text-pretty">
              Join Nigeria's most respected HMO network. Benefit from prompt
              claims processing, 24/7 provider support, and a steady stream of
              satisfied enrollees.
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

function FilterChip({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`text-xs px-3 py-1.5 border rounded-full transition-colors flex items-center gap-2 ${
        active
          ? "bg-wine text-cream border-wine"
          : "border-ink/20 hover:bg-ink hover:text-cream hover:border-ink"
      }`}
    >
      <span>{label}</span>
      <span
        className={`font-mono text-[10px] tracking-widest ${
          active ? "text-cream/70" : "text-ink-mute"
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function ProviderCard({ provider, index }: { provider: Provider; index: number }) {
  const phones = provider.phone?.split(",").map((p) => p.trim()).filter(Boolean) ?? [];
  const primaryPhone = phones[0];

  return (
    <article className="bg-cream-soft p-6 hover:bg-ink hover:text-cream transition-colors group flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute group-hover:text-cream/60 pt-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ArrowUpRight className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <h3 className="font-display text-xl md:text-2xl tracking-tight leading-tight text-pretty">
        {provider.name}
      </h3>

      <div className="space-y-2 mt-1">
        <p className="text-sm text-ink-soft group-hover:text-cream/80 leading-relaxed flex items-start gap-2">
          <MapPin className="w-3.5 h-3.5 shrink-0 mt-1 text-ink-mute group-hover:text-cream/60" />
          <span>
            {provider.address}
            <br />
            <span className="text-ink-mute group-hover:text-cream/55">
              {provider.town}
              {provider.state && ` · ${provider.state}`}
            </span>
          </span>
        </p>
      </div>

      <div className="mt-auto pt-3 border-t border-ink/10 group-hover:border-cream/15 space-y-2">
        {primaryPhone ? (
          <a
            href={`tel:${primaryPhone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm hover:text-wine group-hover:text-blush transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="font-mono text-xs">{primaryPhone}</span>
            {phones.length > 1 && (
              <span className="font-mono text-[10px] text-ink-mute group-hover:text-cream/55">
                +{phones.length - 1}
              </span>
            )}
          </a>
        ) : (
          <span className="flex items-center gap-2 text-sm text-ink-mute group-hover:text-cream/45">
            <Phone className="w-3.5 h-3.5" />
            <span className="font-mono text-xs italic">Contact via helpline</span>
          </span>
        )}

        {provider.email ? (
          <a
            href={`mailto:${provider.email}`}
            className="flex items-center gap-2 text-sm hover:text-wine group-hover:text-blush transition-colors break-all"
            onClick={(e) => e.stopPropagation()}
          >
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span className="font-mono text-xs">{provider.email}</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
