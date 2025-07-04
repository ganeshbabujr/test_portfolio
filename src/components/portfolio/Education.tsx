import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2014 - 2018",
      gpa: "3.8/4.0",
      description: "Focused on software engineering, algorithms, and data structures. Completed senior capstone project on distributed systems.",
      coursework: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "Machine Learning", "Computer Networks"],
      achievements: [
        "Dean's List for 6 semesters",
        "Computer Science Society Vice President",
        "Hackathon Winner - Best Innovation Award"
      ]
    },
    {
      degree: "Master of Science in Software Engineering",
      institution: "MIT",
      location: "Cambridge, MA",
      period: "2018 - 2020",
      gpa: "3.9/4.0",
      description: "Advanced studies in software architecture, distributed systems, and engineering management. Thesis on scalable microservices architecture.",
      coursework: ["Advanced Algorithms", "Distributed Systems", "Software Architecture", "Project Management", "AI & ML", "Cybersecurity"],
      achievements: [
        "Graduate Research Assistant",
        "Published 2 research papers",
        "Outstanding Graduate Student Award"
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-12345"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-DEV-67890"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-54321"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2021",
      credentialId: "MDB-DEV-98765"
    }
  ];

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic background and professional certifications that have shaped my technical expertise.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Academic Background</h3>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <Card key={edu.degree} className="p-6 shadow-card hover:shadow-professional transition-smooth animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="h-5 w-5 text-primary mr-2" />
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    </div>
                    <div className="text-lg font-medium text-muted-foreground mb-2">{edu.institution}</div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:text-right">
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      GPA: {edu.gpa}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Achievements:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <Award className="h-3 w-3 text-primary mr-2 mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={cert.title} className="p-6 shadow-card hover:shadow-professional transition-smooth animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{cert.date}</Badge>
                </div>
                <div className="text-xs text-muted-foreground">
                  Credential ID: {cert.credentialId}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;