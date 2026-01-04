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
  primary: "border-primary/30 hover:border-primary hover:glow-primary text-primary",
  secondary: "border-secondary/30 hover:border-secondary hover:glow-secondary text-secondary",
  accent: "border-accent/30 hover:border-accent hover:glow-accent text-accent",
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
          Open to AI/ML internships, entry-level roles, and research opportunities
        </p>
        
        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-12">
          <MapPin className="w-4 h-4" />
          <span>India</span>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const colors = colorClasses[item.color as keyof typeof colorClasses];

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`group p-6 rounded-lg border bg-card/50 transition-all duration-300 ${colors}`}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="w-8 h-8 mb-4" />
                  <span className="font-semibold mb-1">{item.label}</span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
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
            className="glow-primary bg-primary text-primary-foreground hover:bg-primary/90"
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
