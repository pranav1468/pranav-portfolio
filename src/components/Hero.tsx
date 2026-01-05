import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, MapPin, Github, Linkedin, Mail } from "lucide-react";

const dynamicTexts = ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"];

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
    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
        {/* PRIMARY ZONE - Above the fold */}
        <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-gradient">Pranav Baghare</span>
            </h1>

            {/* Value proposition */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              AI/ML Engineer focused on fundamentals, experimentation, and real-world systems
            </p>

            {/* Dynamic headline */}
            <h2 className="text-2xl md:text-4xl font-semibold mb-12">
              Building Intelligent Systems with{" "}
              <span className="text-primary relative">
                {dynamicTexts[currentTextIndex]}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50" />
              </span>
            </h2>

            {/* Primary CTAs - Only two */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button 
                onClick={handleViewProjects}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg hover-glow-primary transition-shadow"
              >
                View Projects
              </Button>
              
              <Button 
                variant="outline" 
                className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg"
                asChild
              >
                <a href="/resume.pdf" download>
                  <FileText className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0">
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/50 transition-all duration-500">
                {/* Placeholder - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                  <span className="text-6xl font-bold text-muted-foreground/30">PB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECONDARY ZONE - Below the fold */}
        <div className={`mt-20 md:mt-28 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Location & Availability */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin className="w-4 h-4" />
            <span>India</span>
            <span className="mx-2">•</span>
            <span className="text-primary">Open to AI/ML internships & entry-level roles</span>
          </div>

          {/* Social links - Compact icon cards with hover glow */}
          <div className="flex items-center justify-center gap-6 mb-10">
            <a
              href="https://github.com/pranavbaghare"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 p-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary/50 hover:bg-primary/5 hover-glow-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/pranavbaghare"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 p-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary/50 hover:bg-primary/5 hover-glow-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
            </a>
            <a
              href="mailto:pranav@example.com"
              className="group flex items-center gap-2 p-3 rounded-lg border border-border/50 bg-card/50 hover:border-primary/50 hover:bg-primary/5 hover-glow-primary transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Email</span>
            </a>
          </div>

          {/* My AI Journey anchor */}
          <div className="flex justify-center">
            <Button 
              variant="ghost" 
              onClick={scrollToJourney}
              className="text-muted-foreground hover:text-foreground"
            >
              My AI Journey
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
