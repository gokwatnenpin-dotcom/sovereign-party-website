import { TICKER_ITEMS } from "../data";

export default function Ticker() {
  const row = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div
      aria-label="Party announcements"
      className="overflow-hidden border-y border-line bg-soft py-3"
    >
      <div className="ticker-track items-center gap-0">
        {[0, 1].map((half) => (
          <div
            key={half}
            className="flex shrink-0 items-center"
            aria-hidden={half === 1}
          >
            {row
              .slice(
                half * TICKER_ITEMS.length,
                half * TICKER_ITEMS.length + TICKER_ITEMS.length,
              )
              .map((item, i) => (
                <span
                  key={`${half}-${i}`}
                  className="flex items-center whitespace-nowrap text-[13px] font-semibold uppercase tracking-[1.2px] text-muted"
                >
                  <span className="px-6">{item}</span>
                  <span aria-hidden="true" className="text-line">
                    ◆
                  </span>
                </span>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
