import { FaNodeJs } from "react-icons/fa6";
import {
  SiPython,
  SiTypescript,
  SiGo,
  SiRust,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiElasticsearch,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiAmazonwebservices,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiOpenai,
  SiPytorch,
  SiLangchain,
  SiDjango,
  SiMysql,
  SiRedux,
  SiReacthookform,
  SiTensorflow,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Backend & APIs",
    description: "Building robust, scalable server-side systems",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Node", icon: FaNodeJs },
      { name: "Django", icon: SiDjango },
      { name: "GraphQL", icon: SiGraphql },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Databases",
    description: "Data modeling, optimization, and scaling",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Elasticsearch", icon: SiElasticsearch },
    ],
  },
  {
    title: "Frontend",
    description: "When I need to build the UI layer",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "React-Hook Form", icon: SiReacthookform },
      { name: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure as code and deployment",
    skills: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Terraform", icon: SiTerraform },
    ],
  },
  {
    title: "AI & ML",
    description: "Building intelligent, production-ready systems",
    skills: [
      { name: "OpenAI", icon: SiOpenai },
      { name: "Tensorflow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "LangChain", icon: SiLangchain },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Skills
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
              Technical expertise
            </h3>
            <p className="text-lg text-muted-foreground">
              My core toolkit for building backend systems, APIs, and AI-powered
              applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 bg-card rounded-xl border border-border space-y-4"
              >
                <div>
                  <h4 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {category.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg group"
                    >
                      <skill.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
