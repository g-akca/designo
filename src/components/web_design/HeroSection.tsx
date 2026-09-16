import leafPattern from "/assets/shared/desktop/bg-pattern-leaf.svg";

function HeroSection() {
  return (
    <>
      <img src={leafPattern} alt="" className="hidden desktop:block absolute left-0 top-50" />

      <section 
        className="
          relative min-h-80 bg-[url('/assets/web-design/desktop/bg-pattern-intro-web.svg')] bg-top-right 
          bg-no-repeat bg-peach p-6 flex flex-col justify-center items-center gap-6 text-white 
          text-center tablet:min-h-63 tablet:bg-position-[-20px_center] tablet:rounded-[15px] desktop:bg-right
        "
      >
        <h1 className="font-medium text-[32px] leading-9 tablet:text-[48px] tablet:leading-12">
          Web Design
        </h1>

        <p className="text-[15px] leading-6.25 tablet:text-base tablet:leading-base tablet:max-w-100">
          We build websites that serve as powerful marketing tools and bring memorable brand experiences.
        </p>
      </section>
    </>
  )
}

export default HeroSection;