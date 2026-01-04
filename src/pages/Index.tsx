import Hero from "@/components/Hero";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import LearningJourney from "@/components/LearningJourney";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CurrentlyExploring />
      <About />
      <Skills />
      <Projects />
      <LearningJourney />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
