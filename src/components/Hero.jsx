import { HERO_STATS } from "../data";

export default function Hero({ onNavigate }) {
  return (
    <section id="home" aria-label="Introduction" className="relative flex min-h-[100vh] flex-col bg-navy">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1600&q=80&fit=crop"
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,26,59,0.92)] via-[rgba(11,26,59,0.72)] to-[rgba(11,26,59,0.4)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-navy/60 py-1.5 pl-1.5 pr-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-gold backdrop-blur">
            <span className="rounded-full bg-gold px-2.5 py-1 text-[11px] font-bold tracking-[1px] text-navy">
              2026
            </span>
            General Election 2026
          </span>

          <h1 className="mt-6 font-display text-[42px] font-extrabold leading-[1.05] text-white sm:text-[56px] lg:text-[72px]">
            A Government That Works{" "}
            <span className="text-gold">For Every Citizen</span>
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-[1.75] text-white/85 sm:text-lg">
            The Sovereign Party is committed to economic reform, transparent
            governance, and a future where no community is left behind.
          </p>

          <p className="mt-3 text-[13px] font-semibold uppercase tracking-[2px] text-white/50">
            For the People. By the People. — Est. 2018
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate("policies")}
              className="rounded-[4px] bg-gold px-8 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-navy shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-all hover:bg-gold-light hover:shadow-[0_0_24px_rgba(201,168,76,0.45)]"
            >
              Read Our Manifesto
            </button>
            <button
              type="button"
              onClick={() => onNavigate("leadership")}
              className="group inline-flex items-center justify-center gap-3 rounded-[4px] border-2 border-white/40 px-8 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-colors hover:border-gold hover:text-gold-light"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-gold group-hover:text-navy">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Watch Our Message
            </button>
          </div>
        </div>

        {/* Floating candidate card */}
        <aside
          aria-label="Candidate spotlight"
          className="mt-12 flex max-w-md items-center gap-4 rounded-[8px] border border-white/10 bg-navy/70 p-4 shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-md lg:absolute lg:bottom-36 lg:right-8 lg:mt-0 lg:w-[340px]"
        >
          <img
            src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=300&q=80&fit=crop"
            alt="Portrait of Emmanuel Adaora, presidential candidate"
            className="h-20 w-20 shrink-0 rounded-[8px] border-2 border-gold object-cover"
            loading="eager"
          />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-gold">
              Presidential Candidate
            </p>
            <p className="mt-1 font-display text-lg font-bold text-white">Emmanuel Adaora</p>
            <p className="mt-1 text-[13px] italic leading-snug text-white/75">
              “A nation that invests in its people cannot fail.”
            </p>
          </div>
        </aside>
      </div>

      {/* Bottom stat strip */}
      <div className="relative border-t border-white/10 bg-navy/80 backdrop-blur">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-white/10 px-4 sm:px-6 lg:grid-cols-4 lg:divide-x lg:px-8">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="px-2 py-5 lg:px-8">
              <dt className="order-2 mt-1 block text-[11px] font-semibold uppercase tracking-[1.5px] text-white/60">
                {s.label}
              </dt>
              <dd className="font-display text-3xl font-extrabold text-gold">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
