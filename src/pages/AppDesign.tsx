import WebDesignCard from "../components/shared/WebDesignCard";
import GraphicDesignCard from "../components/shared/GraphicDesignCard";
import HeroSection from "../components/shared/HeroSection";
import ProjectsSection from "../components/shared/ProjectsSection";

function AppDesign() {
  return (
    <div className="flex flex-col gap-24">
      <HeroSection heading="App Design" intro="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips." />

      <div className="px-6 flex flex-col gap-24">
        <ProjectsSection />

        <div className="grid grid-rows-[repeat(2,250px)] gap-6">
          <WebDesignCard />

          <GraphicDesignCard />
        </div>
      </div>
    </div>
  )
}

export default AppDesign;