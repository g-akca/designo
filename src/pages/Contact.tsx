import ContactHero from "../components/contact/ContactHero";
import LocationsSection from "../components/shared/LocationsSection";

function Contact() {
  return (
    <div className="flex flex-col gap-30 desktop:gap-40">
      <ContactHero />

      <LocationsSection />
    </div>
  )
}

export default Contact;