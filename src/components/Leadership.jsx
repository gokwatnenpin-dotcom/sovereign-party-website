import { LEADERS } from "../data";
import { useReveal } from "../hooks";
import { SectionLabel } from "./shared";

export default function Leadership() {
  const ref = useReveal();
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="bg-paper py-16 lg:py-24"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <SectionLabel>Leadership</SectionLabel>
          <h2
            id="leadership-heading"
            className="mt-4 font-display text-[32px] font-bold text-ink sm:text-[36px]"
          >
            The Faces Driving Change
          </h2>
          <p className="mt-3 text-[16px] leading-[1.75] text-muted">
            Servants, not rulers. Every leader below publishes assets yearly
            and holds a monthly open town hall.
          </p>
        </div>

        {/* Presidential candidate */}
        <article className="reveal mt-10 grid overflow-hidden border border-line bg-soft lg:grid-cols-[45%_55%]">
          <div className="relative min-h-[320px] lg:min-h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1655354337852-78c57bfdbb05?w=800&q=80&auto=format&fit=crop"
              alt="Emmanuel Adaora, Presidential Candidate and Party Chairman"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <span className="absolute left-5 top-5 rounded-[4px] bg-paper px-3 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-ink shadow-card">
              Presidential Candidate
            </span>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <p className="text-[12px] font-semibold uppercase tracking-[2px] text-accent">
              Party Chairman · 8 Years in Service
            </p>
            <h3 className="mt-2 font-display text-[32px] font-bold leading-tight text-ink sm:text-4xl">
              Emmanuel Adaora
            </h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[1.5px] text-muted">
              Presidential Candidate & Party Chairman
            </p>
            <blockquote className="mt-6 border-l-[3px] border-accent/30 pl-5 font-display text-[22px] font-bold italic leading-snug text-ink sm:text-2xl">
              &ldquo;A nation that invests in its people cannot fail.&rdquo;
            </blockquote>
            <p className="mt-6 text-[15px] leading-[1.75] text-muted">
              A former infrastructure engineer turned reform governor,
              Emmanuel delivered free school meals and 400km of rural roads
              in one term. As party chairman since 2018, he built the
              Sovereign Party from 12 ward chapters to a national movement.
            </p>
            <p className="mt-3 text-[15px] leading-[1.75] text-muted">
              He holds a degree in Civil Engineering and a master&rsquo;s in
              Public Policy, and still teaches a Saturday civic class in his
              home ward.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-[4px] border border-line px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[1px] text-ink">
                ◈ 2018 — Founded the Party
              </span>
              <span className="rounded-[4px] border border-line px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[1px] text-ink">
                ◈ 47 MPs Elected
              </span>
            </div>
          </div>
        </article>

        {/* Secondary leaders */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {LEADERS.map((p, i) => (
            <article
              key={p.name}
              className="reveal group border border-line bg-paper transition-transform hover:-translate-y-1 hover:shadow-card"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={`Portrait of ${p.name}, ${p.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-[4px] bg-paper px-3 py-1 text-[11px] font-bold uppercase tracking-[1.5px] text-ink shadow-card">
                  {p.role}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-[22px] font-bold text-ink">
                  {p.name}
                </h3>
                <p className="mt-0.5 text-[12px] font-semibold uppercase tracking-[1.5px] text-accent">
                  {p.role}
                </p>
                <p className="mt-3 text-[14px] leading-[1.7] text-muted">
                  {p.desc}
                </p>
                <a
                  href={`https://x.com/${p.handle.replace("@", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-accent transition-colors hover:text-accent-ink hover:underline"
                  aria-label={`${p.name} on X (Twitter)`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.9L18.9 2zm-1.1 18h1.7L7.6 3.9H5.7L17.8 20z" />
                  </svg>
                  {p.handle}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
