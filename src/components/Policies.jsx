import { POLICIES } from "../data";
import { useReveal } from "../hooks";
import { SectionLabel } from "./shared";

export default function Policies() {
  const ref = useReveal();
  return (
    <section id="policies" aria-labelledby="policies-heading" className="bg-navy py-16 lg:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <SectionLabel dark>Our Manifesto</SectionLabel>
          <h2 id="policies-heading" className="mt-4 font-display text-[32px] font-bold leading-tight text-white sm:text-[36px]">
            Our 6-Point Plan for National Renewal
          </h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-white/70">
            Not promises — a contract. Each commitment carries a deadline, a
            budget line, and a public dashboard so you can hold us to it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POLICIES.map((p, i) => (
            <article
              key={p.title}
              className="reveal group rounded-[8px] border border-white/10 bg-navy-mid p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_0_24px_rgba(201,168,76,0.25)]"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <span aria-hidden="true" className="text-3xl">
                {p.icon}
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[2px] text-gold">
                Point {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-display text-[22px] font-bold text-white transition-colors group-hover:text-gold-light">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-white/70">{p.text}</p>
              <span aria-hidden="true" className="mt-5 block h-[3px] w-10 bg-gold/40 transition-all duration-300 group-hover:w-full group-hover:bg-gold" />
            </article>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href="#join"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 rounded-[4px] border-2 border-gold px-8 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-gold transition-colors hover:bg-[rgba(201,168,76,0.08)] hover:text-gold-light"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 4v12m0 0l-4-4m4 4l4-4M5 20h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Full Manifesto PDF
          </a>
          <p className="mt-3 text-[12px] uppercase tracking-[1.5px] text-white/40">
            48 pages · Plain language · Audited costing
          </p>
        </div>
      </div>
    </section>
  );
}
