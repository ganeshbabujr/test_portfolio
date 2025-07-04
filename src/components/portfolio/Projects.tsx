import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Modern dashboard with real-time analytics, machine learning insights, and interactive visualizations built with React and Python.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Python", "TensorFlow", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Mobile Finance App",
      description: "Cross-platform mobile application for personal finance management with budgeting and expense tracking.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Chart.js", "Redux"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive analytics platform for social media management with data visualization and automated reporting.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Python", "Django", "D3.js", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Cloud Infrastructure Tool",
      description: "DevOps tool for managing cloud infrastructure with automated deployment and monitoring capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["Go", "Kubernetes", "AWS", "Terraform", "Grafana"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "IoT Dashboard",
      description: "Real-time IoT device monitoring dashboard with sensor data visualization and alert systems.",
      image: "/api/placeholder/600/400",
      technologies: ["Angular", "Express", "InfluxDB", "MQTT", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-30"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="animate-fade-up text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcase of innovative solutions and cutting-edge applications I've built using modern technologies.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden hover:shadow-glow transition-elastic group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground shadow-glow">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="glass-card px-3 py-1 text-sm font-medium text-primary/90 rounded-full border border-primary/20 hover:shadow-glow transition-elastic"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="professional" size="sm" className="shadow-glow hover:shadow-glow-accent transition-elastic flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="glass-card border-primary/30 hover:shadow-glow transition-elastic" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4 text-gradient">Other Notable Projects</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover:shadow-glow transition-elastic group">
              <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-primary/10 px-2 py-1 text-xs font-medium text-primary rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs text-muted-foreground">+{project.technologies.length - 3}</span>
                )}
              </div>
              
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="flex-1 hover:bg-primary/10" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-primary/10" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
