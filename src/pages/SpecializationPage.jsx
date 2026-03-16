import Header from "../components/Header";
import Footer from "../components/Footer";
import CodeSnippet from "../components/Codeblock";

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
            implementation faster and more practical.
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

        <section className="grid gap-10 border-b border-white/10 py-10">
          <div>
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              For my specialization I decided to create an in-engine tool to help speed up our workflow for creating VFX for our game projects.
              During my time at TGA I have always enjoyed creating things that help out the workflow of my colleagues so the idea for this project came up quite naturally.
              In our Spite project it was quite clear we had forgotten entirely about the VFX pipeline until the last few weeks before the project was due.
              This ended up in the workflow for creating a VFX being entirely .json driven, causing our tech-artists having to spend unreasonable amounts of time
              manually editing json files and restarting the game to see their changes propagate. This was clearly a bump in our production time and so improving
              upon the workflow and iteration time would be a clear win in my eyes.
            </p>
            <p className="mt-4 leading-8 text-zinc-300">
              The goal was to make iteration faster, reduce friction, and give a
              clearer connection between editing and final in-engine behavior.
            </p>
          </div>
        </section>

        <section className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">What I implemented</h2>
            <ul className="mt-5 space-y-3 text-zinc-300">
              <li>• In-engine authoring workflow</li>
              <li>• Custom Timeline tool using ImGui</li>
              <li>• Local transform editing using ImGuizmo</li>
              <li>• Command buffers for undo-redo</li>
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

        <section className="grid gap-10 border-b border-white/10 py-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold text-white">Usability and Scalability</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              A large part of the project was not just about adding functionality, but
              about thinking through who the tool was for and how it would be used in
              practice. I wanted the editor to feel approachable for disciplines such as
              tech-art and design, where the focus should be on creating and iterating
              on effects rather than fighting with data formats or restarting the game
              after every change.
            </p>
            <p className="mt-4 leading-8 text-zinc-300">
              Because of that, I put a lot of emphasis on immediate feedback,
              control schemes influenced by editors already in use by the team, 
              and reducing unnecessary friction in the workflow. Editing
              transforms directly in the scene, previewing timing in-engine, and working
              through a timeline instead of raw json or a massive wall of dropdowns all came from the idea that the
              tool should support iteration in a way that feels familiar and readable
              for the people actually authoring content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white">Extensibility</h2>
            <p className="mt-4 leading-8 text-zinc-300">
              At the same time, I wanted the editor to be something that programmers
              could continue building on rather than a one-off solution tied only to my
              specialization. That meant thinking about structure and scalability early:
              how data was represented, how editing actions were handled, and how new
              functionality could be added without rewriting large parts of the tool.
            </p>
            <p className="mt-4 leading-8 text-zinc-300">
              The goal was to create a foundation that could grow with the engine. In
              practice, that meant building features in a way that was easier to reason
              about, easier to maintain, and easier to extend with new entry types,
              controls, and workflow improvements over time.
            </p>
            <p className="mt-4 leading-8 text-zinc-300">
            Features such as the command-based undo and redo flow, reusable timeline
            structures, and the separation between shared and instance data were not only
            useful for the current implementation, but also helps make the editor easier
            to extend with new functionality later on.
            </p>
          </div>
        </section>

        <section className="py-10"> 
          <div className="mt-5 space-y-4">
          <h2 className="text-2xl font-semibold text-white">Code Snippets</h2>
          <CodeSnippet
            title="Mesh Structs"
            language="cpp"
            code={`  struct MeshSharedData
  {
    CU::Transform<float> mySharedTransform;
    std::unordered_map<std::string, std::filesystem::path> myMaterialNameToPathList;
    std::vector<std::shared_ptr<Material>> myMaterials;
    std::vector<size_t> myBatchKeys;
    std::shared_ptr<Mesh> myMesh = nullptr;
    CU::Curve<CU::Vector3<float>> myVelocityOverLifetime;
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
  };`
          }
          />

<CodeSnippet
            title="Timeline Structs"
            language="cpp"
            code={`template <size_t MaxCollapsibleHeaderCount>
struct TimelineState
{
    std::array<bool, MaxCollapsibleHeaderCount> myCollapsibleHeaderStates;
    std::string myStateName;

    float myColumnWidth = 200.0f;

    float myTimelineScale = 5.0f;
    float myGridStepSize = 0.25f;

    float myBaseRowHeight = 24.0f;
    float myExpandedRowHeight = 26.0f;

    float myHandleWidth = 6.0f;
    float myDragOffset = 0.0f;

    bool mySnapToGrid = false;
    bool myShowPlayhead = true;
};

struct TimelineEntryTimings
{
	float PlayTime = 1.0f;
	float StartingTime = 0.0f;
};

struct TimelineContext
{
    ImVec2 myCanvasPos;
    float myTimelineWidth;
    float myPixelWidthPerSecond;
};

struct TimelineDragState
{
    TimelineEntryTimings myLastCachedTiming;
    bool myIsDragging = false;
};`
          }
          />

          <CodeSnippet
            title="Editor Command Examples"
            language="cpp"
            code={`class CommandInterface
{
public:
	CommandInterface() = default;
	virtual ~CommandInterface() = default;
	virtual void Execute() {};
	virtual void Rollback() {};
	bool CanRollback() { return myCanBeRollbacked; };

protected:
	bool myCanBeRollbacked = true;
};

//Example usage
if (ImGui::Button("Add Mesh Entry"))
{
    ExecuteEditorCommand(std::make_shared<AddMeshEntryCommand>(myCurrentVFX, std::make_shared<RN::MeshEntry>(), i));
}

void VFXEditor::ExecuteEditorCommand(std::shared_ptr<CommandInterface> aCommandToPush)
{
    ClearCommandStack(myRedoStack);
    myUndoStack.push(aCommandToPush);
    aCommandToPush->Execute();
}
`
          }
          />
            </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}