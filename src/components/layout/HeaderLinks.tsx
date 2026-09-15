import MainNavLinks from "./MainNavLinks";

function HeaderLinks() {
  return (
    <nav className="hidden tablet:block">
      <ul className="flex items-center gap-10.5 text-[14px] leading-3.5 uppercase tracking-[2px]">
        <MainNavLinks />
      </ul>
    </nav>
  )
}

export default HeaderLinks;