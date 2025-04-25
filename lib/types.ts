export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  date: string
  links: {
    github?: string
    live?: string
  }
}

export interface AboutData {
  image: string
  bio: string[]
  skills: string[]
}
