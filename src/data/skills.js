export const skills = {
  // New structure for Toolbox section
  categories: [
    {
      id: "frontend",
      number: "01",
      title: "Frontend Development",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS"
      ]
    },
    {
      id: "backend",
      number: "02",
      title: "Backend & Data",
      technologies: [
        "Supabase",
        "PostgreSQL",
        "REST APIs",
        "Authentication",
        "Row Level Security (RLS)"
      ]
    },
    {
      id: "tools",
      number: "03",
      title: "Tools & Workflow",
      technologies: [
        "Git",
        "GitHub",
        "Vercel",
        "TanStack Query",
        "WordPress",
        "Vite"
      ]
    }
  ],
  // Legacy structure for backward compatibility with About.jsx
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  backend: [
    "Supabase",
    "PostgreSQL",
    "REST APIs",
    "Authentication",
    "Row Level Security",
  ],
  tools: [
    "Git",
    "GitHub",
    "Vercel",
    "Vite",
  ],
};
