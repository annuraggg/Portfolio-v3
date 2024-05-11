import GlowEffect from "../../components/GlowEffect";

const Loader = ({ projectLoading }: { projectLoading?: boolean }) => {
  return (
    <div className="md:h-[101vh] h-[100vh] top-0 z-40 w-[99vw] absolute flex items-center justify-center bg-[#101010]">
      <GlowEffect projectLoading={projectLoading} />
      <div className="loaderMain"></div>
    </div>
  );
};

export default Loader;
