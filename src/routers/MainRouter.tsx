import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import WebDesign from "../pages/WebDesign";
import AppDesign from "../pages/AppDesign";
import GraphicDesign from "../pages/GraphicDesign";
import About from "../pages/About";
import Locations from "../pages/Locations";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function MainRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/web-design" element={<WebDesign />} />
      <Route path="/app-design" element={<AppDesign />} />
      <Route path="/graphic-design" element={<GraphicDesign />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default MainRouter;