"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Crown,
  Users,
  UsersRound,
  GraduationCap,
  Building2,
  Landmark,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

type Tone = "wine" | "ochre" | "moss" | "clay";

type Tier = {
  name: string;
  sub: string;
  body: string;
};

type Plan = {
  id: string;
  code: string;
  num: string;
  title: string;
  tagline: string;
  vibe: string;
  target: string;
  overview: string;
  benefits: string[];
  tone: Tone;
  icon: React.ReactNode;
  premium?: boolean;
  tiers?: Tier[];
};

const CORPORATE_PLANS: Plan[] = [
  {
    id: "phip-corporate",
    code: "PHIP",
    num: "01",
    title: "PHIP — Private Health Insurance",
    tagline: "The standard of private excellence.",
    vibe: "Premium · Flexible · Comprehensive",
    target: "Corporate organisations of every size",
    overview:
      "Our flagship corporate plan — four tiers tailored to every level of your workforce. From entry-level essentials to international-referral Prestige cover.",
    benefits: [
      "Premium private hospital wings",
      "Comprehensive dental, optical & maternity",
      "International medical second opinions",
      "24/7 Virtual Doctor via the Maaysoft Portal",
      "Executive health screenings (Platinum / Gold)",
    ],
    tone: "wine",
    icon: <Crown className="w-6 h-6" strokeWidth={1.5} />,
    premium: true,
    tiers: [
      {
        name: "Prestige",
        sub: "Platinum",
        body: "International referrals, premium private wards, executive screenings.",
      },
      {
        name: "Executive",
        sub: "Gold",
        body: "Balanced premium cover for management. High-limit specialist access.",
      },
      {
        name: "Professional",
        sub: "Silver",
        body: "The SME standard — robust outpatient & inpatient care at top-tier hospitals.",
      },
      {
        name: "Essential",
        sub: "Bronze",
        body: "Quality cover for entry-level teams — primary care, emergencies, core hospitalisations.",
      },
    ],
  },
  {
    id: "ship",
    code: "SHIP",
    num: "02",
    title: "SHIP — Social Health Insurance",
    tagline: "The foundation of collective wellness.",
    vibe: "Reliable · Structured · Secure",
    target: "Formal-sector employees and organised groups",
    overview:
      "A robust social safety net delivering standardised, high-quality care to organised groups. SHIP protects every member of the workforce against the high cost of medical emergencies.",
    benefits: [
      "Extensive nationwide hospital network",
      "Standardised benefit packages for predictable care",
      "Efficient claims management on our digital infrastructure",
      "Regular wellness screenings and preventive tracks",
      "Collective bargaining on specialist consultation rates",
    ],
    tone: "ochre",
    icon: <Building2 className="w-6 h-6" strokeWidth={1.5} />,
  },
];

