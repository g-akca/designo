import AppDesignCard from "../components/shared/AppDesignCard";
import GraphicDesignCard from "../components/shared/GraphicDesignCard";
import HeroSection from "../components/web-design/HeroSection";
import ProjectsSection from "../components/web-design/ProjectsSection";

function WebDesign() {
  return (
    <div className="flex flex-col gap-24 tablet:gap-30 desktop:gap-40">
      <HeroSection />

      <div className="px-6 flex flex-col gap-24 tablet:px-0 tablet:gap-30 desktop:gap-40">
        <ProjectsSection />

        <div className="grid grid-rows-[repeat(2,250px)] gap-6 tablet:grid-rows-[repeat(2,200px)] desktop:grid-rows-[308px] desktop:grid-cols-2 desktop:gap-7.5">
          <AppDesignCard />

          <GraphicDesignCard />
        </div>
      </div>
    </div>
  )
}

export default WebDesign;