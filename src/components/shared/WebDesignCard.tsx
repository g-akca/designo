import { Link } from "react-router";
import arrowIcon from "/assets/shared/desktop/icon-right-arrow.svg";

function WebDesignCard() {
  return (
    <Link 
      to="/web-design" 
      className="
        relative h-62.5 rounded-[15px] bg-[url('/assets/home/desktop/image-web-design-small.jpg')] 
        bg-size-[auto_500px] bg-position-[calc(50%-150px)_bottom] bg-no-repeat flex flex-col 
        justify-center items-center gap-3 text-center text-white uppercase font-medium
      "
    >
      <div className="absolute inset-0 bg-[#000000]/55" />

      <h2 className="z-10 text-[28px] leading-9 tracking-[1.4px]">Web Design</h2>

      <div className="z-10 flex items-center gap-4">
        <p className="text-[15px] leading-5.5 tracking-[5px]">View projects</p>

        <img src={arrowIcon} alt="" />
      </div>
    </Link>
  );
}

export default WebDesignCard;