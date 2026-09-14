function FooterCTA() {
  return (
    <section 
      className="
        bg-peach bg-[url('/assets/shared/desktop/bg-pattern-call-to-action.svg')] bg-position-[44%_center] 
        bg-no-repeat rounded-[15px] py-16 px-6 flex flex-col justify-center items-center gap-8 z-10 
        tablet:py-8 tablet:h-87.5 tablet:bg-left desktop:h-73 desktop:flex-row desktop:justify-between 
        desktop:bg-right desktop:px-23.75
      "
    >
      <div className="flex flex-col items-center gap-4 text-center text-white desktop:items-start desktop:text-start">
        <h2 className="font-medium text-[32px] leading-9 max-w-83.75 tablet:text-[40px] tablet:leading-10">Let’s talk about your project</h2>

        <p className="text-[15px] leading-6.25 max-w-106.25 tablet:text-base tablet:leading-base">
          Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
        </p>
      </div>

      <button 
        type="button" 
        className="
          bg-white rounded-lg w-38 h-14 uppercase font-medium text-[15px] leading-5.5 
          tracking-[1px] hover:bg-light-peach hover:text-white transition-all cursor-pointer
        "
      >
        Get in touch
      </button>
    </section>
  )
}

export default FooterCTA;