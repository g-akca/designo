import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import WebDesign from "../pages/WebDesign";

function MainRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/web-design" element={<WebDesign />} />
    </Routes>
  )
}

export default MainRouter;