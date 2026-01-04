import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, MapPin, Github, Linkedin, Mail } from "lucide-react";

const dynamicTexts = ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"];

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToJourney = () => {
    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-32 right-20 w-24 h-24 border border-secondary/20 rotate-45 animate-float opacity-30" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-accent/20 rounded-lg animate-float opacity-30" style={{ animationDelay: "4s" }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
        <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="text-gradient">Pranav Baghare</span>
            </h1>

            {/* Value proposition */}
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
              AI/ML Engineer focused on fundamentals, experimentation, and real-world systems
            </p>

            {/* Dynamic headline */}
            <h2 className="text-2xl md:text-4xl font-semibold mb-8">
              Building Intelligent Systems with{" "}
              <span className="text-primary relative">
                {dynamicTexts[currentTextIndex]}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50" />
              </span>
            </h2>

            {/* Location & Availability */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-10">
              <MapPin className="w-4 h-4" />
              <span>India</span>
              <span className="mx-2">•</span>
              <span className="text-primary">Open to AI/ML internships & entry-level roles</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              <Button 
                onClick={scrollToProjects}
                className="glow-primary bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
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
              
              <Button 
                variant="ghost" 
                onClick={scrollToJourney}
                className="text-muted-foreground hover:text-foreground px-8 py-6 text-lg"
              >
                My AI Journey
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/pranavbaghare"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/pranavbaghare"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:pranav@example.com"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
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
                {/* Uncomment and use when you have an actual image:
                <img 
                  src="/profile.jpg" 
                  alt="Pranav Baghare"
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
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
