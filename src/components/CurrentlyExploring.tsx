import { Sparkles } from "lucide-react";

const exploringItems = [
  "EfficientNetV2",
  "Satellite time-series",
  "Error analysis",
];

const CurrentlyExploring = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Currently Exploring</span>
          </div>
          
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {exploringItems.map((item, index) => (
              <span
                key={item}
                className="px-4 py-1.5 text-sm font-medium rounded-full border border-accent/30 bg-accent/5 text-accent hover:bg-accent/10 transition-colors cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyExploring;
