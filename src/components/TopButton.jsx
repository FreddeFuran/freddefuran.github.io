import { useEffect, useState } from "react";

export default function TopButton({ showAfter = 500 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > showAfter);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-20 right-6 z-20 border border-white/10 bg-black/60 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-white/10"
    >
      ↑ Top
    </button>
  );
}