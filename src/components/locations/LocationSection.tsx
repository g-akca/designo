type LocationSectionProps = {
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

function LocationSection({ location }: LocationSectionProps) {
  return (
    <div className="flex flex-col tablet:gap-6 desktop:flex-row desktop:gap-7.5">
      <picture className="overflow-hidden tablet:rounded-[15px]">
        <source media="(min-width: 1440px)" srcSet={location.desktopImg} />
        <img src={location.tabletImg} alt="" className="h-80 w-full object-cover object-right tablet:h-81.5 desktop:min-h-81.5 desktop:w-87.5" />
      </picture>

      <div 
        className="
          bg-[#FDF3F0] bg-[url('/assets/shared/desktop/bg-pattern-three-circles.svg')] bg-no-repeat min-h-98.5 p-8 
          flex flex-col gap-6 justify-center text-center tablet:rounded-[15px] tablet:bg-bottom-left tablet:min-h-81.5 
          tablet:px-18.75 tablet:text-start desktop:grow desktop:px-23.75
        "
      >
        <h2 className="text-peach text-[32px] leading-9 font-medium tablet:text-[40px] tablet:leading-12">{location.name}</h2>

        <div className="flex flex-col gap-6 text-[15px] leading-6.25 tablet:grid tablet:grid-cols-2 tablet:gap-7.5 tablet:text-base tablet:leading-base">
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
    </div>
  )
}

export default LocationSection;