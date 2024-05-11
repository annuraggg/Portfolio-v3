import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

/* "AWS",
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
    "WebSockets",*/

const Skills = () => {
  const skillsData: {
    title: string;
    progress?: string;
  }[] = [
    {
      title: "AWS",
      progress: "https://roadmap.sh/aws?s=646cf314cb6301e67f89a4c5",
    },
    {
      title: "Chakra UI",
    },
    {
      title: "CSS",
    },
    {
      title: "Docker",
      progress: "https://roadmap.sh/docker?s=646cf314cb6301e67f89a4c5",
    },
    {
      title: "ExpressJS",
    },
    {
      title: "Figma",
    },
    {
      title: "Firebase",
    },
    {
      title: "Flask",
    },
    {
      title: "Git",
    },
    {
      title: "GitHub",
    },
    {
      title: "HTML",
    },
    {
      title: "JavaScript",
      progress: "https://roadmap.sh/javascript?s=646cf314cb6301e67f89a4c5",
    },
    {
      title: "JWT",
    },
    {
      title: "Linux",
      progress: "https://roadmap.sh/linux?s=646cf314cb6301e67f89a4c5",
    },
    {
      title: "MongoDB",
      progress: "https://roadmap.sh/mongodb?s=646cf314cb6301e67f89a4c5",
    },
    {
      title: "Next.js",
    },
    {
      title: "Node.js",
      progress: "https://roadmap.sh/nodejs",
    },
    {
      title: "OAuth",
    },
    {
      title: "OAuth2",
    },
    {
      title: "Python",
      progress: "https://roadmap.sh/python",
    },
    {
      title: "React",
      progress: "https://roadmap.sh/react?s=646cf314cb6301e67f89a4c5",
    },
    {
      title: "Redux",
    },
    {
      title: "RESTful API",
    },
    {
      title: "ShadCN UI",
    },
    {
      title: "SQL",
      progress: "https://roadmap.sh/sql?s=646cf314cb6301e67f89a4c5",
    },
    {
      title: "Tailwind CSS",
    },
    {
      title: "Typescript",
      progress: "https://roadmap.sh/typescript?s=646cf314cb6301e67f89a4c5",
    },
    {
      title: "WebSockets",
    },
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
      link: "https://www.credly.com/badges/101df7a1-068e-43f2-955f-5d39a7e3fa66/public_url",
      organization: "Celenois",
    },
    {
      title: "Cybersecurity Essentials",
      date: "Oct 2023",
      link: "https://www.credly.com/badges/3c1da57e-ccd2-4707-bb36-cf075168817b/public_url",
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
      opacity: 0.5,
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
    <div className="md:w-[70%] w-[85vw] animate__animated animate__fadeIn">
      <h1 className=" font-poly text-3xl md:text-7xl text-center drop-shadow-glow">
        Skills
      </h1>
      <p className="text-gray-500 md:text-base text-sm text-center mb-10 mt-2">
        Green items include proficency. Click to see
      </p>

      <div className="flex flex-wrap gap-5 items-center justify-center">
        {skillsData.map((skill, index) => (
          <motion.li
            className={`bg-white md:text-base text-xs borderBlack rounded-xl px-5 py-3 bg-white/10 cursor-pointer hover:${skill.progress ? "bg-green-600" : "bg-red-500"}  transition-all duration-300`}
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            onClick={() => window.open(skill.progress, "_blank")}
          >
            {skill.title}
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
                <h1 className="md:text-xl text-base drop-shadow-glow">{c.title}</h1>
                <p>{c.organization}</p>
                <p className="md:text-sm text-xs md:mt-0 mt-2 text-gray-500">{c.date}</p>
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
