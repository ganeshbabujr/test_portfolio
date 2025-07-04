import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Smartphone, Server, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend Development", level: 95, color: "primary" },
    { name: "Backend Development", level: 88, color: "accent" },
    { name: "Database Design", level: 85, color: "primary" },
    { name: "DevOps & Cloud", level: 80, color: "accent" },
    { name: "Mobile Development", level: 78, color: "primary" },
    { name: "AI/ML Integration", level: 82, color: "accent" }
  ];

  const highlights = [
    { icon: "🚀", title: "5+ Years Experience", desc: "Building scalable solutions" },
    { icon: "⚡", title: "100+ Projects", desc: "Successfully delivered" },
    { icon: "🎯", title: "Tech Leader", desc: "Leading development teams" },
    { icon: "🌟", title: "Innovation Focus", desc: "Cutting-edge technologies" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="animate-fade-up text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate software engineer with expertise in modern web technologies, 
            cloud architecture, and innovative problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Description */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Started my journey in software development over 5 years ago, specializing in 
                  full-stack web development and modern JavaScript frameworks.
                </p>
                <p>
                  I'm passionate about creating efficient, scalable solutions that solve real-world 
                  problems. My expertise spans across frontend frameworks, backend systems, 
                  cloud infrastructure, and emerging technologies like AI/ML.
                </p>
                <p>
                  Currently focused on building innovative products that leverage cutting-edge 
                  technologies to deliver exceptional user experiences.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="glass-card p-6 rounded-xl text-center hover:shadow-glow transition-elastic">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Skills */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-primary">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out animate-glow`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Always learning and exploring new technologies to stay at the forefront of innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;