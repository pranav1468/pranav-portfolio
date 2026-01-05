import { Link } from "react-router-dom";
import SEO from "@/components/layout/SEO";

const NotFound = () => {
  return (
    <>
      <SEO title="Page Not Found" />
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Page not found</p>
          <Link 
            to="/" 
            className="text-primary hover:underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
