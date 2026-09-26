import LocationCard from "../components/locations/LocationCard";

function Locations() {
  return (
    <div className="flex flex-col gap-30">
      <div className="flex flex-col gap-10">
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
    </div>
  )
}

export default Locations;