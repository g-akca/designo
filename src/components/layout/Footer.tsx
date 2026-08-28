import lightLogo from "/assets/shared/desktop/logo-light.png";
import facebookIcon from "/assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "/assets/shared/desktop/icon-instagram.svg";
import pinterestIcon from "/assets/shared/desktop/icon-pinterest.svg";
import twitterIcon from "/assets/shared/desktop/icon-twitter.svg";
import youtubeIcon from "/assets/shared/desktop/icon-youtube.svg";

function Footer() {
  return (
    <footer className="relative py-9.5 px-6 flex flex-col gap-16.5">
      <section 
        className="
          bg-peach bg-[url('/assets/shared/desktop/bg-pattern-call-to-action.svg')] bg-position-[44%_center] 
          bg-no-repeat rounded-[15px] py-16 px-6 flex flex-col items-center gap-8
        "
      >
        <div className="flex flex-col gap-4 text-center text-white">
          <h2 className="font-medium text-[32px] leading-9">Let’s talk about your project</h2>

          <p className="text-[15px] leading-6.25">
            Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
          </p>
        </div>

        <button 
          type="button" 
          className="bg-white rounded-lg w-38 h-14 uppercase text-dark-grey font-medium text-[15px] leading-5.5 tracking-[1px]"
        >
          Get in touch
        </button>
      </section>

      <section className="flex flex-col gap-8 items-center text-center">
        <img src={lightLogo} alt="" className="h-6.75" />

        <hr className="w-full text-white/10" />

        <nav className="flex flex-col gap-8 uppercase text-[14px] leading-3.5 tracking-[2px] text-white">
          <a href="#">Our Company</a>
          <a href="#">Locations</a>
          <a href="#">Contact</a>
        </nav>

        <address>
          <p className="opacity-50 not-italic">
            <strong>Designo Central Office</strong>
            <br />
            3886 Wellington Street
            <br />
            Toronto, Ontario M9C 3J5
          </p>
        </address>

        <address>
          <p className="opacity-50 not-italic">
            <strong>Contact Us (Central Office)</strong>
            <br />
            P : +1 253-863-8967
            <br />
            M : contact@designo.co
          </p>
        </address>

        <nav className="flex gap-4 items-center">
          <a href="#">
            <img src={facebookIcon} alt="" />
          </a>
          <a href="#">
            <img src={youtubeIcon} alt="" />
          </a>
          <a href="#">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="#">
            <img src={pinterestIcon} alt="" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="" />
          </a>
        </nav>
      </section>
    </footer>
  )
}

export default Footer;