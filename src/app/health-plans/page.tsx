import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Crown,
  GraduationCap,
  UsersRound,
  ShieldCheck,
  Baby,
  HandHeart,
  School,
} from "lucide-react";

type Tone = "wine" | "ochre" | "moss" | "clay";

type MaaycareTier = {
  num: string;
  name: string;
  pitch: string;
  features: string[];
  premium?: boolean;
};

const MAAYCARE: MaaycareTier[] = [
  {
    num: "01",
    name: "Maaycare Classic",
    pitch: "Quality cover, where it matters most.",
    features: [
      "Primary care at our network of clinics",
      "In-patient & out-patient hospitalisations",
      "Prescription drugs from the formulary",
      "Emergency care, 24/7",
    ],
  },
  {
    num: "02",
    name: "Maaycare Deluxe",
    pitch: "Step up to specialist access.",
    features: [
      "Everything in Classic",
      "Specialist consultations without delays",
      "Comprehensive diagnostics",
      "Annual preventive screenings",
    ],
  },
  {
    num: "03",
    name: "Maaycare Deluxe+",
    pitch: "For individuals that want the full picture.",
    features: [
      "Everything in Deluxe",
      "Maternity & paediatrics cover",
      "Dental & optical basics",
      "Pre-existing condition support",
    ],
  },
  {
    num: "04",
    name: "Maaycare Executive",
    pitch: "Premium care for management teams.",
    features: [
      "Everything in Deluxe+",
      "Private hospital wings",
      "Broader specialist panel access",
      "Mental wellness & ergonomics support",
    ],
  },
  {
    num: "05",
    name: "Maaycare Pro",
    pitch: "The very best, end-to-end.",
    features: [
      "Everything in Executive",
      "International medical second opinions",
      "Premium private wards & VIP suites",
      "Executive health screenings & concierge",
    ],
    premium: true,
  },
];

type SpecialtyPlan = {
  num: string;
  name: string;
  pitch: string;
  audience: string;
  description: string;
  features: string[];
  tone: Tone;
  icon: React.ReactNode;
};

const SPECIALTY: SpecialtyPlan[] = [
  {
    num: "06",
    name: "Maaywise",
    pitch: "Care that ages with grace.",
    audience: "Adults aged 50 and above",
    description:
      "Built around the realities of later life — chronic-disease management, regular check-ups, and a clinical team that picks up the phone when you call.",
    features: [
      "Chronic disease monitoring (diabetes, hypertension, etc.)",
      "Twice-yearly comprehensive screenings",
      "Eye and dental care emphasis",
      "Priority specialist referrals",
      "Home-visit consultations on request",
    ],
    tone: "wine",
    icon: <HandHeart className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    num: "07",
    name: "MaayMart",
    pitch: "Standard maternity, exceptional care.",
    audience: "Expectant mothers",
    description:
      "Comprehensive antenatal, delivery and postnatal cover — designed so you can focus on the pregnancy and not on paperwork.",
    features: [
      "Full antenatal package & ultrasound scans",
      "Delivery cover (vaginal & C-section)",
      "Six weeks postnatal & infant care",
      "Lactation & nutrition support",
      "Emergency obstetric coverage",
    ],
    tone: "ochre",
    icon: <Baby className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    num: "08",
    name: "MaayMart+",
    pitch: "The premium maternity experience.",
    audience: "Expectant mothers — premium tier",
    description:
      "Everything in MaayMart, plus private wards, dedicated obstetrician access, and extended postnatal cover for mother and child.",
    features: [
      "Everything in MaayMart",
      "Private maternity ward & birthing suite",
      "Dedicated obstetrician throughout",
      "12 weeks postnatal cover for mother",
      "Comprehensive newborn screenings",
    ],
    tone: "moss",
    icon: <Baby className="w-6 h-6" strokeWidth={1.5} />,
  },
];

type Programme = {
  num: string;
  code: string;
  name: string;
  pitch: string;
  audience: string;
  description: string;
  features: string[];
  tone: Tone;
  icon: React.ReactNode;
};

