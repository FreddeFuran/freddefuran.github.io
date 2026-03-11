import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import SpecializationPage from "./pages/SpecializationPage.jsx";
import SpitePage from "./pages/SpitePage.jsx";
import AliensPage from "./pages/AliensPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/specialization" element={<SpecializationPage />} />
      <Route path="/project/aliens-stole-my-ship" element={<AliensPage />} />
      <Route path="/project/spite-blood-and-gold" element={<SpitePage />} />
    </Routes>
  );
}