import { useState } from "react";
import { Code2, Brain, Eye, MessageSquare, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "Python", usage: "Primary language for all ML work" },
      { name: "SQL", usage: "Database queries and data extraction" },
      { name: "JavaScript", usage: "Web development and visualization" },
    ],
  },
  {
    title: "Frameworks",
    icon: Brain,
    color: "secondary",
    skills: [
      { name: "TensorFlow", usage: "Building and training neural networks" },
      { name: "PyTorch", usage: "Research and experimentation" },
      { name: "Scikit-Learn", usage: "Classical ML algorithms and pipelines" },
    ],
  },
  {
    title: "Computer Vision",
    icon: Eye,
    color: "accent",
    skills: [
      { name: "OpenCV", usage: "Image processing and manipulation" },
      { name: "YOLO", usage: "Real-time object detection" },
      { name: "PIL/Pillow", usage: "Image handling and augmentation" },
    ],
  },
  {
    title: "NLP",
    icon: MessageSquare,
    color: "primary",
    skills: [
      { name: "Transformers", usage: "Pre-trained language models" },
      { name: "NLTK", usage: "Text processing and analysis" },
      { name: "spaCy", usage: "Industrial-strength NLP" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "secondary",
    skills: [
      { name: "Git", usage: "Version control and collaboration" },
      { name: "Docker", usage: "Containerization and deployment" },
      { name: "Jupyter", usage: "Interactive notebooks for experiments" },
    ],
  },
];

const colorClasses = {
  primary: {
    border: "border-primary/30 hover:border-primary",
    bg: "bg-primary/5",
    text: "text-primary",
    glow: "hover-glow-primary",
    pill: "hover:bg-primary/10 hover:border-primary/50",
  },
  secondary: {
    border: "border-secondary/30 hover:border-secondary",
    bg: "bg-secondary/5",
    text: "text-secondary",
    glow: "hover-glow-secondary",
    pill: "hover:bg-secondary/10 hover:border-secondary/50",
  },
  accent: {
    border: "border-accent/30 hover:border-accent",
    bg: "bg-accent/5",
    text: "text-accent",
    glow: "hover-glow-accent",
    pill: "hover:bg-accent/10 hover:border-accent/50",
  },
};

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 md:py-32 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Tools and technologies I use to build intelligent systems
        </p>

        {/* Larger cards with more spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            const isHovered = hoveredCard === category.title;

            return (
              <div
                key={category.title}
                className={`p-8 rounded-2xl border bg-card/50 transition-all duration-300 ${colors.border} ${
                  isHovered ? `${colors.glow} -translate-y-1` : ""
                }`}
                onMouseEnter={() => setHoveredCard(category.title)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${colors.bg} transition-transform duration-200 ${isHovered ? "scale-110" : ""}`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Skill pills with breathing room */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <span 
                        className={`inline-block px-4 py-2 rounded-lg bg-muted/50 border border-border/50 text-sm font-medium cursor-pointer transition-all duration-200 ${colors.pill}`}
                      >
                        {skill.name}
                      </span>
                      
                      {/* Tooltip on hover */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 rounded-lg bg-popover border border-border text-xs text-muted-foreground whitespace-nowrap z-20 transition-all duration-200 ${
                          hoveredSkill === skill.name
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2 pointer-events-none"
                        }`}
                      >
                        {skill.usage}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-popover border-b border-r border-border rotate-45 -mt-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
