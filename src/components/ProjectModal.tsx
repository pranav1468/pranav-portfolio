import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, AlertTriangle, BarChart3, Lightbulb, Target, Workflow } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                {tech}
              </Badge>
            ))}
          </div>
        </DialogHeader>

        <Tabs defaultValue="problem" className="mt-4">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-muted/30">
            <TabsTrigger value="problem" className="text-xs">Problem</TabsTrigger>
            <TabsTrigger value="approach" className="text-xs">Approach</TabsTrigger>
            {project.hasPipelineOverview && (
              <TabsTrigger value="pipeline" className="text-xs">Pipeline</TabsTrigger>
            )}
            <TabsTrigger value="challenges" className="text-xs">Challenges</TabsTrigger>
            <TabsTrigger value="limitations" className="text-xs">Limits</TabsTrigger>
            <TabsTrigger value="results" className="text-xs">Results</TabsTrigger>
          </TabsList>

          {/* Problem Tab */}
          <TabsContent value="problem" className="mt-6">
            <div className="flex items-start gap-3">
              <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Problem Statement</h4>
                <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>
            </div>
          </TabsContent>

          {/* Approach Tab */}
          <TabsContent value="approach" className="mt-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Methodology</h4>
                <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
              </div>
            </div>
          </TabsContent>

          {/* Pipeline Tab (only for face mask detection) */}
          {project.hasPipelineOverview && project.pipeline && (
            <TabsContent value="pipeline" className="mt-6">
              <div className="flex items-start gap-3">
                <Workflow className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold mb-4">Pipeline Overview</h4>
                  <div className="flex flex-wrap items-center gap-2">
                    {project.pipeline.map((step, index) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="px-3 py-2 text-sm rounded-md bg-muted border border-border">
                          {step}
                        </span>
                        {index < project.pipeline!.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          )}

          {/* Challenges Tab */}
          <TabsContent value="challenges" className="mt-6">
            <h4 className="font-semibold mb-4">Challenges & Decisions</h4>
            <div className="space-y-4">
              {project.challenges.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border">
                  <p className="font-medium text-sm mb-2">{item.challenge}</p>
                  <p className="text-muted-foreground text-sm">{item.decision}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Limitations Tab */}
          <TabsContent value="limitations" className="mt-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Limitations & Next Steps</h4>
                <p className="text-muted-foreground leading-relaxed">{project.limitations}</p>
              </div>
            </div>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="mt-6">
            <div className="flex items-start gap-3">
              <BarChart3 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h4 className="font-semibold mb-4">Results & Metrics</h4>
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Dataset Size</span>
                    <p className="font-medium mt-1">{project.results.datasetSize}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Key Metrics</span>
                    <p className="font-medium mt-1 text-primary">{project.results.metrics}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Outcome</span>
                    <p className="font-medium mt-1">{project.results.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
