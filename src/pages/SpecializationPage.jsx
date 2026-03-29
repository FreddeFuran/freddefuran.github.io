import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CodeSnippet from "../components/Codeblock";
import TopButton from "../components/TopButton";

export default function SpecializationPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-200">
      <Header />

      <main className="mx-auto max-w-5xl px-6 py-10">

        {/* HERO */}
        <section className="border-b border-white/10 pb-10">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            Specialization
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            In-Engine VFX Compositing Tool
          </h1>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            A workflow-focused in-engine tool built to replace manual VFX authoring with a faster,
            more intuitive compositing pipeline for meshes, materials, and particle systems.
          </p>
        </section>

        {/* VIDEO SHOWCASE */}
        <section className="py-10 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white">Workflow Showcase</h2>
          <p className="mt-3 text-zinc-400">
            Timelapse of creating a VFX in the editor and the final in-game result.
          </p>

          <div className="mt-6 aspect-video w-full bg-black/40 border border-white/10 flex items-center justify-center text-zinc-500">
            {/* Replace with video */}
            Video Placeholder
          </div>
        </section>

        {/* QUICK INFO */}
        <section className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Role</p>
            <p className="mt-2">Tools / Engine Programming</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Focus</p>
            <p className="mt-2">Workflow, UX, Runtime Integration</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Tech</p>
            <p className="mt-2">C++, Direct3D11, ImGui, ImGuizmo</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Context</p>
            <p className="mt-2">Specialization Project</p>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-10 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white">The Problem</h2>
          <p className="mt-4 text-zinc-300 leading-8">
            The original VFX workflow relied heavily on manually editing JSON files. This made iteration slow,
            difficult to reason about, and inaccessible for less technical users.
          </p>
          <p className="mt-4 text-zinc-300 leading-8">
            A legacy editor existed, but it exposed large amounts of low-level data at once, forcing users to
            navigate nested menus and abstract controls for even simple tasks.
          </p>
        </section>

        {/* WHAT I BUILT */}
        <section className="py-10 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white">What I Built</h2>
          
          <p className="mt-4 text-zinc-300 leading-8">
            The project focused on improving the full authoring loop, from selecting and arranging VFX elements
            in the scene to previewing timing, managing playback, and integrating the finished effect into runtime code.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6 text-zinc-300">
            <ul className="space-y-3">
              <li>• Timeline-based VFX composition</li>
              <li>• Scene-based selection using pixel picking</li>
              <li>• Transform editing via ImGuizmo</li>
              <li>• Undo/redo command system</li>
            </ul>
            <ul className="space-y-3">
              <li>• Clean, resizable UI layout</li>
              <li>• Reduced data clutter and improved readability</li>
              <li>• Immediate in-engine feedback</li>
              <li>• Runtime integration through VFXManager</li>
            </ul>
          </div>
        </section>

        {/* USER EXPERIENCE */}
        <section className="py-10 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white">Designing for Usability</h2>

          <p className="mt-4 text-zinc-300 leading-8">
            A major focus of the project was to make the tool intuitive for the people actually creating VFX.
            Instead of editing raw data, users interact directly with elements in the scene and adjust timing
            visually through a timeline.
          </p>

          <p className="mt-4 text-zinc-300 leading-8">
            The final version of the tool was built directly with our technical art team in mind, ensuring it met their needs and workflow requirements.
            This meant prioritizing features that improved iteration speed and ease of use for those tasks that were previously cumbersome.
            In the end the final product was produced through a close feedback loop with the artists, 
            which was crucial for making sure the tool actually solved their problems and fit into their existing processes.
          </p>

          <p className="mt-4 text-zinc-300 leading-8">
            To make sure that the tool would actually be adopted and used, I also made sure to keep the UI clean and focused, 
            hiding any unnecessary complexity and exposing only the controls that were relevant for the task at hand.
            I also made sure to implement quality of life features like undo/redo as well as hotkeys influenced by industry standard tools to meet user expectations.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              title: "Manual JSON",
              desc: "Fully manual editing with very slow iteration and a high technical barrier.",
              img: "/specialization/slice_3.png"
            },
            {
              title: "Legacy Editor",
              desc: "Functional but cluttered, exposing too much data and making simple tasks harder.",
              img: "/specialization/slice_2.png"
            },
            {
              title: "Final Tool",
              desc: "Visual timeline, direct scene interaction, and significantly faster iteration.",
              img: "/specialization/slice_1.png"
            }
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(item.img)}
              className="group text-left flex flex-col h-full"
            >
              {/* IMAGE */}
              <div className="overflow-hidden border border-white/10 bg-black/30">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              {/* TEXT */}
              <div className="mt-3 flex-1 flex flex-col justify-end">
                <h3 className="text-white font-medium">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
        </section>

        {/* PROGRAMMER SIDE */}
