import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "How I Approach Model Evaluation",
    description: "Beyond accuracy — using confusion matrices, per-class metrics, and failure analysis to understand what models actually learn.",
    date: "Jan 2026",
    readTime: "6 min read",
    tags: ["ML Evaluation", "Best Practices"],
  },
  {
    title: "Understanding Error Analysis in ML",
    description: "A systematic approach to debugging model predictions. Categorizing errors, identifying patterns, and prioritizing fixes.",
    date: "Dec 2025",
    readTime: "8 min read",
    tags: ["Error Analysis", "Debugging"],
  },
  {
    title: "What I Learned Building a YOLO-Based System",
    description: "Practical lessons from training YOLOv8 for face mask detection — data prep, augmentation choices, and threshold tuning.",
    date: "Nov 2025",
    readTime: "10 min read",
    tags: ["Object Detection", "YOLO"],
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Thoughts & <span className="text-gradient">Writing</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Learning notes, experiments, and technical explorations
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group p-6 rounded-lg border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Meta info */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read more */}
              <div className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          More posts coming soon — currently documenting my learning journey.
        </p>
      </div>
    </section>
  );
};

export default Blog;
