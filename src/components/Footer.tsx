import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground">Sarah Firyal</h3>
            <p className="text-muted-foreground text-sm mt-1">Software Engineer</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:srfiryal@gmail.com"
              className="p-2 rounded-lg bg-background text-muted-foreground hover:text-primary hover:shadow-custom-md transition-smooth"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sarahfiryal/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background text-muted-foreground hover:text-primary hover:shadow-custom-md transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/srfiryal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background text-muted-foreground hover:text-primary hover:shadow-custom-md transition-smooth"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sarah Firyal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
