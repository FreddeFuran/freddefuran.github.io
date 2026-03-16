import { useState } from "react";

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 12.44c0-3.38-1.8-4.95-4.2-4.95-1.94 0-2.8 1.06-3.28 1.81V8.5H9.58V20h3.38v-6.12c0-1.61.3-3.18 2.3-3.18 1.97 0 2 1.84 2 3.28V20h3.38v-7.56Z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 15h6" />
      <path d="M9 11h3" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const email = "fredrik.furuskog@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 md:grid md:grid-cols-2 md:gap-12">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Contact
          </p>

          <p className="mt-4 max-w-2xl leading-8 text-zinc-300">
            I am part of The Game Assembly’s internship program. As per the
            agreement between the Games Industry and The Game Assembly, neither
            student nor company may be in contact with one another regarding
            internships before April 15th. Any internship offers can be made on
            April 27th, at the earliest.
          </p>

          <p className="mt-5 text-sm text-zinc-500">
            For direct contact, please refer to email or LinkedIn.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 md:mt-0">
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <a
              href={`mailto:${email}`}
              className="group flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10"
              aria-label={`Send an email to ${email}`}
            >
              <MailIcon />
              <span>Email</span>

              <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-zinc-500 opacity-0 transition-all duration-300 group-hover:ml-2 group-hover:max-w-[260px] group-hover:opacity-100 sm:inline group-hover:text-zinc-400">
                {email}
              </span>
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="flex min-w-[88px] items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-3 text-sm text-zinc-200 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10"
              aria-label={`Copy email address ${email}`}
            >
              {copied ? (
                <span className="text-zinc-100">Copied!</span>
              ) : (
                <>
                  <CopyIcon />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>
          </div>

          <a
            href="https://linkedin.com/in/fredrikfuruskog/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10"
          >
            <LinkedInIcon />
            LinkedIn
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10"
          >
            <FileIcon />
            CV
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-10">
        <p className="text-xs text-zinc-500">Fredrik Furuskog</p>
      </div>
    </footer>
  );
}