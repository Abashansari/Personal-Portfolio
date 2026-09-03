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
    skills: ["Node.js", "Python", "FastAPI", "REST APIs"],
  },
  {
    category: "MOBILE",
    icon: Smartphone,
    skills: ["React Native", "Expo", "TypeScript"],
  },
  {
    category: "DATABASE",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "SQLite", "SQLAlchemy"],
  },
  {
    category: "AI / MACHINE LEARNING",
    icon: BrainCircuit,
    skills: [
      "Ollama",
      "Llama",
      "Scikit-Learn",
      "Machine Learning",
      "AI Applications",
    ],
  },
  {
    category: "TOOLS / CLOUD",
    icon: Cloud,
    skills: ["Git", "GitHub", "AWS", "Docker", "Vercel"],
  },
  {
    category: "PROGRAMMING",
    icon: Code2,
    skills: ["C++", "Python", "JavaScript", "TypeScript"],
  },
];
