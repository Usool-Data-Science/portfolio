import { Shield, Zap, Code2, TestTube, Brain } from "lucide-react";

const principles = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "I design systems with clear boundaries, dependency inversion, and separation of concerns. Code should be readable, testable, and maintainable.",
  },
  {
    icon: Zap,
    title: "Scalability First",
    description:
      "Building for scale from day one—horizontal scaling, caching strategies, async processing, and performance monitoring built into the architecture.",
  },
  {
    icon: Shield,
    title: "Security by Design",
    description:
      "Security isn't an afterthought. Input validation, proper authentication, least-privilege access, and secure data handling are non-negotiable.",
  },
  {
    icon: TestTube,
    title: "Comprehensive Testing",
    description:
      "Unit tests, integration tests, and end-to-end tests. I aim for meaningful coverage that catches real bugs, not just line coverage metrics.",
  },
  {
    icon: Brain,
    title: "Responsible AI",
    description:
      "When building AI features, I focus on reliability, graceful degradation, cost control, and being transparent about AI limitations.",
  },
];

const Principles = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
              How I Work
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
              Engineering principles
            </h3>
            <p className="text-lg text-muted-foreground">
              The core values that guide my approach to building software
              systems.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="p-6 bg-card rounded-xl border border-border space-y-4 group hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {principle.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;
