import AppDesignCard from "../components/shared/AppDesignCard";
import GraphicDesignCard from "../components/shared/GraphicDesignCard";
import HeroSection from "../components/web_design/HeroSection";
import WebDesignProjects from "../components/web_design/WebDesignProjects";

function WebDesign() {
  return (
    <div className="flex flex-col gap-24">
      <HeroSection />

      <div className="px-6 flex flex-col gap-24">
        <WebDesignProjects />

        <div className="grid grid-rows-[repeat(2,250px)] gap-6">
          <AppDesignCard />

          <GraphicDesignCard />
        </div>
      </div>
    </div>
  )
}

export default WebDesign;