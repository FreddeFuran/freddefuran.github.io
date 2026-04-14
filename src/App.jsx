import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import HomePage from "./pages/HomePage.jsx";
import SpecializationPage from "./pages/SpecializationPage.jsx";
import SpitePage from "./pages/SpitePage.jsx";
import AliensPage from "./pages/AliensPage.jsx";
import CV from "./pages/CV.jsx";
import { initGA, trackPage } from "./analytics.jsx";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPage(location.pathname);
  }, [location.pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/specialization" element={<SpecializationPage />} />
        <Route path="/project/aliens-stole-my-ship" element={<AliensPage />} />
        <Route path="/project/spite-blood-and-gold" element={<SpitePage />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </>
  );
}
