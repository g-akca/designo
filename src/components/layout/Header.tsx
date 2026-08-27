import hamburgerIcon from "/assets/shared/mobile/icon-hamburger.svg";
import darkLogo from "/assets/shared/desktop/logo-dark.png";

function Header() {
  return (
    <header className="h-24 px-6 flex justify-between items-center gap-5">
      <img src={darkLogo} alt="Designo logo" className="max-w-50.5 min-w-0 shrink" />

      <button type="button" aria-label="Open menu">
        <img src={hamburgerIcon} alt="" className="w-6" />
      </button>
    </header>
  )
}

export default Header;