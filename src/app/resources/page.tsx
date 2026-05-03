import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  FileText,
  Download,
  BookOpen,
  Smartphone,
  ShieldCheck,
  Lock,
  Server,
  Sparkles,
} from "lucide-react";

const MEMBER_DOCS = [
  {
    title: "Member Handbook",
    sub: "PHIP · SHIP · TISHIP · CBSHIP",
    desc: "The full guide to your plan — what's covered, how to claim, who to call.",
    icon: <BookOpen className="w-5 h-5" strokeWidth={1.5} />,
    size: "PDF · 2.4 MB",
    ver: "Edition 2024.3",
  },
  {
    title: "2026 Drug Formulary",
    sub: "NHIA-aligned drug list",
    desc: "The complete list of covered medications, dosage limits and generic equivalents.",
    icon: <FileText className="w-5 h-5" strokeWidth={1.5} />,
    size: "PDF · 4.1 MB",
    ver: "Reviewed Q1 2026",
  },
  {
    title: "Member Portal Guide",
    sub: "Online & mobile",
    desc: "How to register, view your e-ID card, find a partner provider, and submit claims.",
    icon: <Smartphone className="w-5 h-5" strokeWidth={1.5} />,
    size: "PDF · 1.8 MB",
    ver: "Edition 2026.1",
  },
];

const CORP_DOCS = [
  {
    title: "NHIA Operational Guidelines",
    sub: "Federal compliance document",
    desc: "Maayoit's operational alignment with the National Health Insurance Authority's published standards.",
    icon: <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />,
    size: "PDF · 3.6 MB",
    ver: "2026 review cycle",
  },
  {
    title: "Data Protection Policy",
    sub: "NDPR compliant",
    desc: "How we collect, store, and protect enrollee data — aligned with Nigeria's Data Protection Regulation.",
    icon: <Lock className="w-5 h-5" strokeWidth={1.5} />,
    size: "PDF · 1.1 MB",
    ver: "Revised Feb 2026",
  },
  {
    title: "Operational SOPs",
    sub: "Standard Operating Procedures",
    desc: "Our framework for protecting member records, processing claims, and governing provider relationships.",
    icon: <Server className="w-5 h-5" strokeWidth={1.5} />,
    size: "PDF · 2.7 MB",
    ver: "Rev. 12",
  },
];

