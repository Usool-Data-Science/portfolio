import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <div className="text-sm text-muted-foreground">
            © {currentYear} Adeshina Ibrahim. Built with React & Tailwind CSS.
          </div>

          {/* Center - Back to top */}
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
          >
            Back to top ↑
          </a>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Usool-Data-Science"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/adeshina-software-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:adeshinaibrahim10@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
