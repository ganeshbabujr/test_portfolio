import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary/20 py-8 text-center">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground">
            © 2024 Software Engineer Portfolio. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Let's build something amazing together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;