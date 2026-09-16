import WebDesignCard from "../components/shared/WebDesignCard";
import GraphicDesignCard from "../components/shared/GraphicDesignCard";
import HeroSection from "../components/shared/HeroSection";
import ProjectsSection from "../components/shared/ProjectsSection";

import airfilterImg from "/assets/app-design/desktop/image-airfilter.jpg";
import eyecamImg from "/assets/app-design/desktop/image-eyecam.jpg";
import faceitImg from "/assets/app-design/desktop/image-faceit.jpg";
import todoImg from "/assets/app-design/desktop/image-todo.jpg";
import loopstudiosImg from "/assets/app-design/desktop/image-loopstudios.jpg";

const projects = [
  {
    name: "Airfilter",
    description: "Solving the problem of poor indoor air quality by filtering the air",
    image: airfilterImg,
  },
  {
    name: "Eyecam",
    description: "Product that lets you edit your favorite photos and videos at any time",
    image: eyecamImg,
  },
  {
    name: "Faceit",
    description: "Get to meet your favorite internet superstar with the faceit app",
    image: faceitImg,
  },
  {
    name: "Todo",
    description: "A todo app that features cloud sync with light and dark mode",
    image: todoImg,
  },
  {
    name: "Loopstudios",
    description: "A VR experience app made for Loopstudios",
    image: loopstudiosImg,
  },
];

function AppDesign() {
  return (
    <div className="flex flex-col gap-24 tablet:gap-30 desktop:gap-40">
      <HeroSection heading="App Design" intro="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips." />

      <div className="px-6 flex flex-col gap-24 tablet:px-0 tablet:gap-30 desktop:gap-40">
        <ProjectsSection projects={projects} />

        <div className="grid grid-rows-[repeat(2,250px)] gap-6 tablet:grid-rows-[repeat(2,200px)] desktop:grid-rows-[308px] desktop:grid-cols-2 desktop:gap-7.5">
          <WebDesignCard />

          <GraphicDesignCard />
        </div>
      </div>
    </div>
  )
}

export default AppDesign;