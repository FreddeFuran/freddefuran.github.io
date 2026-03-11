import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AliensPage() {
  return (
    <div className="min-h-screen bg-[#070709] text-zinc-200">
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <section className="border-b border-white/10 pb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Game Project 6 — 3PP Exploration Adventure Game
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Aliens Stole My Sh?*!
          </h1>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            PhysX integration, VFX pipeline development, and graphics feature work.
          </p>
        </section>

        <section className="py-10">
          <div className="overflow-hidden border border-white/10 bg-white/[0.03]">
            <img
              src="/projects/project_06.png"
              alt="Aliens Stole My Sh?*!"
              className="h-[260px] w-full object-cover md:h-[460px]"
            />
          </div>
        </section>

        <section className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Role</p>
            <p className="mt-2 text-zinc-200">Physics / Graphics / VFX Pipeline</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Focus</p>
            <p className="mt-2 text-zinc-200">Engine integration and rendering support</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Project</p>
            <p className="mt-2 text-zinc-200">3rd Person Exploration Adventure</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Type</p>
            <p className="mt-2 text-zinc-200">Detailed Project Page</p>
          </div>
        </section>

        <section className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              On this project I was responsible for implementing and wrapping PhysX,
              developing the VFX pipeline, and contributing to graphics feature work.
            </p>
            <p className="mt-4 leading-8 text-zinc-300">
              The work was focused on integrating technical systems in a way that was
              practical for the project and useful to the rest of the team.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Main Contributions</h2>
            <ul className="mt-5 space-y-3 text-zinc-300">
              <li>• PhysX implementation and wrapper work</li>
              <li>• VFX pipeline development</li>
              <li>• Graphics feature implementation</li>
              <li>• Engine-facing technical integration</li>
            </ul>
          </div>
        </section>

        <section className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">PhysX Integration</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              A key part of my work was implementing and wrapping PhysX in a way that
              made it usable within the project’s existing engine structure and
              gameplay context.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">VFX + Graphics</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              I also worked on the project’s VFX pipeline and on graphics-related
              feature implementation, helping support both the visual side of the
              project and the technical systems behind it.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}