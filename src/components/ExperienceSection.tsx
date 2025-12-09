import { Briefcase } from "lucide-react";
import { EXPERIENCES } from "@/data/data";

const ExperienceSection = () => {
  return (
    <section id="experiences" className="py-20 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiences
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 last:mb-0 animate-fade-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background shadow-glow -translate-x-1 md:-translate-x-1.5 mt-1.5" />

                {/* Content */}
                <div
                  className={`ml-6 md:ml-0 md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:ml-auto"
                  }`}
                >
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-custom-md transition-smooth">
                    <div
                      className={`flex items-center gap-2 mb-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
