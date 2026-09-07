import { useState } from "react";
import { NIGERIAN_STATES } from "../data";
import { useReveal } from "../hooks";
import { LockIcon } from "./shared";

const inputCls =
  "w-full rounded-[4px] border border-white bg-white px-4 py-3 text-[15px] text-neutral-dark placeholder:text-[#6B6B6B] transition-colors focus:border-primary-green focus:outline-none";

export default function Join() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", state: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((err) => ({ ...err, [k]: undefined }));
  };

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (form.name.trim().length < 2) err.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      err.email = "Enter a valid email address.";
    if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim()))
      err.phone = "Enter a valid phone number.";
    if (!form.state) err.state = "Please select your state.";
    setErrors(err);
    if (Object.keys(err).length === 0) setStatus("success");
  };

  return (
    <section id="join" aria-labelledby="join-heading" className="grid lg:grid-cols-2">
      {/* Left — accent light */}
      <div ref={ref} className="flex items-center bg-light-green px-4 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="reveal mx-auto max-w-lg">
          <p className="text-[12px] font-bold uppercase tracking-[2px] text-white">
            Membership is free · Takes 60 seconds
          </p>
          <h2 id="join-heading" className="mt-4 font-display text-[34px] font-extrabold leading-[1.1] text-white sm:text-[44px]">
            Your Voice. Your Vote. Your Country.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.75] text-white">
            Over 2.4 million citizens have already joined the movement. Be
            part of the change that writes history — ward meetings, volunteer
            drives, and a vote that counts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#join-form"
              className="rounded-[4px] bg-white px-7 py-3.5 text-center text-[13px] font-bold uppercase tracking-[1.5px] text-primary-green transition-colors hover:text-deep-green hover:underline"
            >
              Register to Vote
            </a>
            <a
              href="#join-form"
              className="rounded-[4px] border-2 border-white px-7 py-3.5 text-center text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-deep-green hover:underline"
            >
              Become a Volunteer
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t-2 border-white/20 pt-6">
            {[
              ["2.4M+", "Members"],
              ["18", "States"],
              ["774", "Wards Target"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-2xl font-extrabold text-white sm:text-3xl">{v}</dd>
                <dd className="text-[11px] font-bold uppercase tracking-[1.5px] text-white">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Right — navy form */}
      <div className="flex items-center bg-primary-green px-4 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto w-full max-w-lg">
          {status === "success" ? (
            <div role="status" className="rounded-[8px] border border-white/20 bg-deep-green p-8 text-center">
              <span aria-hidden="true" className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl font-extrabold text-white">
                ✓
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-white">
                Welcome to the movement, {form.name.split(" ")[0]}.
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white">
                Your registration from {form.state} has been received. A ward
                coordinator will reach you at {form.email} within 48 hours.
              </p>
              <p className="mt-4 text-[12px] uppercase tracking-[2px] text-white">
                One Nation. One Purpose. Forward.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setForm({ name: "", email: "", phone: "", state: "", message: "" });
                }}
                className="mt-6 text-[13px] font-bold uppercase tracking-[1px] text-white underline underline-offset-4"
              >
                Register another member
              </button>
            </div>
          ) : (
            <form
              id="join-form"
              onSubmit={submit}
              noValidate
              aria-label="Join The Sovereign Party"
              className="rounded-[8px] border border-white/10 bg-deep-green p-6 sm:p-8"
            >
              <h3 className="font-display text-2xl font-bold text-white">Join The Sovereign Party</h3>
              <p className="mt-1 text-sm text-white">Free membership · No dues · Leave anytime</p>

              <div className="mt-6 grid gap-5">
                <div>
                  <label htmlFor="join-name" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[1.5px] text-white">
                    Full Name *
                  </label>
                  <input
                    id="join-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Adaeze Okafor"
                    value={form.name}
                    onChange={set("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "join-name-err" : undefined}
                    className={inputCls}
                  />
                  {errors.name && <p id="join-name-err" role="alert" className="mt-1.5 text-[13px] text-white">{errors.name}</p>}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="join-email" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[1.5px] text-white">
                      Email Address *
                    </label>
                    <input
                      id="join-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={set("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "join-email-err" : undefined}
                      className={inputCls}
                    />
                    {errors.email && <p id="join-email-err" role="alert" className="mt-1.5 text-[13px] text-white">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="join-phone" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[1.5px] text-white">
                      Phone Number *
                    </label>
                    <input
                      id="join-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+234 ..."
                      value={form.phone}
                      onChange={set("phone")}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "join-phone-err" : undefined}
                      className={inputCls}
                    />
                    {errors.phone && <p id="join-phone-err" role="alert" className="mt-1.5 text-[13px] text-white">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="join-state" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[1.5px] text-white">
                    State *
                  </label>
                  <select
                    id="join-state"
                    name="state"
                    value={form.state}
                    onChange={set("state")}
                    aria-invalid={!!errors.state}
                    aria-describedby={errors.state ? "join-state-err" : undefined}
                    className={`${inputCls} ${form.state ? "" : "text-[#6B6B6B]"}`}
                  >
                    <option value="" disabled>
                      Select your state
                    </option>
                    {NIGERIAN_STATES.map((s) => (
                      <option key={s} value={s} className="bg-white text-neutral-dark">
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.state && <p id="join-state-err" role="alert" className="mt-1.5 text-[13px] text-white">{errors.state}</p>}
                </div>

                <div>
                  <label htmlFor="join-message" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[1.5px] text-white">
                    Why are you joining? <span className="font-normal normal-case tracking-normal text-white">(optional)</span>
                  </label>
                  <textarea
                    id="join-message"
                    name="message"
                    rows={3}
                    placeholder="Tell us what change you want to see..."
                    value={form.message}
                    onChange={set("message")}
                    className={`${inputCls} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-[4px] bg-primary-green px-6 py-4 text-[13px] font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-deep-green"
                >
                  Join The Sovereign Party
                </button>
                <p className="text-center text-[12px] leading-relaxed text-white">
                  <LockIcon className="mr-1 inline-block h-4 w-4 align-[-2px] text-white" />
                  Your data is private and protected. We never sell or share member information.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
