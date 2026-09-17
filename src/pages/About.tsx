import HeroSection from "../components/about/HeroSection";
import StorySection from "../components/about/StorySection";
import LocationsSection from "../components/shared/LocationsSection";

function About() {
  return (
    <div className="flex flex-col gap-30">
      <div className="flex flex-col">
        <HeroSection />

        <StorySection />
      </div>

      <LocationsSection />

      <StorySection />
    </div>
  )
}

export default About;