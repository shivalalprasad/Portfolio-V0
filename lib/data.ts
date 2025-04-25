import type { Project, AboutData } from "./types"

// Mock data for projects
const projectsData: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    date: "January 2023",
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    date: "March 2023",
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
    date: "June 2023",
    links: {
      github: "https://github.com",
    },
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with a modern, responsive design.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    date: "September 2023",
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
]

// Mock data for about section
const aboutData: AboutData = {
  image: "/placeholder.svg?height=800&width=600",
  bio: [
    "I'm a passionate web developer with over 5 years of experience building modern, responsive web applications. I specialize in JavaScript frameworks like React and Next.js, and I'm always eager to learn new technologies.",
    "My approach to development focuses on creating clean, maintainable code that delivers exceptional user experiences. I believe in the power of well-designed interfaces and efficient backend systems working together.",
    "When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "GraphQL",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "CI/CD",
    "AWS",
    "Docker",
    "Responsive Design",
  ],
}

// Simulate API calls with a delay
export async function fetchProjects(): Promise<Project[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return projectsData
}

export async function fetchAboutData(): Promise<AboutData> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))
  return aboutData
}
