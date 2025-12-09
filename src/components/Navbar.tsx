import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link
            to="/"
            className="text-xl font-bold text-foreground hover:text-primary transition-smooth"
          >
            Sarah Firyal
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            <Button variant="nav" onClick={() => scrollToSection("expertise")}>
              Expertise
            </Button>
            <Button
              variant="nav"
              onClick={() => scrollToSection("experiences")}
            >
              Experiences
            </Button>
            <Button variant="nav" onClick={() => scrollToSection("projects")}>
              Projects
            </Button>
          </div>

          {/* Contact Button - Right */}
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("contact")}>
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <Button
                variant="nav"
                className="justify-start"
                onClick={() => scrollToSection("expertise")}
              >
                Expertise
              </Button>
              <Button
                variant="nav"
                className="justify-start"
                onClick={() => scrollToSection("experiences")}
              >
                Experiences
              </Button>
              <Button
                variant="nav"
                className="justify-start"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </Button>
              <Button
                variant="nav"
                className="justify-start"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
