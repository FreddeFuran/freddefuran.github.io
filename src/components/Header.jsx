import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isScrolled) {
      setMenuOpen(false);
    }
  }, [isScrolled]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleProjectsClick = () => {
    if (isHomePage) {
      scrollToId("projects");
    } else {
      navigate("/projects");
    }
  };

  const handleContactClick = () => {
    scrollToId("contact");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070709]/85 backdrop-blur">
      <div
        className={`mx-auto max-w-6xl px-6 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <div
              className={`font-semibold tracking-tight text-white transition-all duration-300 ${
                isScrolled ? "text-base sm:text-[1.05rem]" : "text-[1.15rem]"
              }`}
            >
              Fredrik Furuskog
            </div>

            <div
              className={`mt-1 overflow-hidden text-xs uppercase tracking-[0.18em] text-zinc-500 transition-all duration-300 group-hover:text-zinc-300 ${
                isScrolled
                  ? "max-h-0 opacity-0 md:max-h-5 md:opacity-100"
                  : "max-h-5 opacity-100"
              }`}
            >
              Game Programmer
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
            {!isHomePage && (
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
            )}

            <button
              onClick={handleProjectsClick}
              className="transition hover:text-white"
            >
              Projects
            </button>

            <button
              onClick={handleContactClick}
              className="transition hover:text-white"
            >
              Contact
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="relative flex h-11 w-11 items-center justify-center text-zinc-300 transition hover:text-white md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-all duration-300 ${
                  menuOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-5 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 bg-current transition-all duration-300 ${
                  menuOpen ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "mt-4 max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2 border-t border-white/10 pt-4 text-base text-zinc-200">
            {!isHomePage && (
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 transition hover:bg-white/5 hover:text-white"
              >
                Home
              </Link>
            )}

            <button
              onClick={handleProjectsClick}
              className="rounded-md px-3 py-3 text-left transition hover:bg-white/5 hover:text-white"
            >
              Projects
            </button>

            <button
              onClick={handleContactClick}
              className="rounded-md px-3 py-3 text-left transition hover:bg-white/5 hover:text-white"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}