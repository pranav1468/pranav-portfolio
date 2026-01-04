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
  primary: "border-primary text-primary",
  secondary: "border-secondary text-secondary",
  accent: "border-accent text-accent",
};

const LearningJourney = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
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
    <section id="journey" className="py-20 px-4 bg-muted/20" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Learning <span className="text-gradient">Journey</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A fundamentals-first approach to mastering AI/ML
        </p>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <div className="space-y-12">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isVisible = visibleSteps.includes(index);
              const colors = colorClasses[step.color as keyof typeof colorClasses];

              return (
                <div
                  key={step.title}
                  data-step={index}
                  className={`relative flex items-start gap-6 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Step number node */}
                  <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-background border-2 ${colors} flex items-center justify-center`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-muted-foreground">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">{step.description}</p>
                    <p className="text-sm text-muted-foreground/70 italic">{step.detail}</p>
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
