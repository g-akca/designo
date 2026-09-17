import HeroSection from "../components/about/HeroSection";
import StorySection from "../components/about/StorySection";
import LocationsSection from "../components/shared/LocationsSection";
import worldClassImg from "/assets/about/mobile/image-world-class-talent.jpg";
import realDealImg from "/assets/about/mobile/image-real-deal.jpg";

function About() {
  return (
    <div className="flex flex-col gap-30">
      <div className="flex flex-col">
        <HeroSection />

        <StorySection
          heading="World-class talent"
          story="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms. <br /> <br /> Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
          image={worldClassImg}
        />
      </div>

      <LocationsSection />

      <StorySection 
        heading="The real deal"
        story="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. <br /> <br /> We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        image={realDealImg}
      />
    </div>
  )
}

export default About;