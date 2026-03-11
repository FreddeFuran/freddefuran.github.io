import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SpecializationPage() {
  return (
    <div className="min-h-screen bg-[#070709] text-zinc-200">
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <section className="border-b border-white/10 pb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Specialization
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            In-Engine VFX Editor
          </h1>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            A custom in-engine editor built to make VFX authoring, timing, and
            playback preview faster and more practical directly inside the engine.
          </p>
        </section>

        <section className="py-10">
          <div className="overflow-hidden border border-white/10 bg-white/[0.03]">
            <img
              src="/projects/project_specialization.png"
              alt="In-Engine VFX Editor"
              className="h-[260px] w-full object-cover md:h-[460px]"
            />
          </div>
        </section>

        <section className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Role</p>
            <p className="mt-2 text-zinc-200">Tools / Graphics Programming</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Focus</p>
            <p className="mt-2 text-zinc-200">Authoring workflow and iteration speed</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Stack</p>
            <p className="mt-2 text-zinc-200">C++, ImGui, ImGuizmo</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Context</p>
            <p className="mt-2 text-zinc-200">Specialization project</p>
          </div>
        </section>

        <section className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              This project focused on building a custom in-engine VFX editor for
              working directly with effects inside the runtime environment instead
              of relying on a disconnected external workflow.
            </p>
            <p className="mt-4 leading-8 text-zinc-300">
              The goal was to make iteration faster, reduce friction, and give a
              clearer connection between editing and final in-engine behavior.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Why it mattered</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              VFX work often becomes slower when authoring tools feel detached
              from the actual runtime context. Building the editor directly into
              the engine made it easier to preview timing, placement, and behavior
              while working.
            </p>
          </div>
        </section>

        <section className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">What I implemented</h2>
            <ul className="mt-5 space-y-3 text-zinc-300">
              <li>• In-engine authoring workflow</li>
              <li>• Playback preview for effects</li>
              <li>• Timing and editing controls</li>
              <li>• UI for adjusting effect-related data</li>
              <li>• Workflow improvements for iteration speed</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Technical angle</h2>
            <ul className="mt-5 space-y-3 text-zinc-300">
              <li>• Tooling built directly into the engine</li>
              <li>• Immediate visual feedback while editing</li>
              <li>• Practical editor UI with runtime context</li>
              <li>• Focus on usability rather than just feature count</li>
            </ul>
          </div>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-semibold text-white">Next additions</h2>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            Later this page can be expanded with more screenshots, GIFs, a deeper
            breakdown of the editor timeline, transform controls, playback flow,
            and implementation details for how the tooling interacted with runtime
            data.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}