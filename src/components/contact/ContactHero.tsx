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
        <h1>Contact Us</h1>

        <p>
          Ready to take it to the next level? Let’s talk about your project or idea and find out 
          how we can help your business grow. If you are looking for unique digital experiences 
          that’s relatable to your users, drop us a line.
        </p>
      </div>

      <form className="flex flex-col gap-10 items-center">
        <div>

        </div>

        <PrimaryButton>Submit</PrimaryButton>
      </form>
    </section>
  )
}

export default ContactHero;