import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 pt-16"
      data-testid="section-hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-sans"
            data-testid="text-hero-title"
          >
            Services Financiers
            <span className="text-primary block">Professionnels</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            Services experts en développement, comptabilité, trading et conseil financier conçus pour élever votre entreprise vers de nouveaux sommets
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            data-testid="div-hero-buttons"
          >
            <button
              onClick={() => scrollToSection("services")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              data-testid="button-explore-services"
            >
              Découvrir les Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-semibold text-lg"
              data-testid="button-view-portfolio"
            >
              Voir le Portfolio
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            data-testid="div-hero-stats"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-experience">5+</div>
              <div className="text-muted-foreground">Années d'Expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-projects">50+</div>
              <div className="text-muted-foreground">Projets Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-satisfaction">100%</div>
              <div className="text-muted-foreground">Satisfaction Client</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="text-stat-support">24/7</div>
              <div className="text-muted-foreground">Support Disponible</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer"
        onClick={() => scrollToSection("services")}
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </motion.div>
    </section>
  );
}
