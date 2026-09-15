import AppDesignCard from "../components/shared/AppDesignCard";
import GraphicDesignCard from "../components/shared/GraphicDesignCard";
import HeroSection from "../components/web_design/HeroSection";
import ProjectsSection from "../components/web_design/ProjectsSection";

function WebDesign() {
  return (
    <div className="flex flex-col gap-24 tablet:gap-30">
      <HeroSection />

      <div className="px-6 flex flex-col gap-24 tablet:px-0 tablet:gap-30">
        <ProjectsSection />

        <div className="grid grid-rows-[repeat(2,250px)] gap-6 tablet:grid-rows-[repeat(2,200px)]">
          <AppDesignCard />

          <GraphicDesignCard />
        </div>
      </div>
    </div>
  )
}

export default WebDesign;