import { IoChevronBack } from "react-icons/io5";
import projects, { Project as ProjectType } from "../../data/projects";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Project = ({
  id,
  changeProject,
}: {
  id: number;
  changeProject: (no: number) => void;
}) => {
  const [project, setProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setProject(projects.find((p) => p.id === id) || null);
  }, [id, setProject]);

  const fadeInAnimationVariants = {
    initial: {
      opacity: 1,
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


  if (!project)
    return (
      <div className="p-16 h-[100vh]">
        <div
          className="p-2 hover:bg-gray-800 animate__animated animate__fadeIn w-fit rounded-full duration-300 transition-all cursor-pointer flex gap-2 items-center justify-center pr-4"
          onClick={() => changeProject(0)}
        >
          <IoChevronBack size={20} />
          <p>Back</p>
        </div>

        <div className="text-center text-white flex items-center justify-center flex-col h-full mt-[-50px]">
          <h1 className="text-5xl font-poly drop-shadow-glow">
            Project not found
          </h1>
          <p className="mt-4 text-gray-500">
            The project you are looking for does not exist
          </p>
        </div>
      </div>
    );

  return (
    <div className="p-8 md:p-16 animate__animated animate__fadeIn">
      <div
        className="p-2 hover:bg-gray-800 fixed w-fit rounded-full duration-300 transition-all cursor-pointer flex gap-2 items-center justify-center pr-4"
        onClick={() => changeProject(0)}
      >
        <IoChevronBack size={20} />
        <p>Back</p>
      </div>

      <div className="flex mt-5 md:mt-0 items-center justify-center p-10 flex-col">
        <h1 className="text-xl  md:text-5xl font-poly drop-shadow-glow">{project.title}</h1>
        <p className="text-gray-500 mt-5">{project.date}</p>

        <div className="flex gap-3">
          <p
            className="text-gray-500 hover:text-blue-500 duration-300 transition-all cursor-pointer"
            onClick={() => window.open(project.links?.github, "_blank")}
          >
            Github
          </p>
          <p
            className="text-gray-500 hover:text-blue-500 duration-300 transition-all cursor-pointer"
            onClick={() => window.open(project.links?.demo, "_blank")}
          >
            Demo
          </p>
        </div>

        <div className="relative w-[80vw] md:w-auto">
          <img
            src={project.cover}
            className="rounded-2xl mt-20 w-[100vw] md:w-[80vw]"
            alt=""
          />
          <img
            src={project.cover}
            className="rounded-2xl mt-20 w-[100vw] md:w-[80vw] absolute top-[-40px] blur-[500px] -z-50"
            alt=""
          />
          <img
            src={project.cover}
            className="rounded-2xl mt-20 w-[100vw] md:w-[80vw] absolute top-20 blur-[500px] -z-50"
            alt=""
          />
        </div>

        <div className="flex md:flex-row flex-col text-center md:text-start mt-20 w-[85vw] md:w-[70vw]">
          <div className="md:w-[50%]">
            <div>
              <b>My Role</b>
              <p className=" text-gray-500">{project.role}</p>
            </div>

            <div className="mt-5">
              <b>Timeline</b>
              <p className="text-gray-500">{project.timeline}</p>
            </div>

            <div className="mt-5">
              <b>Github</b>
              <p
                className="text-gray-500 hover:text-blue-500 duration-200 transition-all cursor-pointer"
                onClick={() => window.open(project.links?.github, "_blank")}
              >
                {project.links?.github}
              </p>
            </div>

            <div className="mt-5">
              <b>Demo</b>
              <p
                className="text-gray-500 hover:text-blue-500 duration-200 transition-all cursor-pointer"
                onClick={() => window.open(project.links?.demo, "_blank")}
              >
                {project.links?.demo}
              </p>
            </div>
          </div>

          <div className="md:w-[52%] mt-10 md:mt-0">
            <b>Overview</b>
            <p className="mt-5 text-gray-500">{project.description}</p>
          </div>
        </div>

        {project.problem && project.solution && (
          <div className="mt-20 flex-col md:flex-row flex gap-10 w-[85vw] md:w-[70vw]">
            <div>
              <b>The Problem</b>
              <p className="mt-5 text-gray-500">{project.problem}</p>
            </div>

            <div>
              <b>The Solution</b>
              <p className="mt-5 text-gray-500">{project.solution}</p>
            </div>
          </div>
        )}

        <div className="mt-20">
          <h1 className=" text-center text-3xl font-poly mb-10 drop-shadow-glow">
            Technologies
          </h1>
          <div className=" flex flex-wrap gap-2 w-[85vw] md:w-[70vw] items-center justify-center">
            {project.technologies.map((skill, index) => (
              <motion.li
                className={`bg-white md:text-base text-xs borderBlack rounded-xl px-5 py-3 bg-white/10 cursor-pointer  transition-all duration-300`}
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
        </div>

        <div className=" mt-20 h-[1px] bg-gradient-to-r from-[#252524] w-full via-[#ffffff3d] to-[#252524]"></div>

        <div className="mt-20">
          <h1 className=" text-center text-3xl font-poly mb-10 drop-shadow-glow">
            Highlights
          </h1>
          {project.highlights.map((h, index) => (
            <div
              key={index}
              className="flex gap-10 w-[85vw] md:w-[70vw] font-neue p-5 text-lg rounded-lg mt-5 bg-[#212222]"
            >
              {h}
            </div>
          ))}
        </div>

        {project.screenshots && (
          <div className="mt-20">
            <h1 className=" text-center text-3xl font-poly mb-10 drop-shadow-glow">
              Screenshots
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-[70vw]">
              {project.screenshots.map((s, index) => (
                <img
                  key={index}
                  src={s}
                  className="rounded-lg border-gray-600 border mt-5"
                  alt={project.title + " Screenshot"}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-20 flex items-center justify-center flex-col">
        <p className="text-xl mb-5">Thank you</p>
        <img src="./sign.png" className="invert w-14" alt="Signature" />
      </div>
    </div>
  );
};

export default Project;
