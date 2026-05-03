"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
  HeadphonesIcon,
} from "lucide-react";

const TO_EMAIL = "operations@maayoithealth.org";
const CC_EMAIL = "info@maayoithealth.org";

export default function JoinNetworkPage() {
  const [form, setForm] = useState({
    facility: "",
    state: "",
    city: "",
    address: "",
    category: "Primary Healthcare Centre / General Clinic",
    director: "",
    phone: "",
    email: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Hospital Pre-Qualification — ${form.facility || "New facility"}`;
    const body = [
      `Facility name: ${form.facility}`,
      `State: ${form.state}`,
      `City / Town: ${form.city}`,
      `Full physical address: ${form.address}`,
      `Facility category: ${form.category}`,
      `Medical director: ${form.director}`,
      `Direct phone: ${form.phone}`,
      `Official email: ${form.email}`,
    ].join("\n");

    const params = new URLSearchParams({
      cc: CC_EMAIL,
      subject,
      body,
    });
    const url = `mailto:${TO_EMAIL}?${params.toString().replace(/\+/g, "%20")}`;

    const a = document.createElement("a");
    a.href = url;
    a.rel = "noopener";
    a.target = "_self";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const benefits = [
    {
      num: "i.",
      icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
      title: "Automated Claims",
      desc: "End-to-end claims processing — 14-day payment turnaround on every verified submission.",
    },
    {
      num: "ii.",
      icon: <HeadphonesIcon className="w-6 h-6" strokeWidth={1.5} />,
      title: "24/7 Provider Support",
      desc: "A dedicated provider relations desk — reachable around the clock, not just during business hours.",
    },
    {
      num: "iii.",
      icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
      title: "Steady Enrollee Flow",
      desc: "Immediate access to our growing base of individual, corporate and institutional members nationwide.",
    },
    {
      num: "iv.",
      icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
      title: "Transparent Audits",
      desc: "NHIA-aligned claim rules and published tariffs. No hidden clauses, no selective interpretation.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="px-4 md:px-6 lg:px-10 pt-10 md:pt-16 pb-14 border-b border-ink/15 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 w-[42rem] h-[42rem] halftone opacity-[0.06]" />

        <div className="flex items-center justify-between mb-12 text-[11px] uppercase tracking-[0.22em] font-mono text-ink-soft">
          <span className="stamp">§ For Providers</span>
          <span className="hidden md:inline">Pre-qualification opens 48-hour review</span>
        </div>

        <div className="grid grid-cols-12 gap-6 items-end">
          <h1 className="col-span-12 lg:col-span-9 font-display font-light tracking-[-0.04em] leading-[0.86] text-[12vw] md:text-[10vw] lg:text-[8vw]">
            Partner with
            <br />
            <span className="font-italic-serif text-wine">MHL</span>.
          </h1>
          <div className="col-span-12 lg:col-span-3 lg:pb-4 text-ink-soft text-pretty">
            Join one of Nigeria's most respected HMO networks — prompt claims,
            24/7 provider support, and a steady stream of satisfied enrollees.
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="px-4 md:px-6 lg:px-10 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          {/* Left: Why partners + criteria */}
          <div className="col-span-12 lg:col-span-5 space-y-12 lg:sticky lg:top-32 lg:self-start">
            <div>
              <p className="stamp mb-6">§ 01 — Why providers choose us</p>
              <div className="space-y-px bg-ink/15">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="bg-cream p-6 flex items-start gap-5 hover:bg-cream-deep transition-colors"
                  >
                    <span className="num-badge text-4xl text-wine leading-none w-12 shrink-0">
                      {b.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-wine">{b.icon}</span>
                        <h3 className="font-display text-2xl tracking-tight">
                          {b.title}
                        </h3>
                      </div>
                      <p className="text-ink-soft leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-ink text-cream p-7 rounded-md">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/60 mb-4">
                § 02 — Minimum qualification
              </p>
              <h4 className="font-display text-3xl tracking-tight mb-5">
                What we need
                <br />
                <span className="font-italic-serif text-blush">from you.</span>
              </h4>
              <ul className="space-y-3">
                {[
                  "Valid State Ministry of Health Operating License",
                  "Standard infection-control protocols",
                  "At least one fully registered Medical Officer on 24-hour duty",
                  "Computerised records mechanism (desirable)",
                ].map((req, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 pb-3 border-b border-cream/15 last:border-0"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-blush shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-cream/90">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="col-span-12 lg:col-span-7">
            <div className="border-2 border-ink rounded-md overflow-hidden">
              <header className="bg-ink text-cream p-7 md:p-9">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/60 mb-2">
                  Form 04 — Hospital Pre-Qualification
                </p>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-tight">
                  Tell us about your{" "}
                  <span className="font-italic-serif text-blush">facility</span>.
                </h2>
                <p className="mt-3 text-cream/70 text-sm max-w-md">
                  Our provider relations team will reach out within 48 hours for an
                  initial inspection.
                </p>
              </header>

              <form onSubmit={handleSubmit} className="bg-cream p-7 md:p-9 space-y-7">
                <Field label="Facility name" required>
                  <Input
                    required
                    value={form.facility}
                    onChange={update("facility")}
                    placeholder="e.g. St. Luke's Specialist Hospital"
                    className="border-0 border-b border-ink/30 rounded-none bg-transparent h-12 px-0 text-base focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-wine placeholder:text-ink-mute/60"
                  />
                </Field>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="State" required>
                    <Input
                      required
                      value={form.state}
                      onChange={update("state")}
                      placeholder="e.g. Kwara"
                      className="border-0 border-b border-ink/30 rounded-none bg-transparent h-12 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-wine"
                    />
                  </Field>
                  <Field label="City / Town" required>
                    <Input
                      required
                      value={form.city}
                      onChange={update("city")}
                      placeholder="e.g. Ilorin"
                      className="border-0 border-b border-ink/30 rounded-none bg-transparent h-12 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-wine"
                    />
                  </Field>
                </div>

                <Field label="Full physical address" required>
                  <Input
                    required
                    value={form.address}
                    onChange={update("address")}
                    placeholder="Street address"
                    className="border-0 border-b border-ink/30 rounded-none bg-transparent h-12 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-wine"
                  />
                </Field>

                <Field label="Facility category" required>
                  <select
                    required
                    value={form.category}
                    onChange={update("category")}
                    className="w-full h-12 border-0 border-b border-ink/30 bg-transparent text-base focus:outline-none focus:border-wine"
                  >
                    <option>Primary Healthcare Centre / General Clinic</option>
                    <option>Specialist Hospital</option>
                    <option>Dental Clinic</option>
                    <option>Eye Clinic / Optometrist</option>
                    <option>Diagnostic Centre / Laboratory</option>
                    <option>Pharmacy</option>
                  </select>
                </Field>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="Medical director's name" required>
                    <Input
                      required
                      value={form.director}
                      onChange={update("director")}
                      placeholder="Full Name"
                      className="border-0 border-b border-ink/30 rounded-none bg-transparent h-12 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-wine"
                    />
                  </Field>
                  <Field label="Direct phone number" required>
                    <Input
                      required
                      value={form.phone}
                      onChange={update("phone")}
                      type="tel"
                      placeholder="+234..."
                      className="border-0 border-b border-ink/30 rounded-none bg-transparent h-12 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-wine"
                    />
                  </Field>
                </div>

                <Field label="Official email address" required>
                  <Input
                    required
                    value={form.email}
                    onChange={update("email")}
                    type="email"
                    placeholder="contact@hospital.com"
                    className="border-0 border-b border-ink/30 rounded-none bg-transparent h-12 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-wine"
                  />
                </Field>

                <button
                  type="submit"
                  className="group w-full bg-wine text-cream rounded-full pl-6 pr-3 py-4 hover:bg-ink transition-colors flex items-center justify-between"
                >
                  <span className="text-base">Submit qualification request</span>
                  <span className="w-10 h-10 rounded-full bg-cream text-wine grid place-items-center group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </button>
                <p className="text-xs text-ink-mute text-center flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  By submitting you consent to a background verification on your
                  facility prior to contact.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFF AGREEMENTS */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-28 border-t border-ink/15 bg-cream-soft">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-7">
            <p className="stamp mb-6">§ 03 — Tariff Agreements</p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
              Pick the agreement
              <br />
              that fits your{" "}
              <span className="font-italic-serif text-wine">facility</span>.
            </h2>
          </div>
          <p className="col-span-12 md:col-span-5 md:pt-12 text-ink-soft text-lg leading-relaxed text-pretty">
            Every accredited HCF signs onto one of four tariff frameworks. Each
            covers different scopes of service and aligns to the relevant
            regulatory body's price schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border-y-2 border-ink">
          {[
            {
              num: "i.",
              code: "NHIA Basic",
              tone: "var(--wine)",
              desc: "Aligned to the National Health Insurance Authority's basic benefit package — primary care, common procedures, and the standard drug formulary.",
              tag: "National regulator",
            },
            {
              num: "ii.",
              code: "NHIA Custom",
              tone: "var(--ochre)",
              desc: "NHIA-aligned but tailored for facilities offering specialised services — surgery, advanced diagnostics or sub-specialty practice.",
              tag: "Specialised NHIA",
            },
            {
              num: "iii.",
              code: "MHL Basic",
              tone: "var(--moss)",
              desc: "Maayoit Healthcare Limited's in-house basic agreement — for clinics serving members on the Maaycare Classic and Deluxe tiers.",
              tag: "Maayoit standard",
            },
            {
              num: "iv.",
              code: "MHL Custom",
              tone: "var(--clay)",
              desc: "MHL's premium agreement — for facilities supporting Maaycare Executive / Pro members, MaayMart+ maternity and bespoke corporate programmes.",
              tag: "Maayoit premium",
            },
          ].map((t) => (
            <article
              key={t.code}
              className="bg-cream p-7 md:p-8 hover:bg-ink hover:text-cream transition-colors group"
            >
              <div className="flex items-start justify-between mb-8">
                <span
                  className="num-badge text-5xl"
                  style={{ color: t.tone }}
                >
                  {t.num}
                </span>
                <span
                  className="w-10 h-10 rounded-full grid place-items-center"
                  style={{ background: t.tone, color: "var(--cream)" }}
                >
                  <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute group-hover:text-cream/60 mb-2">
                {t.tag}
              </p>
              <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-3 leading-tight">
                {t.code}
              </h3>
              <p className="text-sm leading-relaxed opacity-80 text-pretty">
                {t.desc}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 font-display italic text-xl md:text-2xl text-ink-soft max-w-3xl">
          Your provider relations contact will help you choose during the
          accreditation visit — and we publish the full tariff schedules for
          partner facilities to review.
        </p>
      </section>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute block mb-1">
        {label}
        {required && <span className="text-wine ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}
