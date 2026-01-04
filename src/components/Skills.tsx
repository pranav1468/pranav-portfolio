import { useState } from "react";
import { Code2, Brain, Eye, MessageSquare, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Core",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "Python", usage: "Primary language for all ML work" },
      { name: "NumPy", usage: "Numerical computing and array operations" },
      { name: "Pandas", usage: "Data manipulation and analysis" },
    ],
  },
  {
    title: "ML/DL",
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
      { name: "Kaggle", usage: "Competitions and datasets" },
    ],
  },
];

const colorClasses = {
  primary: {
    border: "border-primary/30 hover:border-primary",
    bg: "bg-primary/5 hover:bg-primary/10",
    text: "text-primary",
    glow: "hover:glow-primary",
  },
  secondary: {
    border: "border-secondary/30 hover:border-secondary",
    bg: "bg-secondary/5 hover:bg-secondary/10",
    text: "text-secondary",
    glow: "hover:glow-secondary",
  },
  accent: {
    border: "border-accent/30 hover:border-accent",
    bg: "bg-accent/5 hover:bg-accent/10",
    text: "text-accent",
    glow: "hover:glow-accent",
  },
};

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Tools and technologies I use to build intelligent systems
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <div
                key={category.title}
                className={`p-6 rounded-lg border ${colors.border} ${colors.bg} ${colors.glow} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between p-3 rounded-md bg-background/50 border border-border/50 cursor-default transition-colors hover:border-border">
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      
                      {/* Tooltip */}
                      <div
                        className={`absolute left-0 right-0 mt-2 p-3 rounded-md bg-popover border border-border text-sm text-muted-foreground z-10 transition-all duration-200 ${
                          hoveredSkill === skill.name
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                      >
                        {skill.usage}
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
