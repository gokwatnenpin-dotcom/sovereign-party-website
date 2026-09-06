import { useState } from "react";
import { DONATION_AMOUNTS, formatNaira } from "../data";
import { useReveal } from "../hooks";

export default function Donate() {
  const ref = useReveal<HTMLDivElement>();
  const [selected, setSelected] = useState<number | null>(5000);
  const [custom, setCustom] = useState("");
  const [donated, setDonated] = useState(false);

  const customNum = parseInt(custom.replace(/[^0-9]/g, ""), 10);
  const amount = !isNaN(customNum) && customNum > 0 ? customNum : selected;

  const donate = () => {
    if (amount && amount > 0) setDonated(true);
  };

  return (
    <section id="donate" aria-labelledby="donate-heading" className="relative overflow-hidden bg-crimson py-16 lg:py-24">
      <div aria-hidden="true" className="dot-texture absolute inset-0" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" />
      <div ref={ref} className="reveal relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="text-[12px] font-bold uppercase tracking-[2px] text-gold-light">
          ◆ Every Naira Counts ◆
        </p>
        <h2 id="donate-heading" className="mt-4 font-display text-[32px] font-bold leading-tight text-white sm:text-[40px]">
          Fund the Future of This Nation
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.75] text-white/85">
          Every campaign needs fuel. Your contribution — however small —
          powers the rallies, the adverts, the town halls, and the people
          fighting for your future.
        </p>

        {donated ? (
          <div role="status" className="mx-auto mt-8 rounded-[8px] bg-navy p-8 shadow-xl">
            <span aria-hidden="true" className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl font-bold text-navy">
              ✓
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-white">Thank you, patriot.</h3>
            <p className="mt-2 text-white/75">
              Your pledge of <strong className="text-gold">{amount ? formatNaira(amount) : ""}</strong> has
              been recorded. Our finance team will contact you to complete your
              secure donation.
            </p>
            <button
              type="button"
              onClick={() => setDonated(false)}
              className="mt-5 text-[13px] font-bold uppercase tracking-[1px] text-gold underline underline-offset-4 hover:text-gold-light"
            >
              Make another donation
            </button>
          </div>
        ) : (
          <div className="mt-8">
            <div role="group" aria-label="Choose a donation amount" className="grid grid-cols-3 gap-3">
              {DONATION_AMOUNTS.map((a) => {
                const isActive = selected === a && !custom;
                return (
                  <button
                    key={a}
                    type="button"
                    onClick={() => {
                      setSelected(a);
                      setCustom("");
                    }}
                    aria-pressed={isActive}
                    className={`rounded-[4px] px-2 py-4 font-display text-lg font-extrabold transition-all sm:text-xl ${
                      isActive
                        ? "bg-gold text-navy shadow-[0_0_24px_rgba(201,168,76,0.45)]"
                        : "border-2 border-gold/60 bg-transparent text-gold hover:border-gold hover:bg-[rgba(201,168,76,0.12)]"
                    }`}
                  >
                    {formatNaira(a)}
                  </button>
                );
              })}
            </div>

            <div className="mt-4">
              <label htmlFor="donate-custom" className="sr-only">
                Custom donation amount in naira
              </label>
              <input
                id="donate-custom"
                type="text"
                inputMode="numeric"
                placeholder="Custom amount — e.g. ₦10,000"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                className="w-full rounded-[4px] border border-white/30 bg-navy/40 px-4 py-3.5 text-center text-[16px] font-semibold text-white placeholder:text-white/50 focus:border-gold focus:outline-none"
              />
            </div>

            <button
              type="button"
              onClick={donate}
              disabled={!amount}
              className="mt-5 w-full rounded-[4px] bg-navy px-8 py-4 text-[14px] font-bold uppercase tracking-[1.5px] text-gold shadow-xl transition-all hover:bg-navy-mid hover:text-gold-light disabled:cursor-not-allowed disabled:opacity-50"
            >
              Donate {amount ? formatNaira(amount) : ""} Securely
            </button>
            <p className="mt-4 text-[13px] leading-relaxed text-white/75">
              🔒 Secured by 256-bit encryption. All donations are legally
              compliant with Electoral Act 2022.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
