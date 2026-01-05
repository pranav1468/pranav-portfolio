import { Link } from "react-router-dom";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";

const FeaturedProjects = () => {
  // Show only first 2 projects as featured
  const featuredProjects = projects.slice(0, 2);

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Selected work demonstrating practical ML applications
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="group p-6 rounded-lg border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 hover-glow-primary transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 line-clamp-2">
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
              <p className="text-sm text-muted-foreground mb-4">
                {project.results.metrics}
              </p>

              {/* Actions: GitHub, Live Demo, View Details */}
              <div className="flex items-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-muted-foreground hover:text-foreground hover-glow-primary transition-all duration-200"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-foreground hover-glow-primary transition-all duration-200"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  View details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
