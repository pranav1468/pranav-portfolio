import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import LearningJourney from "@/components/LearningJourney";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CurrentlyExploring />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <LearningJourney />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
