import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
  Quote,
  MapPin,
  Star,
} from "lucide-react";

const TEAM = [
  {
    name: "Dr. Adedayo Aderibigbe",
    role: "Consultant Head of Operations",
    initials: "AA",
    tone: "var(--moss)",
  },
  {
    name: "Barrister Olufisayo Eruola",
    role: "Company Secretary",
    initials: "OE",
    tone: "var(--ochre)",
  },
  {
    name: "Nr. Ifeoluwa Ayorinde",
    role: "Head of Standard & Quality Assurance",
    initials: "IA",
    tone: "var(--clay)",
  },
  {
    name: "George Akande",
    role: "Head of ICT",
    initials: "GA",
    tone: "var(--wine)",
  },
  {
    name: "Esther Oluwole",
    role: "Head of Human Resources",
    initials: "EO",
    tone: "var(--moss)",
  },
  {
    name: "Toluwalase Olatayo",
    role: "AG. Head of Marketing",
    initials: "TO",
    tone: "var(--ochre)",
  },
  {
    name: "Oluwakemi Akinyele",
    role: "AG. Head of Finance",
    initials: "OA",
    tone: "var(--clay)",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="px-4 md:px-6 lg:px-10 pt-10 md:pt-16 pb-14 border-b border-ink/15 relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[44rem] h-[44rem] halftone opacity-[0.06]" />

        <div className="flex items-center justify-between mb-12 text-[11px] uppercase tracking-[0.22em] font-mono text-ink-soft">
          <span className="stamp">§ The Story</span>
          <span className="hidden md:inline flex items-center gap-2">
            <MapPin className="w-3 h-3" /> Ilorin · Kwara · Nigeria
          </span>
        </div>

        <div className="grid grid-cols-12 gap-6 items-end">
          <h1 className="col-span-12 lg:col-span-9 font-display font-light tracking-[-0.04em] leading-[0.86] text-[12vw] md:text-[10vw] lg:text-[8vw]">
            Rooted in Ilorin,
            <br />
            <span className="font-italic-serif text-wine">serving</span> Nigeria.
          </h1>
          <p className="col-span-12 lg:col-span-3 lg:pb-4 text-ink-soft text-lg leading-relaxed text-pretty">
            Founded in 2000 with a singular mission: to make quality healthcare a
            right, not a privilege. Twenty-four years later, we're a national
            health-tech leader.
          </p>
        </div>
      </section>

      {/* THE JOURNEY — long-form essay */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute mb-3">
              Essay 01
            </p>
            <p className="font-display italic text-2xl text-ink-soft">
              The journey.
            </p>
          </div>
          <div className="col-span-12 md:col-span-9 max-w-3xl space-y-6">
            <p className="text-2xl md:text-3xl leading-[1.45] font-display tracking-tight drop-cap text-pretty">
              In 2000, Maayoit Healthcare Limited was founded with a singular
              mission: to make quality healthcare a right, not a privilege. Under
              the visionary leadership of our Managing Director,{" "}
              <span className="font-italic-serif text-wine">
                Sir Dr. Ademola Aderibigbe
              </span>
              , we've evolved from a regional pioneer in Kwara State into one of
              Nigeria's most trusted Health Maintenance Organisations.
            </p>
            <p className="text-lg text-ink-soft leading-relaxed text-pretty">
              Twenty-four years later we've stayed unfashionably committed to the
              same things: comprehensive cover, transparent claims, prompt
              payments to providers, and the sort of care that treats every
              enrollee like kin. Five program types, more than 500 partner
              hospitals, one consistent standard.
            </p>
          </div>
        </div>

        {/* Feature photograph */}
        <figure className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-9 md:col-start-3 relative aspect-[16/9] overflow-hidden rounded-md border border-ink/15">
            <Image
              src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?auto=format&fit=crop&w=1800&q=80"
              alt="A Maayoit clinical partner in consultation with a young patient"
              fill
              sizes="(min-width: 768px) 75vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="col-span-12 md:col-span-9 md:col-start-3 mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
            Fig. 01 — Care that arrives early. Maayoit clinical partner, in conversation with an enrollee.
          </figcaption>
        </figure>
      </section>

      {/* VISION & MISSION */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-ink/15">
        <div className="px-4 md:px-10 py-16 md:py-24 border-b md:border-b-0 md:border-r border-ink/15 bg-cream-soft">
          <div className="flex items-center gap-3 mb-8">
            <span className="num-badge text-5xl text-wine">i.</span>
            <Stethoscope className="w-7 h-7 text-wine" strokeWidth={1.5} />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mb-3">
            Our Vision
          </p>
          <h3 className="font-display text-4xl md:text-5xl tracking-tight leading-[1] mb-6">
            A Nigeria where{" "}
            <span className="font-italic-serif text-wine">no family</span> waits
            for the cost of care.
          </h3>
          <p className="text-ink-soft text-lg leading-relaxed text-pretty">
            We exist so that every enrollee — whether a corporate executive in
            Lagos, a market trader in Ilorin, or a student on a Kwara campus —
            walks into a hospital with the confidence that their care is already
            paid for, already coordinated, and already underway.
          </p>
        </div>

        <div className="px-4 md:px-10 py-16 md:py-24 bg-ink text-cream relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 stripes opacity-[0.05]" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-8">
              <span className="num-badge text-5xl text-blush">ii.</span>
              <HeartHandshake className="w-7 h-7 text-blush" strokeWidth={1.5} />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/60 mb-3">
              Our Mission
            </p>
            <h3 className="font-display text-4xl md:text-5xl tracking-tight leading-[1] mb-6">
              Comprehensive cover,{" "}
              <span className="font-italic-serif text-blush">zero theatre</span>.
            </h3>
            <p className="text-cream/80 text-lg leading-relaxed text-pretty">
              We safeguard health through direct-care coverage — bypassing
              confusing tiers and focusing on rapid, high-quality treatment,
              proactive sensitization, and community-wide prevention. Every plan
              meets or exceeds NHIA standards.
            </p>
          </div>
        </div>
      </section>

      {/* PULL QUOTE — from the MD */}
      <section className="px-4 md:px-6 lg:px-10 py-24 md:py-32 border-b border-ink/15 bg-cream-soft">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <Quote className="w-12 h-12 md:w-16 md:h-16 text-wine" />
          </div>
          <blockquote className="col-span-12 md:col-span-10 font-display tracking-tight leading-[1.05] text-[6vw] md:text-[4.6vw] lg:text-[4vw]">
            "We built Maayoit so that quality healthcare would be a{" "}
            <span className="font-italic-serif text-wine">right</span>, not a
            privilege — and we've spent 24 years keeping that promise."
          </blockquote>
          <p className="col-span-12 md:col-start-3 md:col-span-10 mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
            — Sir Dr. Ademola Aderibigbe, Managing Director
          </p>
        </div>
      </section>

      {/* CORE VALUES — three, not four */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-5">
            <p className="stamp mb-5">§ Core Values</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
              Three
              <br />
              <span className="font-italic-serif text-wine">commitments</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-7 md:pt-8 text-lg text-ink-soft leading-relaxed text-pretty">
            They aren't slogans. They're the rubric we use when nobody is watching —
            when a difficult claim lands at midnight, when a community reaches out
            with one phone call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/15">
          {[
            {
              num: "01",
              icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
              title: "Integrity",
              desc: "Transparent claims, ethical care, and annual NHIA audits. The fine print is intentionally short.",
              tone: "wine",
            },
            {
              num: "02",
              icon: <Star className="w-6 h-6" strokeWidth={1.5} />,
              title: "Quality",
              desc: "Only strictly vetted hospitals join our network. We measure facility standards, clinical outcomes, and member satisfaction.",
              tone: "ochre",
            },
            {
              num: "03",
              icon: <HeartHandshake className="w-6 h-6" strokeWidth={1.5} />,
              title: "Empathy",
              desc: "Because every patient has a name, a family, and a story — not just a member ID.",
              tone: "clay",
            },
          ].map((v) => (
            <article
              key={v.num}
              className="bg-cream p-7 md:p-9 hover:bg-ink hover:text-cream transition-colors group"
            >
              <div className="flex items-center justify-between mb-8">
                <span
                  className="num-badge text-6xl"
                  style={{
                    color:
                      v.tone === "wine"
                        ? "var(--wine)"
                        : v.tone === "ochre"
                        ? "var(--ochre)"
                        : "var(--clay)",
                  }}
                >
                  {v.num}
                </span>
                <span className="border border-ink/30 group-hover:border-cream/40 rounded-full p-2.5">
                  {v.icon}
                </span>
              </div>
              <h4 className="font-display text-3xl tracking-tight mb-3 leading-tight">
                {v.title}
              </h4>
              <p className="leading-relaxed opacity-80">{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15 bg-cream-soft">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-5">
            <p className="stamp mb-5">§ Heritage</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
              A quarter-century in{" "}
              <span className="font-italic-serif text-wine">health</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-7 md:pt-8 text-lg text-ink-soft leading-relaxed">
            Milestones on the road from regional pioneer to national health-tech
            leader.
          </p>
        </div>

        <ol className="divide-y divide-ink/15 border-y border-ink/15">
          {[
            ["2000", "Incorporated", "Maayoit Healthcare Limited founded in Ilorin, Kwara State."],
            ["2005", "NHIA Accreditation", "Awarded full accreditation under Nigeria's national scheme."],
            ["2010", "Family & SME Cover", "Launched the PHIP and corporate plans for households and growing businesses."],
            ["2014", "Regional Expansion", "Hospital network crosses 100 facilities across 12 states."],
            ["2019", "TISHIP Partnership", "Onboarded campus health programmes for tertiary institutions nationwide."],
            ["2022", "500 Partners", "Provider network reaches 500+ accredited hospitals and clinics."],
            ["2026", "Reaccreditation", "Preparing for our second decade of NHIA reaccreditation."],
          ].map(([year, title, desc]) => (
            <li
              key={year}
              className="grid grid-cols-12 gap-4 py-7 md:py-8 items-baseline"
            >
              <span className="col-span-3 md:col-span-2 num-badge text-4xl md:text-5xl text-wine">
                {year}
              </span>
              <h3 className="col-span-9 md:col-span-4 font-display text-2xl md:text-3xl tracking-tight leading-tight">
                {title}
              </h3>
              <p className="col-span-12 md:col-span-6 text-ink-soft">{desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* LEADERSHIP */}
      <section
        id="leadership"
        className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15 scroll-mt-32"
      >
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-5">
            <p className="stamp mb-5">§ Leadership</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
              The people
              <br />
              behind the{" "}
              <span className="font-italic-serif text-wine">promise</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-7 md:pt-6 text-lg text-ink-soft leading-relaxed text-pretty">
            Maayoit is a Nigerian healthcare cooperative — and these are the people
            accountable for every claim, every consultation and every decision the
            organisation makes. Each one of them puts their name on the work.
          </p>
        </div>

        {/* MD — featured row */}
        <article className="grid grid-cols-12 gap-6 md:gap-10 items-start mb-px py-10 md:py-14 border-y-2 border-ink">
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <div className="aspect-[4/5] bg-wine text-cream relative overflow-hidden border-2 border-ink rounded-md">
              <div className="pointer-events-none absolute inset-0 stripes opacity-[0.08]" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display font-light leading-none tracking-[-0.02em] text-[14rem] md:text-[16rem] lg:text-[20rem] text-cream/95">
                  AA
                </span>
              </div>
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-cream/70">
                <span>№ 01</span>
                <span>Office of the MD</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/70">
                Since 2000
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute mb-4">
              Managing Director
            </p>
            <h3 className="font-display tracking-tight leading-[0.95] text-5xl md:text-6xl lg:text-7xl mb-6">
              Sir Dr. Ademola{" "}
              <span className="font-italic-serif text-wine">
                Aderibigbe
              </span>
            </h3>
            <p className="text-ink-soft text-lg leading-relaxed text-pretty max-w-2xl">
              Founded Maayoit Healthcare Limited in the year 2000 and has steered
              the cooperative through every chapter since — from the first hospital
              partnership in Ilorin to today's nationwide network. He still reads
              the difficult cases that land on the desk personally.
            </p>
          </div>
        </article>

        {/* Other team members — divided grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/15">
          {TEAM.map((m, i) => (
            <article
              key={m.name}
              className="bg-cream-soft p-7 md:p-8 hover:bg-ink hover:text-cream transition-colors group"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute group-hover:text-cream/60">
                  № {String(i + 2).padStart(2, "0")}
                </span>
                <div
                  className="w-14 h-14 rounded-full grid place-items-center font-display text-xl tracking-tight border-2"
                  style={{
                    background: m.tone,
                    color: "var(--cream)",
                    borderColor: m.tone,
                  }}
                >
                  {m.initials}
                </div>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute group-hover:text-cream/60 mb-3">
                {m.role}
              </p>
              <h4 className="font-display text-2xl md:text-[1.7rem] tracking-tight leading-[1.05]">
                {m.name}
              </h4>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between border-t border-ink/15 pt-6">
          <p className="font-display italic text-xl md:text-2xl text-ink-soft max-w-xl">
            Each desk has a name. Each name picks up the phone.
          </p>
          <Link
            href="/providers/find"
            className="text-sm text-ink-soft editorial-link hover:text-wine"
          >
            Reach the team →
          </Link>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15">
        <div className="grid grid-cols-12 gap-6 items-end">
          <h3 className="col-span-12 lg:col-span-8 font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
            Read the rest{" "}
            <span className="font-italic-serif text-wine">of the issue</span>.
          </h3>
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <Link
              href="/health-plans"
              className="group flex items-center justify-between bg-wine text-cream pl-6 pr-3 py-4 rounded-full hover:bg-ink transition-colors"
            >
              <span className="text-base">Health plans</span>
              <span className="w-10 h-10 rounded-full bg-cream text-wine grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
            <Link
              href="/resources"
              className="group flex items-center justify-between border border-ink/30 pl-6 pr-3 py-4 rounded-full hover:bg-ink hover:text-cream hover:border-ink transition-colors"
            >
              <span className="text-base">Resources & compliance</span>
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
