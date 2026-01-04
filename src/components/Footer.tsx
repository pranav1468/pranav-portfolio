import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Name and copyright */}
          <div className="text-center md:text-left">
            <p className="font-semibold text-gradient">Pranav Baghare</p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:pranav.baghare@email.com"
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/pranavbaghare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/pranavbaghare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Last updated */}
          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground">
              Last updated: Jan 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
