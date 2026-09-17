import heroImg from "/assets/about/mobile/image-about-hero.jpg";

function HeroSection() {
  return (
    <div className="bg-peach flex flex-col bg-[url('/assets/about/mobile/bg-pattern-hero-about-mobile.svg')] bg-position-[right_180px]">
      <img src={heroImg} alt="" className="h-80 object-cover" />

      <div className="px-6 py-20 flex flex-col gap-6 items-center text-center text-white">
        <h1 className="font-medium text-[32px] leading-9">About Us</h1>

        <p className="text-[15px] leading-6.25">
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