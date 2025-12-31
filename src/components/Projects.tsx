import { PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Projects
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
              Selected work
            </h3>
            <p className="text-lg text-muted-foreground">
              A collection of backend systems, APIs, and AI integrations I've
              designed and shipped. Each project represents real production
              challenges solved.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                datetime={project.datetime}
                link={project.link}
                thumbnail={project.thumbnail}
                headline={project.headline}
                loom={project.loom}
                github={project.github}
                stack={project.stack}
                stack_string={project.stack_string}
                features={project.features}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
