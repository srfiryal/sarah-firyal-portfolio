import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 gradient-subtle">
      <div className="container mx-auto py-20">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="order-2 md:order-1 md:col-span-2 animate-fade-up">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Sarah Firyal
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-6">
              Software Engineer
            </p>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Passionate about building exceptional digital experiences.
              Specialized in mobile development, front-end engineering, and
              back-end solutions. I transform ideas into elegant, functional
              applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="hero" size="lg" onClick={scrollToProjects}>
                View Projects
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:srfiryal@gmail.com">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/sarahfiryal/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/srfiryal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-smooth"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-fade-up animation-delay-200">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-custom-xl">
                <img
                  src="/profile.png"
                  alt="Sarah Firyal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-hero rounded-2xl shadow-glow opacity-80" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-xl opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
