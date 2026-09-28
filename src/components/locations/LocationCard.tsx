type LocationCardProps = {
  location: {
    name: string;
    tabletImg: string;
    desktopImg: string;
    office: {
      name: string;
      addressLine1: string;
      addressLine2?: string;
    };
    contact: {
      phone: string;
      mail: string;
    };
  };
};

function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="flex flex-col bg-[#FDF3F0]">
      <picture>
        <img src={location.tabletImg} alt="" className="h-80 w-full object-cover object-right" />
      </picture>

      <div 
        className="
          bg-[url('/assets/shared/desktop/bg-pattern-three-circles.svg')] min-h-98.5 p-8 flex flex-col gap-6 
          items-center justify-center text-center text-[15px] leading-6.25
        "
      >
        <h2 className="text-peach text-[32px] leading-9 font-medium">{location.name}</h2>

        <p>
          <strong>{location.office.name}</strong>
          <br />
          {location.office.addressLine1}
          {location.office.addressLine2 && (
            <>
              <br />
              {location.office.addressLine2}
            </>
          )}
        </p>

        <p>
          <strong>Contact</strong>
          <br />
          P : {location.contact.phone}
          <br />
          M : {location.contact.mail}
        </p>
      </div>
    </div>
  )
}

export default LocationCard;