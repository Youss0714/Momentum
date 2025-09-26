import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-background/95 backdrop-blur-md"
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary font-sans" data-testid="text-logo">
              Youss
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                data-testid="button-nav-home"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                data-testid="button-nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                data-testid="button-nav-about"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                data-testid="button-nav-portfolio"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                data-testid="button-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium"
              data-testid="button-get-started"
            >
              Commencer
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-border bg-background"
            data-testid="nav-mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium w-full text-left"
                data-testid="button-mobile-home"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium w-full text-left"
                data-testid="button-mobile-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium w-full text-left"
                data-testid="button-mobile-about"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium w-full text-left"
                data-testid="button-mobile-portfolio"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium w-full text-left"
                data-testid="button-mobile-contact"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full mt-4 bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium"
                data-testid="button-mobile-get-started"
              >
                Commencer
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
