import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainRouter from "./routers/MainRouter";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div 
      className="
        text-base leading-base text-dark-grey min-h-screen bg-white flex flex-col justify-between gap-24 tablet:gap-16 
        desktop:gap-40 desktop:bg-[url('/assets/shared/desktop/bg-pattern-leaf.svg')] desktop:bg-position-[0_475px] desktop:bg-no-repeat
      "
    >
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 tablet:hidden" />
      )}

      <div className="flex flex-col gap-16 w-full max-w-277.5 self-center tablet:pt-16 tablet:px-9.75 desktop:px-0">
        <Header 
          isMenuOpen={isMenuOpen} 
          openMenu={() => setIsMenuOpen(true)}
          closeMenu={() => setIsMenuOpen(false)}
        />

        <main className="pt-24 tablet:pt-0">
          <MainRouter />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App;