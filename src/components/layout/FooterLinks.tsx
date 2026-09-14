import { NavLink } from "react-router";

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
        <li>
          <NavLink to="/about" className="hover:underline">Our Company</NavLink>
        </li>

        <li>
          <NavLink to="/locations" className="hover:underline">Locations</NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="hover:underline">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default FooterLinks;