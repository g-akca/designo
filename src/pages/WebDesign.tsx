import AppDesignCard from "../components/shared/AppDesignCard";
import GraphicDesignCard from "../components/shared/GraphicDesignCard";
import HeroSection from "../components/shared/HeroSection";
import ProjectsSection from "../components/shared/ProjectsSection";

import expressImg from "/assets/web-design/desktop/image-express.jpg";
import transferImg from "/assets/web-design/desktop/image-transfer.jpg";
import photonImg from "/assets/web-design/desktop/image-photon.jpg";
import builderImg from "/assets/web-design/desktop/image-builder.jpg";
import blogrImg from "/assets/web-design/desktop/image-blogr.jpg";
import campImg from "/assets/web-design/desktop/image-camp.jpg";

const projects = [
  {
    name: "Express",
    description: "A multi-carrier shipping website for ecommerce businesses",
    image: expressImg,
  },
  {
    name: "Transfer",
    description: "Site for low-cost money transfers and sending money within seconds",
    image: transferImg,
  },
  {
    name: "Photon",
    description: "A state-of-the-art music player with high-resolution audio and DSP effects",
    image: photonImg,
  },
  {
    name: "Builder",
    description: "Connects users with local contractors based on their location",
    image: builderImg,
  },
  {
    name: "Blogr",
    description: "Blogr is a platform for creating an online blog or publication",
    image: blogrImg,
  },
  {
    name: "Camp",
    description: "Get expert training in coding, data, design, and digital marketing",
    image: campImg,
  },
];

function WebDesign() {
  return (
    <div className="flex flex-col gap-24 tablet:gap-30 desktop:gap-40">
      <HeroSection heading="Web Design" intro="We build websites that serve as powerful marketing tools and bring memorable brand experiences." />

      <div className="px-6 flex flex-col gap-24 tablet:px-0 tablet:gap-30 desktop:gap-40">
        <ProjectsSection projects={projects} />

        <div className="grid grid-rows-[repeat(2,250px)] gap-6 tablet:grid-rows-[repeat(2,200px)] desktop:grid-rows-[308px] desktop:grid-cols-2 desktop:gap-7.5">
          <AppDesignCard />

          <GraphicDesignCard />
        </div>
      </div>
    </div>
  )
}

export default WebDesign;