const RETAIL_PLANS: Plan[] = [
  {
    id: "phip-retail",
    code: "PHIP",
    num: "01",
    title: "PHIP — Private Health Insurance",
    tagline: "The standard of private excellence.",
    vibe: "Premium · Flexible · Comprehensive",
    target: "Individuals and families who want more",
    overview:
      "Tiered coverage for households and individual professionals — from Family Royal (parents + 4 children) to the mobile-lifestyle Maayoit Personal.",
    benefits: [
      "Private hospital wings & premium wards",
      "Dental, optical & full maternity cover",
      "Immunisations & paediatric consultations (Family)",
      "24/7 Virtual Doctor via Maaysoft",
      "Family wellness tracks",
    ],
    tone: "wine",
    icon: <Crown className="w-6 h-6" strokeWidth={1.5} />,
    premium: true,
    tiers: [
      {
        name: "Family Royal",
        sub: "Parents + 4 children",
        body: "Comprehensive household cover including immunisations, paediatrics, and family wellness tracks.",
      },
      {
        name: "Maayoit Personal",
        sub: "Young professionals",
        body: "Affordable, high-speed access to care built for a mobile lifestyle.",
      },
    ],
  },
  {
    id: "tiship",
    code: "TISHIP",
    num: "02",
    title: "TISHIP — Tertiary Institution",
    tagline: "Securing the future of education.",
    vibe: "Accessible · Essential · Supportive",
    target: "Students in universities, polytechnics and colleges",
    overview:
      "We ensure that health challenges never interrupt an education. TISHIP delivers robust medical cover throughout a student's academic journey.",
    benefits: [
      "On-campus & off-campus emergency cover",
      "Preventive care and health education workshops",
      "Seamless registration & digital ID cards",
      "Affordable premiums integrated with institutional fees",
      "Mental health counselling & STI screening",
    ],
    tone: "moss",
    icon: <GraduationCap className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    id: "cbship",
    code: "CBSHIP",
    num: "03",
    title: "CBSHIP — Community Based",
    tagline: "Healthcare for the heartland.",
    vibe: "Grassroots · Inclusive · Empowering",
    target: "Informal sectors, trade unions and rural communities",
    overview:
      "Built on the principle of mutual support. CBSHIP brings quality healthcare to the informal sector — a commitment to Kwara Harmony and communities beyond.",
    benefits: [
      "Community-tailored provider networks",
      "Simplified enrollment for cooperatives & trade groups",
      "Primary care focus to manage chronic conditions early",
      "Language-accessible support & health outreach",
      "Cross-state emergency access through our network",
    ],
    tone: "clay",
    icon: <UsersRound className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    id: "nhia",
    code: "NHIA",
    num: "04",
    title: "NHIA Plan — National Regulatory",
    tagline: "National standard. Maayoit quality.",
    vibe: "Authoritative · Compliant · Transparent",
    target: "Public-sector enrollees and vulnerable groups",
    overview:
      "As a fully accredited NHIA partner since 2000, this plan is strictly aligned with the National Health Insurance Authority's standards — ensuring federal-grade protection for every enrollee.",
    benefits: [
      "100% compliance with national drug formularies",
      "Portability across all NHIA-accredited facilities",
      "Specialised care for vulnerable populations",
      "Transparent reporting & data-backed outcomes",
      "Direct NHIA helpdesk coordination",
    ],
    tone: "ochre",
    icon: <Landmark className="w-6 h-6" strokeWidth={1.5} />,
  },
];