const TIPS = [
  {
    title: "Managing Diabetes Type II Risk",
    body: "Aim for at least 30 minutes of moderate-intensity exercise, such as brisk walking, five days a week. Swap refined carbohydrates for whole grains, and monitor your blood sugar visually by reducing processed sugars in beverages.",
  },
  {
    title: "Heart Health & Hypertension",
    body: "Reduce sodium intake by avoiding heavily processed foods and using natural spices for flavour. Practise stress-reduction techniques like deep breathing for 10 minutes daily to naturally lower cortisol and blood pressure.",
  },
  {
    title: "Mental Wellness Baseline",
    body: "Ensure 7–8 hours of uninterrupted sleep per night. Establish a 'digital sunset' 30 minutes before bed, avoiding screen time to allow your brain to release melatonin effectively. Speak up if you feel overwhelmed.",
  },
  {
    title: "Maternal Health Vital Signs",
    body: "Keep an active log of fetal movement during the third trimester. Stay hydrated with at least 8–10 glasses of water daily, and never skip prescribed prenatal vitamins with folic acid.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="px-4 md:px-6 lg:px-10 pt-10 md:pt-16 pb-14 border-b border-ink/15 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 w-[40rem] h-[40rem] halftone opacity-[0.06]" />

        <div className="flex items-center justify-between mb-12 text-[11px] uppercase tracking-[0.22em] font-mono text-ink-soft">
          <span className="stamp">§ Resources & Compliance</span>
          <span className="hidden md:inline">Preparing for 2026 NHIA Reaccreditation</span>
        </div>

        <div className="grid grid-cols-12 gap-6 items-end mb-12">
          <h1 className="col-span-12 lg:col-span-9 font-display font-light tracking-[-0.04em] leading-[0.86] text-[12vw] md:text-[10vw] lg:text-[8vw]">
            Transparency
            <br />
            you can{" "}
            <span className="font-italic-serif text-wine">trust</span>.
          </h1>
          <div className="col-span-12 lg:col-span-3 lg:pb-4 text-ink-soft text-pretty">
            As we prepare for our 2026 NHIA Reaccreditation, we've made our standards
            public. Knowledge is the first step to better health.
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="#member"
            className="group inline-flex items-center gap-2 bg-wine text-cream pl-5 pr-2 py-3 rounded-full hover:bg-ink transition-colors"
          >
            <span className="text-sm">Member downloads</span>
            <span className="w-8 h-8 rounded-full bg-cream text-wine grid place-items-center group-hover:rotate-45 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
          <a
            href="#regulatory"
            className="inline-flex items-center px-5 py-3 rounded-full border border-ink/30 hover:border-ink text-sm"
          >
            Corporate & regulatory →
          </a>
          <a
            href="#tips"
            className="inline-flex items-center px-5 py-3 rounded-full border border-ink/30 hover:border-ink text-sm"
          >
            Preventive tips →
          </a>
        </div>
      </section>

      {/* MEMBER RESOURCES */}
      <section
        id="member"
        className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15 scroll-mt-32"
      >
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-5">
            <p className="stamp mb-5">§ 01 — For Members</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
              Read{" "}
              <span className="font-italic-serif text-wine">everything</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-7 md:pt-8 text-lg text-ink-soft leading-relaxed text-pretty">
            Your handbook, the covered drugs list, and the guide to the Maaysoft
            app. Always free, always current, always downloadable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/15">
          {MEMBER_DOCS.map((d) => (
            <DocCard key={d.title} doc={d} />
          ))}
        </div>
      </section>

      {/* REGULATORY DOCS */}
      <section
        id="regulatory"
        className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15 bg-ink text-cream relative overflow-hidden scroll-mt-32"
      >
        <div className="pointer-events-none absolute inset-0 stripes opacity-[0.05]" />

        <div className="relative grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-5">
            <p className="stamp !bg-ink !text-cream !border-cream mb-5">
              § 02 — Corporate & Regulatory
            </p>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
              Our standards,{" "}
              <span className="font-italic-serif text-blush">published</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-7 md:pt-8 text-lg text-cream/75 leading-relaxed text-pretty">
            NHIA guidelines, our NDPR-compliant data protection policy, and the
            operational SOPs that govern how we handle every enrollee record and
            claim.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/15">
          {CORP_DOCS.map((d) => (
            <DocCard key={d.title} doc={d} dark />
          ))}
        </div>
      </section>

      {/* PREVENTIVE TIPS */}
      <section
        id="tips"
        className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-b border-ink/15 bg-cream-soft scroll-mt-32"
      >
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-4">
            <p className="stamp mb-5">§ 03 — Quick reference</p>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
              Preventive
              <br />
              <span className="font-italic-serif text-wine">tips</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-8 md:pt-6 text-ink-soft text-lg leading-relaxed text-pretty">
            Actionable advice to incorporate into your daily routine — compiled by
            our in-house clinicians and refreshed each quarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink">
          {TIPS.map((t, i) => (
            <article
              key={i}
              className="bg-cream p-7 md:p-9 hover:bg-cream-deep transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="num-badge text-5xl text-wine leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-tight">
                  {t.title}
                </h3>
              </div>
              <p className="text-ink-soft leading-relaxed text-pretty drop-cap">
                {t.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* OUTREACH PHOTO + CTA */}
      <section className="px-4 md:px-6 lg:px-10 py-24 md:py-28 border-b border-ink/15">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <figure className="col-span-12 md:col-span-6 relative aspect-[4/5] md:aspect-[5/6] overflow-hidden rounded-md border border-ink/15 order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1400&q=80"
              alt="Children at a Maayoit community sensitization outreach"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </figure>

          <div className="col-span-12 md:col-span-6 order-1 md:order-2 space-y-6">
            <p className="stamp">
              <Sparkles className="w-3 h-3" /> Bring us in
            </p>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-[0.95]">
              Bring a session to your{" "}
              <span className="font-italic-serif text-wine">workplace, school</span>{" "}
              or community.
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed text-pretty">
              We facilitate free sensitization sessions for organisations on our
              Corporate, School and Community plans — covering everything from
              maternal health and chronic disease to mental wellness and
              workplace ergonomics.
            </p>
            <Link
              href="/health-plans"
              className="group inline-flex items-center gap-3 bg-wine text-cream pl-6 pr-3 py-4 rounded-full hover:bg-ink transition-colors"
            >
              <span className="text-base">Request a booking</span>
              <span className="w-10 h-10 rounded-full bg-cream text-wine grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

type Doc = {
  title: string;
  sub: string;
  desc: string;
  icon: React.ReactNode;
  size: string;
  ver: string;
};

function DocCard({ doc, dark }: { doc: Doc; dark?: boolean }) {
  return (
    <article
      className={`group p-7 md:p-8 transition-colors cursor-pointer ${
        dark
          ? "bg-ink hover:bg-[#221E18] text-cream"
          : "bg-cream hover:bg-cream-deep"
      }`}
    >
      <div className="flex items-start justify-between mb-8">
        <span
          className={`p-3 rounded-full border ${
            dark
              ? "border-cream/25 text-blush"
              : "border-ink/25 text-wine"
          }`}
        >
          {doc.icon}
        </span>
        <Download
          className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ${
            dark ? "text-blush" : "text-wine"
          }`}
        />
      </div>

      <p
        className={`font-mono text-[10px] uppercase tracking-[0.22em] mb-2 ${
          dark ? "text-cream/60" : "text-ink-mute"
        }`}
      >
        {doc.sub}
      </p>
      <h3 className="font-display text-2xl md:text-3xl tracking-tight leading-tight mb-3">
        {doc.title}
      </h3>
      <p
        className={`text-sm leading-relaxed mb-6 text-pretty ${
          dark ? "text-cream/75" : "text-ink-soft"
        }`}
      >
        {doc.desc}
      </p>

      <div
        className={`flex items-center justify-between pt-4 border-t ${
          dark ? "border-cream/15" : "border-ink/10"
        }`}
      >
        <div
          className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
            dark ? "text-cream/55" : "text-ink-mute"
          }`}
        >
          <span>{doc.size}</span>
          <span className="mx-2">·</span>
          <span>{doc.ver}</span>
        </div>
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.18em] editorial-link ${
            dark ? "text-blush" : "text-wine"
          }`}
        >
          Download
        </span>
      </div>
    </article>
  );
}
