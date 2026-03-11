import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SpitePage() {
  return (
    <div className="min-h-screen bg-[#070709] text-zinc-200">
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <section className="border-b border-white/10 pb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Game Project 5 — Topdown Hack-and-Slash Game
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Spite: Blood and Gold
          </h1>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            Backend and graphics programming with a strong focus on optimization
            and runtime performance.
          </p>
        </section>

        <section className="py-10">
          <div className="overflow-hidden border border-white/10 bg-white/[0.03]">
            <img
              src="/projects/project_05.png"
              alt="Spite: Blood and Gold"
              className="h-[260px] w-full object-cover md:h-[460px]"
            />
          </div>
        </section>

        <section className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Role</p>
            <p className="mt-2 text-zinc-200">Backend / Graphics Programming</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Focus</p>
            <p className="mt-2 text-zinc-200">Optimization and runtime systems</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Project</p>
            <p className="mt-2 text-zinc-200">Topdown Hack-and-Slash</p>
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
              On Spite: Blood and Gold I mainly worked with backend and graphics
              programming, with a strong focus on optimization and performance.
            </p>
            <p className="mt-4 leading-8 text-zinc-300">
              A large part of my work was aimed at making the project more efficient
              at runtime and improving how systems behaved under heavier load.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Main Contributions</h2>
            <ul className="mt-5 space-y-3 text-zinc-300">
              <li>• Threaded scene loading</li>
              <li>• Octree-based frustum culling</li>
              <li>• Grid-optimized navmesh traversal</li>
              <li>• Raycasting improvements</li>
              <li>• Graphics-related programming work</li>
            </ul>
          </div>
        </section>

        <section className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">Performance Work</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              Much of the work on this project centered around reducing bottlenecks
              and improving how the game handled larger runtime workloads.
            </p>
            <p className="mt-4 leading-8 text-zinc-300">
              This included work on loading, visibility culling, and spatially
              optimized traversal and queries.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Technical Focus</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              The most important part of this project for me was building systems
              that were practical, performant, and valuable in the broader runtime
              context rather than isolated technical experiments.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}