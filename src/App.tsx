import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainRouter from "./routers/MainRouter";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-base leading-base text-dark-grey min-h-screen bg-white flex flex-col justify-between gap-24 tablet:gap-16">
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 tablet:hidden" />
      )}

      <div className="flex flex-col gap-24 tablet:gap-16 tablet:pt-16 tablet:px-9.75">
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