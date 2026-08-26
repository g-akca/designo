import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainRouter from "./routers/MainRouter";

function App() {
  return (
    <div className="text-base leading-base text-dark-grey min-h-screen bg-white flex flex-col">
      <Header />

      <main>
        <MainRouter />
      </main>

      <Footer />
    </div>
  )
}

export default App;