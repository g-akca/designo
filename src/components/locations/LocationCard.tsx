type LocationCardProps = {
  location: {
    name: string;
    tabletImg: string;
    desktopImg: string;
    office: {
      name: string;
      addressLine1: string;
      addressLine2: string;
    };
    contact: {
      phone: string;
      mail: string;
    };
  };
};

function LocationCard(_props: LocationCardProps) {
  return (
    <>
    </>
  )
}

export default LocationCard;