export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
          Contact
        </p>

        <h2 className="mt-2 text-xl font-semibold text-white">
          Internship Disclaimer
        </h2>

        <p className="mt-4 max-w-2xl leading-8 text-zinc-300">
          I am part of The Game Assembly’s internship program. As per the agreement between the Games Industry and The Game Assembly, neither student nor company may be in contact with one another regarding internships before April 15th. Any internship offers can be made on April 27th, at the earliest.
        </p>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-400">
          <a href="mailto:fredrik.furuskog@gmail.com" className="transition hover:text-white border-b border-transparent hover:border-white/30">
            Email
          </a>

          <a
            href="https://linkedin.com/in/fredrikfuruskog/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white border-b border-transparent hover:border-white/30"
          >
            LinkedIn
          </a>

          <a href="#" className="transition hover:text-white border-b border-transparent hover:border-white/30">
            CV - Coming soon
          </a>
        </div>
      </div>
    </footer>
  );
}