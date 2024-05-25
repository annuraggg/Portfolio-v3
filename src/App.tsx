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
import Project from "./pages/Project/Project";
import Loader from "./pages/Loader/Loader";
import Hotjar from "@hotjar/browser";

function App() {
  const [active, setActive] = useState(0);
  const [project, setProject] = useState(0);

  const [loading, setLoading] = useState(false);
  const [projectLoading, setProjectLoading] = useState(false);
  const loadDelay = 1000;
  const siteId = 4998360;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion);

  const changeTab = (index: number) => {
    setLoading(true);
    setActive(index);
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, loadDelay);
  };

  const changeProject = (no: number) => {
    setProjectLoading(true);
    setProject(no);
    setTimeout(() => {
      window.scrollTo(0, 0);
      setProjectLoading(false);
    }, loadDelay);
  };

  if (projectLoading) return <Loader projectLoading={projectLoading} />;

  return (
    <div>
      {project === 0 ? (
        <>
          <Navbar active={active} setActive={(index) => changeTab(index)} />
          <GlowEffect />
          <div className="w-full h-full flex justify-center flex-col items-center px-28 md:pt-28 pt-16 md:mb-0 mb-16">
            {loading ? (
              <Loader />
            ) : (
              <>
                {active === 0 && <Work setProject={changeProject} />}
                {active === 1 && <Info />}
                {active === 2 && <Skills />}
                {active === 3 && <Contact />}
              </>
            )}

            {!loading && !projectLoading && (
              <>
                <div className="h-24"></div>
                <Footer setActive={changeTab} />
              </>
            )}
          </div>
        </>
      ) : (
        <Project id={project} changeProject={changeProject} />
      )}
    </div>
  );
}

export default App;
