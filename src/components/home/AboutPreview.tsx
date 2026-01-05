import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

const AboutPreview = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          A bit about <span className="text-gradient">me</span>
        </h2>
        
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
        
        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mt-8">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Mumbai, India</span>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
