import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

const projects = [
  {
    title: "YGestion ERP",
    description: "Système de gestion d'entreprise complet avec contrôle d'inventaire, suivi des ventes et gestion clientèle.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Tableau de bord de gestion d'entreprise YGestion",
    technologies: ["React", "Node.js", "MongoDB"],
    route: "/developpement-applications"
  },
  {
    title: "Analyses de Trading",
    description: "Plateforme de trading avancée avec analyse de marché en temps réel et outils de gestion de portefeuille.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Plateforme d'analyse financière avec graphiques et diagrammes",
    technologies: ["Python", "Django", "PostgreSQL"],
    route: "/trading-formation"
  },
  {
    title: "Plateforme Logistique",
    description: "Solution de transit maritime complète avec suivi en temps réel et gestion automatisée des expéditions.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    alt: "Interface de gestion logistique avec tracking maritime",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    route: "/transit-maritime"
  }
];

export default function PortfolioSection() {
  const [, setLocation] = useLocation();

  return (
    <section id="portfolio" className="py-20 bg-background" data-testid="section-portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-testid="div-portfolio-header"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans" data-testid="text-portfolio-title">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-portfolio-subtitle">
            Vitrine de projets réussis et solutions clients dans diverses industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="grid-portfolio">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border group"
              data-testid={`card-project-${index}`}
            >
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  data-testid={`img-project-${index}`}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 font-sans" data-testid={`text-project-title-${index}`}>
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${index}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4" data-testid={`div-project-technologies-${index}`}>
                  {project.technologies.map((tech, techIndex) => {
                    const colors = ["primary", "secondary", "accent"];
                    const colorClass = colors[techIndex % colors.length];
                    const techClasses = {
                      primary: "bg-primary/10 text-primary",
                      secondary: "bg-secondary/10 text-secondary",
                      accent: "bg-accent/10 text-accent"
                    };

                    return (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm ${techClasses[colorClass as keyof typeof techClasses]}`}
                        data-testid={`text-technology-${index}-${techIndex}`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                
                <button 
                  onClick={() => setLocation(project.route)}
                  className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300 flex items-center"
                  data-testid={`button-view-details-${index}`}
                >
                  Voir Détails <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