const PROGRAMMES: Programme[] = [
  {
    num: "II",
    code: "TISHIP",
    name: "Tertiary Institution Scheme",
    pitch: "Securing the future of education.",
    audience: "Students in universities, polytechnics & colleges",
    description:
      "We ensure that health challenges never interrupt an education — robust medical cover throughout the academic journey.",
    features: [
      "On-campus & off-campus emergency cover",
      "Preventive care & education workshops",
      "Seamless registration with digital ID cards",
      "Affordable premiums via institutional fees",
      "Mental health counselling & STI screening",
    ],
    tone: "moss",
    icon: <GraduationCap className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    num: "III",
    code: "CBSHIP",
    name: "Community-Based Scheme",
    pitch: "Healthcare for the heartland.",
    audience: "Trade unions, cooperatives & community groups",
    description:
      "Built on mutual support — bringing quality healthcare to the informal sector, with community elders, cooperatives and trade groups in mind.",
    features: [
      "Community-tailored provider networks",
      "Simplified enrollment for cooperatives",
      "Primary care focus for chronic conditions",
      "Language-accessible support & outreach",
      "Cross-state emergency access",
    ],
    tone: "clay",
    icon: <UsersRound className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    num: "IV",
    code: "SHIP",
    name: "Schools Health Insurance",
    pitch: "So young scholars never miss a chapter.",
    audience: "Pupils in primary & secondary schools",
    description:
      "Dedicated cover for primary and secondary schools — keeping young scholars healthy, active, and consistently learning without medical interruptions.",
    features: [
      "In-school health checks & vaccination drives",
      "Pediatric specialist referrals",
      "Nutrition & hygiene education",
      "Accident & emergency coverage",
      "Termly wellness reports for parents",
    ],
    tone: "ochre",
    icon: <School className="w-6 h-6" strokeWidth={1.5} />,
  },
];

