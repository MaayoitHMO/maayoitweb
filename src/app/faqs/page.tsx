import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowUpRight, PhoneCall, Mail } from "lucide-react";

const FAQS = [
  {
    cat: "Enrollment",
    question: "How quickly does my Maayoit cover begin once I enrol?",
    answer:
      "Coverage begins the moment your enrolment documents are verified — typically within 24 hours of submission. You'll receive your member ID, e-ID card, and welcome pack as soon as your account is activated, and you can use any of our 500+ partner hospitals from day one.",
  },
  {
    cat: "Coverage",
    question: "What services are actually covered under my plan?",
    answer:
      "Every Maayoit plan covers specialist consultations, in-patient and out-patient care, prescription drugs from our approved formulary, maternity and paediatrics, dental and optical basics, preventive screenings, and access to our 24/7 helpline. Specific benefit limits vary by plan — see your member handbook for the full list.",
  },
  {
    cat: "Coverage",
    question: "Can I use my plan outside of Kwara State?",
    answer:
      "Yes. Maayoit is a national HMO. You have access to our accredited providers in all 36 states and the Federal Capital Territory. Whether you're at home, at work, or travelling, the nearest in-network hospital will recognise your member ID.",
  },
  {
    cat: "Compliance",
    question: "What does 'NHIA Accredited' actually mean for me?",
    answer:
      "It means we meet the highest federal standards for financial stability, clinical quality, and member protection. We've been NHIA-accredited since 2000 and are audited annually to ensure you get exactly what you pay for — no less.",
  },
  {
    cat: "Family",
    question: "How do I add a newborn to my family plan?",
    answer:
      "Congratulations. You can add a dependent through the member portal or by submitting a birth notification to our enrolment team within 30 days of the child's birth. Cover for the newborn activates the moment the submission is verified.",
  },
  {
    cat: "Plans",
    question: "What is the difference between PHIP and SHIP?",
    answer:
      "PHIP is our private, highly customisable plan for individuals and corporations who want perks like private wards and international referrals. SHIP is a structured social plan designed for organised groups who need standardised, reliable cover. Both are NHIA-aligned — they differ in flexibility, not in clinical quality.",
  },
  {
    cat: "Students",
    question: "Is TISHIP mandatory for all students?",
    answer:
      "Most Nigerian tertiary institutions require TISHIP to ensure every student is protected. We work directly with your school to make this process seamless — usually integrated with institutional fees — so you can focus on your studies.",
  },
  {
    cat: "Community",
    question: "Can a CBSHIP member use a hospital in another state?",
    answer:
      "Yes. While CBSHIP is rooted in the community, the cover extends across our full national network. Any Maayoit-accredited facility will treat you in the event of an emergency, regardless of the state.",
  },
  {
    cat: "Corporate",
    question: "How can my company book a Health Sensitization Session?",
    answer:
      "Organisations on Corporate, SME and Community plans are entitled to regular sensitization sessions. Book an on-site or virtual session via our Resources page — or speak directly with your dedicated Maayoit account manager.",
  },
  {
    cat: "Claims",
    question: "How long does it take Maayoit to settle a hospital claim?",
    answer:
      "Verified claims are settled within 14 days. The hospital files directly with us — you don't pay first and chase reimbursement. As long as the service is covered under your plan and the facility is in-network, the bill is ours.",
  },
];

export default function FAQsPage() {
  return (
    <div className="flex flex-col">
      {/* HERO */}
      <section className="px-4 md:px-6 lg:px-10 pt-10 md:pt-16 pb-14 border-b border-ink/15 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 right-0 w-[36rem] h-[36rem] halftone opacity-[0.05]" />

        <div className="flex items-center justify-between mb-12 text-[11px] uppercase tracking-[0.22em] font-mono text-ink-soft">
          <span className="stamp">§ Letters & Replies</span>
          <span className="hidden md:inline">
            {FAQS.length} answers · refreshed quarterly
          </span>
        </div>

        <div className="grid grid-cols-12 gap-6 items-end">
          <h1 className="col-span-12 lg:col-span-9 font-display font-light tracking-[-0.04em] leading-[0.86] text-[12vw] md:text-[10vw] lg:text-[8vw]">
            Simple
            <br />
            <span className="font-italic-serif text-wine">answers</span>.
          </h1>
          <p className="col-span-12 lg:col-span-3 lg:pb-4 text-ink-soft text-lg leading-relaxed text-pretty">
            The most common queries about enrolment, Maaysoft, our plans, and how to
            get the most out of your Maayoit cover.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 md:px-6 lg:px-10 py-16 md:py-24 border-b border-ink/15">
        <Accordion
          type="single"
          collapsible
          className="w-full divide-y divide-ink/15 border-y border-ink/15"
        >
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-0 group/item"
            >
              <AccordionTrigger className="hover:no-underline py-6 md:py-8 text-left grid grid-cols-12 gap-4 items-baseline">
                <span className="col-span-2 md:col-span-1 font-mono text-xs text-ink-mute pt-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 md:col-span-2 font-mono text-[10px] uppercase tracking-[0.22em] text-wine pt-2 self-start">
                  {faq.cat}
                </span>
                <span className="col-span-12 md:col-span-9 font-display text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight pr-8 group-hover/item:text-wine transition-colors">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <div className="grid grid-cols-12 gap-4">
                  <div className="hidden md:block md:col-span-3" />
                  <p className="col-span-12 md:col-span-8 text-lg leading-relaxed text-ink-soft text-pretty drop-cap">
                    {faq.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CONTACT CTA */}
      <section className="px-4 md:px-6 lg:px-10 py-20 md:py-28 bg-ink text-cream relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 stripes opacity-[0.05]" />
        <div className="relative grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream/60 mb-4">
              § Write to the editor
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
              Still have a{" "}
              <span className="font-italic-serif text-blush">question?</span>
            </h2>
            <p className="mt-6 max-w-xl text-cream/75 text-lg leading-relaxed text-pretty">
              Our member care team is on duty around the clock. Call, write, or ask
              your dedicated account manager — we reply in plain language, no
              jargon, no hold music.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 space-y-4">
            <a
              href="tel:+2348000000000"
              className="group flex items-center justify-between bg-cream text-ink pl-6 pr-3 py-4 rounded-full hover:bg-blush transition-colors"
            >
              <span className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5" />
                <span>+234 (800) 000 0000</span>
              </span>
              <span className="w-10 h-10 rounded-full bg-ink text-cream grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
            <a
              href="mailto:support@maayoit.com"
              className="group flex items-center justify-between border border-cream/30 pl-6 pr-3 py-4 rounded-full hover:bg-cream/10 transition-colors"
            >
              <span className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>support@maayoit.com</span>
              </span>
              <span className="w-10 h-10 rounded-full bg-cream text-ink grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </a>
            <Link
              href="/health-plans"
              className="text-sm text-cream/70 editorial-link hover:text-blush block pt-2"
            >
              Or browse our health plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
