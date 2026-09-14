import { NavLink } from "react-router";
import lightLogo from "/assets/shared/desktop/logo-light.png";
import FooterLinks from "./FooterLinks";
import FooterAddresses from "./FooterAddresses";
import FooterSocialMedia from "./FooterSocialMedia";

function FooterInfo() {
  return (
    <section className="flex flex-col gap-9 items-center text-center z-10 tablet:gap-10 tablet:items-stretch tablet:text-start">
      <div className="contents tablet:flex justify-between items-center">
        <NavLink to="/">
          <img src={lightLogo} alt="" className="h-6.75" />
        </NavLink>

        <FooterLinks className="hidden tablet:block" />
      </div>

      <hr className="w-full text-white/10" />

      <FooterLinks className="tablet:hidden" />

      <div className="flex flex-col gap-9 items-center tablet:flex-row tablet:items-end tablet:justify-between">
        <FooterAddresses />

        <FooterSocialMedia />
      </div>
    </section>
  )
}

export default FooterInfo;