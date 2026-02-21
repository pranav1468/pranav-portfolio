import { useState } from "react";
import { GraduationCap, Code, Brain, Lightbulb, MapPin, Mail } from "lucide-react";

const timelineItems = [
  {
    icon: GraduationCap,
    title: "B.Tech Computer Science",
    period: "Oct 2020 – Oct 2024",
    description: "Bachelor of Technology at SVVV, Indore",
    detail: "Focused on algorithms, data structures, and mathematics — the building blocks for ML",
  },
  {
    icon: Code,
    title: "CDAC PG-DAI Program",
    period: "Aug 2025 – Feb 2026",
    description: "Post Graduate Diploma in AI at CDAC, Noida",
    detail: "Covered supervised/unsupervised learning, DNNs, CNNs, RNNs, GANs, NLP, LSTM, and Transformers",
  },
  {
    icon: Brain,
    title: "Deep Learning Focus",
    period: "Current",
    description: "Specialized in computer vision and deep learning architectures",
    detail: "Working with CNNs, object detection models, and image segmentation techniques",
  },
  {
    icon: Lightbulb,
    title: "Real-World Application",
    period: "Ongoing",
    description: "Building and evaluating models for practical problems",
    detail: "Emphasis on experimentation, error analysis, and understanding model behavior",
  },
];

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          A bit about <span className="text-gradient">me</span>
        </h2>
        
        {/* About Card Box - Interactive with hover effects */}
        <div 
          className={`max-w-3xl mx-auto mb-20 p-8 md:p-10 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 ${
            isCardHovered ? "hover-glow-primary border-primary/30 -translate-y-1" : ""
          }`}
          onMouseEnter={() => setIsCardHovered(true)}
          onMouseLeave={() => setIsCardHovered(false)}
        >
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm an AI/ML engineer with a computer science background, currently focused on 
              building and understanding machine learning systems. My approach prioritizes 
              fundamentals over shortcuts — understanding why models work, not just how to 
              make them run.
            </p>
            <p>
              After completing my CDAC PGDAI specialization, I've been working on computer 
              vision projects including object detection and image segmentation. I spend 
              significant time on error analysis and model evaluation, believing that 
              understanding failures is as important as celebrating successes.
            </p>
            <p>
              I learn by building. Each project is an opportunity to deepen my understanding 
              of the underlying mathematics, experiment with different approaches, and develop 
              intuition for what works in practice.
            </p>
          </div>
          
          {/* Location and contact as pill elements */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-muted-foreground hover:bg-muted hover:border-border transition-all duration-200 cursor-default">
              <MapPin className="w-4 h-4 text-primary" />
              Indore, India
            </span>
            <a 
              href="mailto:pranav.baghare@email.com" 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-muted-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-foreground transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-primary" />
              pranav.baghare@email.com
            </a>
          </div>
        </div>

        {/* My Journey Timeline */}
        <h3 className="text-2xl font-semibold text-center mb-12 text-foreground">
          My Journey
        </h3>
        
        <div className="relative">
          {/* Connecting line */}
          <div 
            className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transition-opacity duration-300 ${
              hoveredIndex !== null ? "opacity-50" : "opacity-30"
            }`} 
          />

          <div className="space-y-10">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={item.title}
                  className={`relative flex items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Content card */}
                  <div className={`flex-1 ml-20 md:ml-0 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div 
                      className={`p-6 rounded-xl border bg-card/50 transition-all duration-300 ${
                        isHovered 
                          ? "border-primary/50 hover-glow-primary -translate-y-1" 
                          : "border-border/50"
                      }`}
                    >
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {item.period}
                      </span>
                      <h4 className="text-xl font-semibold mt-2 mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                      
                      {/* Hover detail */}
                      <div className={`overflow-hidden transition-all duration-300 ${isHovered ? "max-h-20 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="text-sm text-accent">{item.detail}</p>
                      </div>
                    </div>
                  </div>

                  {/* Icon node */}
                  <div 
                    className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 flex items-center justify-center transition-all duration-300 ${
                      isHovered ? "border-primary scale-110 shadow-lg shadow-primary/20" : "border-muted"
                    }`}
                  >
                    <Icon className={`w-5 h-5 transition-colors duration-200 ${isHovered ? "text-primary" : "text-muted-foreground"}`} />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
