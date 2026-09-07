import { HERO_STATS } from "../data";

export default function Hero({ onNavigate }) {
  return (
    <section id="home" aria-label="Introduction" className="relative flex min-h-[100vh] flex-col bg-bg-dark">
      {/* Background image with luminosity blend */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=1200&q=80"
          alt="Aerial view of Nigerian city"
          className="h-full w-full object-cover mix-blend-luminosity opacity-15"
          fetchPriority="high"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-36 z-1">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-green/20 bg-primary-green/10 py-1.5 pl-1.5 pr-4 text-[12px] font-semibold uppercase tracking-[1.5px] text-text-lighter backdrop-blur">
            <span className="rounded-full bg-primary-green/20 px-2.5 py-1 text-[11px] font-bold tracking-[1px] text-text-lighter">
              2026
            </span>
            General Election 2026
          </span>

          <h1 className="mt-6 font-display text-[42px] font-extrabold leading-[1.05] text-text-lighter sm:text-[56px] lg:text-[72px]">
            A Government That Works
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-[1.75] text-text-lighter/90 sm:text-lg">
            The Sovereign Party is committed to economic reform, transparent
            governance, and a future where no community is left behind.
          </p>

          <p className="mt-3 text-[13px] font-semibold uppercase tracking-[2px] text-text-lighter/80">
            For the People. By the People. — Est. 2018
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate("policies")}
              className="rounded-[4px] bg-primary-green/20 px-8 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-text-lighter"
            >
              Read Our Manifesto
            </button>
            <button
              type="button"
              onClick={() => onNavigate("leadership")}
              className="group inline-flex items-center justify-center gap-3 rounded-[4px] border border-primary-green/30 px-8 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-text-lighter transition-colors hover:bg-primary-green/30 hover:text-text-lighter"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-text-lighter/10 transition-colors group-hover:bg-primary-green/20 group-hover:text-text-lighter">
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
          className="mt-12 flex max-w-md items-center gap-4 rounded-[8px] border border-primary-green/30 bg-bg-card/80 backdrop-blur p-4 lg:absolute lg:bottom-36 lg:right-8 lg:mt-0 lg:w-[340px]"
        >
          <img
            src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=300&q=80&fit=crop"
            alt="Portrait of Emmanuel Adaora, presidential candidate"
            className="h-20 w-20 shrink-0 rounded-[8px] border border-primary-green/30 object-cover"
            loading="eager"
          />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-text-lighter">
              Presidential Candidate
            </p>
            <p className="mt-1 font-display text-lg font-bold text-text-lighter">Emmanuel Adaora</p>
            <p className="mt-1 text-[13px] italic leading-snug text-text-lighter/80">
              “A nation that invests in its people cannot fail.”
            </p>
          </div>
        </aside>
      </div>

      {/* Bottom stat strip */}
      <div className="relative border-t border-primary-green/30">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-primary-green/30 px-4 sm:px-6 lg:grid-cols-4 lg:divide-x lg:px-8">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="px-2 py-5 lg:px-8">
              <dt className="order-2 mt-1 block text-[11px] font-semibold uppercase tracking-[1.5px] text-text-lighter/80">
                {s.label}
              </dt>
              <dd className="font-display text-3xl font-extrabold text-text-lighter">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
