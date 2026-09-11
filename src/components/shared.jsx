export function EagleMark({ className = "h-10 w-10" }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full bg-accent-soft ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" fill="none" className="h-[72%] w-[72%]">
        <path
          d="M24 4 L30 14 L44 12 L34 21 L40 34 L24 27 L8 34 L14 21 L4 12 L18 14 Z"
          fill="currentColor"
          className="text-ink"
        />
        <path d="M24 12 L27.5 20 L24 28 L20.5 20 Z" fill="#006b45" />
        <circle cx="24" cy="20" r="1.6" fill="currentColor" className="text-ink" />
        <path
          d="M10 38 L18 33 L24 36 L30 33 L38 38 L24 42 Z"
          fill="currentColor"
          className="text-ink"
          opacity="0.9"
        />
      </svg>
    </span>
  );
}

const policyPaths = {
  economy: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5h8v2M3 12h18M10 12v2h4v-2" />
    </>
  ),
  infrastructure: (
    <>
      <path d="M3 20h18M5 20V8h5v12M10 8V4h4l2 4M15 20V11h4v9M7 12h1m-1 4h1m9-1h1" />
    </>
  ),
  education: (
    <>
      <path d="m3 7 9-4 9 4-9 4-9-4Z" />
      <path d="M6 9v5c3 3 9 3 12 0V9M21 7v6" />
    </>
  ),
  health: (
    <>
      <path d="M12 21s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.4-7 10-7 10Z" />
      <path d="M12 7v8M8 11h8" />
    </>
  ),
  justice: (
    <>
      <path d="M12 3v18M5 7h14M5 7l-3 6h6L5 7Zm14 0-3 6h6l-3-6ZM8 21h8" />
    </>
  ),
  environment: (
    <>
      <path d="M20 4C11 4 5 9 5 16c0 2 .8 3.5 2 4 7 0 12-5 12-16Z" />
      <path d="M4 20c4-4 7-7 12-10" />
    </>
  ),
};

export function PolicyIcon({ type, className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {policyPaths[type]}
    </svg>
  );
}

export function LockIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function SectionLabel({ children, dark = false }) {
  return (
    <p
      className={`text-[12px] font-semibold uppercase leading-none tracking-[1.5px] ${
        dark ? "text-white" : "text-accent"
      }`}
    >
      <span
        aria-hidden="true"
        className={`mr-2 inline-block h-[2px] w-6 translate-y-[-3px] ${
          dark ? "bg-white/30" : "bg-accent"
        }`}
      />
      {children}
    </p>
  );
}
