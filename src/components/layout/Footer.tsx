import lightLogo from "/assets/shared/desktop/logo-light.png";
import facebookIcon from "/assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "/assets/shared/desktop/icon-instagram.svg";
import pinterestIcon from "/assets/shared/desktop/icon-pinterest.svg";
import twitterIcon from "/assets/shared/desktop/icon-twitter.svg";
import youtubeIcon from "/assets/shared/desktop/icon-youtube.svg";

import FooterCTA from "./FooterCTA";

function Footer() {
  return (
    <footer className="relative py-14.5 px-6 flex flex-col gap-16.5">
      <FooterCTA />

      <section className="flex flex-col gap-9 items-center text-center z-10">
        <img src={lightLogo} alt="" className="h-6.75" />

        <hr className="w-full text-white/10" />

        <nav className="flex flex-col gap-9 uppercase text-[14px] leading-3.5 tracking-[2px] text-white">
          <a href="#">Our Company</a>
          <a href="#">Locations</a>
          <a href="#">Contact</a>
        </nav>

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

        <nav className="flex gap-4 items-center">
          <a href="#" aria-label="Facebook">
            <img src={facebookIcon} alt="" />
          </a>
          <a href="#" aria-label="YouTube">
            <img src={youtubeIcon} alt="" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="#" aria-label="Pinterest">
            <img src={pinterestIcon} alt="" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={instagramIcon} alt="" />
          </a>
        </nav>
      </section>

      <div className="absolute z-0 bottom-0 inset-x-0 bg-black h-203.75" />
    </footer>
  )
}

export default Footer;