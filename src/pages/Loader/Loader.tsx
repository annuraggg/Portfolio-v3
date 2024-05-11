import GlowEffect from "../../components/GlowEffect";

const Loader = () => {
  return (
    <div className="md:h-[115vh] md:pt-[10vh] h-[100vh] z-40 w-[99vw] absolute flex items-center justify-center bg-[#101010]">
      <GlowEffect />
      <div className="loaderMain"></div>
    </div>
  );
};

export default Loader;
