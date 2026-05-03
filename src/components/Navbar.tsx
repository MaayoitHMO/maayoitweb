"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { MhlLogoImage, MhlMark } from "@/components/Logo";

const NAV = [
  { name: "Index", short: "00", href: "/" },
  { name: "About", short: "01", href: "/about" },
  { name: "Health Plans", short: "02", href: "/health-plans" },
  { name: "Providers", short: "03", href: "/providers/find" },
  { name: "Resources", short: "04", href: "/resources" },
  { name: "FAQs", short: "05", href: "/faqs" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-ink/15 transition-colors",
        scrolled ? "bg-cream/85 backdrop-blur-md" : "bg-cream",
      )}
    >
      {/* Publication strip */}
      <div className="hidden md:flex items-center justify-between px-6 lg:px-10 py-1.5 text-[10px] uppercase tracking-[0.22em] font-mono text-ink-soft border-b border-ink/10">
        <span>Vol. I — The Care Quarterly</span>
        <span className="flex items-center gap-4">
          <span>Ilorin · Kwara · Nigeria</span>
          <span className="hidden lg:inline">+2348090733060</span>
        </span>
      </div>

      <div className="px-4 md:px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between gap-6">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label="Maayoit Healthcare Limited — Home"
          className="group shrink-0 -my-1"
        >
          <MhlLogoImage priority height={48} className="hidden sm:block" />
          <MhlMark className="sm:hidden h-9 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(
                    item.href.split("/").slice(0, 2).join("/"),
                  );
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative flex items-baseline gap-1.5 px-3 py-2 text-sm tracking-tight transition-colors",
                  active ? "text-ink" : "text-ink-soft hover:text-ink",
                )}
              >
                <span className="font-mono text-[10px] text-ink-mute group-hover:text-wine transition-colors">
                  {item.short}
                </span>
                <span className={cn(active && "font-medium")}>{item.name}</span>
                {active && (
                  <span className="absolute -bottom-0.5 left-3 right-3 h-px bg-wine" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <Link
            href="/providers/join"
            className="text-sm text-ink-soft hover:text-wine editorial-link"
          >
            Provider Login
          </Link>
          <Link
            href="/health-plans"
            className="group relative inline-flex items-center gap-2 bg-ink text-cream px-4 py-2.5 text-sm tracking-tight rounded-full overflow-hidden hover:bg-wine transition-colors"
          >
            <span>Enroll Today</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="inline-flex items-center gap-2 px-3 py-2 border border-ink/20 rounded-full text-ink hover:bg-ink hover:text-cream transition-colors"
              >
                <Menu className="h-4 w-4" />
                <span className="text-xs uppercase tracking-widest font-mono">
                  Menu
                </span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88vw] sm:w-[420px] bg-cream border-l-2 border-ink p-0 paper-grain"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-ink/15">
                <MhlLogoImage height={40} />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 -mr-2 hover:text-wine"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col px-6 py-8">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-baseline justify-between py-4 border-b border-ink/10 hover:text-wine"
                  >
                    <span className="font-display text-3xl tracking-tight">
                      <span className="font-mono text-xs align-top mr-3 text-ink-mute">
                        {item.short}
                      </span>
                      {item.name}
                    </span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}

                <div className="mt-10 space-y-4">
                  <Link
                    href="/health-plans"
                    onClick={() => setIsOpen(false)}
                    className="block text-center w-full bg-ink text-cream rounded-full py-4 text-sm uppercase tracking-[0.2em] font-mono"
                  >
                    Enroll Today
                  </Link>
                  <Link
                    href="/providers/join"
                    onClick={() => setIsOpen(false)}
                    className="block text-center w-full border border-ink/30 rounded-full py-4 text-sm uppercase tracking-[0.2em] font-mono"
                  >
                    Join as Provider
                  </Link>
                </div>

                <p className="mt-12 text-xs uppercase tracking-[0.2em] font-mono text-ink-mute">
                  Ilorin · Kwara · Nigeria
                </p>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
