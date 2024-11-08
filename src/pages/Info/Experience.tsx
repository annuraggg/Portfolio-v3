const Experience = () => {
  const experience: {
    title: string;
    date: string;
    description: string;
    role: string;
  }[] = [
    {
      title: "Sahu Technologies",
      date: "July - Oct 2021",
      description:
        "Developed website clones with HTML, CSS, JavaScript, and Bootstrap.",
      role: "Frontend Dev. Intern",
    },
    {
      title: "Symbiosis Protech 2022",
      date: "July 2022",
      description:
        "Emotion Detection App: Developed an app using machine learning to monitor employee emotions, improving well-being and productivity.",
      role: "Runner Up",
    },
    {
      title: "Quasar 2023",
      date: "April 2023",
      description:
        "App using HTML, CSS, JS, Node.js, Express.js, and Flutter for farmer-laborer connections in agriculture sector.",
      role: "Finalist",
    },
    {
      title: "VCET Hackathon",
      date: "Sept 2023",
      description:
        "Developed a website using HTML, CSS, JS, Node.js, Express.js, and MongoDB for a online doctor appointment booking platform.",
      role: "Participant",
    },
    {
      title: "Playtheory Labs",
      date: "June 2024 - Nov 2024",
      description:
        "Developing multiple Data Based MERN Stack Application with a bunch of cool peeps.",
      role: "Full Stack Intern",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center md:w-auto">
      {experience.reverse().map((exp) => (
        <div
          className="my-5 md:flex justify-between w-[100%] md:items-start items-center md:w-full md:p-10"
          key={exp.title}
        >
          <h2 className=" drop-shadow-glowLight md:text-3xl">{exp.title}</h2>

          <div className="md:w-[400px]">
            <p className="text-xl">{exp.role}</p>
            <p className="text-gray-500 text-xs md:text-sm">{exp.date}</p>
            <p className="text-gray-500 text-xs md:text-base">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
