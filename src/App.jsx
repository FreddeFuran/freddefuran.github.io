import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import SpecializationPage from "./pages/SpecializationPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/specialization" element={<SpecializationPage />} />
    </Routes>
  );
}