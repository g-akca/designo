import FooterCTA from "./FooterCTA";
import FooterInfo from "./FooterInfo";
import leafPattern from "/assets/shared/desktop/bg-pattern-leaf.svg";
import { useLocation } from "react-router";

function Footer() {
  const { pathname } = useLocation();
  const isContactPage = pathname === "/contact";

  return (
    <footer className="relative pb-14.5 px-6 flex justify-center tablet:pb-20 tablet:px-9.75 desktop:pb-18">
      <img className="hidden desktop:block absolute right-0 -top-113 rotate-180" src={leafPattern} alt="" />

      <div className="grow max-w-277.5 flex flex-col gap-16.5 tablet:gap-20 desktop:gap-18">
        {!isContactPage && <FooterCTA />}

        <FooterInfo />
      </div>

      <div
        className={`absolute bottom-0 inset-x-0 bg-black ${
          isContactPage ? "h-156.5 tablet:h-84.25 desktop:h-80.25" : "h-203.75 tablet:h-105.75 desktop:h-100"
        }`}
      />
    </footer>
  )
}

export default Footer;