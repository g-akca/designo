import { NavLink } from "react-router";
import lightLogo from "/assets/shared/desktop/logo-light.png";
import FooterLinks from "./FooterLinks";
import FacebookIcon from "./icons/FacebookIcon";
import YouTubeIcon from "./icons/YoutubeIcon";
import TwitterIcon from "./icons/TwitterIcon";
import PinterestIcon from "./icons/PinterestIcon";
import InstagramIcon from "./icons/InstagramIcon";

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
        <div 
          className="
            flex flex-col gap-9 items-center tablet:flex-row tablet:gap-14.5 
            desktop:grow desktop:grid desktop:grid-cols-[350px_350px]
          "
        >
          <address>
            <p className="text-white/50 not-italic">
              <strong>Designo Central Office</strong>
              <br />
              3886 Wellington Street
              <br />
              Toronto, Ontario M9C 3J5
            </p>
          </address>

          <address>
            <p className="text-white/50 not-italic">
              <strong>Contact Us (Central Office)</strong>
              <br />
              P : +1 253-863-8967
              <br />
              M : contact@designo.co
            </p>
          </address>
        </div>

        <nav className="flex gap-4 items-center">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
            <YouTubeIcon />
          </a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
            <TwitterIcon />
          </a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" aria-label="Pinterest">
            <PinterestIcon />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </nav>
      </div>
    </section>
  )
}

export default FooterInfo;