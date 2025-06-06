'use client'
const projects = [
  {
    title: "DeepFind.Me",
    image: "/dfme.webp",
    description: "Deepfind.me is an educational OSINT platform offering tools and resources to help users understand and manage their digital footprint.",
    github: null,
    demo: "https://deepfind.me?ref=buddhsen-tripathi",
    technologies: ["Next.Js", "NestJs", "TypeScript", "Supabase", "AWS", "OpenAI API"],
  },
  {
    title: "openai-api-helper",
    image: "/openai-helper.webp",
    description: "Straightforward npm package designed to simplify making calls to the OpenAI API for various text-based prompts and responses.",
    github: "https://github.com/Buddhsen-tripathi/openai-api-helper",
    demo: "https://www.npmjs.com/package/openai-api-helper",
    technologies: ["JavaScript", "TypeScript"],
  }
];

import Image from 'next/image'
import Link from 'next/link'
import { SiGithub } from "react-icons/si";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { usePathname } from 'next/navigation'

export default function FeaturedProjects() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="space-y-8">
        {projects.slice(0, isHomePage ? 2 : projects.length).map((project) => (
          <div key={project.title} className="flex flex-col md:flex-row gap-6 bg-card rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg hover:bg-primary/10">
            <div className="md:w-2/5 w-full h-full relative">
              <Image
                src={project.image}
                alt={project.title}
                width={640}
                height={360}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4 mt-4">{project.description}</p>
              <div className="flex space-x-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    <SiGithub className="inline-block mr-1" /> GitHub
                  </a>
                )}
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  <BsArrowUpRight className="inline-block mr-1" /> Live
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {isHomePage && (
        <div className="mt-4 flex justify-center w-full">
          <Link href="/projects" className="w-full">
          <div className="w-full bg-card text-card-foreground rounded-lg shadow-md hover:shadow-lg transition-all py-3 flex items-center justify-center gap-2 dark:hover:bg-primary-foreground dark:hover:text-primary">
              <span>View more</span>
              <BsArrowRight className="inline-block" />
            </div>
          </Link>
        </div>
      )}
    </section>
  )
}