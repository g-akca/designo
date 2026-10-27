import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainRouter from "./routers/MainRouter";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const isContactPage = pathname === "/contact";

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div 
      className={`
        text-base leading-base text-dark-grey min-h-screen bg-white 
        flex flex-col justify-between ${isContactPage ? "gap-44 desktop:gap-64" : "gap-28 desktop:gap-44"}
      `}
    >
      {isMenuOpen && (
        <button 
          className="fixed inset-0 z-40 bg-black/50 tablet:hidden" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div className="flex flex-col gap-16 w-full max-w-277.5 self-center tablet:pt-16 tablet:px-9.75 desktop:px-0 desktop:min-h-110">
        <Header 
          isMenuOpen={isMenuOpen} 
          openMenu={() => setIsMenuOpen(true)}
          closeMenu={() => setIsMenuOpen(false)}
        />

        <main className="z-10 pt-24 tablet:pt-0">
          <MainRouter />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App;