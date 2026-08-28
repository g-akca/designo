function Footer() {
  return (
    <footer className="relative py-9.5 px-6 flex flex-col gap-16.5">
      <section 
        className="
          bg-peach bg-[url('/assets/shared/desktop/bg-pattern-call-to-action.svg')] bg-position-[44%_center] 
          bg-no-repeat rounded-[15px] py-16 px-6 flex flex-col items-center gap-8
        "
      >
        <div className="flex flex-col gap-4 text-center text-white">
          <h2 className="font-medium text-[32px] leading-9">Let’s talk about your project</h2>

          <p className="text-[15px] leading-6.25">
            Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
          </p>
        </div>

        <button 
          type="button" 
          className="bg-white rounded-lg w-38 h-14 uppercase text-dark-grey font-medium text-[15px] leading-5.5 tracking-[1px]"
        >
          Get in touch
        </button>
      </section>
    </footer>
  )
}

export default Footer;