import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Stethoscope,
  Pill,
  Smile,
  Eye,
  Baby,
  HeartPulse,
  ShieldCheck,
  HeartHandshake,
  Quote,
  PhoneCall,
  Star,
  BadgeCheck,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-ink/15">
        <div className="pointer-events-none absolute -top-20 -right-20 w-[40rem] h-[40rem] halftone opacity-[0.05]" />

        <div className="px-4 md:px-6 lg:px-10 pt-10 md:pt-16 pb-8 relative">
          {/* Issue strap */}
          <div className="flex items-center justify-between mb-12 md:mb-16 text-[11px] uppercase tracking-[0.22em] font-mono text-ink-soft">
            <div className="flex items-center gap-3 md:gap-6">
              <span className="stamp">№ 001 / Cover Story</span>
              <span className="hidden sm:inline">Est. 2000 · Ilorin, Kwara</span>
            </div>
            <span className="hidden md:flex items-center gap-2">
              <BadgeCheck className="w-3.5 h-3.5" /> NHIA Accredited
            </span>
          </div>

          {/* Headline */}
          <div className="grid grid-cols-12 gap-4 md:gap-6 items-end">
            <h1 className="col-span-12 lg:col-span-9 font-display font-light tracking-[-0.04em] leading-[0.86] text-[14vw] md:text-[12vw] lg:text-[10vw] text-ink animate-rise">
              A legacy
              <br />
              of care{" "}
              <span className="font-italic-serif text-wine inline-flex items-center">
                since
              </span>
              <br />
              the year{" "}
              <span className="font-italic-serif text-wine">
                2000
              </span>
              <span className="text-ochre">.</span>
            </h1>

            {/* Rotating sticker */}
            <div
              className="hidden lg:block col-span-3 self-end pb-6 animate-stamp"
              aria-hidden
            >
              <div className="relative w-44 h-44 ml-auto">
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-full h-full animate-spin-slow"
                >
                  <defs>
                    <path
                      id="circle-path"
                      d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                    />
                  </defs>
                  <text
                    fill="currentColor"
                    className="text-ink font-mono"
                    fontSize="12"
                    letterSpacing="3"
                  >
                    <textPath href="#circle-path">
                      EST. 2000 · NHIA ACCREDITED · ILORIN · KWARA ·
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-20 h-20 rounded-full bg-wine grid place-items-center text-cream font-display text-3xl">
                    24<span className="text-ochre">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Subhead row */}
          <div className="grid grid-cols-12 gap-6 mt-12 md:mt-16 pt-8 border-t border-ink/15">
            <div className="col-span-12 md:col-span-5 lg:col-span-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute mb-3">
                Lede ─
              </p>
              <p className="font-display text-2xl md:text-[1.7rem] leading-[1.2] tracking-tight text-ink-soft">
                For twenty-four years, Maayoit Healthcare Limited has been Nigeria's
                quiet promise to{" "}
                <span className="font-italic-serif text-wine">families</span> —
                comprehensive private cover, community schemes, student protection,
                and care delivered like kin.
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute mb-3">
                Editor's Note ─
              </p>
              <p className="text-base leading-relaxed text-ink-soft text-pretty">
                One standard of care. Five plan types. No confusing tiers, no fine
                print written to be missed.
              </p>
            </div>

            <div className="col-span-12 md:col-span-3 flex flex-col items-start md:items-end gap-4 md:pt-6">
              <Link
                href="/health-plans"
                className="group inline-flex items-center gap-3 bg-wine text-cream pl-6 pr-3 py-3 rounded-full hover:bg-ink transition-colors"
              >
                <span className="text-sm tracking-tight">View Our Plans</span>
                <span className="w-9 h-9 rounded-full bg-cream text-wine grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
              <Link href="/providers/find" className="text-sm text-ink-soft editorial-link">
                Provider Search
              </Link>
            </div>
          </div>
        </div>

        {/* Trust metrics strip */}
        <div className="border-t border-ink/15 grid grid-cols-2 md:grid-cols-3 divide-x divide-ink/15">
          {[
            { n: "500+", l: "Hospital partners nationwide" },
            { n: "24+", l: "Years of unbroken service" },
            { n: "100%", l: "NHIA regulatory compliance" },
          ].map((s, i) => (
            <div key={i} className="px-4 md:px-6 lg:px-10 py-7 md:py-9">
              <p className="num-badge text-5xl md:text-6xl lg:text-7xl text-wine leading-none">
                {s.n}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] font-mono text-ink-mute">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TICKER ────────────────────────────────────────────── */}
      <section className="bg-ink text-cream py-5 overflow-hidden border-y-2 border-ink">
        <div className="marquee-track animate-marquee-slow">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-display italic text-2xl md:text-3xl whitespace-nowrap text-cream"
            >
              Comprehensive private cover
              <span className="text-ochre mx-6">✦</span>
              NHIA-accredited since 2000
              <span className="text-ochre mx-6">✦</span>
              500+ hospital partners
              <span className="text-ochre mx-6">✦</span>
              Family-first health care
              <span className="text-ochre mx-6">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── FEATURE BANNER IMAGE ──────────────────────────────── */}
      <section className="relative h-[60vh] md:h-[80vh] min-h-[420px] overflow-hidden border-b border-ink/15">
        <Image
          src="https://images.unsplash.com/photo-1589199051916-92cd36b97ffa?auto=format&fit=crop&w=2000&q=80"
          alt="A Nigerian couple in traditional attire — the people Maayoit was built to protect"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent" />

        <div className="absolute inset-0 px-4 md:px-6 lg:px-10 flex items-end pb-10 md:pb-14">
          <div className="max-w-3xl text-cream">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream/70 mb-4">
              § Cover photo
            </p>
            <p className="font-display text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-pretty">
              For the people you'd give{" "}
              <span className="font-italic-serif text-blush">anything</span>{" "}
              to protect — that's the standard we set.
            </p>
          </div>
        </div>
      </section>

      {/* ─── WHAT EVERY PLAN INCLUDES ──────────────────────────── */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15 relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[44rem] h-[44rem] halftone opacity-[0.04]" />

        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14 relative">
          <div className="col-span-12 md:col-span-5">
            <p className="stamp mb-6">§ 01 — What you get</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
              The care{" "}
              <span className="font-italic-serif text-wine">
                that's actually
              </span>{" "}
              covered.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-7 md:pt-12 text-ink-soft text-lg leading-relaxed text-pretty">
            Every Maayoit plan delivers a complete spectrum of medical services —
            from your first specialist consultation to in-patient surgery and
            follow-up. No surprises, no carve-outs, no "out-of-network" excuses.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-ink/15 relative">
          {[
            {
              icon: <Stethoscope className="w-6 h-6" strokeWidth={1.5} />,
              title: "Specialist Consultations",
              body: "See cardiologists, gynaecologists, paediatricians and more — without referral lottery.",
            },
            {
              icon: <HeartPulse className="w-6 h-6" strokeWidth={1.5} />,
              title: "In-patient Care",
              body: "Hospital admissions, surgeries, intensive care, and follow-up — all covered.",
            },
            {
              icon: <Pill className="w-6 h-6" strokeWidth={1.5} />,
              title: "Prescription Drugs",
              body: "Maayoit-approved formulary including generics and chronic-condition medications.",
            },
            {
              icon: <Baby className="w-6 h-6" strokeWidth={1.5} />,
              title: "Maternity & Paediatrics",
              body: "Antenatal cover, delivery, immunisations, and child wellness checks.",
            },
            {
              icon: <Smile className="w-6 h-6" strokeWidth={1.5} />,
              title: "Dental Care",
              body: "Routine cleanings, fillings, extractions, and emergency dental visits.",
            },
            {
              icon: <Eye className="w-6 h-6" strokeWidth={1.5} />,
              title: "Optical Care",
              body: "Eye examinations, prescription lenses, and ophthalmologist referrals.",
            },
            {
              icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
              title: "Preventive Screenings",
              body: "Annual health checks, diagnostics, and wellness programmes built in.",
            },
            {
              icon: <PhoneCall className="w-6 h-6" strokeWidth={1.5} />,
              title: "24/7 Helpline",
              body: "A real person on the line — for emergencies, advice, or coordinating care.",
            },
          ].map((s) => (
            <article
              key={s.title}
              className="bg-cream p-6 md:p-7 hover:bg-cream-soft transition-colors group"
            >
              <span className="inline-flex p-2.5 rounded-full border border-ink/20 text-wine mb-5">
                {s.icon}
              </span>
              <h3 className="font-display text-2xl tracking-tight leading-tight mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed text-pretty">
                {s.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-ink/15">
          <p className="font-display italic text-2xl md:text-3xl text-ink-soft max-w-xl">
            Coverage you can read in one breath.{" "}
            <span className="text-wine">No fine print theatre.</span>
          </p>
          <Link
            href="/health-plans"
            className="group inline-flex items-center gap-3 bg-ink text-cream pl-6 pr-3 py-3 rounded-full hover:bg-wine transition-colors"
          >
            <span className="text-sm tracking-tight">See plan benefits in full</span>
            <span className="w-9 h-9 rounded-full bg-cream text-ink grid place-items-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* ─── PLANS AT A GLANCE ─────────────────────────────────── */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15 bg-cream-soft">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14">
          <div className="col-span-12 md:col-span-7">
            <p className="stamp mb-6">§ 02 — A plan for every life</p>
            <h3 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
              Five programs.
              <br />
              <span className="font-italic-serif text-wine">One</span> standard
              of care.
            </h3>
          </div>
          <div className="col-span-12 md:col-span-5 md:pt-12 text-ink-soft text-pretty">
            From premium private cover for executives, to community-rooted social
            schemes for the informal sector — Maayoit's programs are written for
            every shape of Nigerian life. Choose by who you are, not by tier.
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <PlanPreview
            href="/health-plans#phip"
            num="01"
            tag="PHIP"
            title="The standard of private excellence."
            desc="Flagship private plan with Platinum, Gold, Silver & Bronze tiers — for individuals, families and corporates."
            tone="wine"
            big
          />
          <PlanPreview
            href="/health-plans#tiship"
            num="02"
            tag="TISHIP"
            title="Securing the future of education."
            desc="Tertiary cover for students nationwide."
            tone="moss"
          />
          <PlanPreview
            href="/health-plans#cbship"
            num="03"
            tag="CBSHIP"
            title="Healthcare for the heartland."
            desc="Community-based cover for the informal sector."
            tone="clay"
          />
          <PlanPreview
            href="/health-plans#ship"
            num="04"
            tag="SHIP"
            title="The foundation of collective wellness."
            desc="Social plan for formal sector & organised groups."
            tone="ochre"
          />
          <PlanPreview
            href="/health-plans#nhia"
            num="05"
            tag="NHIA Plan"
            title="National standard. Maayoit quality."
            desc="Accredited public-sector cover since 2000."
            tone="wine"
          />
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-ink/15">
          <p className="font-display italic text-2xl md:text-3xl text-ink-soft max-w-xl">
            Not sure which fits?{" "}
            <span className="text-wine">We'll help you choose.</span>
          </p>
          <Link
            href="/health-plans"
            className="group inline-flex items-center gap-3 bg-ink text-cream pl-6 pr-3 py-3 rounded-full hover:bg-wine transition-colors"
          >
            <span className="text-sm tracking-tight">Compare all coverage</span>
            <span className="w-9 h-9 rounded-full bg-cream text-ink grid place-items-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* ─── PULL QUOTE ─────────────────────────────────────────── */}
      <section className="px-4 md:px-6 lg:px-10 py-24 md:py-40 bg-ink text-cream relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 stripes opacity-[0.06]" />
        <div className="relative grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.22em] text-cream/60 self-start">
            § 03 — From the
            <br />
            Managing Director
          </p>
          <blockquote className="col-span-12 md:col-span-9 font-display tracking-tight leading-[1.02] text-[7vw] md:text-[5.2vw] lg:text-[4.6vw]">
            <Quote className="w-10 h-10 md:w-14 md:h-14 text-ochre -ml-1 mb-4" />
            We built Maayoit so that quality healthcare would be a{" "}
            <span className="font-italic-serif text-blush">right</span>, not a
            privilege — and we've spent 24 years keeping that promise
            <span className="text-ochre">.</span>
          </blockquote>
          <div className="col-span-12 md:col-start-4 md:col-span-9 mt-8 flex items-center gap-4">
            <div className="h-px bg-cream/40 w-16" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream/70">
              Sir Dr. Ademola Aderibigbe · Managing Director
            </span>
            <Link
              href="/about"
              className="ml-auto text-sm text-cream/80 editorial-link hover:text-blush"
            >
              The full story
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHY MAAYOIT ──────────────────────────────────────── */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-5">
            <p className="stamp mb-5">§ 04 — Why Maayoit</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
              The reasons
              <br />
              <span className="font-italic-serif text-wine">families
              </span> stay.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-7 md:pt-8 text-ink-soft text-lg leading-relaxed text-pretty">
            We're not the cheapest health plan in Nigeria. We're the one that
            answers the phone at 2am, processes your claim the same week, and
            treats your mother like she's our own.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/15">
          {[
            {
              icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
              tag: "Integrity",
              title: "Transparent claims & ethical care",
              desc: "NHIA-accredited since 2000. Audited annually. Published claim rules. No hidden clauses, no selective interpretation.",
            },
            {
              icon: <HeartHandshake className="w-6 h-6" strokeWidth={1.5} />,
              tag: "Empathy",
              title: "Care that knows your name",
              desc: "Every patient has a name and a story. Our care managers know yours by heart — not just your member ID.",
            },
            {
              icon: <Star className="w-6 h-6" strokeWidth={1.5} />,
              tag: "Quality",
              title: "Only the best clinics in our network",
              desc: "500+ hospitals strictly vetted for clinical excellence, facility standards and patient satisfaction.",
            },
          ].map((v, i) => (
            <article
              key={i}
              className="bg-cream p-7 md:p-8 hover:bg-ink hover:text-cream transition-colors group"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="num-badge text-5xl text-wine group-hover:text-blush transition-colors">
                  0{i + 1}
                </span>
                <span className="border border-ink/30 group-hover:border-cream/40 rounded-full p-2.5">
                  {v.icon}
                </span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute group-hover:text-cream/60 mb-2">
                {v.tag}
              </p>
              <h4 className="font-display text-2xl md:text-3xl tracking-tight mb-3 leading-tight">
                {v.title}
              </h4>
              <p className="leading-relaxed opacity-80">{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ─── MEMBER VOICES ─────────────────────────────────────── */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15 bg-cream-soft">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-5">
            <p className="stamp mb-5">§ 05 — Member voices</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
              In{" "}
              <span className="font-italic-serif text-wine">their words</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-7 md:pt-8 text-ink-soft text-lg leading-relaxed text-pretty">
            What members tell us — usually after the moment they realised the
            cover actually shows up when it matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "When my daughter needed surgery, I called Maayoit at 11pm. By 7am the next morning her bed at the partner hospital was confirmed. That's the only review I'll ever need to give.",
              name: "Mrs. Adebayo",
              tag: "PHIP Family Royal · Lagos",
              photo:
                "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2.5&w=200&h=200&q=80",
            },
            {
              quote:
                "Our SME has been on Corporate Silver for six years. Claims clear in two weeks, our staff don't dread enrolment, and HR sends us thank-you notes.",
              name: "Engr. Chukwu",
              tag: "Corporate Silver · Port Harcourt",
              photo:
                "https://images.unsplash.com/photo-1645736593731-4eef033ac37a?auto=format&fit=facearea&facepad=2.5&w=200&h=200&q=80",
            },
            {
              quote:
                "The TISHIP team handled everything before my orientation week even started. I haven't paid for a single campus clinic visit since.",
              name: "Tomi A.",
              tag: "TISHIP · University of Ilorin",
              photo:
                "https://images.unsplash.com/photo-1643297654416-05795d62e39c?auto=format&fit=facearea&facepad=2.5&w=200&h=200&q=80",
            },
          ].map((t) => (
            <article
              key={t.name}
              className="border border-ink/15 bg-cream p-7 flex flex-col rounded-md float-hover"
            >
              <Quote className="w-7 h-7 text-wine mb-5" />
              <p className="font-display text-xl md:text-2xl leading-[1.3] tracking-tight text-ink mb-6 text-pretty">
                "{t.quote}"
              </p>
              <div className="mt-auto pt-5 border-t border-ink/10 flex items-center gap-4">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover border border-ink/15"
                />
                <div>
                  <p className="font-display text-lg tracking-tight leading-tight">
                    {t.name}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute mt-1">
                    {t.tag}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────── */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-32 border-b border-ink/15 relative">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="stamp mb-6">§ Begin</p>
            <h3 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9]">
              Your health
              <br />
              shouldn't wait
              <br />
              for the{" "}
              <span className="font-italic-serif text-wine">paperwork.</span>
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <p className="text-ink-soft text-lg leading-relaxed">
              Pick a plan that fits your life — we'll handle enrolment, your ID
              card, and your first hospital visit with the urgency we'd give our
              own family.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/health-plans"
                className="group flex items-center justify-between bg-wine text-cream pl-6 pr-3 py-4 rounded-full hover:bg-ink transition-colors"
              >
                <span className="text-base tracking-tight">View Our Plans</span>
                <span className="w-10 h-10 rounded-full bg-cream text-wine grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </Link>
              <Link
                href="/providers/find"
                className="group flex items-center justify-between border border-ink/30 pl-6 pr-3 py-4 rounded-full hover:bg-ink hover:text-cream hover:border-ink transition-colors"
              >
                <span className="text-base tracking-tight">Provider search</span>
                <span className="w-10 h-10 rounded-full bg-ink text-cream grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlanPreview({
  href,
  num,
  tag,
  title,
  desc,
  tone,
  big,
}: {
  href: string;
  num: string;
  tag: string;
  title: string;
  desc: string;
  tone: "wine" | "ochre" | "moss" | "clay";
  big?: boolean;
}) {
  const toneClass = {
    wine: "text-wine",
    ochre: "text-ochre",
    moss: "text-moss",
    clay: "text-clay",
  }[tone];

  return (
    <Link
      href={href}
      className={`group relative col-span-12 ${
        big
          ? "md:col-span-12 lg:col-span-6 lg:row-span-2"
          : "md:col-span-6 lg:col-span-3"
      } border border-ink/20 bg-cream hover:bg-ink hover:text-cream transition-colors p-6 md:p-7 flex flex-col rounded-md overflow-hidden float-hover`}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute group-hover:text-cream/60">
          № {num} · {tag}
        </span>
        <span
          className={`${toneClass} group-hover:text-cream font-display text-xl`}
        >
          →
        </span>
      </div>

      <h4
        className={`font-display tracking-tight leading-[1.02] mb-4 text-pretty ${
          big ? "text-4xl md:text-5xl lg:text-6xl" : "text-2xl md:text-3xl"
        }`}
      >
        {title}
      </h4>
      <p className="text-sm text-ink-soft group-hover:text-cream/75 mt-auto">
        {desc}
      </p>

      <span className="absolute bottom-5 right-5 w-9 h-9 rounded-full border border-ink/30 group-hover:bg-cream group-hover:text-ink grid place-items-center transition-all group-hover:rotate-45">
        <ArrowUpRight className="w-4 h-4" />
      </span>
    </Link>
  );
}
