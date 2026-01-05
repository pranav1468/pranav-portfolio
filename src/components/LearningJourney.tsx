import { useEffect, useRef, useState } from "react";
import { Calculator, Cpu, Wrench, FlaskConical } from "lucide-react";

const journeySteps = [
  {
    icon: Calculator,
    title: "Mathematical Foundations",
    description: "Linear Algebra, Calculus, Probability & Statistics",
    detail: "The language of machine learning — understanding the math behind the models",
    color: "primary",
  },
  {
    icon: Cpu,
    title: "ML Fundamentals",
    description: "Algorithms, Evaluation Metrics, Feature Engineering",
    detail: "Core concepts that apply to every ML problem",
    color: "secondary",
  },
  {
    icon: Wrench,
    title: "Model Building",
    description: "Neural Networks, Training, Hyperparameter Tuning",
    detail: "From architecture design to production-ready models",
    color: "accent",
  },
  {
    icon: FlaskConical,
    title: "Experimentation & Error Analysis",
    description: "Debugging Models, Ablation Studies, Iteration",
    detail: "The skill that separates good engineers from great ones",
    color: "primary",
  },
];

const colorClasses = {
  primary: {
    border: "border-primary",
    text: "text-primary",
    bg: "bg-primary/5",
    glow: "hover-glow-primary",
  },
  secondary: {
    border: "border-secondary",
    text: "text-secondary",
    bg: "bg-secondary/5",
    glow: "hover-glow-secondary",
  },
  accent: {
    border: "border-accent",
    text: "text-accent",
    bg: "bg-accent/5",
    glow: "hover-glow-accent",
  },
};

const LearningJourney = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute("data-step") || "0");
            setVisibleSteps((prev) => 
              prev.includes(stepIndex) ? prev : [...prev, stepIndex]
            );
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px" }
    );

    const stepElements = sectionRef.current?.querySelectorAll("[data-step]");
    stepElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="learning-journey" className="py-24 md:py-32 px-4 bg-muted/20" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Learning <span className="text-gradient">Journey</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A fundamentals-first approach to mastering AI/ML
        </p>

        <div className="relative">
          {/* Connecting line */}
          <div 
            className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transition-opacity duration-300 ${
              hoveredStep !== null ? "opacity-60" : "opacity-30"
            }`} 
          />

          <div className="space-y-16">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);
              const isHovered = hoveredStep === index;
              const colors = colorClasses[step.color as keyof typeof colorClasses];

              return (
                <div
                  key={step.title}
                  data-step={index}
                  className={`relative flex items-start gap-6 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Step icon node */}
                  <div 
                    className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-background border-2 ${colors.border} ${colors.text} flex items-center justify-center transition-all duration-300 ${
                      isHovered ? "scale-110 shadow-lg" : ""
                    }`}
                    style={isHovered ? { boxShadow: `0 0 20px hsl(var(--glow-${step.color}) / 0.3)` } : {}}
                  >
                    <Icon className={`w-7 h-7 transition-transform duration-200 ${isHovered ? "scale-110" : ""}`} />
                  </div>

                  {/* Content card */}
                  <div 
                    className={`flex-1 pt-2 p-6 rounded-xl border bg-card/50 transition-all duration-300 ${
                      isHovered 
                        ? `${colors.border} ${colors.glow} -translate-y-1` 
                        : "border-border/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-muted-foreground">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">{step.description}</p>
                    
                    {/* Expandable detail on hover */}
                    <div className={`overflow-hidden transition-all duration-300 ${isHovered ? "max-h-16 mt-3 opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className={`text-sm italic ${colors.text}`}>{step.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
