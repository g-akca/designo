import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import WebDesign from "../pages/WebDesign";
import AppDesign from "../pages/AppDesign";

function MainRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/web-design" element={<WebDesign />} />
      <Route path="/app-design" element={<AppDesign />} />
    </Routes>
  )
}

export default MainRouter;