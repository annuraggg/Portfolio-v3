import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const Skills = () => {
  const skillsData = [
    "AWS",
    "Chakra UI",
    "CSS",
    "Docker",
    "ExpressJS",
    "Figma",
    "Firebase",
    "Flask",
    "Git",
    "GitHub",
    "HTML",
    "JavaScript",
    "JWT",
    "Linux",
    "MongoDB",
    "Next.js",
    "Node.js",
    "OAuth",
    "OAuth2",
    "Python",
    "React",
    "Redux",
    "RESTful API",
    "ShadCN UI",
    "SQL",
    "Tailwind CSS",
    "Typescript",
    "WebSockets",
  ];

  const credentials: {
    title: string;
    date: string;
    link: string;
    organization: string;
  }[] = [
    {
      title: "Rising Star: Technical",
      date: "February 2024",
      link: "https://www.credly.com/badges/1089e657-65ab-494b-94e3-ede47804fe45/public_url",
      organization: "Celenois",
    },
    {
      title: "Cybersecurity Essentials",
      date: "Oct 2023",
      link: "https://www.credly.com/badges/cba488c9-c618-472f-9bcd-b20cd1ea91ee/public_url",
      organization: "Cisco",
    },
    {
      title: "AWS Academy Cloud Foundations",
      date: "May 2023",
      link: "https://www.credly.com/badges/174e21aa-00fb-4012-ad42-60937120f90b/public_url",
      organization: "Amazon Web Services",
    },
    {
      title: "AWS Academy Cloud Architecting",
      date: "May 2023",
      link: "https://www.credly.com/badges/cba488c9-c618-472f-9bcd-b20cd1ea91ee/public_url",
      organization: "Amazon Web Services",
    },
    {
      title: "CCNA: Introduction to Networks",
      date: "March 2023",
      link: "https://www.credly.com/badges/1089e657-65ab-494b-94e3-ede47804fe45/public_url",
      organization: "Cisco",
    },
  ];

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <div className="w-[70%]">
      <h1 className=" font-poly text-7xl text-center mb-10 drop-shadow-glow">
        Skills
      </h1>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </div>

      <div className="mt-20">
        <h1 className=" font-poly text-2xl text-center mb-10 drop-shadow-glow">
          Credentials
        </h1>

        <div>
          {credentials.map((c) => (
            <div
              key={c.title}
              className="flex border border-gray-800 pr-14 rounded-lg justify-between items-center my-5 p-5 group hover:drop-shadow-glow cursor-pointer transition-all duration-300"
              onClick={() => window.open(c.link, "_blank")}
            >
              <div>
                <h1 className="text-xl drop-shadow-glow">{c.title}</h1>
                <p>{c.organization}</p>
                <p className="text-sm text-gray-500">{c.date}</p>
              </div>

              <FaArrowRight className=" group-hover:translate-x-2 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
