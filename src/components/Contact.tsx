import { useState } from "react";
import { Mail, Linkedin, Github, FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "pranav.baghare@email.com",
    href: "mailto:pranav.baghare@email.com",
    color: "primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/pranavbaghare",
    href: "https://linkedin.com/in/pranavbaghare",
    color: "secondary",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/pranavbaghare",
    href: "https://github.com/pranavbaghare",
    color: "accent",
  },
];

const colorClasses = {
  primary: {
    border: "hover:border-primary/50",
    icon: "group-hover:text-primary",
    glow: "hover-glow-primary",
  },
  secondary: {
    border: "hover:border-secondary/50",
    icon: "group-hover:text-secondary",
    glow: "hover-glow-secondary",
  },
  accent: {
    border: "hover:border-accent/50",
    icon: "group-hover:text-accent",
    glow: "hover-glow-accent",
  },
};

const Contact = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
          Open to AI/ML internships, entry-level roles, and research opportunities
        </p>
        
        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-14">
          <MapPin className="w-4 h-4" />
          <span>India</span>
        </div>

        {/* Contact cards with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const colors = colorClasses[item.color as keyof typeof colorClasses];
            const isHovered = hoveredCard === item.label;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`group p-8 rounded-2xl border border-border/50 bg-card/50 transition-all duration-300 ${colors.border} ${colors.glow} ${
                  isHovered ? "-translate-y-1" : ""
                } focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background`}
                onMouseEnter={() => setHoveredCard(item.label)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className={`w-8 h-8 mb-4 text-muted-foreground transition-colors duration-200 ${colors.icon}`} />
                  <span className="font-semibold mb-1">{item.label}</span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    {item.value}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Resume download */}
        <div className="text-center">
          <Button
            size="lg"
            className="hover-glow-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
            asChild
          >
            <a href="/resume.pdf" download>
              <FileText className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
