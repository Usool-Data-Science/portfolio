import { ExternalLink, Github, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";

interface ProjectCardProps {
  title: string;
  datetime: string;
  link: string;
  thumbnail: string;
  headline: string;
  loom?: string;
  github: string;
  stack: IconType[];
  stack_string: string;
  features: string[];
}

const ProjectCard = ({
  title,
  datetime,
  link,
  thumbnail,
  headline,
  loom,
  github,
  stack,
  stack_string,
  features,
}: ProjectCardProps) => {
  const year = datetime.split("-")[0];

  return (
    <article className="group bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:border-primary/20">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center">
          <div className="text-6xl font-bold text-primary/20">
            {title.charAt(0)}
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-muted-foreground">
            {year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Headline */}
        <p className="text-muted-foreground leading-relaxed">{headline}</p>

        {/* Tech Stack Icons */}
        <div className="flex items-center gap-3 py-2">
          {stack.map((Icon, index) => (
            <Icon
              key={index}
              size={30}
              className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors"
              title={stack_string.split(", ")[index]}
            />
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <Button asChild variant="outline" size="sm" className="gap-2">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </Button>
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
          {loom && (
            <Button asChild variant="ghost" size="sm" className="gap-2">
              <a href={loom} target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4" />
                Video
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
