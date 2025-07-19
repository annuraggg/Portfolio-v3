import { useState } from "react";
import Experience from "./Experience";

const signStyle = {
  backgroundImage: "url('./sign.png')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

let nextId = 1;

const Info = () => {
  const [badges, setBadges] = useState([
    { id: nextId++, fallen: false, fadeIn: false },
  ]);

  const handleBadgeClick = (id: number) => {
    setBadges((prev) =>
      prev.map((b) => (b.id === id ? { ...b, fallen: true } : b))
    );

    setTimeout(() => {
      setBadges((prev) => prev.filter((b) => b.id !== id));
    }, 2000);

    setTimeout(() => {
      setBadges((prev) => [
        ...prev,
        { id: nextId++, fallen: false, fadeIn: true },
      ]);

      setTimeout(() => {
        setBadges((prev) =>
          prev.map((b) => (b.fadeIn ? { ...b, fadeIn: false } : b))
        );
      }, 1000);
    }, 2500);
  };

  return (
    <div className="md:w-[70%] w-[85vw] md:mt-16 animate__animated animate__fadeIn">
      <p className="text-sm font-poly text-gray-500 drop-shadow-glow tracking-wide">
        ABOUT ME
      </p>
      <h1 className="drop-shadow-glow md:text-5xl text-3xl font-poly mt-5">
        “Coding to me, isn't just a skill; it's my language of expression, a
        medium to{" "}
        <span className="font-gloock italic bg-gradient-to-b from-[#ffffff6e] via-[#e2e2e2bc] to-[#e8e8e8a2] text-transparent bg-clip-text">
          breathe life into ideas.
        </span>
        ”
      </h1>
      <div className="mt-10 text-gray-500">
        <p>
          With each line of code, I shape my perspective into digital reality,
          creating a unique and dynamic online presence. In the world of bits
          and pixels, I am the storyteller, weaving narratives through the
          language of the web.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between w-full mt-10 h-[400px]">
        {/* Badge container */}
        <div className="flex items-center justify-center min-h-[200px]">
          {badges.map((badge) => (
            <img
              key={badge.id}
              src="./badge.png"
              onClick={() => handleBadgeClick(badge.id)}
              className={`md:w-80 w-24 cursor-pointer animate__animated transition-all duration-300 ${
                badge.fallen
                  ? "animate__hinge invert-[0.3]"
                  : badge.fadeIn
                  ? "animate__fadeIn"
                  : "hover:invert-[0.2]"
              }`}
              alt=""
            />
          ))}
        </div>

        <div className="w-full md:w-[60%] mt-10 md:mt-0">
          <p className="text-lg">My Background</p>
          <p className="text-gray-500 mt-2">
            In July 2022, I completed my Diploma in IT from Vidyalankar
            Polytechnic. From a young age, I've been captivated by the world of
            coding and have spent the past years honing my skills in web
            development.
          </p>

          <div className="mt-10">
            <p className="text-lg">Currently,</p>
            <p className="text-gray-500 mt-2">
              I am pursuing my Bachelors in Information Technology from A. P.
              Shah Institute of Technology.
            </p>
          </div>

          <p className="mt-10 mb-[-20px] text-lg">Thank you for being here!</p>
          <div style={signStyle} className="h-14 w-14 invert-[0.8] mt-5"></div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="font-poly text-3xl md:text-7xl text-center bg-gradient-to-b from-[#ffffff6e] via-[#686868] to-[#101010] text-transparent bg-clip-text">
          EXPERIENCE
        </h1>
        <div className="mt-10">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default Info;
