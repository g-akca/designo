import MainNavLinks from "./MainNavLinks";

function Menu() {
  return (
    <nav className="bg-black px-6 py-12 tablet:hidden">
      <ul className="flex flex-col gap-8 text-[24px] leading-6.25 tracking-[2px] text-white uppercase">
        <MainNavLinks />
      </ul>
    </nav>
  )
}

export default Menu;