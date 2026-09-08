import { NavLink } from "react-router";

function Menu() {
  return (
    <nav className="bg-black px-6 py-12 tablet:hidden">
      <ul className="flex flex-col gap-8 text-[24px] leading-6.25 tracking-[2px] text-white uppercase">
        <li>
          <NavLink to="about">Our Company</NavLink>
        </li>

        <li>
          <NavLink to="locations">Locations</NavLink>
        </li>

        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;