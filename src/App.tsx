import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Work from "./pages/Work/Work";
import GlowEffect from "./components/GlowEffect";

function App() {
  const [active, setActive] = useState(0);

  return (
    <div data-scroll-container data-scroll>
      <Navbar active={active} setActive={(index) => setActive(index)} />
      <GlowEffect />
      <div className="w-full h-full flex justify-center mt-20 absolute">{active === 0 && <Work />}</div>
    </div>
  );
}

export default App;
