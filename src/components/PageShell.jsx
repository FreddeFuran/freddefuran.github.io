import BackgroundSlideshow from "./BackgroundSlideshow";
import Header from "./Header";
import Footer from "./Footer";
import TopButton from "./TopButton";

export default function PageShell({ children }) {
  return (
    <BackgroundSlideshow>
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-8 md:py-10">
        {children}
      </main>

      <TopButton />

      <div id="contact" className="mt-10 scroll-mt-24">
        <Footer />
      </div>
    </BackgroundSlideshow>
  );
}