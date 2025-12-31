import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for new projects
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight animate-fade-in-up">
            Software Engineer
            <br />
            <span className="text-primary">Building Scalable Systems</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
            I design and build production-grade APIs, data pipelines, and
            AI-powered systems. Focused on clean architecture, reliability, and
            developer experience.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
            <a
              href="https://github.com/Usool-Data-Science"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/adeshina-software-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a
              href="mailto:adeshinaibrahim10@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-muted transition-colors group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up animation-delay-300">
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a
                href="/my-resume.pdf"
                download
                className="inline-flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-fade-in animation-delay-500">
            <a
              href="#about"
              className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
