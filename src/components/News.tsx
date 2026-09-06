import { NEWS } from "../data";
import { useReveal } from "../hooks";
import { SectionLabel } from "./shared";

export default function News() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="news" aria-labelledby="news-heading" className="bg-white py-16 lg:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <SectionLabel>Newsroom</SectionLabel>
            <h2 id="news-heading" className="mt-4 font-display text-[32px] font-bold text-navy sm:text-[36px]">
              Latest from the Party
            </h2>
          </div>
          <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-muted">
            Updated weekly · Verified reports
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {NEWS.map((n, i) => (
            <article
              key={n.title}
              className="reveal group flex flex-col overflow-hidden rounded-[8px] border border-sand bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={n.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-[4px] bg-gold px-2.5 py-1 text-[11px] font-bold uppercase tracking-[1.5px] text-navy">
                  {n.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[20px] font-bold leading-snug text-navy transition-colors group-hover:text-crimson">
                  {n.title}
                </h3>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[1px] text-muted">
                  {n.date} · By {n.author}
                </p>
                <p className="mt-3 line-clamp-2 text-[14px] leading-[1.7] text-muted">{n.excerpt}</p>
                <a
                  href="#news"
                  onClick={(e) => e.preventDefault()}
                  className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold uppercase tracking-[1px] text-gold transition-colors hover:text-navy"
                  aria-label={`Read more: ${n.title}`}
                >
                  Read More <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href="#news"
            onClick={(e) => e.preventDefault()}
            className="inline-block rounded-[4px] border-2 border-navy px-8 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-navy transition-colors hover:bg-navy hover:text-gold"
          >
            Visit Newsroom
          </a>
        </div>
      </div>
    </section>
  );
}
