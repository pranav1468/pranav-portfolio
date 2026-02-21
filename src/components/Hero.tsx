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
    href: "mailto:pranav.baghare@email.com",
  },
];

const exploringItems = [
  "Siamese U-Net",
  "DenseNet121",
  "Streamlit Deployment",
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

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Main container */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto w-full">
          
          {/* TWO-COLUMN LAYOUT: Text left, Photo right */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            
            {/* LEFT COLUMN: Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Name - Largest text */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                <span className="text-gradient">Pranav Baghare</span>
              </h1>

              {/* Role / Focus text */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
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
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Building intelligent systems through fundamentals-first learning, rigorous experimentation, and real-world problem solving.
              </p>

              {/* META ROW: Location + Availability */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground text-sm mb-8">
                <MapPin className="w-4 h-4" />
                <span>India</span>
                <span className="mx-2 text-border">•</span>
                <span className="text-primary/80">Open to AI/ML internships & entry-level roles</span>
              </div>

              {/* PRIMARY CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button 
                  onClick={handleViewProjects}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-5 text-base hover-glow-primary hover:-translate-y-0.5 transition-all duration-200"
                >
                  View Projects
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-border text-foreground hover:bg-primary/10 hover:border-primary px-6 py-5 text-base hover:-translate-y-0.5 transition-all duration-200"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <FileText className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>

            {/* RIGHT COLUMN: Profile Photo */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-border/50 bg-card/50 shadow-xl">
                  <img
                    src="/placeholder.svg"
                    alt="Pranav Baghare"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Subtle glow effect behind photo */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl opacity-50 rounded-2xl" />
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS SECTION */}
          <div className={`flex items-center justify-center gap-4 mb-10 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-card/30 hover:border-primary/50 hover:bg-primary/5 hover-glow-primary hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
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

          {/* SINGLE DOWN ARROW */}
          <div className={`text-center mb-10 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <button 
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>

          {/* CURRENTLY EXPLORING */}
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
      </div>
    </section>
  );
};

export default Hero;
