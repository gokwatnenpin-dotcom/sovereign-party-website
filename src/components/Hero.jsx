import { HERO_STATS } from "../data";

export default function Hero({ onNavigate }) {
  return (
    <section id="home" aria-label="Introduction" className="relative bg-paper">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-8 lg:pt-32 lg:pb-14">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft py-1.5 pl-1.5 pr-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-accent backdrop-blur">
            <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-bold tracking-[1px] text-accent">
              2026
            </span>
            General Election
          </span>

          <h1 className="mt-6 font-display text-[40px] font-extrabold leading-[1.05] text-ink sm:text-[54px] lg:text-[68px]">
            A Government That Works
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-[1.75] text-muted sm:text-lg">
            The Sovereign Party is committed to economic reform, transparent
            governance, and a future where no community is left behind.
          </p>

          <p className="mt-3 text-[12px] font-semibold uppercase tracking-[2px] text-muted/80">
            For the People. By the People. — Est. 2018
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate("policies")}
              className="rounded-[4px] bg-accent px-8 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-accent-ink"
            >
              Read Our Manifesto
            </button>
            <button
              type="button"
              onClick={() => onNavigate("leadership")}
              className="group inline-flex items-center justify-center gap-3 rounded-[4px] border border-ink/20 px-8 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-ink transition-colors hover:border-ink"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-soft transition-colors group-hover:bg-line">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Watch Our Message
            </button>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-x-12 top-8 bottom-8 rounded-full bg-accent-soft/60 blur-3xl"
          />
          <div className="hero-photo relative">
            <img
              src="https://images.unsplash.com/photo-1655354337852-78c57bfdbb05?w=1200&q=80&auto=format&fit=crop"
              alt="Portrait of an elderly Nigerian man in traditional head scarf"
              className="aspect-[4/5] w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-y border-line bg-paper">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8">
          {HERO_STATS.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-3xl font-bold text-ink">
                {s.value}
              </dd>
              <dt className="mt-1 block text-[11px] font-semibold uppercase tracking-[1.5px] text-muted">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
