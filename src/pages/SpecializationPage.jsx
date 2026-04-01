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
            VFX Compositing Tool and System
          </h1>
          <p className="mt-4 max-w-3xl leading-8 text-zinc-300">
            A workflow-focused in-engine tool built to replace manual VFX authoring with a faster,
            more intuitive pipeline for composing meshes, materials, and particle systems.
          </p>
        </section>

        {/* VIDEO SHOWCASE */}
        <section className="py-10 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white">Workflow Showcase</h2>
          <p className="mt-3 text-zinc-400">
            Timelapse of creating a VFX in the editor, implementing it into the runtime and the final in-game result.
          </p>

          <div className="mt-6 aspect-video w-full border border-white/10 overflow-hidden bg-black">
            <video
              className="w-full h-full object-cover"
              src="/specialization/WorkflowExample.webm"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
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
            The original VFX workflow relied heavily on manually editing JSON files, making iteration slow,
            difficult to preview, and inaccessible for less technical users. The pipeline for even testing a VFX looked like this:
          </p>

          <div className="grid md:grid-cols-1 gap-6 mt-6 text-zinc-300">
            <ul className="space-y-3">
              <li>• Write a json file for a VFX</li>
              <li>• Ask a programmer to add a VFX component to desired actor type</li>
              <li>• Ask a programmer to code logic for playing the specific VFX</li>
              <li>• Pray that everything looks good and even loads correctly on the first try</li>
              <li>• Keep restarting the game, re-compiling shaders, tweaking small things until it looks good</li>
            </ul>
          </div>

          <p className="mt-4 text-zinc-300 leading-8">
            This made experimentation expensive and pushed even simple iteration onto programmers.
            My goal was to reduce that dependency and make VFX authoring faster, clearer, and more self-sufficient.
          </p>
        </section>

        {/* WHAT I BUILT */}
        <section className="py-10 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white">What I Built</h2>
          
          <p className="mt-4 text-zinc-300 leading-8">
            I focused on improving the full authoring loop, from composing VFX elements in-scene to previewing timing,
            controlling playback, and integrating finished effects into runtime code.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6 text-zinc-300">
            <ul className="space-y-3">
              <li>• Timeline-based VFX composition</li>
              <li>• Scene-based selection using pixel picking</li>
              <li>• Transform editing via ImGuizmo</li>
              <li>• Undo/redo command system</li>
              <li>• Hotreloading shaders in conjunction with our material editor</li>
            </ul>
            <ul className="space-y-3">
              <li>• Clean, resizable UI layout</li>
              <li>• Reduced data clutter and improved readability</li>
              <li>• Immediate in-engine feedback</li>
              <li>• Runtime integration through VFXManager</li>
              <li>• Customizable circle-buffer actor pools</li>
            </ul>
          </div>
        </section>

        {/* USER EXPERIENCE */}
        <section className="py-10 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white">Designing for Usability</h2>

          <p className="mt-4 text-zinc-300 leading-8">
            A major focus of the project was making the tool intuitive for technical artists.
            Instead of editing raw data, users interact directly with VFX elements in the scene and adjust timing visually through a timeline.
          </p>

          <p className="mt-4 text-zinc-300 leading-8">
            The final version was shaped through close feedback with our technical art team, helping the tool fit their actual workflow rather than just exposing engine data through a UI.
          </p>

          <p className="mt-4 text-zinc-300 leading-8">
            To support adoption, I kept the interface clean and task-focused while adding quality-of-life features like undo/redo and familiar hotkeys inspired by industry-standard tools.
          </p>
        </section>

        <section className="py-10 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white">Workflow iterations</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              {
                title: "Original workflow",
                desc: "Fully manual editing with very slow iteration and a high technical barrier.",
                img: "/specialization/slice_3.png"
              },
              {
                title: "First iteration - Make it work",
                desc: "Functional but cluttered, exposing too much data and making simple tasks harder.",
                img: "/specialization/slice_2.png"
              },
              {
                title: "Final iteration - Make it good",
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
    The tool was built not just for authoring, but for practical runtime use. Through a centralized
    VFX manager, programmers can spawn effects from code using a VFX name and transform, with optional velocity,
    object constraints, and finish callbacks.
  </p>

  <p className="mt-4 text-zinc-300 leading-8">
    A key goal was keeping the runtime interface simple and hard to misuse, exposing only the parts that programmers actually need.
  </p>

  <div className="mt-6">
      <CodeSnippet
        title="Public VFX Manager interface"
        language="cpp"
        code={`void Init();
void ResetAllVFX();
RN::VFXActor* PlayVFX(
  const std::string& aVFXName, 
  const CommonUtilities::Matrix4x4<float>& aTransform, 
  const CommonUtilities::Vector3<float>& aVelocity = { 0,0,0 }, 
  bool aShouldConstrain = false);

const std::vector<RN::VFXActor*>& GetAllActiveVFX() const;`}
      />
  </div>

<div className="mt-6">
      <CodeSnippet
        title="Public VFX interface"
        language="cpp"
        code={`void ActivateVFX(
  const CommonUtilities::Matrix4x4<float>& aWorldMatrix, 
  const CommonUtilities::Vector3f& aVelocity = {0,0,0}, 
  bool aShouldConstrain = false);

void SetOnFinishCallback(RN::OnFinishCallbackFn&& aCallback, RN::CutoffPoint aCutoffPoint);

void Stop();
void Reset();`}
      />
  </div>

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
    Internally, I separated shared resources like meshes and materials from per-instance state such as transform,
    lifetime, and active state. This reduced duplicated data and made the system easier to reason about in both the editor and runtime.
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
            Pixel picking required GPU-to-CPU readback through staging textures, enabling accurate selection directly in the rendered scene.
            Beyond that, the main challenge was designing data structures that were both editor-friendly and efficient at runtime, while keeping the tool easy to use through repeated iteration with artists.
          </p>
        </section>

        {/* RESULTS */}
        <section className="py-10 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white">Results</h2>

          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>• Drastically reduced iteration time</li>
            <li>• Reduced technical barrier for content creation</li>
            <li>• More intuitive workflow for new users</li>
            <li>• Stronger connection between editing and runtime behavior</li>
          </ul>
        </section>

        {/* FUTURE */}
        <section className="py-10">
          <h2 className="text-2xl font-semibold text-white">Final thoughts</h2>

          <p className="mt-4 text-zinc-300 leading-8">
            This project gave me the chance to work closely with artists and designers on a tool that directly improved both their workflow and the quality of the final content.
          </p>

          <p className="mt-4 text-zinc-300 leading-8">
            I achieved the project’s main goals and delivered a tool that became an important part of our VFX pipeline.
            The one feature I had to cut was support for scriptable behaviours, due to our scripting system being deprioritized, but I still designed the system so that feature could be added later without major refactoring.
          </p>
          <div className="mt-6">
          <h3 className="text-2xl font-semibold text-white">Future Improvements</h3>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>• Visual scripting integration</li>
            <li>• Advanced movement behaviors (orbiting, tethering)</li>
            <li>• Collision-based VFX interaction</li>
            <li>• Customizable Event-based triggers to make the pipeline even more self-sufficient</li>
          </ul>
          </div>
        </section>

      </main>

      <TopButton />

      <div id="contact" className="mt-10 scroll-mt-24">
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