import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { MhlMark } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream pt-20 pb-10 mt-32 paper-grain overflow-hidden">
      {/* Marquee colophon */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden border-b border-cream/15 py-4">
        <div className="marquee-track animate-marquee">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="font-display italic text-3xl md:text-5xl text-cream/85 whitespace-nowrap"
            >
              Healthcare that stands in for family.{" "}
              <span className="text-ochre mx-6">✦</span> Care without confusing
              tiers. <span className="text-ochre mx-6">✦</span>{" "}
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-10 lg:px-14 pt-20 relative">
        {/* Top: oversized wordmark + meta */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-cream/55 mb-4">
              ◷ Open Always — Care never sleeps
            </p>
            <div className="flex items-start gap-5 md:gap-7">
              <MhlMark
                mark="var(--cream)"
                line="var(--wine)"
                className="h-28 md:h-36 lg:h-44 w-auto shrink-0 mt-2"
              />
              <h2 className="font-display text-[12vw] lg:text-[9vw] leading-[0.85] tracking-tighter">
                Maayo<span className="font-italic-serif text-blush">it</span>
                <span className="text-ochre">.</span>
              </h2>
            </div>
            <p className="mt-6 max-w-md text-cream/70 text-base leading-relaxed">
              Maayoit Healthcare Limited — rooted in Ilorin since 2000, serving
              individuals, communities, schools and corporates across Nigeria
              with empathy-first medical cover.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-8 lg:pt-6">
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/55 mb-5">
                Sections
              </h4>
              <ul className="space-y-3">
                {[
                  ["Index", "/"],
                  ["About", "/about"],
                  ["Health Plans", "/health-plans"],
                  ["Resources", "/resources"],
                  ["FAQs", "/faqs"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-lg font-display hover:text-blush editorial-link"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/55 mb-5">
                Providers
              </h4>
              <ul className="space-y-3">
                {[
                  ["Join Network", "/providers/join"],
                  ["Find Provider", "/providers/find"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-lg font-display hover:text-blush editorial-link"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/55 mt-8 mb-3">
                Newsletter
              </h4>
              <form className="flex border-b border-cream/30 focus-within:border-blush transition-colors">
                <input
                  type="email"
                  placeholder="you@inbox.com"
                  className="flex-1 bg-transparent py-2 text-sm placeholder:text-cream/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="text-cream/70 hover:text-blush"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact ledger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-cream/15 py-8 mb-10">
          {[
            [
              "Address",
              " Opposite G.s.s Maraba Along Old Jebba Rd, Ilorin, Kwara State, Nigeria",
            ],
            ["Telephone", "+2348090733060"],
            ["Email", "info@maayoithealth.org"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/55 mb-2">
                {label}
              </p>
              <p className="text-cream whitespace-pre-line text-base leading-relaxed">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* Colophon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-cream/55 text-xs font-mono uppercase tracking-[0.18em]">
          <div className="space-y-2">
            <p>
              © {new Date().getFullYear()} Maayoit Healthcare Limited ·
              RC-XXXXXXX
            </p>
            <p>Set in Fraunces & DM Sans · Printed on the web</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" aria-label="Facebook" className="hover:text-blush">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-blush">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-blush">
              <Instagram className="h-4 w-4" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-blush">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href="#" className="hover:text-blush">
              Privacy
            </Link>
            <Link href="#" className="hover:text-blush">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
