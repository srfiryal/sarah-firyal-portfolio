import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/data/data";
import { ArrowRight } from "lucide-react";

type ExpertiseFilter = "all" | "mobile" | "frontend" | "backend";

const filters: { label: string; value: ExpertiseFilter }[] = [
  { label: "All", value: "all" },
  { label: "Mobile", value: "mobile" },
  { label: "Front-End", value: "frontend" },
  { label: "Back-End", value: "backend" },
];

const getExpertiseFromRoles = (roles: string[]): ExpertiseFilter[] => {
  const expertise: ExpertiseFilter[] = [];

  const roleString = roles.join(" ").toLowerCase();

  if (roleString.includes("mobile")) expertise.push("mobile");
  if (
    roleString.includes("front-end") ||
    roleString.includes("frontend") ||
    roleString.includes("ui/ux")
  )
    expertise.push("frontend");
  if (
    roleString.includes("back-end") ||
    roleString.includes("backend") ||
    roleString.includes("full-stack")
  )
    expertise.push("backend");

  return expertise;
};

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<ExpertiseFilter>("all");

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) =>
          getExpertiseFromRoles(project.roles).includes(activeFilter)
        );

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on throughout my career
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-up animation-delay-100">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "secondary"}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
              className="rounded-full"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className="group block animate-fade-up"
              style={{ animationDelay: `${(index % 6) * 100}ms` }}
            >
              <article className="h-full rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-custom-lg transition-smooth">
                {/* Project Image */}
                <div className="aspect-video bg-secondary overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  {/* <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/30 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/30">
                      {project.title.charAt(0)}
                    </span>
                  </div> */}
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium rounded bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded bg-secondary text-muted-foreground">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View More */}
                  <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-smooth">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-smooth" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
