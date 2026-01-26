const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
              About
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
              Engineering with purpose
            </h3>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m a full-stack engineer with 5+ years of experience building
                scalable, production-grade systems, with a strong focus on
                Python backend development and AI-driven integrations. I’ve led
                backend architecture and delivery at startups while
                collaborating closely across the stack, bringing a solid
                understanding of frontend systems to deliver reliable,
                end-to-end solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My work spans real-time data platforms, AI/ML integrations, and
                high-throughput APIs. I believe in choosing boring technology,
                writing code that others can maintain, and shipping
                incrementally.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I'm particularly interested in the intersection of
                traditional software engineering and emerging AI
                capabilities—building systems that are both intelligent and
                reliable.
              </p>
            </div>

            {/* Right Column - Stats/Highlights */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">5+</div>
                  <div className="text-sm text-muted-foreground">
                    Years of Experience
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">20+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Delivered
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">
                    100K+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    API Requests/Day
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">
                    99.9%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Uptime Achieved
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border">
                <blockquote className="text-muted-foreground italic">
                  "Ibrahim consistently delivers clean, well-documented code
                  that just works. His systems are built to last."
                </blockquote>
                <div className="mt-4 text-sm font-medium text-foreground">
                  — Former Engineering Director
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
