import PrimaryButton from "../shared/PrimaryButton";

function ContactHero() {
  return (
    <section 
      className="
        bg-peach bg-[url('/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')] bg-no-repeat 
        bg-position-[-90px_top] py-18 px-6 flex flex-col gap-12
      "
    >
      <div className="flex flex-col gap-6 text-center text-white">
        <h1 className="text-[32px] leading-9 font-medium">Contact Us</h1>

        <p className="text-[15px] leading-6.25">
          Ready to take it to the next level? Let’s talk about your project or idea and find out 
          how we can help your business grow. If you are looking for unique digital experiences 
          that’s relatable to your users, drop us a line.
        </p>
      </div>

      <form className="flex flex-col gap-10 items-center">
        <div className="self-stretch flex flex-col gap-3.5">
          <input 
            id="name"
            type="text" 
            placeholder="Name" 
            className="border-b border-white p-3 placeholder:text-white/50 placeholder:text-[15px] placeholder:leading-6.25" 
          />

          <input 
            id="email"
            type="email" 
            placeholder="Email Address" 
            className="border-b border-white p-3 placeholder:text-white/50 placeholder:text-[15px] placeholder:leading-6.25" 
          />

          <input 
            id="phone"
            type="tel" 
            placeholder="Phone" 
            className="border-b border-white p-3 placeholder:text-white/50 placeholder:text-[15px] placeholder:leading-6.25" 
          />
          
          <textarea 
            id="message"
            placeholder="Your Message"
            className="border-b border-white p-3 placeholder:text-white/50 placeholder:text-[15px] placeholder:leading-6.25"
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