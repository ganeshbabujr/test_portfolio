import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading a team of 5 developers in building scalable web applications. Implemented microservices architecture that improved system performance by 40%. Mentored junior developers and established coding standards.",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "TypeScript"],
      achievements: [
        "Reduced application load time by 60% through optimization",
        "Led migration from monolith to microservices",
        "Implemented CI/CD pipeline reducing deployment time by 80%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "InnovateLabs",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client applications using modern web technologies. Collaborated with design teams to implement pixel-perfect UI components. Built RESTful APIs and integrated third-party services.",
      technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Socket.io", "JavaScript"],
      achievements: [
        "Delivered 15+ successful projects for various clients",
        "Improved code coverage from 60% to 90%",
        "Reduced bug reports by 50% through better testing practices"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2019 - 2020",
      description: "Focused on creating responsive and accessible user interfaces. Worked closely with UX designers to translate wireframes into interactive components. Optimized application performance and user experience.",
      technologies: ["React", "JavaScript", "Sass", "Webpack", "Jest", "Cypress"],
      achievements: [
        "Increased user engagement by 35% through UI improvements",
        "Implemented accessibility standards (WCAG 2.1)",
        "Built reusable component library used across 3 products"
      ]
    },
    {
      title: "Junior Developer",
      company: "WebDev Agency",
      location: "Remote",
      period: "2018 - 2019",
      description: "Started my professional journey building websites and small applications. Learned best practices for code organization, version control, and collaborative development. Contributed to various client projects.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
      achievements: [
        "Completed 20+ website projects",
        "Learned modern development workflows",
        "Gained experience with client communication"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey through various roles, contributing to innovative projects and growing as a developer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-border"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
              
              <Card className="ml-16 mb-8 p-6 shadow-card hover:shadow-professional transition-smooth animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:text-right">
                    <div className="flex items-center text-muted-foreground mb-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;