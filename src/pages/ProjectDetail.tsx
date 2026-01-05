import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import SEO from "@/components/layout/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return (
      <>
        <SEO title="Project Not Found" path={`/projects/${slug}`} />
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="pt-24 pb-20 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl font-bold mb-4">Project not found</h1>
              <Link to="/projects" className="text-primary hover:underline">
                ← Back to Projects
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={`${project.title} using ${project.techStack[0]}`}
        description={project.shortDescription}
        path={`/projects/${project.id}`}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-20 px-4">
          <article className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            {/* Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {project.shortDescription}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* GitHub link */}
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </header>

            {/* Content sections */}
            <div className="space-y-12">
              {/* Problem */}
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Problem</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </section>

              {/* Approach */}
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Approach</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.approach}
                </p>
              </section>

              {/* Pipeline Overview - only for projects that have it */}
              {project.hasPipelineOverview && project.pipeline && (
                <section>
                  <h2 className="text-xl font-semibold mb-4 text-primary">Pipeline Overview</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.pipeline.map((step, index) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded-md bg-muted text-sm">
                          {step}
                        </span>
                        {index < project.pipeline!.length - 1 && (
                          <span className="text-muted-foreground">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Results & Metrics - moved up for recruiter scanning */}
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Results & Metrics</h2>
                <div className="p-6 rounded-lg border border-border bg-card/50">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Dataset</p>
                      <p className="font-medium">{project.results.datasetSize}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Metrics</p>
                      <p className="font-medium text-primary">{project.results.metrics}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Outcome</p>
                      <p className="font-medium">{project.results.outcome}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Challenges & Decisions */}
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Challenges & Decisions</h2>
                <div className="space-y-4">
                  {project.challenges.map((item, index) => (
                    <div key={index} className="p-4 rounded-lg border border-border bg-card/30">
                      <p className="font-medium mb-2">{item.challenge}</p>
                      <p className="text-sm text-muted-foreground">{item.decision}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Limitations & Next Steps */}
              <section>
                <h2 className="text-xl font-semibold mb-4 text-primary">Limitations & Next Steps</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.limitations}
                </p>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProjectDetail;
