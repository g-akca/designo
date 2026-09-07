import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainRouter from "./routers/MainRouter";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <div className="text-base leading-base text-dark-grey min-h-screen bg-white flex flex-col gap-24">
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" />
      )}

      <Header 
        isMenuOpen={isMenuOpen} 
        openMenu={() => setIsMenuOpen(true)}
        closeMenu={() => setIsMenuOpen(false)}
      />

      <main className="grow pt-24">
        <MainRouter />
      </main>

      <Footer />
    </div>
  )
}

export default App;