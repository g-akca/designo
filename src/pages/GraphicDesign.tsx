import WebDesignCard from "../components/shared/WebDesignCard";
import AppDesignCard from "../components/shared/AppDesignCard";
import HeroSection from "../components/shared/HeroSection";
import ProjectsSection from "../components/shared/ProjectsSection";

import changeImg from "/assets/graphic-design/desktop/image-change.jpg";
import boxedWaterImg from "/assets/graphic-design/desktop/image-boxed-water.jpg";
import scienceImg from "/assets/graphic-design/desktop/image-science.jpg";

const projects = [
  {
    name: "Tim Brown",
    description: "A book cover designed for Tim Brown’s new release, ‘Change’",
    image: changeImg,
  },
  {
    name: "Boxed Water",
    description: "A simple packaging concept made for Boxed Water",
    image: boxedWaterImg,
  },
  {
    name: "Science!",
    description: "A poster made in collaboration with the Federal Art Project",
    image: scienceImg,
  },
];

function GraphicDesign() {
  return (
    <div className="flex flex-col gap-24 tablet:gap-30 desktop:gap-40">
      <HeroSection background="graphic" heading="Graphic Design" intro="We deliver eye-catching branding materials that are tailored to meet your business objectives." />

      <div className="px-6 flex flex-col gap-24 tablet:px-0 tablet:gap-30 desktop:gap-40">
        <ProjectsSection projects={projects} />

        <div className="grid grid-rows-[repeat(2,250px)] gap-6 tablet:grid-rows-[repeat(2,200px)] desktop:grid-rows-[308px] desktop:grid-cols-2 desktop:gap-7.5">
          <AppDesignCard />

          <WebDesignCard />
        </div>
      </div>
    </div>
  )
}

export default GraphicDesign;