import lightLogo from "/assets/shared/desktop/logo-light.png";
import facebookIcon from "/assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "/assets/shared/desktop/icon-instagram.svg";
import pinterestIcon from "/assets/shared/desktop/icon-pinterest.svg";
import twitterIcon from "/assets/shared/desktop/icon-twitter.svg";
import youtubeIcon from "/assets/shared/desktop/icon-youtube.svg";
import FooterLinks from "./FooterLinks";

function FooterInfo() {
  return (
    <section className="flex flex-col gap-9 items-center text-center z-10 tablet:gap-10 tablet:items-stretch tablet:text-start">
      <div className="contents tablet:flex justify-between items-center">
        <img src={lightLogo} alt="" className="h-6.75" />

        <FooterLinks className="hidden tablet:block" />
      </div>

      <hr className="w-full text-white/10" />

      <FooterLinks className="tablet:hidden" />

      <div className="flex flex-col gap-9 items-center tablet:flex-row tablet:items-end tablet:justify-between">
        <div className="flex flex-col gap-9 items-center tablet:flex-row tablet:gap-14.5">
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
      </div>
    </section>
  )
}

export default FooterInfo;