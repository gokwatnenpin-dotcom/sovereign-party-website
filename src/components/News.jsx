import { NEWS } from "../data";
import { useReveal } from "../hooks";
import { SectionLabel } from "./shared";

export default function News() {
  const ref = useReveal();
  return (
    <section id="news" aria-labelledby="news-heading" className="bg-off-white py-16 lg:py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <SectionLabel>Newsroom</SectionLabel>
            <h2 id="news-heading" className="mt-4 font-display text-[32px] font-bold text-neutral-dark sm:text-[36px]">
              Latest from the Party
            </h2>
          </div>
          <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-neutral-mid">
            Updated weekly · Verified reports
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {NEWS.map((n, i) => (
            <article
              key={n.title}
              className="reveal group flex flex-col overflow-hidden rounded-[8px] border border-neutral-dark/10 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={n.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-[4px] bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-[1.5px] text-neutral-dark">
                  {n.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-[20px] font-bold leading-snug text-neutral-dark transition-colors group-hover:text-primary-green">
                  {n.title}
                </h3>
                <p className="mt-2 text-[12px] font-semibold uppercase tracking-[1px] text-neutral-mid">
                  {n.date} · By {n.author}
                </p>
                <p className="mt-3 line-clamp-2 text-[14px] leading-[1.7] text-neutral-mid">{n.excerpt}</p>
                <a
                  href="#news"
                  onClick={(e) => e.preventDefault()}
                  className="mt-4 inline-flex items-center gap-1 text-[13px] font-bold uppercase tracking-[1px] text-primary-green transition-colors hover:bg-neutral-dark/10 hover:text-deep-green hover:underline"
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
            className="inline-block rounded-[4px] border-2 border-primary-green px-8 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-primary-green transition-colors hover:bg-neutral-dark/10 hover:text-deep-green hover:underline"
          >
            Visit Newsroom
          </a>
        </div>
      </div>
    </section>
  );
}
