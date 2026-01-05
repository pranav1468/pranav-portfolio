import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import About from "@/components/About";
import LearningJourney from "@/components/LearningJourney";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Contact from "@/components/Contact";
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
        <About />
        <LearningJourney />
        <Skills />
        <FeaturedProjects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
