import { RxArrowTopRight, RxCross2 } from "react-icons/rx";
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";
import JSConfetti from "js-confetti";
import Resume from "../documents/resume.pdf";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { CiCoffeeCup } from "react-icons/ci";

const Navbar = ({
  active,
  setActive,
}: {
  active: number;
  setActive: (index: number) => void;
}) => {
  const links: {
    name: string;
    url: string;
    icon?: JSX.Element;
  }[] = [
    {
      name: "Buy Me a Coffee",
      url: "https://www.buymeacoffee.com/annuraggg",
      icon: <CiCoffeeCup size={25} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/annuraggg",
      icon: <LuLinkedin size={20} />,
    },

    {
      name: "GitHub",
      url: "https://www.github.com/annuraggg",
      icon: <LuGithub size={20} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/annuraggg",
      icon: <LuInstagram size={20} />,
    },
    {
      name: "Resume",
      url: Resume,
    },
    {
      name: "Blog",
      url: "https://blog.anuragsawant.in",
    },
  ];

  const [showSmallMenu, setShowSmallMenu] = useState(false);

  const jsConfetti = new JSConfetti();
  const throwConfetti = () => {
    jsConfetti.addConfetti({
      confettiColors: ["#101010", "#1C1C1C", "#ffffff6e"],
    });
  };

  return (
    <div className="px-10 py-5 flex items-center justify-between md:fixed w-full z-50">
      <div className="flex gap-2 items-center w-full">
        <img
          src="logoicon.png"
          className="md:w-8 w-4 invert cursor-pointer mr-10"
          onClick={throwConfetti}
        />
        <div className="hidden md:block">
          <p className="text-lg">Anurag Sawant</p>
          <p className="text-xs text-gray-400">Full Stack Dev.</p>
        </div>
      </div>

      <MiddleBar active={active} setActive={(index) => setActive(index)} />

      <div className="gap-1 md:gap-5 hidden md:flex">
        {links.map((link) => (
          <div
            onClick={() => window.open(link.url, "_blank")}
            className="flex gap-1 items-center cursor-pointer bg-white bg-opacity-0 hover:bg-opacity-10 transition-all ease-linear duration-200 p-1.5 px-2 rounded-full"
            key={link.name}
          >
            {link.icon ? (
              link.icon
            ) : (
              <>
                {link.name}
                <RxArrowTopRight size={15} />
              </>
            )}
          </div>
        ))}
      </div>

      {showSmallMenu && (
        <div className="left-0 fixed bottom-0 bg-[#101010] z-50 w-full h-full px-10 py-5 animate__animated animate__fadeInDown ">
          <div className="flex justify-between">
            <div className="flex gap-5 items-center w-full">
              <img
                src="logoicon.png"
                className="md:w-8 w-4 invert cursor-pointer mr-10"
                onClick={throwConfetti}
              />
            </div>

            <div
              className="md:hidden mt-[-3px] bg-opacity-0 bg-gray-700 hover:bg-opacity-40 p-1.5 rounded-full transition-all duration-300"
              onClick={() => setShowSmallMenu(false)}
            >
              <RxCross2 size={20} />
            </div>
          </div>
          <div className="gap-1 flex flex-col items-start mt-10 justify-center">
            {links.map((link) => (
              <div
                onClick={() => window.open(link.url, "_blank")}
                className="flex mt-5 gap-1 items-center cursor-pointer border border-gray-700 px-8 py-5 rounded-lg w-full bg-white bg-opacity-0 hover:bg-opacity-10 transition-all ease-linear duration-200 md:p-1.5 md:px-2"
                key={link.name}
              >
                {link.icon ? (
                  <>
                    {link.icon}
                    <p className="pl-5">{link.name}</p>
                  </>
                ) : (
                  <>
                    {link.name}
                    <RxArrowTopRight size={15} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div
        className="md:hidden mt-[-3px] bg-opacity-0 bg-gray-700 hover:bg-opacity-40 p-1.5 rounded-full transition-all duration-300"
        onClick={() => setShowSmallMenu(true)}
      >
        <IoMdMenu size={20} />
      </div>
    </div>
  );
};

const MiddleBar = ({
  active,
  setActive,
}: {
  active: number;
  setActive: (index: number) => void;
}) => {
  const navItems = ["Work", "Info", "Skills", "Contact"];

  const backDivStyle = {
    transform: `translateX(${30 + 90 * active}px)`,
  };

  const frontDivStyle = {
    transform: `translateX(${active * 5.5}rem)`,
  };

  return (
    <div className="h-fit md:absolute fixed bottom-2 ml-auto mr-auto left-0 right-0 w-fit z-50">
      <div
        className={`h-full w-8 bg-white bg-opacity-25 rounded-md border-t-white border-t-[3px] transform-gpu absolute -z-10 transition-all duration-500 delay-[30ms] `}
        style={backDivStyle}
      ></div>

      <div className="absolute px-1.5">
        <div
          className={`z-10 absolute h-10 w-20 mt-2 rounded-full bg-white bg-opacity-10 transform-gpu transition-all duration-500 `}
          style={frontDivStyle}
        ></div>
      </div>

      <div className="border-2 backdrop-blur-lg bg-white mt-0.5 bg-opacity-0 hover:bg-opacity-5 border-[#3F3E3E] rounded-full p-1 flex gap-2 items-center justify-center self-center justify-self-center">
        {navItems.map((item, index) => (
          <div
            className={`w-20 text-sm h-10 backdrop-filter:blur() flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 
            } hover:bg-gradient-to-l hover:from-[#3c403884]`}
            key={item}
            onClick={() => setActive(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
