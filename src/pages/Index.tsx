import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ContactCTA from "@/components/home/ContactCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/layout/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Pranav Baghare | AI/ML Engineer" 
        description="AI/ML engineer focused on computer vision and deep learning. Building practical machine learning systems."
        path="/"
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <CurrentlyExploring />
        <AboutPreview />
        <FeaturedProjects />
        <ContactCTA />
        <Footer />
      </div>
    </>
  );
};

export default Index;
