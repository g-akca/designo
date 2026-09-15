import { NavLink } from "react-router";

function MainNavLinks() {
  return (
    <>
      <li>
        <NavLink to="/about" className="hover:underline">Our Company</NavLink>
      </li>

      <li>
        <NavLink to="/locations" className="hover:underline">Locations</NavLink>
      </li>

      <li>
        <NavLink to="/contact" className="hover:underline">Contact</NavLink>
      </li>
    </>
  )
}

export default MainNavLinks;