import { VALUES } from "../data";
import { useReveal } from "../hooks";
import { SectionLabel } from "./shared";

export default function Mission() {
  const ref = useReveal();
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="bg-paper py-16 lg:py-24"
    >
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[40%_60%] lg:gap-16 lg:px-8"
      >
        {/* Left */}
        <div className="reveal">
          <SectionLabel>Our Purpose</SectionLabel>
          <h2
            id="mission-heading"
            className="mt-4 font-display text-[32px] font-bold leading-[1.15] text-ink sm:text-[36px]"
          >
            Built on the Belief That Government Can Be Different
          </h2>
          <div aria-hidden="true" className="mt-5 h-[2px] w-[60px] bg-accent" />
          <p className="mt-6 text-[16px] leading-[1.75] text-ink">
            Founded in 2018 by teachers, traders, engineers, and students, The
            Sovereign Party began in community halls — not boardrooms. We
            watched public wealth vanish while ordinary families carried the
            weight, and we decided to build a party that answers only to the
            people.
          </p>
          <p className="mt-4 text-[16px] leading-[1.75] text-muted">
            Today, with 2.4 million registered supporters across 18 states, we
            stand for economic sovereignty, working infrastructure, youth
            power, and institutions that cannot be bought. One Nation. One
            Purpose. Forward.
          </p>
          <div className="mt-8 border-l-[3px] border-ink bg-soft p-5">
            <span
              aria-hidden="true"
              className="font-display text-4xl font-extrabold text-ink"
            >
              8
            </span>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              years of grassroots organizing, ward by ward, community by
              community.
            </p>
          </div>
        </div>

        {/* Right — value cards */}
        <div className="flex flex-col gap-4">
          {VALUES.map((v, i) => (
            <article
              key={v.title}
              className="reveal border-l-[3px] border-accent bg-soft p-6 transition-transform hover:-translate-y-1 sm:p-8"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center bg-accent/10 font-display text-lg font-extrabold text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[22px] font-semibold text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[16px] leading-[1.75] text-muted">
                    &ldquo;{v.text}&rdquo;
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
