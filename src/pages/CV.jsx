import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopButton from "../components/TopButton";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function CV() {
  const [language, setLanguage] = useState("en");
  const [containerWidth, setContainerWidth] = useState(0);
  const [zoom, setZoom] = useState(1);

  const previewRef = useRef(null);

  const pdfPath = useMemo(() => {
    return language === "en"
      ? "/cv/Fredrik_Furuskog_CV_EN.pdf"
      : "/cv/Fredrik_Furuskog_CV_SV.pdf";
  }, [language]);

  useEffect(() => {
    const element = previewRef.current;
    if (!element) return;

    const updateWidth = () => {
      const width = element.clientWidth;
      setContainerWidth(width);
    };

    updateWidth();

    const observer = new ResizeObserver(() => {
      updateWidth();
    });

    observer.observe(element);
    window.addEventListener("resize", updateWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    setZoom(1);
  }, [language]);

  function zoomOut() {
    setZoom((prev) => Math.max(prev - 0.1, 0.8));
  }

  function zoomIn() {
    setZoom((prev) => Math.min(prev + 0.1, 1.4));
  }

  const pageWidth = useMemo(() => {
    if (!containerWidth) return 0;

    // Inner padding compensation + a sane desktop cap
    const fittedWidth = Math.min(containerWidth - 24, 950);

    return Math.floor(fittedWidth * zoom);
  }, [containerWidth, zoom]);

  return (
    <div className="relative min-h-screen bg-[#070709] text-zinc-200">
      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="mx-auto max-w-6xl">
          <section className="px-6 py-8 md:py-10">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                CV
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
                Choose between the English and Swedish version of my CV below.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl">
              <div className="flex flex-wrap items-center justify-end gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-4">
                <div className="inline-flex rounded-2xl border border-white/10 bg-white/[0.03] p-1">
                  <button
                    onClick={() => setLanguage("en")}
                    className={`rounded-xl px-3 py-2 text-sm transition ${
                      language === "en"
                        ? "bg-white text-black"
                        : "text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage("sv")}
                    className={`rounded-xl px-3 py-2 text-sm transition ${
                      language === "sv"
                        ? "bg-white text-black"
                        : "text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    SV
                  </button>
                </div>

                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/[0.06]"
                >
                  Open PDF
                </a>

                <a
                  href={pdfPath}
                  download
                  className="rounded-2xl border border-white/10 bg-white px-4 py-2 text-sm text-black transition hover:bg-zinc-200"
                >
                  Download
                </a>

                <button
                  onClick={zoomOut}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/[0.06]"
                >
                  −
                </button>

                <button
                  onClick={zoomIn}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/[0.06]"
                >
                  +
                </button>
              </div>

              <div
                ref={previewRef}
                className="overflow-x-auto bg-zinc-950/60 p-3 md:p-6"
              >
                <div className="flex justify-center">
                  <Document
                    file={pdfPath}
                    loading={
                      <div className="py-20 text-sm text-zinc-500">
                        Loading PDF...
                      </div>
                    }
                    error={
                      <div className="py-20 text-sm text-red-400">
                        Failed to load PDF.
                      </div>
                    }
                  >
                    {pageWidth > 0 && (
                      <Page
                        pageNumber={1}
                        width={pageWidth}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="overflow-hidden rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
                      />
                    )}
                  </Document>
                </div>
              </div>
            </div>
          </section>

          <div id="contact" className="mt-10 scroll-mt-24">
            <Footer />
          </div>
        </div>

        <TopButton />
      </div>
    </div>
  );
}