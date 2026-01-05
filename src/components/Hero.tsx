import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, MapPin, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const dynamicTexts = ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/pranavbaghare",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/pranavbaghare",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:pranav@example.com",
  },
];

const exploringItems = [
  "EfficientNetV2",
  "Satellite time-series",
  "Error analysis",
];

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleViewProjects = () => {
    navigate("/projects");
  };

  const scrollToJourney = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden pt-20 pb-16">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 px-4 max-w-4xl mx-auto w-full flex flex-col flex-1 justify-center">
        
        {/* PRIMARY SECTION: Name, Role, Description, CTAs */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          {/* Name - Largest text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">Pranav Baghare</span>
          </h1>

          {/* Role / Focus text */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="px-4 py-2 text-sm font-medium rounded-full border border-primary/30 bg-primary/10 text-primary">
              AI/ML Engineer
            </span>
            <span className="text-muted-foreground text-sm">
              focused on{" "}
              <span className="text-primary font-medium">
                {dynamicTexts[currentTextIndex]}
              </span>
            </span>
          </div>

          {/* Description paragraph */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems through fundamentals-first learning, rigorous experimentation, and real-world problem solving.
          </p>

          {/* Primary CTAs: View Projects + Download Resume */}
          <div className="flex flex-wrap items-center justify-center gap-5 mb-16">
            <Button 
              onClick={handleViewProjects}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg hover-glow-primary hover:-translate-y-0.5 transition-all duration-200"
            >
              View Projects
            </Button>
            
            <Button 
              variant="outline" 
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-lg hover:-translate-y-0.5 transition-all duration-200"
              asChild
            >
              <a href="/resume.pdf" download>
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* SECONDARY META SECTION: Location + Availability (below buttons) */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4" />
            <span>India</span>
            <span className="mx-2 text-border/50">•</span>
            <span className="text-primary/80">Open to AI/ML internships & entry-level roles</span>
          </div>
        </div>

        {/* SOCIAL LINKS SECTION: Separated row with pills */}
        <div className={`flex items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border/50 bg-card/30 hover:border-primary/50 hover:bg-primary/5 hover-glow-primary hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                aria-label={link.label}
              >
                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* MY JOURNEY LINK: Separate line, centered, calm text link */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <button 
            onClick={scrollToJourney}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
          >
            My Journey
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        {/* CURRENTLY EXPLORING: Bottom context section */}
        <div className={`text-center transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground/70">
              <Sparkles className="w-3.5 h-3.5 text-accent/70" />
              <span className="text-xs font-medium uppercase tracking-wider">Exploring</span>
            </div>
            
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {exploringItems.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs font-medium rounded-full border border-border/30 bg-muted/30 text-muted-foreground hover:bg-muted/50 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
      </div>
    </section>
  );
};

export default Hero;
