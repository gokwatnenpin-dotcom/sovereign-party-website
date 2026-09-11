import { EagleMark } from "./shared";

const QUICK = [
  ["Home", "home"],
  ["Our Mission", "mission"],
  ["Policies", "policies"],
  ["Leadership", "leadership"],
  ["News", "news"],
  ["Events", "events"],
];

const INVOLVED = [
  ["Join", "join"],
  ["Donate", "donate"],
  ["Volunteer", "join"],
  ["Register to Vote", "join"],
  ["Download Manifesto", "policies"],
];

const SOCIALS = [
  {
    name: "X (Twitter)",
    path: "M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.5 22H3.4l7.3-8.3L1 2h6.5l4.4 5.9L18.9 2z",
  },
  {
    name: "Facebook",
    path: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4z",
  },
  {
    name: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8C2.4 4 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.4a1.4 1.4 0 100-2.9 1.4 1.4 0 000 2.9z",
  },
  {
    name: "YouTube",
    path: "M23.5 7.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C17 3.6 12 3.6 12 3.6s-5 0-8.2.3c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.3 9.1.3 11v1.8c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.6 1 1.9.2 7.9.3 8 .3s5 0 8.2-.4c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V11c0-1.9-.2-3.8-.2-3.8zM9.8 15V8.4l6.2 3.3L9.8 15z",
  },
];

export default function Footer({ onNavigate }) {
  const go = (id) => (e) => {
    e.preventDefault();
    onNavigate(id);
  };
  return (
    <footer className="border-t-4 border-accent bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Col 1 */}
        <div>
          <p className="flex items-center gap-3">
            <EagleMark className="h-10 w-10" />
            <span className="font-display text-base font-bold leading-tight text-white">
              THE SOVEREIGN
              <br />
              PARTY
            </span>
          </p>
          <p className="mt-4 font-display text-[15px] italic text-white/70">
            &ldquo;One Nation. One Purpose. Forward.&rdquo;
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/50">
            For the People. By the People. Founded 2018.
          </p>
          <ul className="mt-5 flex gap-2.5" aria-label="Social media">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href="#home"
                  onClick={(e) => e.preventDefault()}
                  aria-label={`The Sovereign Party on ${s.name}`}
                  className="flex h-10 w-10 items-center justify-center text-white/50 transition-colors hover:text-accent"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px]"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2 */}
        <nav aria-label="Quick links">
          <h3 className="text-[12px] font-bold uppercase tracking-[2px] text-white/50">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {QUICK.map(([label, id]) => (
              <li key={id + label}>
                <a
                  href={`#${id}`}
                  onClick={go(id)}
                  className="text-white/80 transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Col 3 */}
        <nav aria-label="Get involved">
          <h3 className="text-[12px] font-bold uppercase tracking-[2px] text-white/50">
            Get Involved
          </h3>
          <ul className="mt-4 space-y-2.5 text-[15px]">
            {INVOLVED.map(([label, id]) => (
              <li key={label}>
                <a
                  href={`#${id}`}
                  onClick={go(id)}
                  className="text-white/80 transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Col 4 */}
        <div>
          <h3 className="text-[12px] font-bold uppercase tracking-[2px] text-white/50">
            Contact
          </h3>
          <address className="mt-4 space-y-3 text-[14px] not-italic leading-relaxed text-white/50">
            <p>
              National Secretariat
              <br />
              14 Sovereign Avenue, Central District
              <br />
              Abuja, FCT, Nigeria
            </p>
            <p>
              <a
                href="tel:+2349000000000"
                className="text-white/80 hover:text-white hover:underline"
              >
                +234 (0) 900 000 0000
              </a>
              <br />
              <a
                href="mailto:info@sovereignparty.ng"
                className="text-white/80 hover:text-white hover:underline"
              >
                info@sovereignparty.ng
              </a>
            </p>
            <p>
              <a
                href="#home"
                onClick={(e) => e.preventDefault()}
                className="text-white/80 underline underline-offset-4 hover:text-white"
              >
                Find us on the map →
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-[13px] leading-relaxed text-white/50 sm:px-6">
          The Sovereign Party is a registered political organization. All
          electoral activities comply with the Independent National Electoral
          Commission (INEC) guidelines.
        </p>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-[13px] text-white/50 sm:px-6 md:flex-row lg:px-8">
          <p>© 2026 The Sovereign Party. All rights reserved.</p>
          <ul className="flex gap-5">
            {["Privacy Policy", "Terms", "Media Kit"].map((l) => (
              <li key={l}>
                <a
                  href="#home"
                  onClick={(e) => e.preventDefault()}
                  className="text-white/80 hover:text-white hover:underline"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
