import Resume from "../documents/resume.pdf";

const Footer = ({ setActive }: { setActive: (index: number) => void }) => {
  return (
    <div className="md:w-full w-[100vw] h-[70vh] py-5 md:py-0 md:h-[45vh] bg-[#111011] border-y border-y-[#262726]">
      <div className="w-full h-[95%] flex flex-col md:flex-row items-center justify-center md:justify-around">
        <div className="flex items-center justify-center flex-col md:block">
          <img src="./logoicon.png" className="w-8 invert" />
          <p className="mt-2 md:mt-10">Made with ❤️ By Anurag</p>
          <p className="text-xs text-gray-500 cursor-pointer" onClick={() => window.open("https://buymeacoffee.com/annuraggg", "_blank")}>Buy Me A Coffee?</p>
        </div>

        <div className="flex justfy-between gap-20 mt-10 md:mt-0">
          <div>
            <p className="text-gray-500 mb-2 text-xs">CONTACT</p>
            <div className="text-lg flex flex-col gap-2">
              <p
                className="hover:text-blue-500 duration-300 transition-all cursor-pointer"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/annuraggg", "_blank")
                }
              >
                LinkedIn
              </p>
              <p
                className="hover:text-blue-500 duration-300 transition-all cursor-pointer"
                onClick={() =>
                  window.open("https://www.github.com/annuraggg", "_blank")
                }
              >
                GitHub
              </p>
              <p
                className="hover:text-blue-500 duration-300 transition-all cursor-pointer"
                onClick={() =>
                  window.open("https://www.instagram.com/annuraggg", "_blank")
                }
              >
                Instagram
              </p>
              <p
                className="hover:text-blue-500 duration-300 transition-all cursor-pointer"
                onClick={() => window.open(Resume, "_blank")}
              >
                Resume
              </p>
            </div>
          </div>

          <div>
            <p className="text-gray-500 mb-2 text-xs">MAIN</p>
            <div className="text-lg flex flex-col gap-2">
              <p
                onClick={() => setActive(0)}
                className="hover:text-blue-500 duration-300 transition-all cursor-pointer"
              >
                Work
              </p>
              <p
                onClick={() => setActive(1)}
                className="hover:text-blue-500 duration-300 transition-all cursor-pointer"
              >
                Info
              </p>
              <p
                onClick={() => setActive(2)}
                className="hover:text-blue-500 duration-300 transition-all cursor-pointer"
              >
                Skills
              </p>
              <p
                onClick={() => setActive(3)}
                className="hover:text-blue-500 duration-300 transition-all cursor-pointer"
              >
                Contact
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mb-10 text-gray-500 text-xs mt-[-30px]">
        Last Updated on 25th May, 2024, 7:11 PM IST
      </p>
    </div>
  );
};

export default Footer;
