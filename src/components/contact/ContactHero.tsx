import PrimaryButton from "../shared/PrimaryButton";

function ContactHero() {
  return (
    <section 
      className="
        bg-peach bg-[url('/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')] bg-no-repeat 
        bg-position-[-90px_top] py-18 px-6 flex flex-col gap-12 tablet:rounded-[15px] tablet:bg-position-[-120px_-78px]
        tablet:bg-[url('/assets/contact/desktop/bg-pattern-hero-desktop.svg')] tablet:gap-10 tablet:px-14.5 tablet:py-17.75
        desktop:bg-bottom-left desktop:px-23.75 desktop:py-13.75 desktop:gap-23.75 desktop:grid 
        desktop:grid-cols-[auto_380px] desktop:items-center
      "
    >
      <div className="flex flex-col gap-6 text-center text-white tablet:text-start tablet:gap-8">
        <h1 className="text-[32px] leading-9 font-medium tablet:text-[48px] tablet:leading-12">Contact Us</h1>

        <p className="text-[15px] leading-6.25 tablet:text-base tablet:leading-base">
          Ready to take it to the next level? Let’s talk about your project or idea and find out 
          how we can help your business grow. If you are looking for unique digital experiences 
          that’s relatable to your users, drop us a line.
        </p>
      </div>

      <form className="flex flex-col gap-10 items-center tablet:items-end tablet:gap-6">
        <div className="self-stretch flex flex-col gap-3.5 text-white font-medium text-[15px] leading-6.25 desktop:gap-3">
          <input 
            id="name"
            type="text" 
            placeholder="Name" 
            className="
              border-b border-white p-3 placeholder:text-white/50 placeholder:text-[15px] 
              placeholder:leading-6.25 placeholder:font-medium focus:outline-none 
              focus:shadow-[inset_0_-2px_0_0_white] tablet:px-6 desktop:px-4
            " 
          />

          <input 
            id="email"
            type="email" 
            placeholder="Email Address" 
            className="
              border-b border-white p-3 placeholder:text-white/50 placeholder:text-[15px] 
              placeholder:leading-6.25 placeholder:font-medium focus:outline-none 
              focus:shadow-[inset_0_-2px_0_0_white] tablet:px-6 desktop:px-4
            " 
          />

          <input 
            id="phone"
            type="tel" 
            placeholder="Phone" 
            className="
              border-b border-white p-3 placeholder:text-white/50 placeholder:text-[15px] 
              placeholder:leading-6.25 placeholder:font-medium focus:outline-none 
              focus:shadow-[inset_0_-2px_0_0_white] tablet:px-6 desktop:px-4
            " 
          />
          
          <textarea 
            id="message"
            placeholder="Your Message"
            className="
              border-b border-white min-h-25.5 p-3 placeholder:text-white/50 placeholder:text-[15px] 
              placeholder:leading-6.25 placeholder:font-medium focus:outline-none 
              focus:shadow-[inset_0_-2px_0_0_white] tablet:px-6 desktop:px-4
            "
          ></textarea>
        </div>

        <PrimaryButton>
          Submit
        </PrimaryButton>
      </form>
    </section>
  )
}

export default ContactHero;