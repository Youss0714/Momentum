import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

const services = [
  "Développement d'Applications",
  "Sites Web Professionnels", 
  "Trading & Formation",
  "Transit Maritime"
];

const quickLinks = [
  { label: "À Propos", href: "about" },
  { label: "Portfolio", href: "portfolio" },
  { label: "Contact", href: "contact" },
  { label: "Politique de Confidentialité", href: "#" }
];

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
            data-testid="div-footer-brand"
          >
            <h3 className="text-3xl font-bold mb-4 font-sans" data-testid="text-footer-logo">
              Momentum group
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md" data-testid="text-footer-description">
              Services professionnels spécialisés en développement, trading et logistique conçus pour élever votre entreprise vers de nouveaux sommets avec des solutions expertes et un support dédié.
            </p>
            <div className="flex space-x-4" data-testid="div-social-links">
              <a 
                href="#" 
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300"
                data-testid="link-twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 p-3 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300"
                data-testid="link-github"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            data-testid="div-footer-services"
          >
            <h4 className="text-xl font-semibold mb-4" data-testid="text-services-title">
              Services
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {services.map((service, index) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary-foreground transition-colors duration-300 text-left"
                    data-testid={`link-service-${index}`}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            data-testid="div-footer-links"
          >
            <h4 className="text-xl font-semibold mb-4" data-testid="text-links-title">
              Liens Rapides
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {quickLinks.map((link, index) => (
                <li key={link.label}>
                  {link.href.startsWith("#") ? (
                    <a 
                      href={link.href}
                      className="hover:text-primary-foreground transition-colors duration-300"
                      data-testid={`link-quick-${index}`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="hover:text-primary-foreground transition-colors duration-300 text-left"
                      data-testid={`link-quick-${index}`}
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60"
          data-testid="div-footer-copyright"
        >
          <p data-testid="text-copyright">
            &copy; 2024 Momentum group Services Professionnels. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
