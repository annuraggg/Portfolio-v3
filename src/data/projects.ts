export interface Project {
  id: number;
  title: string;
  date: string;
  cover?: string;
  role: string;
  timeline: string;

  waiter?: string;

  summary: string;
  description: string;

  problem?: string;
  solution?: string;

  highlights: string[];
  technologies: string[];

  screenshots?: string[];
  links?: {
    github?: string;
    demo?: string;
  };

  development?: boolean;
}

const projects: Project[] = [
  {
    id: 7,
    title: "Scriptopia Code",
    date: "2024",
    cover: "projects/scriptopiaCode/cover.png",
    role: "Full Stack Developer",
    timeline: "January 2024 - Present",
    summary:
      "A coding platform that allows users to practice coding problems, participate in contests, and improve their coding skills. Enterprise Plans have ATS Systems to help companies hire the best talent",
    description: `Scriptopia Code is a coding platform that allows users to practice coding problems, participate in contests, and improve their coding skills. It provides a wide range of problems and challenges across multiple domains, including data structures, algorithms, and programming languages. Scriptopia Code also includes features like leaderboards, contests, and virtual interviews, making it an ideal platform for students, educators, and professionals. The platform is designed to be interactive and engaging, with a clean and user-friendly interface.`,
    problem: `Many coding platforms lack a comprehensive set of features and tools for users to practice and improve their coding skills. They often focus on specific domains or lack real-world applications, making it difficult for users to apply their knowledge in practical scenarios. This also makes it hard for companies to assess thier candidates`,
    solution: `Scriptopia Code provides a wide range of problems and challenges across multiple domains, helping users practice and improve their coding skills. It includes features like leaderboards, contests, and virtual interviews, making it an ideal platform for students, educators, and professionals. The platform also offers enterprise plans with ATS Systems to help companies hire the best talent.`,
    highlights: [
      "Practice Problems: A wide range of problems and challenges across multiple domains to help users improve their coding skills.",
      "Leaderboards: Dynamic leaderboards that rank users based on their performance and contributions.",
      "Contests: Regular contests and challenges to test users' skills and knowledge.",
      "Virtual Interviews: Mock interviews and coding assessments to help users prepare for job interviews.",
      "ATS Systems: Enterprise plans with ATS Systems to help companies hire the best talent.",
    ],
    technologies: [
      "React",
      "ShadCN UI",
      "NextUI",
      "Node.js",
      "Hono",
      "MongoDB",
      "AWS Lambda",
      "DigitalOcean",
      "Redis",
      "Clerk",
    ],
    links: {
      github: "https://github.com/annuraggg/Scriptopia-Code-2.0",
      demo: "https://www.scriptopia.tech",
    },
    development: true,
  },
  {
    id: 6,
    title: "Convostream API",
    date: "2024",
    cover: "projects/convostreamAPI/cover.png",
    role: "Full Stack Developer",
    timeline: "March 2024 - Present",
    summary:
      "A RESTful API that allows developers to enable end-to-end encrypted chat functionality in their applications",
    description: `Convostream API is a RESTful API that allows developers to enable end-to-end encrypted chat functionality in their applications. It provides a secure and reliable way to implement chat features like messaging, voice calls, and video calls. Convostream API is designed to be flexible and scalable, with support for React Apps. It also includes features like message history, notifications, and user authentication, making it an ideal solution for developers building chat applications.`,
    problem: `Developers often struggle to implement secure and reliable chat functionality in their applications. They lack the expertise and resources to build end-to-end encrypted chat features, leading to privacy and security concerns for users.`,
    solution: `Convostream API provides a secure and reliable way to implement end-to-end encrypted chat functionality in applications. It offers features like messaging, voice calls, and video calls, with support for React Apps. The API also includes message history, notifications, and user authentication, making it easy for developers to build chat applications that prioritize privacy and security.`,
    highlights: [
      "Messaging: Implement end-to-end encrypted messaging features in applications.",
      "Voice Calls: Enable secure voice calls between users with end-to-end encryption.",
      "Video Calls: Support video calls with end-to-end encryption for enhanced privacy and security.",
      "Message History: Store and retrieve message history for users to view and manage conversations.",
      "Notifications: Send real-time notifications to users for new messages, calls, and updates.",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Socket.IO", "React"],
    links: {
      github: "https://github.com/annuraggg/ConvoStream-API",
      demo: "https://www.npmjs.com/package/convostream",
    },
    development: true,
  },
  {
    id: 5,
    title: "Scriptopia Campus",
    date: "2023",
    cover: "projects/scriptopiaCampus/cover.png",
    role: "Full Stack Developer",
    timeline: "June 2023 - November 2023",
    summary:
      "A Institute Certicate Repository that allows users to upload and verify certificates. Ready to use for any institute",
    description: `In response to the growing demand for a centralized and efficient certificate repository, this project seeks to create a dedicated online environment for management of student's as well as faculty certificate's. Scriptopia isn't just a certification platform; it's a dynamic
      educational ecosystem that fosters collaboration,
      mentorship, and healthy competition among students. It
      celebrates individual achievements while promoting
      collective excellence. The platform offers invaluable
      insights for administrators to enhance student engagement
      and academic performance. Scriptopia's gamified approach
      inspires determination and dedication, preparing students for
      a future where lifelong learning and teamwork are
      paramount.`,
    problem: `The current system of managing student certificates is inefficient and time-consuming. It is difficult to track and verify certificates, and there is no centralized repository for students to access their certificates.`,
    solution: `Scriptopia Campus is a centralized platform that allows students to access, store, and share their certificates. It provides a secure and efficient way to manage certificates, reducing the administrative burden on schools and universities.`,
    highlights: [
      "House Cup: A friendly competition among houses to earn points and win the House Cup.",
      "Certificate Repository: A centralized repository for students to access, store, and share their certificates.",
      "Leaderboard: A dynamic leaderboard that ranks students based on their achievements and contributions.",
      "Events: A calendar of events and activities to keep students engaged and informed.",
    ],
    technologies: [
      "React",
      "Chakra UI",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
    ],
    screenshots: [
      "projects/scriptopiaCampus/1.png",
      "projects/scriptopiaCampus/2.png",
      "projects/scriptopiaCampus/3.png",
      "projects/scriptopiaCampus/4.png",
      "projects/scriptopiaCampus/5.png",
      "projects/scriptopiaCampus/6.png",
    ],
    links: {
      github: "https://www.github.com/annuraggg/scriptopia",
      demo: "https://waitingroom.anuragsawant.in/?id=scm",
    },
  },

  {
    id: 4,
    title: "Algovis",
    date: "2024",
    cover: "projects/algovis/cover.png",
    role: "Frontend Developer",
    timeline: "January 2024 - March 2024",
    summary:
      "A web application that allows users to visualize DSA sorting algorithms. It also provides a detailed explanation of each algorithm",
    description: `Algovis is a web application that allows users to visualize and learn about various sorting algorithms. It provides a visual representation of how each algorithm works, making it easier for users to understand and compare them. The application also includes detailed explanations of each algorithm, helping users learn the underlying concepts and principles. Algovis is designed to be interactive and engaging, making it an ideal tool for students and educators.`,
    problem: `Sorting algorithms are an essential part of computer science and programming, but they can be difficult to understand and visualize. Students often struggle to grasp the concepts behind these algorithms, leading to confusion and frustration.`,
    solution: `Algovis provides a visual representation of sorting algorithms, making it easier for users to understand how they work. By combining interactive animations with detailed explanations, the application helps students learn and compare different algorithms.`,
    highlights: [
      "Visualizations: Interactive animations that show how each sorting algorithm works.",
      "Explanations: Detailed descriptions of each algorithm, including its time complexity and key concepts.",
    ],
    technologies: ["React", "ShadCN UI", "TypeScript"],
    links: {
      github: "https://www.github.com/annuraggg/algovis",
      demo: "https://algovis.anuragsawant.in",
    },
  },

  {
    id: 3,
    title: "Chatup",
    date: "2022",
    cover: "projects/chatup/cover.png",
    role: "Full Stack Developer",
    timeline: "April 2022 - July 2022",
    summary:
      "A chat application that allows users to create chat rooms and chat with their friends. It also supports real-time chat functionality",
    description: `Chatup is a chat application that allows users to create chat rooms and chat with their friends. It supports real-time messaging and notifications, making it easy for users to stay connected. Chatup is designed to be simple and intuitive, with a clean and user-friendly interface. It also includes features like message history, user profiles, and emoji support.`,
    highlights: [
      "Chat Rooms: Create and join chat rooms to chat with friends and other users.",
      "Real-Time Messaging: Send and receive messages in real time, with instant notifications.",
      "User Profiles: Customize your profile with a profile picture and status message.",
    ],
    technologies: ["React", "Nodejs", "Express", "Socket.IO", "MongoDB"],
    links: {
      github: "https://www.github.com/annuraggg/chatup",
      demo: "https://chatup.anuragsawant.in",
    },
  },

  {
    id: 2,
    title: "CallMaven",
    date: "2022",
    cover: "projects/callmaven/cover.png",
    role: "Frontend Developer",
    timeline: "August 2022 - October 2022",
    summary:
      "A web solution designed to manage and optimize call center operations. It provides a centralized platform for managing customer interactions",
    description: `CallMaven is a web solution designed to manage and optimize call center operations. It provides a centralized platform for managing customer interactions, including call logs, customer profiles, and call recordings. CallMaven also includes features like call routing, call analytics, and performance tracking, helping call centers improve efficiency and customer satisfaction. The application is designed to be user-friendly and customizable, with a clean and intuitive interface.`,
    problem: `Call centers often struggle to manage and optimize their operations, leading to inefficiencies and poor customer service. They lack a centralized platform for managing customer interactions, making it difficult to track calls, analyze data, and improve performance.`,
    solution: `CallMaven provides a centralized platform for managing call center operations, helping call centers improve efficiency and customer satisfaction. By providing features like call routing, call analytics, and performance tracking, the application helps call centers optimize their operations and deliver better customer service.`,
    highlights: [
      "Call Logs: Track and manage call logs, including call duration, caller information, and call recordings.",
      "Customer Profiles: Create and update customer profiles with detailed information and call history.",
      "Call Routing: Route calls to the appropriate agent based on caller information and call type.",
      "Performance Tracking: Monitor call center performance with detailed analytics and reports.",
    ],
    technologies: ["React", "Ant Design", "Node.js", "Express", "MongoDB"],
    links: {
      github: "https://www.github.com/annuraggg/callmaven",
      demo: "https://callmaven.onrender.com",
    },
  },

  {
    id: 1,
    title: "Spycrop",
    date: "2022",
    cover: "projects/spycrop/cover.png",
    role: "Fullstack Developer",
    timeline: "March 2022 - May 2022",
    summary:
      "This web application utilizes computer vision to detect whether a person is wearing a mask. If the app detects the absence of a mask, it triggers an alert mechanism",
    description: `Spycrop is a web application that utilizes computer vision to detect whether a person is wearing a mask. It uses machine learning models to analyze images and identify individuals without masks. If the application detects the absence of a mask, it triggers an alert mechanism, notifying the user and relevant authorities. SpyCrop is designed to be fast, accurate, and user-friendly, with a clean and intuitive interface.`,
    problem: `The COVID-19 pandemic has highlighted the importance of wearing masks in public spaces. However, monitoring mask compliance can be challenging, especially in high-traffic areas like airports, hospitals, and schools.`,
    solution: `Spycrop uses computer vision and machine learning to detect individuals without masks, helping organizations monitor mask compliance and enforce safety protocols. By providing real-time alerts and notifications, the application helps prevent the spread of COVID-19 and other infectious diseases. It also provides attendance tracking based on facial recognition to track attendance and mask compliance for employees, students, and visitors.`,
    highlights: [
      "Mask Detection: Identify individuals without masks using computer vision and machine learning models.",
      "Alert Mechanism: Trigger alerts and notifications when the application detects the absence of a mask.",
      "Real-Time Monitoring: Monitor mask compliance in real time and generate reports for analysis.",
      "Attendance Tracking: Track attendance and mask compliance for employees, students, and visitors by facial recognition.",
    ],
    technologies: [
      "Python",
      "Flask",
      "OpenCV",
      "TensorFlow",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    links: {
      github: "https://www.github.com/annuraggg/spycrop",
    },
  },
];

export default projects;
