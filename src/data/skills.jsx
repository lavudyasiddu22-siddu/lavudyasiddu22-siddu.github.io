import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaTools, FaRobot } from 'react-icons/fa';

export const skillsCategories = [
  {
    title: "PROGRAMMING",
    icon: <FaCode />,
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "FRONTEND",
    icon: <FaLaptopCode />,
    items: ["React", "Vite", "HTML", "CSS"]
  },
  {
    title: "BACKEND / DEVELOPMENT",
    icon: <FaServer />,
    items: ["Node.js", "REST APIs", "JDBC"]
  },
  {
    title: "DATABASE",
    icon: <FaDatabase />,
    items: ["MySQL"]
  },
  {
    title: "TOOLS",
    icon: <FaTools />,
    items: ["Git", "GitHub", "VS Code"]
  },
  {
    title: "AI / ML",
    icon: <FaRobot />,
    items: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "AI Applications"]
  }
];
