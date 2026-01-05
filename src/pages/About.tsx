import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Mail, GraduationCap, Briefcase, Target, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/layout/SEO";

const About = () => {
  return (
    <>
      <SEO 
        title="About - Pranav Baghare | AI/ML Engineer"
        description="Learn more about Pranav Baghare's background, education, and career goals in AI and Machine Learning."
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-3xl mx-auto">
            
            {/* Back link */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-12">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Mumbai, India</span>
              </div>
              <span className="text-border">•</span>
              <a 
                href="mailto:pranav@example.com" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>pranav@example.com</span>
              </a>
            </div>

            {/* Introduction */}
            <section className="mb-16">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm an AI/ML engineer with a computer science background, currently focused on 
                building and understanding machine learning systems. My approach prioritizes 
                fundamentals over shortcuts — understanding why models work, not just how to 
                make them run.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                After completing my CDAC PGDAI specialization, I've been working on computer 
                vision projects including object detection and image segmentation. I spend 
                significant time on error analysis and model evaluation, believing that 
                understanding failures is as important as celebrating successes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I learn by building. Each project is an opportunity to deepen my understanding 
                of the underlying mathematics, experiment with different approaches, and develop 
                intuition for what works in practice.
              </p>
            </section>

            {/* Education */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 hover-glow-primary transition-all duration-200">
                  <h3 className="font-semibold text-lg mb-1">PGDAI - Post Graduate Diploma in Artificial Intelligence</h3>
                  <p className="text-primary text-sm mb-2">CDAC (Centre for Development of Advanced Computing)</p>
                  <p className="text-muted-foreground text-sm">2023 - 2024</p>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    Specialized in machine learning, deep learning, and computer vision. Completed multiple 
                    hands-on projects including object detection and image classification systems.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 hover-glow-primary transition-all duration-200">
                  <h3 className="font-semibold text-lg mb-1">Bachelor of Engineering - Computer Science</h3>
                  <p className="text-primary text-sm mb-2">University of Mumbai</p>
                  <p className="text-muted-foreground text-sm">2019 - 2023</p>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    Strong foundation in algorithms, data structures, and software engineering principles.
                  </p>
                </div>
              </div>
            </section>

            {/* Technical Focus */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Technical Focus</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 hover-glow-primary transition-all duration-200">
                  <h3 className="font-semibold mb-2">Computer Vision</h3>
                  <p className="text-muted-foreground text-sm">Object detection, image segmentation, and classification using CNNs and modern architectures.</p>
                </div>
                <div className="p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 hover-glow-primary transition-all duration-200">
                  <h3 className="font-semibold mb-2">Deep Learning</h3>
                  <p className="text-muted-foreground text-sm">Neural network architectures, transfer learning, and model optimization techniques.</p>
                </div>
                <div className="p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 hover-glow-primary transition-all duration-200">
                  <h3 className="font-semibold mb-2">Model Evaluation</h3>
                  <p className="text-muted-foreground text-sm">Error analysis, performance metrics, and systematic approaches to debugging models.</p>
                </div>
                <div className="p-5 rounded-xl border border-border/50 bg-card/30 hover:border-primary/30 hover-glow-primary transition-all duration-200">
                  <h3 className="font-semibold mb-2">ML Engineering</h3>
                  <p className="text-muted-foreground text-sm">Data pipelines, experiment tracking, and reproducible machine learning workflows.</p>
                </div>
              </div>
            </section>

            {/* Career Goals */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Career Goals</h2>
              </div>
              
              <div className="p-6 rounded-xl border border-border/50 bg-card/30">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm actively seeking AI/ML internships and entry-level positions where I can contribute 
                  to real-world machine learning projects while continuing to grow as an engineer.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My immediate focus is on computer vision applications, but I'm equally interested in 
                  opportunities that involve NLP, time-series analysis, or general ML engineering roles.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I value teams that prioritize understanding over speed, maintain high standards for 
                  code quality and reproducibility, and foster continuous learning.
                </p>
              </div>
            </section>

            {/* Current Work */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">What I'm Working On</h2>
              </div>
              
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Exploring EfficientNetV2 for satellite image classification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Building systematic error analysis frameworks for computer vision models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Studying time-series approaches for temporal satellite data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Contributing to open-source ML tools and documentation</span>
                </li>
              </ul>
            </section>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;