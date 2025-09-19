import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoon from "../pages/ComingSoon";
import Layout from "../layouts";
import LandingPage from "../pages/LandingPage";
import SignUp from "../template/Authentication/SignUp";
import SignIn from "../template/Authentication/SignIn";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}
