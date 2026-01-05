import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import SEO from "@/components/layout/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blog" 
        description="Learning notes, experiments, and technical explorations in AI/ML."
        path="/blog"
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Thoughts & <span className="text-gradient">Writing</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Learning notes, experiments, and technical explorations.
            </p>

            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group p-6 md:p-8 rounded-lg border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
                >
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-12">
              More posts coming soon — currently documenting my learning journey.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
