import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data";
import { EagleMark } from "./shared";

export default function Navbar({ active, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  const go = (id) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-navy shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            : "bg-gradient-to-b from-navy/90 to-navy/40"
        } border-b border-white/[0.08]`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        >
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go("home");
            }}
            className="flex items-center gap-3"
            aria-label="The Sovereign Party — home"
          >
            <EagleMark className="h-10 w-10" />
            <span className="leading-none">
              <span className="block font-display text-[15px] font-bold tracking-wide text-white sm:text-base">
                THE SOVEREIGN PARTY
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[2px] text-gold">
                One Nation · Forward
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-6 xl:gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(l.id);
                  }}
                  aria-current={active === l.id ? "true" : undefined}
                  className={`text-[13px] font-semibold uppercase tracking-[1px] transition-colors hover:text-gold-light ${
                    active === l.id ? "text-gold" : "text-white/85"
                  }`}
                >
                  {l.label}
                  <span
                    aria-hidden="true"
                    className={`mt-1 block h-[2px] transition-all ${
                      active === l.id ? "w-full bg-gold" : "w-0 bg-gold"
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#donate"
              onClick={(e) => {
                e.preventDefault();
                go("donate");
              }}
              className="rounded-[4px] bg-crimson px-4 py-2.5 text-[12px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-[#7e1422]"
            >
              Donate Now
            </a>
            <a
              href="#join"
              onClick={(e) => {
                e.preventDefault();
                go("join");
              }}
              className="rounded-[4px] bg-gold px-4 py-2.5 text-[12px] font-bold uppercase tracking-[1px] text-navy transition-colors hover:bg-gold-light"
            >
              Join the Movement
            </a>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] text-white hover:bg-white/10 lg:hidden"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        aria-label="Mobile menu"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-navy-deep shadow-2xl transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-5">
          <span className="flex items-center gap-2">
            <EagleMark className="h-8 w-8" />
            <span className="font-display text-sm font-bold text-white">THE SOVEREIGN PARTY</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
            className="inline-flex h-10 w-10 items-center justify-center rounded text-white hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6">
          <ul className="space-y-1">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  tabIndex={open ? 0 : -1}
                  onClick={(e) => {
                    e.preventDefault();
                    go(l.id);
                  }}
                  className={`block rounded-[4px] px-3 py-3 text-[15px] font-semibold uppercase tracking-[1px] transition-colors ${
                    active === l.id
                      ? "bg-white/5 text-gold"
                      : "text-white/85 hover:bg-white/5 hover:text-gold-light"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3">
            <a
              href="#donate"
              tabIndex={open ? 0 : -1}
              onClick={(e) => {
                e.preventDefault();
                go("donate");
              }}
              className="rounded-[4px] bg-crimson px-4 py-3 text-center text-[13px] font-bold uppercase tracking-[1px] text-white"
            >
              Donate Now
            </a>
            <a
              href="#join"
              tabIndex={open ? 0 : -1}
              onClick={(e) => {
                e.preventDefault();
                go("join");
              }}
              className="rounded-[4px] bg-gold px-4 py-3 text-center text-[13px] font-bold uppercase tracking-[1px] text-navy"
            >
              Join the Movement
            </a>
          </div>
          <p className="mt-6 text-[12px] uppercase tracking-[2px] text-white/40">
            For the People. By the People.
          </p>
        </nav>
      </aside>
    </>
  );
}
