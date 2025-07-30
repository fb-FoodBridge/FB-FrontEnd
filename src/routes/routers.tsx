import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoon from "../pages/ComingSoon";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}
