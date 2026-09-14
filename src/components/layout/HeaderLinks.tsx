import { NavLink } from "react-router";

function HeaderLinks() {
  return (
    <nav className="hidden tablet:block">
      <ul className="flex items-center gap-10.5 text-[14px] leading-3.5 uppercase tracking-[2px]">
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

export default HeaderLinks;