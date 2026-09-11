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
    <section
      id="donate"
      aria-labelledby="donate-heading"
      className="bg-paper py-16 lg:py-24"
    >
      <div
        ref={ref}
        className="reveal relative mx-auto max-w-2xl px-4 text-center sm:px-6"
      >
        <p className="text-[12px] font-bold uppercase tracking-[2px] text-accent">
          ◆ Every Naira Counts ◆
        </p>
        <h2
          id="donate-heading"
          className="mt-4 font-display text-[32px] font-bold leading-tight text-ink sm:text-[40px]"
        >
          Fund the Future of This Nation
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-[1.75] text-muted">
          Every campaign needs fuel. Your contribution — however small —
          powers the rallies, the adverts, the town halls, and the people
          fighting for your future.
        </p>

        {donated ? (
          <div
            role="status"
            className="mx-auto mt-8 border border-line bg-soft p-8"
          >
            <span
              aria-hidden="true"
              className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-2xl font-bold text-accent"
            >
              ✓
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-ink">
              Thank you, patriot.
            </h3>
            <p className="mt-2 text-muted">
              Your pledge of{" "}
              <strong className="text-ink">
                {amount ? formatNaira(amount) : ""}
              </strong>{" "}
              has been recorded. Our finance team will contact you to complete
              your secure donation.
            </p>
            <button
              type="button"
              onClick={() => setDonated(false)}
              className="mt-5 text-[13px] font-bold uppercase tracking-[1px] text-accent underline underline-offset-4 hover:text-accent-ink"
            >
              Make another donation
            </button>
          </div>
        ) : (
          <div className="mt-8">
            <div
              role="group"
              aria-label="Choose a donation amount"
              className="grid grid-cols-3 gap-3"
            >
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
                    className={`px-2 py-4 font-display text-lg font-bold transition-all sm:text-xl ${
                      isActive
                        ? "bg-accent text-white"
                        : "border border-line bg-paper text-ink hover:border-accent"
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
                className="w-full border border-line bg-paper px-4 py-3.5 text-center text-[16px] font-semibold text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none"
              />
            </div>

            <button
              type="button"
              onClick={donate}
              disabled={!amount}
              className="mt-5 w-full bg-accent px-8 py-4 text-[14px] font-bold uppercase tracking-[1.5px] text-white transition-all hover:bg-accent-ink disabled:cursor-not-allowed disabled:opacity-60"
            >
              Donate {amount ? formatNaira(amount) : ""} Securely
            </button>
            <p className="mt-4 text-[13px] leading-relaxed text-muted">
              <LockIcon className="mr-1 inline-block h-4 w-4 align-[-2px] text-muted" />
              Secured by 256-bit encryption. All donations are legally
              compliant with Electoral Act 2022.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
