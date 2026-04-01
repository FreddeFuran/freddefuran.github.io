import { Link } from "react-router";
import { useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopButton from "../components/TopButton";

function RevealSection({ children, className = "", delay = 0, ...props }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <section
      {...props}
      className={`transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </section>
  );
}

function ProjectBlock({ project, onHoverStart, onHoverEnd, featured = false }) {
  return (
    <article
      onMouseEnter={() => onHoverStart(project.hoverBackground || project.image)}
      onMouseLeave={onHoverEnd}
      className={`group border-b border-white/10 pb-10 transition-transform duration-300 hover:-translate-y-1 ${
        featured ? "pb-12" : ""
      }`}
    >
      <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-start">
        <div className={featured ? "order-2" : "order-1"}>
          <div className="overflow-hidden border border-white/10 bg-white/[0.03]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover transition duration-500 ease-out group-hover:scale-[1.035]"
            />
          </div>
        </div>

        <div className={`${featured ? "order-1" : "order-2"} flex flex-col`}>
          <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                {project.label}
              </p>
              <h3
                className={`${
                  featured ? "mt-2 text-3xl md:text-4xl" : "mt-2 text-2xl"
                } font-semibold tracking-tight text-white transition duration-300 group-hover:text-zinc-50`}
              >
                {project.title}
              </h3>
            </div>
            {project.meta && (
              <span className="text-xs text-zinc-500">{project.meta}</span>
            )}
          </div>

          <p className="mt-4 max-w-2xl leading-8 text-zinc-300">
            {project.description}
          </p>

          {project.bullets?.length > 0 && (
            <ul className="mt-5 space-y-2 text-sm text-zinc-400">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {project.contributions.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-zinc-500">
              {project.contributions.map((item) => (
                <span key={item} className="border-b border-white/10 pb-0.5">
                  {item}
                </span>
              ))}
            </div>
          )}

          {project.hasDetailPage && (
            <div className="mt-7 flex items-center gap-4">
              <Link
                to={`/project/${project.slug}`}
                className="border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-zinc-100 transition hover:bg-white/10"
              >
                Read More
              </Link>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

const projects = [
    {
      slug: "specialization",
      hasDetailPage: true,
      label: "Specialization",
      title: "VFX Compositing Tool and System",
      image: "/projects/project_specialization.png",
      hoverBackground: "/backgrounds/background_01.png",
      description:
        "A ImGui-based in-engine VFX editor built for creating and previewing VFX in runtime, with a centralized VFX Manager.",
      bullets: [
        "Direct in-engine editing workflow",
        "Playback preview and timing control",
        "Built to speed up iteration for effects work",
      ],
      contributions: ["ImGui", "Tools Programming", "VFX Pipeline"],
    },
    {
      slug: "aliens-stole-my-ship",
      hasDetailPage: true,
      label: "Game Project 6 — 3PP Exploration Adventure Game",
      title: "Aliens Stole My Sh?*!",
      image: "/projects/project_06.png",
      hoverBackground: "/backgrounds/background_06.png",
      description:
        "Implemented and wrapped PhysX, built out the VFX pipeline, and worked on implementation of Compute Shaders and various graphics features.",
      bullets: [
        "PhysX integration",
        "VFX pipeline development",
        "General graphics programming",
      ],
      contributions: [
        "PhysX Integration",
        "VFX Pipeline",
        "Graphics Programming",
      ],
    },
    {
      slug: "spite-blood-and-gold",
      hasDetailPage: true,
      label: "Game Project 5 — Topdown Hack-and-Slash Game",
      title: "Spite: Blood and Gold",
      image: "/projects/project_05.png",
      hoverBackground: "/backgrounds/background_02.png",
      description:
        "Backend and graphics programming with a strong focus on optimization and runtime performance.",
      bullets: [
        "Threaded scene loading",
        "Octree-based frustum culling",
        "Grid-optimized navmesh traversal and raycasting",
      ],
      contributions: ["Backend", "Graphics Programming", "Optimization"],
    },
    {
      slug: "pawns-gambit",
      hasDetailPage: false,
      label: "Game Project 2 — Mobile Puzzle Game",
      title: "Pawn's Gambit",
      image: "/projects/project_02.png",
      hoverBackground: "/backgrounds/background_05.png",
      description:
        "Enemy AI development for a mobile game project nominated for Game of the Year Mobile at The Rookies, winning Runner-Up and People's Choice.",
      bullets: ["Enemy AI implementation", "Award-winning student project"],
      contributions: ["Enemy AI", "Gameplay Systems"],
    },
    {
      slug: "slashimi",
      hasDetailPage: false,
      label: "Game Project 4 — Topdown Adventure Game",
      title: "Slashimi",
      image: "/projects/project_04.png",
      hoverBackground: "/backgrounds/background_03.png",
      description:
        "Worked mainly on NPC AI systems, focusing on behavior logic and gameplay systems.",
      bullets: ["NPC behavior systems", "A-star pathfinding", "Gameplay logic"],
      contributions: ["Enemy AI", "Gameplay Systems"],
    },
    {
      slug: "tba",
      hasDetailPage: false,
      label: "Game Project 7",
      title: "TBA",
      image: "/projects/project_07.png",
      hoverBackground: "/backgrounds/background_02.png",
      description:
        "Upcoming project. Detailed information will be added once the project has been finished.",
      bullets: [],
      contributions: [],
    },
  ];

export default function HomePage() {
  const [activeBg, setActiveBg] = useState(0);
  const [hoveredBackground, setHoveredBackground] = useState(null);

  const backgrounds = useMemo(
    () => [
      "/backgrounds/background_01.png",
      "/backgrounds/background_02.png",
      "/backgrounds/background_03.png",
      "/backgrounds/background_04.png",
      "/backgrounds/background_05.png",
      "/backgrounds/background_06.png",
    ],
    []
  );

  useEffect(() => {
    if (hoveredBackground) return;

    const interval = setInterval(() => {
      setActiveBg((prev) => (prev + 1) % backgrounds.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [backgrounds.length, hoveredBackground]);

  const activeBackground = hoveredBackground || backgrounds[activeBg];

  return (
    <div className="relative min-h-screen bg-[#070709] text-zinc-200">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {backgrounds.map((bg) => (
          <img
            key={bg}
            src={bg}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[2200ms] ${
              activeBackground === bg ? "opacity-80" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 backdrop-blur-[7px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,7,9,0.55),rgba(7,7,9,0.85))]" />
      </div>

      <div className="relative z-10 min-h-screen">
        <Header />

        <div className="mx-auto max-w-6xl">
          <RevealSection className="px-6 py-8 md:py-10" delay={100}>
            <ProjectBlock
              project={projects[0]}
              onHoverStart={setHoveredBackground}
              onHoverEnd={() => setHoveredBackground(null)}
              featured
            />
          </RevealSection>

          <RevealSection
            id="projects"
            className="scroll-mt-24 px-6 py-8 md:py-10"
            delay={180}
          >
            <div className="mb-8 flex items-end justify-between gap-6 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Projects
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                  Group Projects
                </h2>
              </div>
              <div className="hidden h-px flex-1 bg-white/10 md:block" />
            </div>

            <div className="space-y-12">
              {projects.slice(1).map((project) => (
                <ProjectBlock
                  key={project.slug}
                  project={project}
                  onHoverStart={setHoveredBackground}
                  onHoverEnd={() => setHoveredBackground(null)}
                />
              ))}
            </div>
          </RevealSection>

          <div id="contact" className="mt-10 scroll-mt-24">
            <Footer />
          </div>
        </div>

        <TopButton />
      </div>
    </div>
  );
}