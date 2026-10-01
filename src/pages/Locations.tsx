import LocationSection from "../components/locations/LocationSection";
import canadaImgTablet from "/assets/locations/tablet/image-map-canada.png";
import canadaImgDesktop from "/assets/locations/desktop/image-map-canada.png";
import australiaImgTablet from "/assets/locations/tablet/image-map-australia.png";
import australiaImgDesktop from "/assets/locations/desktop/image-map-australia.png";
import ukImgTablet from "/assets/locations/tablet/image-map-uk.png";
import ukImgDesktop from "/assets/locations/desktop/image-map-united-kingdom.png";

const locations = [
  {
    name: "Canada",
    tabletImg: canadaImgTablet,
    desktopImg: canadaImgDesktop,
    office: {
      name: "Designo Central Office",
      addressLine1: "3886 Wellington Street",
      addressLine2: "Toronto, Ontario M9C 3J5",
    },
    contact: {
      phone: "+1 253-863-8967",
      mail: "contact@designo.co",
    },
  },
  {
    name: "Australia",
    tabletImg: australiaImgTablet,
    desktopImg: australiaImgDesktop,
    office: {
      name: "Designo AU Office",
      addressLine1: "19 Balonne Street",
      addressLine2: "New South Wales 2443",
    },
    contact: {
      phone: "(02) 6720 9092",
      mail: "contact@designo.au",
    },
  },
  {
    name: "United Kingdom",
    tabletImg: ukImgTablet,
    desktopImg: ukImgDesktop,
    office: {
      name: "Designo UK Office",
      addressLine1: "13  Colorado Way",
      addressLine2: "Rhyd-y-fro SA8 9GA",
    },
    contact: {
      phone: "078 3115 1400",
      mail: "contact@designo.uk",
    },
  },
];

function Locations() {
  return (
    <div className="flex flex-col gap-30 tablet:gap-40">
      <div className="flex flex-col gap-10 tablet:gap-30 desktop:gap-8">
        {locations.map((loc) => (
          <LocationSection 
            key={loc.name} 
            location={loc} 
          />
        ))}
      </div>
    </div>
  )
}

export default Locations;