import { Link } from "react-router";

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link to="/" className="group">
          <div className="text-[1.15rem] font-semibold tracking-tight text-white">
            Fredrik Furuskog
          </div>
          <div className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500 group-hover:text-zinc-300">
            Game Programmer
          </div>
        </Link>

        <nav className="flex gap-6 text-sm text-zinc-400">
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}