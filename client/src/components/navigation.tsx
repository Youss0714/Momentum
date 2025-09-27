import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const isHomePage = location === "/";

  const services = [
    { name: "Développement d'Applications", href: "/developpement-applications" },
    { name: "Sites Web Professionnels", href: "/sites-web-professionnels" },
    { name: "Trading & Formation", href: "/trading-formation" },
    { name: "Transit Maritime", href: "/transit-maritime" }
  ];

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
            <Link href="/">
              <span className="text-2xl font-bold text-primary font-sans cursor-pointer hover:text-primary/80 transition-colors" data-testid="text-logo">
                Momentum group
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection("home")}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  data-testid="button-nav-home"
                >
                  Accueil
                </button>
              ) : (
                <Link href="/" className="text-foreground hover:text-primary transition-colors duration-300 font-medium" data-testid="link-nav-home">
                  Accueil
                </Link>
              )}
              
              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  data-testid="button-nav-services"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                    data-testid="dropdown-services"
                  >
                    {services.map((service, index) => (
                      <Link key={index} href={service.href}>
                        <div 
                          onClick={() => setServicesOpen(false)}
                          className="px-4 py-2 text-foreground hover:bg-muted hover:text-primary transition-colors duration-200 cursor-pointer"
                        >
                          {service.name}
                        </div>
                      </Link>
                    ))}
                    {isHomePage && (
                      <>
                        <div className="border-t border-border my-2"></div>
                        <button 
                          onClick={() => {
                            scrollToSection("services");
                            setServicesOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left text-foreground hover:bg-muted hover:text-primary transition-colors duration-200"
                        >
                          Voir Tous les Services
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>
              
              {isHomePage ? (
                <>
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
                </>
              ) : (
                <>
                  <Link href="/#about" className="text-foreground hover:text-primary transition-colors duration-300 font-medium" data-testid="link-nav-about">
                    À Propos
                  </Link>
                  <Link href="/#portfolio" className="text-foreground hover:text-primary transition-colors duration-300 font-medium" data-testid="link-nav-portfolio">
                    Portfolio
                  </Link>
                  <Link href="/#contact" className="text-foreground hover:text-primary transition-colors duration-300 font-medium" data-testid="link-nav-contact">
                    Contact
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="hidden md:block">
            {isHomePage ? (
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium"
                data-testid="button-get-started"
              >
                Commencer
              </button>
            ) : (
              <Link href="/#contact">
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium" data-testid="button-get-started-link">
                  Commencer
                </button>
              </Link>
            )}
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
              {isHomePage ? (
                <button 
                  onClick={() => scrollToSection("home")}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium w-full text-left"
                  data-testid="button-mobile-home"
                >
                  Accueil
                </button>
              ) : (
                <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium w-full text-left" data-testid="link-mobile-home">
                  Accueil
                </Link>
              )}
              
              {/* Mobile Services Section */}
              <div className="border-l-2 border-primary/20 ml-3 pl-3">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Services</div>
                {services.map((service, index) => (
                  <Link key={index} href={service.href}>
                    <div className="block px-3 py-2 text-sm text-foreground hover:text-primary transition-colors duration-300 font-medium">
                      {service.name}
                    </div>
                  </Link>
                ))}
                {isHomePage && (
                  <button 
                    onClick={() => scrollToSection("services")}
                    className="block px-3 py-2 text-sm text-foreground hover:text-primary transition-colors duration-300 font-medium w-full text-left"
                  >
                    Voir Tous les Services
                  </button>
                )}
              </div>
              
              {isHomePage ? (
                <>
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
                </>
              ) : (
                <>
                  <Link href="/#about" className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium w-full text-left" data-testid="link-mobile-about">
                    À Propos
                  </Link>
                  <Link href="/#portfolio" className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium w-full text-left" data-testid="link-mobile-portfolio">
                    Portfolio
                  </Link>
                  <Link href="/#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium w-full text-left" data-testid="link-mobile-contact">
                    Contact
                  </Link>
                  <Link href="/#contact">
                    <button className="block w-full mt-4 bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium" data-testid="button-mobile-get-started-link">
                      Commencer
                    </button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
