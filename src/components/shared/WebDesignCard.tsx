import { Link } from "react-router";
import arrowIcon from "/assets/shared/desktop/icon-right-arrow.svg";

type WebDesignCardProps = {
  className?: string;
};

function WebDesignCard({ className = "" }: WebDesignCardProps) {
  return (
    <Link 
      to="/web-design" 
      className={`
        relative group p-6 rounded-[15px] bg-[url('/assets/home/mobile/image-web-design.jpg')] 
        bg-center bg-cover bg-no-repeat overflow-hidden flex flex-col
        justify-center items-center gap-3 text-center text-white uppercase font-medium
        tablet:bg-[url('/assets/home/tablet/image-web-design.jpg')] tablet:gap-6.5 
        ${className ? 
          "desktop:bg-[url('/assets/home/desktop/image-web-design-large.jpg')]" 
          : 
          "desktop:bg-[url('/assets/home/desktop/image-web-design-small.jpg')]"
        } 
        desktop:gap-6 ${className}
      `}
    >
      <div className="absolute inset-0 bg-[#000000]/55 transition-all duration-300 group-hover:bg-peach/80" />

      <h2 className="z-10 text-[28px] leading-9 tracking-[1.4px] tablet:text-[40px] tablet:leading-12 tablet:tracking-[2px]">
        Web Design
      </h2>

      <div className="z-10 flex items-center gap-4 tablet:gap-5.25">
        <p className="text-[15px] leading-5.5 tracking-[5px]">View projects</p>

        <img src={arrowIcon} alt="" />
      </div>
    </Link>
  );
}

export default WebDesignCard;