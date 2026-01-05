import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import SEO from "@/components/layout/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <SEO title="Post Not Found" path={`/blog/${slug}`} />
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="pt-24 pb-20 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-2xl font-bold mb-4">Post not found</h1>
              <Link to="/blog" className="text-primary hover:underline">
                ← Back to Blog
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
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-20 px-4">
          <article className="max-w-prose mx-auto">
            {/* Back link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              
              {/* Meta info */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Handle headers
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                      {paragraph.slice(2)}
                    </h1>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
                      {paragraph.slice(3)}
                    </h2>
                  );
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                      {paragraph.slice(4)}
                    </h3>
                  );
                }
                
                // Handle lists
                if (paragraph.includes('\n-') || paragraph.startsWith('-')) {
                  const items = paragraph.split('\n').filter(line => line.startsWith('-'));
                  return (
                    <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed">
                          {item.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Handle numbered lists
                if (paragraph.match(/^\d\./)) {
                  const items = paragraph.split('\n').filter(line => line.match(/^\d\./));
                  return (
                    <ol key={index} className="list-decimal pl-6 mb-6 space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="text-muted-foreground leading-relaxed">
                          {item.slice(3).replace(/\*\*(.*?)\*\*/g, '$1')}
                        </li>
                      ))}
                    </ol>
                  );
                }

                // Regular paragraphs
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                }
                
                return null;
              })}
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
