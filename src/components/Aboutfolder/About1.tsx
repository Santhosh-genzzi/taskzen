import React from 'react'
import SectionHeader from '../ui/SectionHeader';
const experiences = [
  {
    role: "full stack engineer",
    company: "independent projects",
    period: "2025 -present",
    description: "desiginig and bulenldnlnanldnojaoelhon",
    technologies: ["Next.js", "Typescript", "Drizzle orm", "postgresql", "zod"],
  },
  {
    role: "full stack engineer",
    company: "independent projects",
    period: "2025 -present",
    description: "desiginig and bulenldnlnanldnojaoelhon",
    technologies: ["Next.js", "Typescript", "Drizzle orm", "postgresql", "zod"],
  },
  {
    role: "full stack engineer",
    company: "independent projects",
    period: "2025 -present",
    description: "desiginig and bulenldnlnanldnojaoelhon",
    technologies: ["Next.js", "Typescript", "Drizzle orm", "postgresql", "zod"],
  },
  {
    role: "full stack engineer",
    company: "independent projects",
    period: "2025 -present",
    description: "desiginig and bulenldnlnanldnojaoelhon",
    technologies: ["Next.js", "Typescript", "Drizzle orm", "postgresql", "zod"],
  },
];

const About1 = () => {
  return (
     <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl bg-primary/10" />
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title="porject task"
          highlight="and features"
          badge="Features"
          description="Implemented user authentication, project creation, task assignment, deadline management, and progress tracking."
        />
        <div className="relative mt-14">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178166,0.8)]" />
          <div  className="space-y-12"> 
            {experiences.map((exp, index) => {
              return (
                <div data-aos="flip-right" data-aos-delay={index*100} data-aos-anchor-placement="top-center" key={index} className="relative grid md:grid-cols-2 gap-8">
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  </div>
                  {/* contant */}
                  <div
                    className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                  >
                    <div className="p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                      <span className="text-primary text-sm font-medium">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                      <p className="text-gray-300">{exp.company}</p>
                      <p className="text-sm mt-2 text-gray-400">
                        {exp.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                      />
                      {exp.technologies.map((tech, techindex) => {
                        return (
                          <span
                            key={techindex}
                            className="px-3 py-1 bg-surface text-xs rounded-full text-gray-300"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About1
