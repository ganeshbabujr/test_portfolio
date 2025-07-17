import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Sparkles, Code2, Zap } from "lucide-react";
import Background3D from "@/components/3d/Background3D";

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a downloadable CV file
    const element = document.createElement('a');
    element.href = '/cv.pdf'; // You can add a real CV file to the public folder
    element.download = 'Software-Engineer-CV.pdf';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* 3D Interactive Background */}
      <Background3D />
      
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Enhanced Floating Orbs with Modern Animations */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/25 rounded-full blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-primary opacity-20 rounded-full blur-2xl animate-glow"></div>
      
      {/* Particle Effect Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Glass Card Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto backdrop-blur-xl border border-primary/20">
          <div className="animate-fade-up text-center">
            {/* Ultra Modern Animated Title with Icons */}
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 md:h-12 md:w-12 text-primary animate-pulse mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-gradient animate-gradient bg-gradient-primary bg-clip-text text-transparent leading-tight">
                Ganesh Babu J R
              </h1>
              <Code2 className="h-8 w-8 md:h-12 md:w-12 text-accent animate-bounce ml-4" />
            </div>
            
            {/* Modern Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML'].map((tech) => (
                <span key={tech} className="glass-card px-4 py-2 text-sm font-medium text-primary/90 rounded-full border border-primary/20 hover:shadow-glow transition-elastic">
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Crafting innovative digital experiences through elegant code and cutting-edge technologies. 
              <span className="text-primary font-medium">Building tomorrow's solutions today.</span>
            </p>
            
            {/* Modern Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                variant="professional" 
                onClick={handleDownloadCV} 
                className="shadow-glow hover:shadow-glow-accent transition-elastic group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Download className="mr-3 h-5 w-5 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download CV</span>
                <Zap className="ml-2 h-4 w-4 group-hover:text-accent transition-colors relative z-10" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-card border-primary/30 text-primary hover:bg-primary/10 hover:shadow-glow transition-elastic backdrop-blur-sm group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">View Projects</span>
              </Button>
            </div>
            
            {/* Modern Social Icons */}
            <div className="flex justify-center gap-8">
              <Button 
                size="icon" 
                variant="ghost" 
                className="glass-card hover:shadow-glow-accent transition-elastic hover:scale-110 group"
              >
                <Github className="h-6 w-6 group-hover:text-primary transition-smooth" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="glass-card hover:shadow-glow-accent transition-elastic hover:scale-110 group"
              >
                <Linkedin className="h-6 w-6 group-hover:text-primary transition-smooth" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="glass-card hover:shadow-glow-accent transition-elastic hover:scale-110 group"
              >
                <Mail className="h-6 w-6 group-hover:text-primary transition-smooth" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
