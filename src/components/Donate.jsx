import { useState } from "react";
import { DONATION_AMOUNTS, formatNaira } from "../data";
import { useReveal } from "../hooks";
import { LockIcon } from "./shared";

export default function Donate() {
  const ref = useReveal();
  const [selected, setSelected] = useState(5000);
  const [custom, setCustom] = useState("");
  const [donated, setDonated] = useState(false);

  const customNum = parseInt(custom.replace(/[^0-9]/g, ""), 10);
  const amount = !isNaN(customNum) && customNum > 0 ? customNum : selected;

  const donate = () => {
    if (amount && amount > 0) setDonated(true);
  };

  return (
    <section id="donate" aria-labelledby="donate-heading" className="relative overflow-hidden bg-bg-dark py-16 lg:py-24">
      <div aria-hidden="true" className="dot-texture absolute inset-0" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-neutral-dark/10 via-transparent to-neutral-dark/20" />
      <div ref={ref} className="reveal relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="text-[12px] font-bold uppercase tracking-[2px] text-white">
          ◆ Every Naira Counts ◆
        </p>
        <h2 id="donate-heading" className="mt-4 font-display text-[32px] font-bold leading-tight text-white sm:text-[40px]">
          Fund the Future of This Nation
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.75] text-white/80">
          Every campaign needs fuel. Your contribution — however small —
          powers the rallies, the adverts, the town halls, and the people
          fighting for your future.
        </p>

        {donated ? (
          <div role="status" className="mx-auto mt-8 rounded-[8px] bg-off-white p-8 shadow-xl">
            <span aria-hidden="true" className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neutral-dark/10 text-2xl font-bold text-neutral-dark">
              ✓
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-neutral-dark">Thank you, patriot.</h3>
            <p className="mt-2 text-neutral-mid">
              Your pledge of <strong className="text-neutral-dark">{amount ? formatNaira(amount) : ""}</strong> has
            </p>
            <p className="mt-2 text-neutral-mid">
              been recorded. Our finance team will contact you to complete your
            </p>
            <p className="mt-2 text-neutral-mid">
              secure donation.
            </p>
            <button
              type="button"
              onClick={() => setDonated(false)}
              className="mt-5 text-[13px] font-bold uppercase tracking-[1px] text-primary-green underline underline-offset-4 hover:text-deep-green"
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
                        ? "bg-primary-green text-white shadow-[0_0_24px_rgba(0,0,0,0.1)]"
                        : "border-2 border-white bg-white text-neutral-dark hover:border-primary-green"
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
                className="w-full rounded-[4px] border border-white bg-white px-4 py-3.5 text-center text-[16px] font-semibold text-neutral-dark placeholder:text-[#6B6B6B] focus:border-primary-green focus:outline-none"
              />
            </div>

            <button
              type="button"
              onClick={donate}
              disabled={!amount}
              className="mt-5 w-full rounded-[4px] bg-primary-green px-8 py-4 text-[14px] font-bold uppercase tracking-[1.5px] text-white shadow-xl transition-all hover:bg-deep-green disabled:cursor-not-allowed disabled:bg-deep-green disabled:text-white"
            >
              Donate {amount ? formatNaira(amount) : ""} Securely
            </button>
            <p className="mt-4 text-[13px] leading-relaxed text-white/80">
              <LockIcon className="mr-1 inline-block h-4 w-4 align-[-2px] text-white" />
              Secured by 256-bit encryption. All donations are legally
              compliant with Electoral Act 2022.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
