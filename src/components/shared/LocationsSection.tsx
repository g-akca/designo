import LocationItem from "./LocationItem";
import canadaImg from "/assets/shared/desktop/illustration-canada.svg";
import australiaImg from "/assets/shared/desktop/illustration-australia.svg";
import ukImg from "/assets/shared/desktop/illustration-united-kingdom.svg";

const locations = [
  {
    name: "Canada",
    image: canadaImg,
  },
  {
    name: "Australia",
    image: australiaImg,
  },
  {
    name: "United Kingdom",
    image: ukImg,
  },
];

function LocationsSection() {
  return (
    <section className="flex flex-col gap-12 items-center">
      {locations.map((loc) => (
        <LocationItem 
          key={loc.name}
          name={loc.name}
          image={loc.image}
        />
      ))}
    </section>
  )
}

export default LocationsSection;