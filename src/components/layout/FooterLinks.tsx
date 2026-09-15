import MainNavLinks from "./MainNavLinks";

type FooterLinksProps = {
  className?: string;
};

function FooterLinks({ className = "" }: FooterLinksProps) {
  return (
    <nav className={className}>
      <ul 
        className="
          flex flex-col gap-9 uppercase text-[14px] leading-3.5 tracking-[2px] 
          text-white tablet:flex-row tablet:gap-10.5
        "
      >
        <MainNavLinks />
      </ul>
    </nav>
  )
}

export default FooterLinks;