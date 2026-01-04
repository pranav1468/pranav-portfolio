import { useState } from "react";
import { GraduationCap, Code, Brain, Lightbulb } from "lucide-react";

const timelineItems = [
  {
    icon: GraduationCap,
    title: "Computer Science Background",
    period: "Foundation",
    description: "Built strong programming fundamentals and problem-solving skills",
    detail: "Focused on algorithms, data structures, and mathematics — the building blocks for ML",
  },
  {
    icon: Code,
    title: "CDAC PGDAI Program",
    period: "Specialization",
    description: "Intensive AI/ML training with hands-on project work",
    detail: "Covered supervised/unsupervised learning, neural networks, and deployment pipelines",
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

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A fundamentals-first approach to AI, emphasizing understanding over shortcuts
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-8">
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
                    <div className={`p-6 rounded-lg border border-border bg-card/50 transition-all duration-300 ${isHovered ? "border-primary/50 glow-primary" : ""}`}>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {item.period}
                      </span>
                      <h3 className="text-xl font-semibold mt-2 mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                      
                      {/* Hover detail */}
                      <div className={`overflow-hidden transition-all duration-300 ${isHovered ? "max-h-20 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="text-sm text-accent">{item.detail}</p>
                      </div>
                    </div>
                  </div>

                  {/* Icon node */}
                  <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 flex items-center justify-center transition-all duration-300 ${isHovered ? "border-primary scale-110" : "border-muted"}`}>
                    <Icon className={`w-5 h-5 transition-colors ${isHovered ? "text-primary" : "text-muted-foreground"}`} />
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
