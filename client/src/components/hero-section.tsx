import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

// Import the new images
import tradingImage from "@assets/WhatsApp Image 2025-09-26 à 21.56.48_0d482c9c_1758923961538.jpg";
import developmentImage from "@assets/WhatsApp Image 2025-09-26 à 21.56.49_83202991_1758923971163.jpg";
import shippingImage from "@assets/WhatsApp Image 2025-09-26 à 21.56.50_7728ebb2_1758923982640.jpg";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    { src: tradingImage, alt: "Trading & Formation" },
    { src: developmentImage, alt: "Développement d'Applications" },
    { src: shippingImage, alt: "Transit Maritime" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 pt-16 overflow-hidden"
      data-testid="section-hero"
    >
      {/* Background rotating images */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 0.1 : 0 
            }}
            transition={{ duration: 1 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              data-testid={`bg-image-${index}`}
            />
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-sans"
              data-testid="text-hero-title"
            >
              Solutions Digitales
              <span className="text-primary block">Professionnelles</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto lg:mx-0 leading-relaxed"
              data-testid="text-hero-subtitle"
            >
              Services experts en développement d'applications, sites web professionnels, trading & formation et transit maritime conçus pour élever votre entreprise vers de nouveaux sommets
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16"
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
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto lg:mx-0"
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
          
          {/* Image carousel */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              data-testid="div-image-carousel"
            >
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ 
                    opacity: currentImageIndex === index ? 1 : 0,
                    scale: currentImageIndex === index ? 1 : 1.1
                  }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    data-testid={`carousel-image-${index}`}
                  />
                </motion.div>
              ))}
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    data-testid={`indicator-${index}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
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