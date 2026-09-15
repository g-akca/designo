function HeroSection() {
  return (
    <section 
      className="
        min-h-80 bg-[url('/assets/web-design/desktop/bg-pattern-intro-web.svg')] bg-top-right bg-no-repeat 
        bg-peach p-6 flex flex-col justify-center items-center gap-6 text-white text-center
      "
    >
      <h1 className="font-medium text-[32px] leading-9">Web Design</h1>

      <p className="text-[15px] leading-6.25">We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
    </section>
  )
}

export default HeroSection;