import CompanyValues from "../components/home/CompanyValues";
import HomeHero from "../components/home/HomeHero";
import AppDesignCard from "../components/shared/AppDesignCard";
import GraphicDesignCard from "../components/shared/GraphicDesignCard";
import WebDesignCard from "../components/shared/WebDesignCard";

function Home() {
  return (
    <div className="flex flex-col gap-30 tablet:px-9.75">
      <HomeHero />

      <div className="px-6 flex flex-col gap-30 tablet:px-0">
        <div className="grid grid-rows-[repeat(3,250px)] gap-6 tablet:grid-rows-[repeat(3,200px)] tablet:gap-6.25">
          <WebDesignCard />
          <AppDesignCard />
          <GraphicDesignCard />
        </div>

        <CompanyValues />
      </div>
    </div>
  )
}

export default Home;