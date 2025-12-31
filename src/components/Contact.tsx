import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider">
              Contact
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
              Let's work together
            </h3>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Have a project in mind or want to discuss a potential
              collaboration? I'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-foreground">
                  Get in touch
                </h4>
                <div className="space-y-4">
                  <a
                    href="mailto:adeshinaibrahim10@gmail.com"
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium text-foreground">
                        adeshinaibrahim10@gmail.com
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://github.com/Usool-Data-Science"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        GitHub
                      </div>
                      <div className="font-medium text-foreground">
                        github.com/Usool-Data-Science
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/adeshina-software-engineer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/20 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        LinkedIn
                      </div>
                      <div className="font-medium text-foreground">
                        linkedin.com/in/adeshina-software-engineer
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl border border-border p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
