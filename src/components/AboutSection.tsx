import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, Server } from "lucide-react";

const AboutSection = () => {
  const skills = {
    backend: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis", "Celery"],
    ai: ["LangChain", "OpenAI API", "Hugging Face", "RAG", "Prompt Engineering"],
    devops: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
    frontend: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  };

  const skillCategories = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Building scalable APIs and microservices with Django",
      skills: skills.backend,
    },
    {
      icon: Brain,
      title: "Generative AI",
      description: "Integrating LLMs and AI capabilities into applications",
      skills: skills.ai,
    },
    // {
    //   icon: Database,
    //   title: "DevOps & Cloud",
    //   description: "Deploying and managing production infrastructure",
    //   skills: skills.devops,
    // },
    // {
    //   icon: Code2,
    //   title: "Frontend Integration",
    //   description: "Creating seamless full-stack experiences",
    //   skills: skills.frontend,
    // },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate backend developer with expertise in Django and a growing 
              focus on generative AI. With years of experience building robust web 
              applications, I specialize in creating clean, maintainable code that scales.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey into AI started with a fascination for how machine learning 
              could enhance traditional web applications. Today, I combine my backend 
              expertise with cutting-edge AI technologies to build intelligent systems 
              that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new AI research papers, 
              contributing to open-source projects, or sharing knowledge through 
              technical writing and mentorship.
            </p>
            
            <div className="pt-4">
              <h3 className="text-foreground font-semibold mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span> Based in Kanpur, India
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span> Open to remote opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span> Passionate about clean code & DX
                </li>
              </ul>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                className="group hover:shadow-lg transition-shadow duration-300 bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <category.icon size={20} />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-xs mb-4">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
