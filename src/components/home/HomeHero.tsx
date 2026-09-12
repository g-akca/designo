import heroPhone from "/assets/home/desktop/image-hero-phone.png";

function HomeHero() {
  return (
    <section 
      className="
        bg-peach bg-[url('/assets/home/desktop/bg-pattern-hero-home.svg')] bg-left 
        bg-no-repeat px-6 pt-20 pb-108 relative overflow-hidden tablet:rounded-[15px]
        tablet:bg-position-[right_-124px_center] tablet:pt-15 tablet:pb-114.5
      "
    >
      <div className="flex flex-col items-center gap-6 tablet:gap-4.75">
        <div className="flex flex-col items-center gap-7 text-center text-white">
          <h2 className="max-w-145 font-medium text-[32px] leading-9 tablet:text-[48px] tablet:leading-12">
            Award-winning custom designs and digital branding solutions
          </h2>

          <p className="max-w-111.25 text-[15px] leading-6.25 tablet:text-base tablet:leading-base">
            With over 10 years in the industry, we are experienced in creating fully responsive websites, 
            app design, and engaging brand experiences. Find out more about our services.
          </p>
        </div>

        <button 
          type="button" 
          className="bg-white rounded-lg w-38 h-14 uppercase font-medium text-[15px] leading-5.5 tracking-[1px]"
        >
          Learn more
        </button>
      </div>

      <img 
        src={heroPhone} 
        alt="" 
        className="absolute -bottom-89.5 left-1/2 -translate-x-1/2 max-w-none w-150 tablet:-bottom-89 tablet:w-156" 
      />
    </section>
  )
}

export default HomeHero;