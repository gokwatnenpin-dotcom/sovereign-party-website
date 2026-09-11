import { useCountUp, useVisible } from "../hooks";

function Stat({ target, format, label, started }) {
  const value = useCountUp(target, started);
  return (
    <div className="px-4 py-8 text-center sm:py-10">
      <p
        className="font-display text-4xl font-bold text-ink sm:text-5xl"
        aria-live="polite"
      >
        {format(value)}
      </p>
      <p className="mx-auto mt-3 max-w-[200px] text-[12px] font-semibold uppercase tracking-[1.5px] text-muted">
        {label}
      </p>
    </div>
  );
}

export default function Impact() {
  const { ref, visible } = useVisible(0.3);

  return (
    <section
      ref={ref}
      aria-labelledby="impact-heading"
      className="relative overflow-hidden bg-soft py-16 lg:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[12px] font-semibold uppercase tracking-[2px] text-accent">
          What We&rsquo;ve Done
        </p>
        <h2 id="impact-heading" className="sr-only">
          Our impact in numbers
        </h2>
        <div className="mt-6 grid grid-cols-2 max-sm:gap-y-2 sm:divide-x sm:divide-line lg:grid-cols-4">
          <Stat
            started={visible}
            target={2400000}
            label="Registered Supporters"
            format={(n) =>
              n >= 2400000
                ? "2,400,000+"
                : n.toLocaleString("en-US") + "+"
            }
          />
          <Stat
            started={visible}
            target={18}
            label="States With Active Chapters"
            format={(n) => String(n)}
          />
          <Stat
            started={visible}
            target={42}
            label="Community Projects Funded"
            format={(n) => `\u20A6${(n / 10).toFixed(1)}B`}
          />
          <Stat
            started={visible}
            target={47}
            label="Parliamentary Seats Won"
            format={(n) => String(n)}
          />
        </div>
        <blockquote className="mx-auto mt-10 max-w-3xl text-center">
          <p className="font-display text-2xl font-bold italic leading-snug text-ink sm:text-3xl">
            &ldquo;We didn&rsquo;t come here to manage decline. We came to build
            a nation.&rdquo;
          </p>
          <cite className="mt-4 block text-[12px] font-semibold not-italic uppercase tracking-[2px] text-muted">
            — Emmanuel Adaora
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
