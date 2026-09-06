import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Mission from "./components/Mission";
import Policies from "./components/Policies";
import Leadership from "./components/Leadership";
import Impact from "./components/Impact";
import News from "./components/News";
import Events from "./components/Events";
import Join from "./components/Join";
import Donate from "./components/Donate";
import Footer from "./components/Footer";

const SPY_IDS = ["home", "mission", "policies", "leadership", "news", "events", "join"];

export default function App() {
  const [active, setActive] = useState("home");

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  // Scroll-spy: highlight nav link for section in view
  useEffect(() => {
    const sections = SPY_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Handle initial hash (e.g. direct link to #policies)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && SPY_IDS.includes(hash)) {
      const t = window.setTimeout(() => scrollTo(hash), 100);
      return () => window.clearTimeout(t);
    }
  }, [scrollTo]);

  return (
    <div className="min-h-screen bg-white font-body text-ink">
      <a
        href="#mission"
        onClick={(e) => {
          e.preventDefault();
          scrollTo("mission");
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
      >
        Skip to content
      </a>
      <Navbar active={active} onNavigate={scrollTo} />
      <main>
        <Hero onNavigate={scrollTo} />
        <Ticker />
        <Mission />
        <Policies />
        <Leadership />
        <Impact />
        <News />
        <Events />
        <Join />
        <Donate />
      </main>
      <Footer onNavigate={scrollTo} />
    </div>
  );
}