<section className="py-10 border-b border-white/10">
  <h2 className="text-2xl font-semibold text-white">Runtime Integration</h2>

  <p className="mt-4 text-zinc-300 leading-8">
    The tool was not only built for authoring, but also for practical runtime use. Through a centralized
    VFX manager, programmers can spawn effects directly from code using a transform, optionally apply
    velocity, constrain the effect to a moving object, manually stop or reset a VFX, and register callbacks
    for different cutoff points when playback finishes.
  </p>

  <p className="mt-4 text-zinc-300 leading-8">
    One of my goals was to keep the runtime side straightforward while hiding as much unnecessary complexity
    as possible. The same system that powers the editor is also usable from gameplay code, which makes the
    tool feel less like an isolated editor feature and more like a practical part of the engine's VFX pipeline.
  </p>

  <div className="mt-6">
    <CodeSnippet
      title="Runtime VFX Usage Example"
      language="cpp"
      code={`// Pseudo-code example
if (RN::VFXManager* manager = RN::Services::Get<RN::VFXManager>())
{
  RN::VFXActor* explosionVFX = manager->PlayVFX("ExplosionVFX", myTransform);
  if (explosionVFX != nullptr)
  {
    explosionVFX->SetOnFinishCallback(&myCallbackFN, RN::CutoffPoint::OnParticleFinish);
  }
}`}
    />
  </div>

  <p className="mt-6 text-zinc-300 leading-8">
    Internally, I also structured the data to avoid duplicating constant information for every entry.
    Shared resources such as mesh references, materials, and other static configuration are separated from
    per-instance state like transform, lifetime, and active state. This makes the layout easier to reason
    about and more memory-efficient when multiple VFX parts rely on the same underlying data.
  </p>

  <div className="mt-6">
    <CodeSnippet
      title="Shared and Instance Data Layout"
      language="cpp"
      code={`struct MeshSharedData
{
    std::unordered_map<std::string, std::filesystem::path> myMaterialNameToPathList;
    std::vector<std::shared_ptr<Material>> myMaterials;
    std::vector<size_t> myBatchKeys;
    std::shared_ptr<Mesh> myMesh = nullptr;

    float myStartingTime = 0.0f;
    float myPlayTime = 1.0f;
    uint16_t myRenderFlags = 0x00;
};

struct MeshInstanceData
{
    CU::Transform<float> myLocalTransform;
    unsigned myID = ObjectIDGenerator::Get().GenerateID();
    float myLifeTime = 0.0f;
    bool myIsActive = false;
};

struct MeshEntry
{
    MeshInstanceData myInstanceData;
    std::shared_ptr<MeshSharedData> mySharedData = nullptr;
};`}
    />
  </div>
</section>

        {/* TECH CHALLENGES */}
        <section className="py-10 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white">Technical Challenges</h2>

          <p className="mt-4 text-zinc-300 leading-8">
            Implementing pixel picking required setting up GPU-to-CPU readback using staging textures,
            allowing accurate selection of VFX elements directly from the rendered scene.
            Other than pixel picking and transform editing, most of the challenges were related to designing a clean data structure that could be easily edited in the tool while also being efficient and straightforward to use from code.
            Otherwise the biggest challenge was actually just creating a tool that was easy to use, which required a lot of iteration and feedback from the artists to get right.
          </p>
        </section>

        {/* RESULTS */}
        <section className="py-10 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white">Results</h2>

          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>• Faster iteration time</li>
            <li>• Reduced technical barrier for content creation</li>
            <li>• More intuitive workflow for new users</li>
            <li>• Stronger connection between editing and runtime behavior</li>
          </ul>
        </section>

        {/* FUTURE */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold text-white">Final thoughts</h2>

          <p className="mt-4 text-zinc-300 leading-8">
            This project was a great opportunity to work closely with artists and designers to build a tool that directly impacted their workflow and the final quality of the content they were able to create.
            It was also a chance to dive deep into engine programming and get a better understanding of how to design systems that are both powerful and user-friendly.
                      </p>

          <p className="mt-4 text-zinc-300 leading-8">
            From my initial planning i achieved every major goal I set out for the project, and I was able to deliver a tool that was well-received by the artists and has become an integral part of our VFX pipeline.
            The only goal I wasn't able to fully achieve was implementing support for scriptable behaviours which i had to cut due to our scripting system being deprioritized during development, but I still designed the system with that feature in mind so it could be added in the future without major refactoring.
          </p>
          <div className="mt-6">
          <h3 className="text-2xl font-semibold text-white">Future Improvements</h3>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>• Visual scripting integration</li>
            <li>• Advanced movement behaviors (orbiting, tethering)</li>
            <li>• Collision-based VFX interaction</li>
          </ul>
          </div>
        </section>

      </main>

      <TopButton />

      <div className="mt-10">
        <Footer />
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-h-[90vh] max-w-[90vw] border border-white/10"
          />
        </div>
      )}
    </div>
  );
}