export default function HealthPlansPage() {
  const [view, setView] = useState<"corporate" | "retail">("corporate");
  const plans = view === "corporate" ? CORPORATE_PLANS : RETAIL_PLANS;

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="px-4 md:px-6 lg:px-10 pt-10 md:pt-16 pb-10 border-b border-ink/15 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[36rem] h-[36rem] halftone opacity-[0.06]" />

        <div className="flex items-center justify-between mb-12 text-[11px] uppercase tracking-[0.22em] font-mono text-ink-soft">
          <span className="stamp">§ Coverage Index</span>
          <span className="hidden md:inline flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" /> NHIA-aligned across all plans
          </span>
        </div>

        <div className="grid grid-cols-12 gap-6 items-end">
          <h1 className="col-span-12 lg:col-span-9 font-display font-light tracking-[-0.04em] leading-[0.86] text-[12vw] md:text-[10vw] lg:text-[8vw]">
            Coverage that{" "}
            <span className="font-italic-serif text-wine">moves</span>
            <br />
            with you.
          </h1>
          <div className="col-span-12 lg:col-span-3 lg:pb-4 text-ink-soft text-pretty">
            From the lecture halls of Ilorin to the corporate boards of Lagos — our
            plans are written for seamless access to quality care. Discover the one
            that fits your journey.
          </div>
        </div>
      </section>

      {/* TOGGLE BAR */}
      <section className="px-4 md:px-6 lg:px-10 py-6 sticky top-16 md:top-[6.5rem] z-30 bg-cream/92 backdrop-blur-md border-b border-ink/15">
        <div className="grid grid-cols-12 gap-6 items-center">
          <p className="col-span-12 md:col-span-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
            View plans for →
          </p>

          <div className="col-span-12 md:col-span-4 md:col-start-6">
            <div className="relative inline-grid grid-cols-2 bg-cream-deep/60 border-2 border-ink rounded-full p-1 w-full">
              <button
                onClick={() => setView("corporate")}
                className={`relative z-10 rounded-full py-3 text-sm font-mono uppercase tracking-[0.18em] transition-colors ${
                  view === "corporate" ? "text-cream" : "text-ink-soft"
                }`}
                aria-pressed={view === "corporate"}
              >
                Corporate
              </button>
              <button
                onClick={() => setView("retail")}
                className={`relative z-10 rounded-full py-3 text-sm font-mono uppercase tracking-[0.18em] transition-colors ${
                  view === "retail" ? "text-cream" : "text-ink-soft"
                }`}
                aria-pressed={view === "retail"}
              >
                Retail
              </button>
              <span
                className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-wine transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{
                  transform:
                    view === "corporate" ? "translateX(0)" : "translateX(100%)",
                }}
              />
            </div>
          </div>

          <p className="col-span-12 md:col-span-3 text-sm text-ink-soft md:text-right">
            {view === "corporate"
              ? "Plans for organisations & workforce teams."
              : "Plans for individuals, families, students & communities."}
          </p>
        </div>
      </section>

      {/* PLANS GRID */}
      <section className="px-4 md:px-6 lg:px-10 py-10 md:py-14">
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {plans.map((p, i) => (
            <PlanCard key={`${view}-${p.id}`} plan={p} order={i} />
          ))}
        </div>
      </section>

      {/* LIQUID-FLOW CTA STRIP */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-24 border-y border-ink/15 bg-cream-soft">
        <div className="grid grid-cols-12 gap-6 items-end">
          <h3 className="col-span-12 lg:col-span-7 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1]">
            Not sure which fits?{" "}
            <span className="font-italic-serif text-wine">
              We'll help you choose.
            </span>
          </h3>
          <div className="col-span-12 lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <Link
              href="/faqs"
              className="group inline-flex items-center justify-between gap-3 border border-ink/30 hover:border-ink pl-6 pr-3 py-4 rounded-full"
            >
              <span className="text-sm">Browse FAQs</span>
              <span className="w-9 h-9 rounded-full bg-ink text-cream grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/providers/find"
              className="group inline-flex items-center justify-between gap-3 bg-wine text-cream pl-6 pr-3 py-4 rounded-full hover:bg-ink transition-colors"
            >
              <span className="text-sm">Search providers</span>
              <span className="w-9 h-9 rounded-full bg-cream text-wine grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* NHIA REASSURANCE */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-24 bg-ink text-cream relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 stripes opacity-[0.05]" />
        <div className="relative grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-2">
            <Sparkles className="w-10 h-10 text-ochre" strokeWidth={1.5} />
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream/60 mb-4">
              § NHIA Accredited since 2000
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[1]">
              Every plan is audited against the National Health Insurance Authority's
              <span className="font-italic-serif text-blush"> federal standards</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3">
            <Link
              href="/resources"
              className="group inline-flex items-center gap-3 bg-cream text-ink pl-6 pr-3 py-4 rounded-full hover:bg-blush transition-colors w-full justify-between md:w-auto"
            >
              <span className="text-base">Read compliance →</span>
              <span className="w-10 h-10 rounded-full bg-ink text-cream grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlanCard({ plan, order }: { plan: Plan; order: number }) {
  const toneVar = {
    wine: "var(--wine)",
    ochre: "var(--ochre)",
    moss: "var(--moss)",
    clay: "var(--clay)",
  }[plan.tone];

  // PHIP premium is wide on lg; others take third of the row
  const spanClass = plan.premium
    ? "col-span-12 lg:col-span-12"
    : "col-span-12 md:col-span-6 lg:col-span-4";

  return (
    <article
      id={plan.code.toLowerCase()}
      className={`${spanClass} group relative float-hover rounded-md overflow-hidden bg-cream border border-ink/15 ${
        plan.premium ? "plan-glow" : ""
      }`}
      style={{ animation: `fade-up 0.7s cubic-bezier(0.2,0.8,0.2,1) ${order * 0.08}s both` }}
    >
      {/* Header band */}
      <header
        className={`relative px-6 md:px-8 pt-7 pb-8 overflow-hidden`}
        style={{
          background: plan.premium
            ? `linear-gradient(135deg, ${toneVar} 0%, var(--wine-deep) 100%)`
            : "transparent",
          color: plan.premium ? "var(--cream)" : "var(--ink)",
          borderBottom: plan.premium
            ? "none"
            : `1px solid rgba(26, 22, 18, 0.15)`,
        }}
      >
        {plan.premium && (
          <div className="pointer-events-none absolute inset-0 stripes opacity-[0.08]" />
        )}

        <div className="relative flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70"
            >
              № {plan.num} · {plan.vibe}
            </span>
          </div>
          <span
            className="p-2.5 rounded-full border"
            style={{
              borderColor: plan.premium
                ? "rgba(244, 236, 224, 0.3)"
                : "rgba(26, 22, 18, 0.25)",
              color: plan.premium ? "var(--blush)" : toneVar,
            }}
          >
            {plan.icon}
          </span>
        </div>

        <div className="relative flex items-start gap-5">
          <span
            className="num-badge text-6xl md:text-7xl leading-none"
            style={{ color: plan.premium ? "var(--blush)" : toneVar }}
          >
            {plan.code[0].toLowerCase()}.
          </span>
          <div className="flex-1">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.22em] mb-2"
              style={{
                color: plan.premium
                  ? "rgba(244, 236, 224, 0.65)"
                  : "var(--ink-mute)",
              }}
            >
              {plan.code}
            </p>
            <h3
              className={`font-display tracking-tight leading-[1.02] ${
                plan.premium ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl"
              }`}
            >
              {plan.tagline.split(" ").slice(0, -2).join(" ")}{" "}
              <span
                className="font-italic-serif"
                style={{
                  color: plan.premium ? "var(--blush)" : toneVar,
                }}
              >
                {plan.tagline.split(" ").slice(-2).join(" ")}
              </span>
            </h3>
            <p
              className="mt-4 text-base leading-relaxed text-pretty max-w-2xl"
              style={{
                color: plan.premium
                  ? "rgba(244, 236, 224, 0.85)"
                  : "var(--ink-soft)",
              }}
            >
              {plan.overview}
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="px-6 md:px-8 py-7">
        {/* Target */}
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-6 pb-5 border-b border-ink/15">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
            Target
          </span>
          <span className="text-ink-soft text-sm">{plan.target}</span>
        </div>

        {/* Tiers (if any) */}
        {plan.tiers && (
          <div className="mb-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-4">
              Available tiers
            </p>
            <ol
              className={`grid gap-px bg-ink/15 ${
                plan.tiers.length === 4
                  ? "grid-cols-2 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-2"
              }`}
            >
              {plan.tiers.map((t, i) => (
                <li
                  key={t.name}
                  className="bg-cream-soft p-4 flex flex-col gap-1 hover:bg-cream transition-colors"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute flex items-center gap-1.5">
                    <span className="tier-pip" style={{ background: toneVar }} />
                    {t.sub}
                  </span>
                  <p className="font-display text-xl tracking-tight">{t.name}</p>
                  <p className="text-xs text-ink-soft leading-relaxed mt-1">
                    {t.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Liquid-reveal Key Benefits */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
              Key benefits
            </p>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute/70 transition-opacity group-hover:opacity-0">
              Hover to reveal
            </span>
          </div>
          <div className="liquid-reveal">
            <div className="liquid-inner">
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
                {plan.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 py-3">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: toneVar }}
                      strokeWidth={1.5}
                    />
                    <span className="text-ink-soft text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* collapsed hint */}
          <div className="flex flex-wrap gap-2 pt-1 group-hover:opacity-0 group-hover:h-0 transition-all duration-500 overflow-hidden max-h-20">
            {plan.benefits.slice(0, 3).map((b) => (
              <span
                key={b}
                className="text-[10px] uppercase tracking-[0.15em] font-mono px-2 py-1 border border-ink/20 rounded-full text-ink-soft"
              >
                {b.split(" ").slice(0, 3).join(" ")}
              </span>
            ))}
            <span className="text-[10px] uppercase tracking-[0.15em] font-mono px-2 py-1 border border-ink/20 rounded-full text-ink-mute">
              +{Math.max(plan.benefits.length - 3, 0)} more
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/providers/find"
            className="group/btn inline-flex items-center gap-3 pl-5 pr-2 py-2.5 rounded-full transition-colors"
            style={{ background: "var(--ink)", color: "var(--cream)" }}
          >
            <span className="text-sm">Enrol now</span>
            <span
              className="w-8 h-8 rounded-full grid place-items-center group-hover/btn:rotate-45 transition-transform"
              style={{ background: "var(--cream)", color: "var(--ink)" }}
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <Link
            href="/faqs"
            className="inline-flex items-center px-4 py-2.5 rounded-full border border-ink/30 hover:border-ink text-sm editorial-link"
          >
            Read the fine print
          </Link>
        </div>
      </div>
    </article>
  );
}
