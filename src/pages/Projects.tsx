import { Link } from "react-router-dom";
import { ArrowRight, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import SEO from "@/components/layout/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <>
      <SEO 
        title="Projects" 
        description="AI/ML projects including computer vision, object detection, and machine learning pipelines."
        path="/projects"
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Machine learning projects with documented approaches, metrics, and lessons learned.
            </p>

            <div className="space-y-8">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group p-6 md:p-8 rounded-lg border border-border/50 bg-card/30 hover:border-primary/50 hover:bg-card/50 hover-glow-primary transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      {/* Title */}
                      <Link to={`/projects/${project.id}`}>
                        <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h2>
                      </Link>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">
                        {project.shortDescription}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Metric */}
                      <p className="text-sm text-muted-foreground">
                        {project.results.metrics}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <Link
                        to={`/projects/${project.id}`}
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Projects;
