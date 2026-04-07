import PageShell from "../components/PageShell";

const showcaseVideos = [
  {
    title: "Bounding Box + Octree Visualization",
    category: "Debug / Optimization",
    src: "/spite/Bounding-Box-And-Octree-Visualization.webm",
    description:
      "In-engine visualization of bounding boxes and octree partitioning through ImGui. This made it much easier to inspect spatial partitioning, debug scene organization, and verify that optimization systems were behaving as expected.",
  },
  {
    title: "Frustum Culling",
    category: "Rendering / Optimization",
    src: "/spite/Frustum-Culling.webm",
    description:
      "Implemented frustum culling to avoid rendering objects outside the camera view. This reduced unnecessary draw work and became an important part of improving runtime performance in larger scenes.",
  },
  {
    title: "Heatmap Visualization",
    category: "Debug / Tools",
    src: "/spite/Heatmap-Visualization.webm",
    description:
      "Created an ImGui-based heatmap visualization for debugging and analysis. This allowed us to quickly debug problems with the heatmap generation, the heatmap was used as an interface for enemies to efficiently query world data without having to do a ton of distance checks but rather just checking their coordinates on the grid.",
  },
  {
    title: "Player Silhouette Shader",
    category: "Graphics",
    src: "/spite/Silhouette-Shader.webm",
    description:
      "Built a silhouette shader to keep the player visible when obscured by world geometry. This improved readability and moment-to-moment gameplay clarity without needing to compromise scene composition.",
  },
  {
    title: "Text Rendering in DX11",
    category: "Graphics / Engine",
    src: "/spite/Text-Rendering.webm",
    description:
      "Implemented text rendering support in DirectX 11 as part of broader engine-facing graphics work. This was mainly used for displaying which debug pass was currently being rendered. In the example video above you can see the text rendered in the top-left corner.",
  },
  {
    title: "Rive Texture Binding with DX11",
    category: "Engine / Integration",
    src: "/spite/Texture-Binding.webm",
    alignment: "bottom",
    description:
      "Implemented custom texture binding so DirectX 11 textures rendered in-engine could be used as renderable images inside Rive. This was not available as a built-in Rive feature, so we had to build the integration ourselves by figuring out how the Rive runtime worked with DX11 and solving it with staging textures. In the example above, the health and mana orbs are rendered through Rive while being generated through our DX11 implementation. This allowed our UI to be handled by the Rive Runtime while allowing elements to be rendered using custom in-engine shaders.",
  },
  {
    title: "Manual JSON VFX System",
    category: "VFX Pipeline",
    src: "/spite/VFX-System.webm",
    description:
      "Worked on a flexible VFX system driven through manual JSON authoring. While not editor-based, it provided a practical and extendable pipeline for getting effects into the game and supporting the project’s visual needs. It was added fairly late in production leading to time constraints, which is why it ended up being fully manual JSON-editing.",
  },
  {
    title: "Video Player",
    category: "Engine / Media",
    src: "/spite/Video-Player.webm",
    description:
      "Implemented a video player feature in-engine using FFmpeg 7.0, expanding the project’s media capabilities and adding another reusable engine-side system to the toolset.",
  },
];

function VideoShowcaseCard({ item }) {
  const alignmentClass =
    {
      center: "object-center",
      top: "object-top",
      bottom: "object-bottom",
      left: "object-left",
      right: "object-right",
      "top-left": "object-[left_top]",
      "top-right": "object-[right_top]",
      "bottom-left": "object-[left_bottom]",
      "bottom-right": "object-[right_bottom]",
    }[item.alignment] || "object-center";

  return (
    <article className="overflow-hidden border border-white/10 bg-white/[0.03]">
      <div className="border-b border-white/10 bg-black">
        <video
          className={`h-[220px] w-full object-cover md:h-[280px] ${alignmentClass}`}
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
      </div>
    </article>
  );
}

export default function SpitePage() {
  return (
    <PageShell>
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
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Role
          </p>
          <p className="mt-2 text-zinc-200">Backend / Graphics Programming</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Focus
          </p>
          <p className="mt-2 text-zinc-200">Optimization and runtime systems</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Project
          </p>
          <p className="mt-2 text-zinc-200">Topdown Hack-and-Slash</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Scope
          </p>
          <p className="mt-2 text-zinc-200">10 weeks (half-time)</p>
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
            A large part of my work was aimed at making the project more
            efficient at runtime and improving how systems behaved under heavier
            load.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white">
            Main Contributions
          </h2>
          <ul className="mt-5 space-y-3 text-zinc-300">
            <li>• Threaded scene loading</li>
            <li>• Octree-based frustum culling</li>
            <li>• Grid-optimized navmesh traversal</li>
            <li>• Raycasting improvements</li>
            <li>• Graphics programming</li>
            <li>• Debug visualization tools through ImGui</li>
            <li>• Custom Rive + DX11 texture binding integration</li>
            <li>• Video player implementation</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            Performance Work
          </h2>
          <p className="mt-4 leading-8 text-zinc-300">
            Much of the work on this project centered around reducing
            bottlenecks and improving how the game handled larger runtime
            workloads.
          </p>
          <p className="mt-4 leading-8 text-zinc-300">
            This included work on loading, visibility culling, and spatially
            optimized traversal and queries.
          </p>
          <p className="mt-4 leading-8 text-zinc-300">
            One of the most impactful improvements was threaded scene loading
            together with caching of materials and meshes, which reduced loading
            times from roughly <span className="text-white">1–2 minutes</span>{" "}
            down to around <span className="text-white">1–10 seconds</span>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white">Technical Focus</h2>
          <p className="mt-4 leading-8 text-zinc-300">
            The most important part of this project for me was building systems
            that were practical, performant, and valuable in the broader runtime
            context rather than isolated technical experiments.
          </p>
          <p className="mt-4 leading-8 text-zinc-300">
            That included both optimization-heavy systems and engine-facing
            feature work such as debug rendering, shader work, media support,
            text rendering, and UI-related DX11 integration.
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