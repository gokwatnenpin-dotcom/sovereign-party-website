import type { ReactNode } from "react";

export function EagleMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full bg-gold ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" fill="none" className="h-[72%] w-[72%]">
        {/* Rising golden eagle — stylised wings + diamond core */}
        <path
          d="M24 4 L30 14 L44 12 L34 21 L40 34 L24 27 L8 34 L14 21 L4 12 L18 14 Z"
          fill="#0b1a3b"
        />
        <path d="M24 12 L27.5 20 L24 28 L20.5 20 Z" fill="#c9a84c" />
        <circle cx="24" cy="20" r="1.6" fill="#0b1a3b" />
        <path
          d="M10 38 L18 33 L24 36 L30 33 L38 38 L24 42 Z"
          fill="#0b1a3b"
          opacity="0.9"
        />
      </svg>
    </span>
  );
}

export function SectionLabel({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-[12px] font-semibold uppercase leading-none tracking-[1.5px] ${
        dark ? "text-gold" : "text-crimson"
      }`}
    >
      <span aria-hidden="true" className="mr-2 inline-block h-[2px] w-6 translate-y-[-3px] bg-gold" />
      {children}
    </p>
  );
}
