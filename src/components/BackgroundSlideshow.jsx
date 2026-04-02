import { useEffect, useMemo, useState } from "react";

export default function BackgroundSlideshow({ hoveredBackground = null, children }) {
  const [activeBg, setActiveBg] = useState(0);

  const backgrounds = useMemo(
    () => [
      "/backgrounds/background_01.png",
      "/backgrounds/background_02.png",
      "/backgrounds/background_03.png",
      "/backgrounds/background_04.png",
      "/backgrounds/background_05.png",
      "/backgrounds/background_06.png",
      "/backgrounds/background_07.png",
      "/backgrounds/background_08.png",
      "/backgrounds/background_09.png",
      "/backgrounds/background_10.png",
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
        {children}
      </div>
    </div>
  );
}