import { Smartphone, Layout, Server } from "lucide-react";
import { EXPERTISES } from "@/data/data";

const iconMap = {
  Smartphone,
  Layout,
  Server,
};

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in building robust applications across multiple
            platforms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EXPERTISES.map((area, index) => {
            const IconComponent = iconMap[area.icon as keyof typeof iconMap];
            return (
              <div
                key={area.id}
                className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-custom-lg transition-smooth animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-smooth">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
