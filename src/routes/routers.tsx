import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoon from "../pages/ComingSoon";
import Layout from "../layouts";
import LandingPage from "../pages/LandingPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />} >
          <Route index element={<LandingPage />} />
        </Route>

      <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>

    </BrowserRouter>
  );
}
