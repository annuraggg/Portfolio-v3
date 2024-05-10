const Footer = ({ setActive }: { setActive: (index: number) => void }) => {
  return (
    <div className="w-full h-[45vh] bg-[#111011] border-y border-y-[#262726]">
      <div className="w-full  h-[95%]  flex items-center justify-around">
        <div>
          <img src="./logoicon.png" className="w-8 invert" />
          <p className="mt-10">Made with ❤️ By Anurag</p>
        </div>

        <div className="flex justfy-between gap-20">
          <div>
            <p className="text-gray-500 mb-2 text-xs">CONTACT</p>
            <div className="text-lg flex flex-col gap-2">
              <p className="hover:text-blue-500 duration-300 transition-all cursor-pointer">
                LinkedIn
              </p>
              <p className="hover:text-blue-500 duration-300 transition-all cursor-pointer">
                GitHub
              </p>
              <p className="hover:text-blue-500 duration-300 transition-all cursor-pointer">
                Instagram
              </p>
              <p className="hover:text-blue-500 duration-300 transition-all cursor-pointer">
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
                Contact
              </p>
              <p
                onClick={() => setActive(3)}
                className="hover:text-blue-500 duration-300 transition-all cursor-pointer"
              >
                Resume
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mb-10 text-gray-500 text-xs mt-[-30px]">
        Last Updated on 12th May, 2024, 10:21 AM IST
      </p>
    </div>
  );
};

export default Footer;
