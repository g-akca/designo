import hamburgerIcon from "/assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "/assets/shared/mobile/icon-close.svg";
import darkLogo from "/assets/shared/desktop/logo-dark.png";
import Menu from "./Menu";
import HeaderLinks from "./HeaderLinks";
import { NavLink } from "react-router";

type HeaderProps = {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

function Header({ isMenuOpen, openMenu, closeMenu }: HeaderProps) {
  return (
    <header className="fixed z-50 top-0 inset-x-0 flex flex-col tablet:static">
      <div className="bg-white h-24 px-6 flex justify-between items-center gap-5 tablet:h-auto tablet:px-0">
        <NavLink to="/">
          <img src={darkLogo} alt="Designo logo" className="max-w-50.5 min-w-0 shrink desktop:max-w-49" />
        </NavLink>

        {isMenuOpen ? (
          <button type="button" onClick={closeMenu} aria-label="Close menu">
            <img src={closeIcon} alt="" className="w-5 tablet:hidden" />
          </button>
        ) : (
          <button type="button" onClick={openMenu} aria-label="Open menu">
            <img src={hamburgerIcon} alt="" className="w-6 tablet:hidden" />
          </button>
        )}

        <HeaderLinks />
      </div>

      {isMenuOpen && (
        <Menu />
      )}
    </header>
  )
}

export default Header;