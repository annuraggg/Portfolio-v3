import Experience from "./Experience";

const signStyle = {
  backgroundImage: "url('./sign.png')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const Info = () => {
  return (
    <div className="w-[70%] mt-16">
      <p className="text-sm font-poly text-gray-500 drop-shadow-glow tracking-wide">
        ABOUT ME
      </p>
      <h1 className=" drop-shadow-glow text-5xl font-poly mt-5">
        “Coding to me, isn't just a skill; it's my language of expression, a
        medium to{" "}
        <span className=" font-gloock italic bg-gradient-to-b from-[#ffffff6e] via-[#e2e2e2bc] to-[#e8e8e8a2] text-transparent bg-clip-text">
          breathe life into ideas.
        </span>
        ”
      </h1>
      <div className="mt-10 text-gray-500">
        <p>
          With each line of code, I shape my perspective into digital reality,
          creating a unique and dynamic online presence. In the world of bits
          and pixels, I am the storyteller, weaving narratives through the
          language of the web
        </p>
      </div>
      <div className="">
        <div className="flex items-center justify-between w-full">
          <div>
            <img
              src="./logoicon.png"
              alt=""
              onClick={(e) => {
                e.currentTarget.classList.remove("hover:invert-[0.2]");
                e.currentTarget.classList.add("invert", "animate__hinge");
              }}
              className="w-64 d mt-10 hover:invert-[0.2] cursor-pointer transition-all duration-300  animate__animated"
            />
          </div>

          <div className="w-[60%] mt-10">
            <p className="text-lg">My Background</p>
            <p className="text-gray-500 mt-2">
              In July 2022, I completed My Diploma in IT from Vidyalankar
              Polytechnic. From a young age, I've been captivated by the world
              of coding and have spent the past years honing my skills in web
              development. It's a journey that has allowed me to explore the
              limitless possibilities of the digital realm and continuously
              expand my knowledge.
            </p>

            <div className="mt-10">
              <p className="text-lg">Currently,</p>
              <p className="text-gray-500 mt-2">
                I am persuing my Bachelors in Information Technology from A. P.
                Shah Institute of Technology.
              </p>
            </div>

            <p className="mt-10 mb-[-20px] text-lg">
              Thank you for being here!
            </p>
            <div style={signStyle} className="h-14 w-14 invert-[0.8] mt-5"></div>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full">
        <h1 className="font-poly text-7xl text-center bg-gradient-to-b from-[#ffffff6e] via-[#686868] to-[#101010] text-transparent bg-clip-text">
          EXPERIENCE
        </h1>
        <div className="mt-10 w-full">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default Info;
/*Hey there, Anurag here. Coding to me, isn't just a skill; it's my language of expression, a medium to breathe life into ideas. With each line of code, I shape my perspective into digital reality, creating a unique and dynamic online presence. In the world of bits and pixels, I am the storyteller, weaving narratives through the language of the web.

*/
