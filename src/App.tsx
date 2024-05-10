import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Work from "./pages/Work/Work";
import GlowEffect from "./components/GlowEffect";
import Footer from "./components/Footer";
import Info from "./pages/Info/Info";
import "animate.css";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";

function App() {
  const [active, setActive] = useState(0);

  const changeTab = (index: number) => {
    setActive(index);
    window.scrollTo(0, 0);
  };

  return (
    <div data-scroll-container data-scroll>
      <Navbar active={active} setActive={(index) => changeTab(index)} />
      <GlowEffect />
      <div className="w-full h-full flex justify-center flex-col items-center px-28 pt-28">
        {active === 0 && <Work />}
        {active === 1 && <Info />}
        {active === 2 && <Skills />}
        {active === 3 && <Contact />}

        <div className="h-24"></div>
        <Footer setActive={changeTab} />
      </div>
    </div>
  );
}

export default App;
