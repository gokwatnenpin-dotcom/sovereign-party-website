import { useState } from "react";
import { EVENTS } from "../data";
import { useReveal } from "../hooks";
import { SectionLabel } from "./shared";

export default function Events() {
  const ref = useReveal();
  const [rsvps, setRsvps] = useState(new Set());

  const toggle = (i) =>
    setRsvps((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="bg-paper py-16 lg:py-24"
    >
      <div ref={ref} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <SectionLabel>Gather With Us</SectionLabel>
          <h2
            id="events-heading"
            className="mt-4 font-display text-[32px] font-bold text-ink sm:text-[36px]"
          >
            Town Halls, Rallies &amp; Debates
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Every event is free and open. Come with questions — leave with
            answers.
          </p>
        </div>

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {EVENTS.map((e, i) => {
            const done = rsvps.has(i);
            return (
              <li
                key={e.title}
                className="reveal flex flex-col gap-4 py-6 transition-colors hover:bg-soft sm:flex-row sm:items-center sm:gap-6 sm:px-4"
              >
                {/* Date block */}
                <div className="flex items-center gap-4 sm:w-24 sm:flex-col sm:gap-0 sm:text-center">
                  <span className="font-display text-4xl font-bold leading-none text-ink">
                    {e.day}
                  </span>
                  <span className="text-[12px] font-bold uppercase tracking-[2px] text-muted">
                    {e.month}
                  </span>
                </div>
                {/* Center */}
                <div className="flex-1">
                  <h3 className="font-display text-[20px] font-bold text-ink">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-[14px] text-muted">
                    {e.location} · {e.time}
                  </p>
                </div>
                {/* Right */}
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[1.5px] ${
                      e.mode === "Online"
                        ? "bg-accent-soft text-accent"
                        : "border border-line text-muted"
                    }`}
                  >
                    {e.mode}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-pressed={done}
                    aria-label={
                      done
                        ? `Cancel RSVP for ${e.title}`
                        : `RSVP for ${e.title}`
                    }
                    className={`min-w-[120px] rounded-[4px] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[1.5px] transition-all ${
                      done
                        ? "border border-line bg-paper text-ink"
                        : "bg-accent text-white hover:bg-accent-ink"
                    }`}
                  >
                    {done ? "RSVP\u2713" : "RSVP"}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="reveal mt-10 text-center">
          <a
            href="#events"
            onClick={(e) => e.preventDefault()}
            className="inline-block rounded-[4px] border-[1.5px] border-accent px-8 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-accent transition-colors hover:bg-accent hover:text-white"
          >
            Full Events Calendar
          </a>
        </div>
      </div>
    </section>
  );
}
