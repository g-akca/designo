import FacebookIcon from "./icons/FacebookIcon";
import YouTubeIcon from "./icons/YoutubeIcon";
import TwitterIcon from "./icons/TwitterIcon";
import PinterestIcon from "./icons/PinterestIcon";
import InstagramIcon from "./icons/InstagramIcon";

function FooterSocialMedia() {
  return (
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
  )
}

export default FooterSocialMedia;