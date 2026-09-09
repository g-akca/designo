import FooterCTA from "./FooterCTA";
import FooterInfo from "./FooterInfo";

function Footer() {
  return (
    <footer className="relative pb-14.5 px-6 flex flex-col gap-16.5 tablet:pb-20 tablet:px-9.75 tablet:gap-20">
      <FooterCTA />

      <FooterInfo />

      <div className="absolute z-0 bottom-0 inset-x-0 bg-black h-203.75 tablet:h-105.75" />
    </footer>
  )
}

export default Footer;