import HomeHero from "../components/home/HomeHero";
import AppDesignCard from "../components/shared/AppDesignCard";
import GraphicDesignCard from "../components/shared/GraphicDesignCard";
import WebDesignCard from "../components/shared/WebDesignCard";

function Home() {
  return (
    <div className="flex flex-col gap-30">
      <HomeHero />

      <div className="px-6 flex flex-col gap-6">
        <WebDesignCard />
        <AppDesignCard />
        <GraphicDesignCard />
      </div>
    </div>
  )
}

export default Home;