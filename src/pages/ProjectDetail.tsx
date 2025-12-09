import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Circle } from "lucide-react";
import { PROJECTS } from "@/data/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Project Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/"
              className="inline-flex items-center text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <div className="mb-8 animate-fade-up">
            <Link
              to="/#projects"
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>

          {/* Hero Section - Two Column Layout */}
          <section className="mb-16 animate-fade-up animation-delay-100">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Title, Description, Tags */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags - Pill Style */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 text-sm font-medium rounded-full border border-border bg-background text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Project Image */}
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-secondary border border-border shadow-custom-lg">
                <img
                  src={project.image}
                  alt={project.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                {/* <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/30 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/30">
                    {project.title.charAt(0)}
                  </span>
                </div> */}
              </div>
            </div>
          </section>

          {/* Three Column Grid: Features, Technologies, Role */}
          <section className="animate-fade-up animation-delay-200">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Key Features */}
              {project.mainFeatures && (
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {project.mainFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Circle className="w-2 h-2 fill-muted-foreground text-muted-foreground mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Technologies */}
              {project.keyTechnologies && (
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Key Technologies
                  </h2>
                  <ul className="space-y-3">
                    {project.keyTechnologies.map((tech, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Circle className="w-2 h-2 fill-muted-foreground text-muted-foreground mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* My Role */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  My Role
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.roles.join(", ")} responsible for development,
                  implementation, and ensuring quality deliverables.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
