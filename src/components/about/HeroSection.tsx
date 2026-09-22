import mobileHeroImg from "/assets/about/mobile/image-about-hero.jpg";
import tabletHeroImg from "/assets/about/tablet/image-about-hero.jpg";
import desktopHeroImg from "/assets/about/desktop/image-about-hero.jpg";

function HeroSection() {
  return (
    <div 
      className="
        bg-peach bg-[url('/assets/about/mobile/bg-pattern-hero-about-mobile.svg')] 
        bg-position-[right_180px] bg-no-repeat flex flex-col overflow-hidden tablet:rounded-[15px]
        tablet:bg-[url('/assets/about/desktop/bg-pattern-hero-about-desktop.svg')] 
        tablet:bg-position-[-118px_-115px] desktop:bg-bottom-left desktop:min-h-120 
        desktop:flex-row-reverse desktop:justify-between
      "
    >
      <picture>
        <source media="(min-width: 1440px)" srcSet={desktopHeroImg} />
        <source media="(min-width: 768px)" srcSet={tabletHeroImg} />
        <img src={mobileHeroImg} alt="" className="h-80 w-full object-cover desktop:h-full desktop:w-119" />
      </picture>

      <div 
        className="
          max-w-140 self-center px-6 py-20 flex flex-col gap-6 text-center text-white 
          tablet:py-16 tablet:px-0 tablet:gap-8 desktop:text-start desktop:pl-23.75
        "
      >
        <h1 className="font-medium text-[32px] leading-9 tablet:text-[48px] tablet:leading-12">About Us</h1>

        <p className="text-[15px] leading-6.25 tablet:text-base tablet:leading-base">
          Founded in 2010, we are a creative agency that produces lasting results for our clients. 
          We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
          that make real impact. We’re always looking forward to creating brands, products, and 
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </div>
  )
}

export default HeroSection;