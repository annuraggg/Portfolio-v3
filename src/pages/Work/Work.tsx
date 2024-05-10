import { FaArrowRight } from "react-icons/fa6";

const Work = () => {
  const work: {
    name: string;
    emphasis?: string;
    description: string;
    image: string;
    link?: string;
  }[] = [
    {
      name: "Scriptopia Campus",
      description:
        "A Institute Certicate Repository that allows users to upload and verify certificates. Ready to use for any institute",
      image: "./projects/scriptopiacampus.png",
      link: "https://scriptopia.anuragsawant.in",
    },
    {
      name: "AlgoVis",
      description:
        "A web application that allows users to visualize DSA sorting algorithms. It also provides a detailed explanation of each algorithm",
      image: "./projects/algovis.png",
      link: "https://algovis.anuragsawant.in",
    },
    {
      name: "Chatup",
      description:
        "A chat application that allows users to create chat rooms and chat with their friends. It also supports real-time chat functionality",
      image: "./projects/chatup.png",
      link: "https://chatup.anuragsawant.in",
    },
    {
      name: "Spycrop",
      description:
        "This web application utilizes computer vision to detect whether a person is wearing a mask. If the app detects the absence of a mask, it triggers an alert mechanism",
      image: "./projects/spycrop.png",
    },
    {
      name: "CallMaven",
      description:
        "A web solution designed to manage and optimize call center operations. It provides a centralized platform for managing customer interactions",
      image: "./projects/callmaven.png",
    },
  ];

  return (
    <div className="w-[90%] p-10">
      <div className="text-center font-poly drop-shadow-glow text-8xl">
        <h1>
          I craft digital experiences that people{" "}
          <span className=" text-8xl font-gloock italic drop-shadow-none bg-gradient-to-b from-[#ffffff6e] via-[#d8d9d8bc] to-[#101010] text-transparent bg-clip-text">
            love.
          </span>
        </h1>
      </div>
      <div className="text-center font-poly drop-shadow-glow mt-10">
        <p className="text-gray-500 text-sm">Based in Mumbai.</p>
      </div>

      <div className="mt-20"></div>

      <div className="flex flex-col gap-5">
        {work.map((w) => (
          <div
            className="bg-gradient-to-r from-[#252524]  via-[#ffffff92] to-[#252524] p-[1px] rounded-3xl mt-10 cursor-pointer group "
            onClick={() => window.open(w.link)}
          >
            <div className=" bg-gradient-to-b h-[75vh] from-[#222323] to-[#151515] rounded-3xl p-10 overflow-hidden duration-300 transition-all">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-2xl">{w.name}</h2>
                  <p className="text-gray-500 text-sm">
                    <span className="text-[#d8d9d8]">{w.emphasis}</span>
                    {w.description}
                  </p>
                </div>

                {w.link && (<FaArrowRight className=" group-hover:translate-x-2 transition-all duration-500 ease-in-out" />)}
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={w.image}
                  alt={w.name}
                  className="w-[90%] mt-20 rounded-3xl group-hover:mt-10 transition-all duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

/*            <div className="bg-[#222323] p-1 rounded-3xl">
              <div className="bg-gradient-to-r  from-[#252524] via-[#ffffff] to-[#252524] p-[1px] rounded-3xl">
                <div className=" bg-gradient-to-b h-[50vh] from-[#222323] to-[#151515] rounded-3xl"></div>
              </div>
            </div>*/
