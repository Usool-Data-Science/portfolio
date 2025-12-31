const experiences = [
  {
    role: "Senior Backend Developer",
    company: "Forward Velocity",
    period: "June 2025 – Present",
    description:
      "Building scalable and secure REST APIs with Django, DRF, PostgreSQL, and Redis, implementing JWT/OAuth2 authentication, rate limiting, and microservices orchestration with Celery + RabbitMQ. Deploying on AWS ECS/Kubernetes with Docker and Terraform, while ensuring CI/CD with automated security scanning and dependency checks.",
    achievements: [
      "Migrated legacy systems to Django microservices, improving performance, maintainability, and security posture.",
      "Implemented robust CI/CD pipelines with automated Bandit and Snyk security scans.",
      "Orchestrated async tasks and microservices for high-performance backend operations.",
    ],
    techStack: [
      "Python",
      "Django",
      "PostgreSQL",
      "Redis",
      "Celery",
      "RabbitMQ",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Bandit",
    ],
  },
  {
    role: "Python Backend Developer",
    company: "Avitech Software Solutions",
    period: "November 2024 – March 2025",
    description:
      "Developed and maintained scalable backend systems and data pipelines using Python (Flask/Django), AWS Lambda, and Amazon S3 for high-performance analytics. Designed secure and efficient REST APIs with AWS API Gateway and optimized deployment/monitoring with Docker and GitHub Actions.",
    achievements: [
      "Improved system performance and integration reliability with robust REST APIs and data ingestion pipelines.",
      "Streamlined backend and ML service deployments on AWS ECS with monitoring via CloudWatch.",
      "Optimized CI/CD and workflow automation with Docker and GitHub Actions.",
    ],
    techStack: [
      "Python",
      "Flask",
      "Django",
      "AWS Lambda",
      "S3",
      "Docker",
      "GitHub Actions",
      "MySQL",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    role: "Software Engineer",
    company: "Betakom",
    period: "September 2023 – July 2024",
    description:
      "Automated operational workflows using Python and Crontab. Built Selenium bots for product price updates and deployed tasks with Celery + Docker on AWS. Maintained code quality and standards following PEP 8 and StandardJS guidelines.",
    achievements: [
      "Boosted profit margins by 15% through automated Selenium bots.",
      "Optimized AWS deployments with Celery task orchestration and Docker.",
      "Ensured code quality and maintainability across all scripts.",
    ],
    techStack: ["Python", "Docker", "AWS", "Linux", "MySQL", "Selenium"],
  },
  {
    role: "Software Engineer",
    company: "ALX Africa",
    period: "July 2022 – July 2023",
    description:
      "Led development of responsive web applications using Flask, HTML, CSS/Bootstrap, and NodeJS. Implemented JWT authentication, unit testing for Python REST APIs, and deployment automation with Fabric, Puppet, and GitHub Actions.",
    achievements: [
      "Increased user engagement by 25% through improved web application UX.",
      "Secured and tested REST APIs with JWT authentication and unit tests.",
      "Streamlined deployment workflows, reducing downtime and enhancing efficiency.",
    ],
    techStack: [
      "Python",
      "Flask",
      "HTML",
      "Bootstrap",
      "MySQL",
      "NodeJS",
      "REST API",
      "Puppet",
      "Fabric",
      "Linux",
      "GitHub Actions",
    ],
  },
];

import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaC,
} from "react-icons/fa6";
import {
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiDocker,
  SiStripe,
  SiNextdotjs,
  SiPrisma,
} from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { IoLogoJavascript } from "react-icons/io5";

const iconMap = {
  Python: FaPython,
  Django: SiDjango,
  DRF: SiDjango,
  Flask: SiFlask,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  AWS: FaAws,
  Bandit: FaC, // Placeholder, replace with proper icon if available
  Snyk: FaC,
  Mailgun: FaC,
  GitHubActions: SiGithubactions,
  NodeJS: FaNodeJs,
  React: FaReact,
  NextJS: SiNextdotjs,
  Prisma: SiPrisma,
  Linux: FcLinux,
  JavaScript: IoLogoJavascript,
  Stripe: SiStripe,
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Experience
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
              Where I've worked
            </h3>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary border-4 border-background" />

                <div className="space-y-4">
                  {/* Header */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="text-xl font-semibold text-foreground">
                        {exp.role}
                      </h4>
                      <span className="text-primary font-medium">
                        @ {exp.company}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Icons */}
                  {exp.techStack && exp.techStack.length > 0 && (
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      {exp.techStack.map((tech, i) => {
                        const Icon = iconMap[tech];
                        if (!Icon) return null; // skip unknown tech
                        return (
                          <Icon
                            key={i}
                            size={24}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            title={tech}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
