import { 
  Code2, 
  Database, 
  Layout, 
  Smartphone, 
  Server, 
  BrainCircuit, 
  Cloud, 
  Wrench
} from "lucide-react";

export const technologies = [
  {
    category: "FRONTEND",
    icon: Layout,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "BACKEND",
    icon: Server,
    skills: ["Node.js","Express.js", "Python", "FastAPI"],
  },
  {
    category: "MOBILE",
    icon: Smartphone,
    skills: ["React Native", "Expo", "TypeScript"],
  },
  {
    category: "DATABASE",
    icon: Database,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "SQLAlchemy"],
  },
  {
    category: "AI / MACHINE LEARNING",
    icon: BrainCircuit,
    skills: [
      "Scikit-Learn",
      "Machine Learning",
      "AI Applications",
    ],
  },
  {
    category: "TOOLS / CLOUD",
    icon: Cloud,
    skills: ["Git", "GitHub","Linux","AWS", "Docker", "Vercel"],
  },
  {
    category: "PROGRAMMING",
    icon: Code2,
    skills: ["C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
];
