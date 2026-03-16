import { useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeSnippet({ title, language = "cpp", code }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const previousScrollYRef = useRef(0);

  const handleToggle = () => {
    if (!open) {
      previousScrollYRef.current = window.scrollY;
      setOpen(true);

      setTimeout(() => {
        wrapperRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);
    } else {
      setOpen(false);

      setTimeout(() => {
        window.scrollTo({
          top: previousScrollYRef.current,
          behavior: "smooth",
        });
      }, 50);
    }
  };

  return (
      <div
        ref={wrapperRef}
        className="scroll-mt-24 overflow-hidden border border-white/10 bg-white/[0.03]"
      >
      <button
        onClick={handleToggle}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-zinc-200 hover:bg-white/[0.03]"
      >
        <span>{title}</span>
        <span className="text-zinc-500">{open ? "Hide" : "Show"}</span>
      </button>

      {open && (
        <div className="border-t border-white/10">
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "1rem",
              background: "transparent",
              fontSize: "0.9rem",
            }}
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}