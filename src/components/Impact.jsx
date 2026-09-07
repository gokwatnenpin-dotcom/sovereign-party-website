import { useCountUp, useVisible } from "../hooks";

function Stat({ target, format, label, started }) {
  const value = useCountUp(target, started);
  return (
    <div className="px-4 py-8 text-center sm:py-10">
      <p className="font-display text-4xl font-extrabold text-primary-green sm:text-5xl" aria-live="polite">
        {format(value)}
      </p>
      <p className="mx-auto mt-3 max-w-[200px] text-[12px] font-semibold uppercase tracking-[1.5px] text-neutral-mid">
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
      className="relative overflow-hidden py-16 lg:py-24"
      style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}
    >
      <div aria-hidden="true" className="dot-texture absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[12px] font-semibold uppercase tracking-[2px] text-neutral-dark">
          What We’ve Done
        </p>
        <h2 id="impact-heading" className="sr-only">
          Our impact in numbers
        </h2>
        <div className="mt-6 grid grid-cols-2 divide-neutral-dark/10 max-sm:gap-y-2 sm:divide-x lg:grid-cols-4">
          <Stat
            started={visible}
            target={2400000}
            label="Registered Supporters"
            format={(n) => (n >= 2400000 ? "2,400,000+" : n.toLocaleString("en-US") + "+")}
          />
          <Stat started={visible} target={18} label="States With Active Chapters" format={(n) => String(n)} />
          <Stat
            started={visible}
            target={42}
            label="Community Projects Funded"
            format={(n) => `₦${(n / 10).toFixed(1)}B`}
          />
          <Stat started={visible} target={47} label="Parliamentary Seats Won" format={(n) => String(n)} />
        </div>
        <blockquote className="mx-auto mt-10 max-w-3xl text-center">
          <p className="font-display text-2xl font-bold italic leading-snug text-neutral-dark sm:text-3xl">
            “We didn’t come here to manage decline. We came to build a nation.”
          </p>
          <cite className="mt-4 block text-[12px] font-semibold not-italic uppercase tracking-[2px] text-neutral-mid">
            — Emmanuel Adaora
          </cite>
        </blockquote>
      </div>
    </section>
  );
}
