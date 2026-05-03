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

export default function JoinNetworkPage() {
  const benefits = [
    {
      num: "i.",
      icon: <Zap className="w-6 h-6" strokeWidth={1.5} />,
      title: "Automated Claims",
      desc: "Claims processed end-to-end on Maaysoft — 14-day payment turnaround on every verified submission.",
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
            Join Nigeria's most technologically advanced HMO network — automated
            claims processing, 24/7 provider support, and a steady stream of
            satisfied enrollees.
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

              <form className="bg-cream p-7 md:p-9 space-y-7">
                <Field label="Facility name" required>
                  <Input
                    placeholder="e.g. St. Luke's Specialist Hospital"
                    className="border-0 border-b border-ink/30 rounded-none bg-transparent h-12 px-0 text-base focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-wine placeholder:text-ink-mute/60"
                  />
                </Field>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field label="State" required>
                    <Input
                      placeholder="e.g. Kwara"
                      className="border-0 border-b border-ink/30 rounded-none bg-transparent h-12 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-wine"
                    />
                  </Field>
                  <Field label="City / Town" required>
                    <Input
                      placeholder="e.g. Ilorin"
                      className="border-0 border-b border-ink/30 rounded-none bg-transparent h-12 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-wine"
                    />
                  </Field>
                </div>

                <Field label="Full physical address" required>
                  <Input
                    placeholder="Street address"
                    className="border-0 border-b border-ink/30 rounded-none bg-transparent h-12 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-wine"
                  />
                </Field>

                <Field label="Facility category" required>
                  <select className="w-full h-12 border-0 border-b border-ink/30 bg-transparent text-base focus:outline-none focus:border-wine">
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
                      placeholder="Full Name"
                      className="border-0 border-b border-ink/30 rounded-none bg-transparent h-12 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-wine"
                    />
                  </Field>
                  <Field label="Direct phone number" required>
                    <Input
                      type="tel"
                      placeholder="+234..."
                      className="border-0 border-b border-ink/30 rounded-none bg-transparent h-12 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-wine"
                    />
                  </Field>
                </div>

                <Field label="Official email address" required>
                  <Input
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
