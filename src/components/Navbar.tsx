import { RxArrowTopRight } from "react-icons/rx";
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";
import JSConfetti from "js-confetti";

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
      url: "https://www.linkedin.com/in/annuraggg",
    },
    {
      name: "Blog",
      url: "https://blog.anuragsawant.in",
    },
  ];

  const jsConfetti = new JSConfetti();
  const throwConfetti = () => {
    jsConfetti.addConfetti({
      confettiColors: ["#101010", "#1C1C1C", "#ffffff6e"],
    });
  };
  

  return (
    <div className="px-10 py-5 flex items-center justify-between fixed w-full z-50">
      <div className="flex gap-5 items-center w-full">
        <img
          src="logoicon.png"
          className="w-8 invert cursor-pointer"
          onClick={throwConfetti}
        />
        <div>
          <p className="text-lg">Anurag Sawant</p>
          <p className="text-xs text-gray-400">Full Stack Dev.</p>
        </div>
      </div>

      <MiddleBar active={active} setActive={(index) => setActive(index)} />

      <div className="flex gap-5">
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
    <div className="h-fit absolute ml-auto mr-auto left-0 right-0 w-fit">
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
