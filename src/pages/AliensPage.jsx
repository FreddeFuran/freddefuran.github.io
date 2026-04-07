import PageShell from "../components/PageShell";

const showcaseVideos = [
  {
    title: "Unreal → Custom Engine PhysX Parsing",
    category: "Physics / Pipeline / Engine Integration",
    src: "/aliens/unreal-physx-exporting.webm",
    description:
      "Implemented a pipeline for serializing relevant physics data from Unreal into our own engine, including collision mesh paths, geometry types, actor types, and other required metadata. This allowed level designers to retain control over functionality while making it possible for our custom engine to reconstruct and use PhysX data correctly at runtime.",
  },
  {
    title: "PhysX Raycasting and Sweepcasting",
    category: "Physics / Gameplay / Engine",
    src: "/aliens/ray-sweep-example.webm",
    description:
      "Implemented PhysX raycasting and sweepcasting support in-engine. The system uses templatized stack-allocated buffers, allowing programmers to decide how many hits a raycast or sweep can return depending on the use case. This made the API both efficient and flexible for gameplay and engine-side queries.",
  },
  {
    title: "Shader Hot Reloading + In-Engine Text Editor and Material Editor",
    category: "Tools / Graphics / Workflow",
    src: "/aliens/hot-reloading-text-edit.webm",
    description:
      "Implemented shader hot reloading together with an in-engine text editor using ImGuiColorTextEdit integrated into our material editor. This made shader iteration significantly faster by reducing friction in the workflow and allowing changes to be tested without repeated rebuild cycles.",
  },
  {
    title: "VFX Editor and Runtime System",
    category: "VFX / Tools / Specialization",
    src: "/aliens/Feature_Showcase.webm",
    href: "/#/project/specialization",
    description:
      "Worked on the VFX editor and runtime system used in the project, tying directly into my specialization work. This was designed as a major upgrade over the previous fully manual JSON-authored workflow used in an earlier project, replacing a more rigid process with a more practical and usable authoring pipeline. The editor and system was built as part of my specialization project but was used for the VFX work during this project.",
  },
  {
    title: "Baked Static Shadows",
    category: "Graphics / Rendering",
    src: "/aliens/baked-shadows.webm",
    description:
      "Implemented support for baked static shadows to improve scene grounding and visual quality while keeping runtime rendering costs under control. This helped push the environment visuals further without relying entirely on more expensive fully dynamic shadowing. In the example you can see the cut-off between dynamic and static shadows.",
  },
];

function VideoShowcaseCard({ item }) {
  const cardContent = (
    <>
      <div className="border-b border-white/10 bg-black">
        <video
          className="h-[220px] w-full object-cover md:h-[280px]"
          src={item.src}
          controls
          muted
          playsInline
          preload="metadata"
        />
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
          {item.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
        <p className="mt-4 leading-8 text-zinc-300">{item.description}</p>

        {item.href && (
          <p className="mt-5">
            <a
              href={item.href}
              className="text-sm font-medium text-white underline decoration-white/30 underline-offset-4 transition hover:decoration-white"
            >
              View related specialization work
            </a>
          </p>
        )}
      </div>
    </>
  );

  if (item.href) {
    return (
      <article className="overflow-hidden border border-white/10 bg-white/[0.03]">
        {cardContent}
      </article>
    );
  }

  return (
    <article className="overflow-hidden border border-white/10 bg-white/[0.03]">
      {cardContent}
    </article>
  );
}

export default function AliensPage() {
  return (
    <PageShell>
      <section className="border-b border-white/10 pb-10">
        <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
          Game Project 6 — 3PP Exploration Adventure Game
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Aliens Stole My Sh?*!
        </h1>
        <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
          PhysX integration, VFX pipeline development, and graphics feature
          work.
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
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Role
          </p>
          <p className="mt-2 text-zinc-200">
            Physics / Graphics / VFX Pipeline
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Focus
          </p>
          <p className="mt-2 text-zinc-200">
            Engine integration and rendering support
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Project
          </p>
          <p className="mt-2 text-zinc-200">
            3rd Person Exploration Adventure
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Scope
          </p>
          <p className="mt-2 text-zinc-200">15 weeks (half-time)</p>
        </div>
      </section>

      <section className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="text-2xl font-semibold text-white">Overview</h2>
          <p className="mt-4 leading-8 text-zinc-300">
            On this project I was responsible for implementing and wrapping
            PhysX, developing the VFX pipeline, and contributing to graphics
            feature work.
          </p>
          <p className="mt-4 leading-8 text-zinc-300">
            The work was focused on integrating technical systems in a way that
            was practical for the project and useful to the rest of the team.
            That included both runtime-facing systems and workflow improvements
            that made iteration easier for other disciplines.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white">
            Main Contributions
          </h2>
          <ul className="mt-5 space-y-3 text-zinc-300">
            <li>• PhysX implementation and wrapper work</li>
            <li>• Unreal-to-engine physics data parsing</li>
            <li>• PhysX raycasting and sweepcasting systems</li>
            <li>• Shader hot reloading and in-engine text editing</li>
            <li>• VFX editor and runtime pipeline work</li>
            <li>• Baked static shadow implementation</li>
            <li>• Engine-facing technical integration</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            PhysX Integration
          </h2>
          <p className="mt-4 leading-8 text-zinc-300">
            A key part of my work was implementing and wrapping PhysX in a way
            that made it usable within the project’s existing engine structure
            and gameplay context.
          </p>
          <p className="mt-4 leading-8 text-zinc-300">
            This included importing relevant physics-related data from Unreal Engine,
            exposing useful query functionality such as raycasts and sweeps, and
            making the overall system practical to work with for gameplay and
            level-side use cases.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white">VFX + Graphics</h2>
          <p className="mt-4 leading-8 text-zinc-300">
            I also worked on the project’s VFX pipeline and on graphics-related
            feature implementation, helping support both the visual side of the
            project and the technical systems behind it.
          </p>
          <p className="mt-4 leading-8 text-zinc-300">
            This ranged from workflow-focused tooling such as shader hot
            reloading and text editing to rendering-side improvements like baked
            static shadows, as well as the VFX editor and runtime system tied to
            my specialization project.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Selected Work
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Feature and System Showcase
          </h2>
          <p className="mt-4 leading-8 text-zinc-300">
            Below are examples of systems and features I worked on during the
            project, with videos showing either the implementation itself or the
            runtime result.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {showcaseVideos.map((item) => (
            <VideoShowcaseCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}