export default function HealthPlansPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="px-4 md:px-6 lg:px-10 pt-10 md:pt-16 pb-10 border-b border-ink/15 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[36rem] h-[36rem] halftone opacity-[0.06]" />

        <div className="flex items-center justify-between mb-12 text-[11px] uppercase tracking-[0.22em] font-mono text-ink-soft">
          <span className="stamp">§ Coverage Index</span>
          <span className="hidden md:inline flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" /> NHIA-aligned across all
            programmes
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
            Four programmes — one for every shape of Nigerian life. From the
            corporate desk to the community elder, the kindergarten classroom to
            the university hostel.
          </div>
        </div>

        {/* Programme nav */}
        <div className="mt-12 pt-8 border-t border-ink/15 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10">
          {[
            ["#phip", "I.", "PHIP", "Corporate · Individual · Family"],
            ["#tiship", "II.", "TISHIP", "Tertiary institutions"],
            ["#cbship", "III.", "CBSHIP", "Communities"],
            ["#ship", "IV.", "SHIP", "Primary & secondary schools"],
          ].map(([href, num, label, sub]) => (
            <a
              key={href}
              href={href}
              className="bg-cream hover:bg-ink hover:text-cream transition-colors px-4 py-5 group"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute group-hover:text-cream/60">
                § {num}
              </span>
              <p className="font-display text-xl md:text-2xl mt-1 leading-tight">
                {label}
              </p>
              <p className="text-xs text-ink-soft group-hover:text-cream/70 mt-1">
                {sub}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ─── §I  PHIP ─────────────────────────────────────────── */}
      <section
        id="phip"
        className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15 scroll-mt-32"
      >
        <div className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 md:col-span-7">
            <p className="stamp mb-6">§ I — Private Health Insurance Plan</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
              PHIP — the{" "}
              <span className="font-italic-serif text-wine">flagship</span>{" "}
              family.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pt-12 text-ink-soft text-pretty">
            Our private cover for corporates, individuals and families. Eight
            plans across two ranges — five Maaycare tiers from Classic to Pro,
            plus three specialty plans for life's bigger moments.
          </div>
        </div>

        {/* PHIP — Maaycare ladder */}
        <div id="maaycare" className="scroll-mt-32 mb-20 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-5 border-b border-ink/15">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-2">
                Range 01 — Maaycare
              </p>
              <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-tight">
                Five tiers,{" "}
                <span className="font-italic-serif text-wine">one</span>{" "}
                standard of care.
              </h3>
            </div>
            <p className="text-sm text-ink-soft md:text-right md:max-w-sm">
              Pick the tier that fits your life — every Maaycare plan is
              comprehensive within its scope, built to scale with you.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {MAAYCARE.map((tier, i) => (
              <article
                key={tier.num}
                className={`group relative float-hover rounded-md overflow-hidden flex flex-col ${
                  tier.premium
                    ? "col-span-12 lg:col-span-12 plan-glow bg-cream"
                    : "col-span-12 md:col-span-6 lg:col-span-3 bg-cream-soft border border-ink/15"
                }`}
                style={{
                  animation: `fade-up 0.7s cubic-bezier(0.2,0.8,0.2,1) ${i * 0.08}s both`,
                }}
              >
                {tier.premium ? (
                  <div className="relative bg-gradient-to-br from-wine via-wine to-wine-deep text-cream p-7 md:p-9 overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 stripes opacity-[0.08]" />
                    <div className="relative grid grid-cols-12 gap-6 items-center">
                      <div className="col-span-12 md:col-span-7">
                        <div className="flex items-center gap-3 mb-3">
                          <Crown
                            className="w-5 h-5 text-blush"
                            strokeWidth={1.5}
                          />
                          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/65">
                            № {tier.num} · Flagship of the Maaycare range
                          </span>
                        </div>
                        <h4 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.02] mb-3">
                          {tier.name}
                        </h4>
                        <p className="font-display italic text-2xl md:text-3xl text-blush mb-5">
                          {tier.pitch}
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-cream/85 text-sm md:text-base">
                          {tier.features.map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2 leading-snug"
                            >
                              <CheckCircle2
                                className="w-4 h-4 shrink-0 mt-0.5 text-blush"
                                strokeWidth={1.5}
                              />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-span-12 md:col-span-5 md:text-right space-y-3">
                        <Link
                          href="/providers/find"
                          className="group/btn inline-flex items-center gap-3 bg-cream text-ink pl-6 pr-3 py-3.5 rounded-full hover:bg-blush transition-colors"
                        >
                          <span className="text-sm">Enrol on Maaycare Pro</span>
                          <span className="w-9 h-9 rounded-full bg-ink text-cream grid place-items-center group-hover/btn:rotate-45 transition-transform">
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </Link>
                        <Link
                          href="/faqs"
                          className="block md:inline-block text-sm text-cream/75 editorial-link hover:text-blush"
                        >
                          Read the fine print
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <header className="px-6 pt-6 pb-5 border-b border-ink/10">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-3">
                        № {tier.num}
                      </p>
                      <h4 className="font-display text-2xl tracking-tight leading-tight">
                        {tier.name}
                      </h4>
                      <p className="font-display italic text-base text-wine mt-2">
                        {tier.pitch}
                      </p>
                    </header>
                    <ul className="px-6 py-5 flex-1 space-y-2.5">
                      {tier.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-ink-soft leading-snug"
                        >
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5 text-wine"
                            strokeWidth={1.5}
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="px-6 pb-6">
                      <Link
                        href="/providers/find"
                        className="text-sm text-wine editorial-link"
                      >
                        Enrol on {tier.name} →
                      </Link>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* PHIP — Specialty trio */}
        <div id="specialty" className="scroll-mt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-5 border-b border-ink/15">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-2">
                Range 02 — Specialty within PHIP
              </p>
              <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-tight">
                Cover for the{" "}
                <span className="font-italic-serif text-wine">moments</span>{" "}
                that matter.
              </h3>
            </div>
            <p className="text-sm text-ink-soft md:text-right md:max-w-sm">
              Some seasons of life deserve their own plan — pregnancy, advancing
              years, or any moment the standard Maaycare cover doesn't quite
              fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {SPECIALTY.map((p, i) => (
              <PlanCard key={p.num} plan={p} order={i} kind="Within PHIP" />
            ))}
          </div>
        </div>
      </section>

      {/* ─── OTHER PROGRAMMES ─────────────────────────────────── */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15 bg-cream-soft">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 md:col-span-7">
            <p className="stamp mb-6">§ II / III / IV — Other programmes</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
              Programmes for{" "}
              <span className="font-italic-serif text-wine">institutions</span>{" "}
              and communities.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:pt-12 text-ink-soft text-pretty">
            Outside PHIP, three NHIA-aligned schemes serve students, communities
            and schoolchildren — each with its own enrolment path and benefit
            structure.
          </div>
        </div>

        <div
          id="programmes"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {PROGRAMMES.map((p, i) => (
            <article
              key={p.code}
              id={p.code.toLowerCase()}
              className="scroll-mt-32"
              style={{
                animation: `fade-up 0.7s cubic-bezier(0.2,0.8,0.2,1) ${i * 0.08}s both`,
              }}
            >
              <PlanCard plan={p} order={i} kind={p.code} />
            </article>
          ))}
        </div>
      </section>

      {/* ─── HELP CTA ──────────────────────────────────────────── */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-24 border-y border-ink/15">
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
              <span className="text-sm">Search 130+ providers</span>
              <span className="w-9 h-9 rounded-full bg-cream text-wine grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlanCard({
  plan,
  order,
  kind,
}: {
  plan: SpecialtyPlan | Programme;
  order: number;
  kind: string;
}) {
  const toneVar = {
    wine: "var(--wine)",
    ochre: "var(--ochre)",
    moss: "var(--moss)",
    clay: "var(--clay)",
  }[plan.tone];

  return (
    <article
      className="group relative float-hover rounded-md overflow-hidden bg-cream border border-ink/15 flex flex-col h-full"
      style={{
        animation: `fade-up 0.7s cubic-bezier(0.2,0.8,0.2,1) ${order * 0.08}s both`,
      }}
    >
      <header className="px-6 md:px-7 pt-7 pb-6 border-b border-ink/10">
        <div className="flex items-start justify-between mb-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
            № {plan.num} · {kind}
          </span>
          <span
            className="p-2.5 rounded-full border"
            style={{ borderColor: "rgba(26, 22, 18, 0.25)", color: toneVar }}
          >
            {plan.icon}
          </span>
        </div>

        <h3 className="font-display text-3xl md:text-[2rem] tracking-tight leading-[1.02] mb-3">
          {plan.name}
        </h3>
        <p
          className="font-display italic text-lg md:text-xl mb-4"
          style={{ color: toneVar }}
        >
          {plan.pitch}
        </p>
        <p className="text-ink-soft text-sm leading-relaxed text-pretty">
          {plan.description}
        </p>
      </header>

      <div className="px-6 md:px-7 py-6 flex-1 flex flex-col">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4 pb-4 border-b border-ink/10">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
            For
          </span>
          <span className="text-ink-soft text-sm">{plan.audience}</span>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-3">
          What's covered
        </p>
        <ul className="space-y-2.5 mb-6 flex-1">
          {plan.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-ink-soft leading-snug"
            >
              <CheckCircle2
                className="w-4 h-4 shrink-0 mt-0.5"
                style={{ color: toneVar }}
                strokeWidth={1.5}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 mt-auto">
          <Link
            href="/providers/find"
            className="group/btn inline-flex items-center gap-2 bg-ink text-cream pl-5 pr-2 py-2.5 rounded-full hover:bg-wine transition-colors"
          >
            <span className="text-sm">Enrol now</span>
            <span className="w-7 h-7 rounded-full bg-cream text-ink grid place-items-center group-hover/btn:rotate-45 transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <Link
            href="/faqs"
            className="text-sm text-ink-soft editorial-link self-center"
          >
            Fine print
          </Link>
        </div>
      </div>
    </article>
  );
}
