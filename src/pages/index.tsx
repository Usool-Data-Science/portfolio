import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Principles from "@/components/Principles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollSection from "@/components/ScrollSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ScrollSection>
          <About />
        </ScrollSection>
        <ScrollSection delay={100}>
          <Projects />
        </ScrollSection>
        <ScrollSection delay={100}>
          <Writing />
        </ScrollSection>
        <ScrollSection delay={100}>
          <Skills />
        </ScrollSection>
        <ScrollSection delay={100}>
          <Experience />
        </ScrollSection>
        <ScrollSection delay={100}>
          <Principles />
        </ScrollSection>
        <ScrollSection delay={100}>
          <Contact />
        </ScrollSection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
