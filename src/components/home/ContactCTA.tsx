import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-8">
          Open to AI/ML internships, entry-level roles, and research opportunities.
        </p>
        
        <Button
          size="lg"
          className="glow-primary bg-primary text-primary-foreground hover:bg-primary/90"
          asChild
        >
          <a href="mailto:pranav.baghare@email.com">
            <Mail className="mr-2 h-5 w-5" />
            Say Hello
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;
