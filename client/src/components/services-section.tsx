import { motion } from "framer-motion";
import { Code, Calculator, TrendingUp, PieChart, ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Développement d'Applications",
    description: "Développement d'applications mobiles et desktop personnalisées avec des technologies modernes et une interface utilisateur intuitive.",
    features: ["Applications Mobiles", "Applications Desktop", "Interface Utilisateur"],
    color: "primary"
  },
  {
    icon: Calculator,
    title: "Sites Web Professionnels",
    description: "Création de sites web professionnels et modernes avec design responsive et optimisation pour les moteurs de recherche.",
    features: ["Design Responsive", "Optimisation SEO", "Sites E-commerce"],
    color: "secondary"
  },
  {
    icon: TrendingUp,
    title: "Trading & Formation",
    description: "Éducation professionnelle en trading et analyse de marché pour vous aider à naviguer avec succès sur les marchés financiers.",
    features: ["Formation Trading", "Analyse de Marché", "Gestion des Risques"],
    color: "accent"
  },
  {
    icon: PieChart,
    title: "Transit Maritime",
    description: "Services de transit maritime et logistique pour optimiser vos opérations de transport maritime et commerce international.",
    features: ["Logistique Maritime", "Commerce International", "Gestion des Cargaisons"],
    color: "primary"
  }
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          data-testid="div-services-header"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans" data-testid="text-services-title">
            Services Professionnels
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-subtitle">
            Solutions complètes en développement, web et logistique pour faire progresser votre entreprise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-testid="grid-services">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = {
              primary: "bg-primary/10 group-hover:bg-primary/20 text-primary",
              secondary: "bg-secondary/10 group-hover:bg-secondary/20 text-secondary",
              accent: "bg-accent/10 group-hover:bg-accent/20 text-accent"
            };

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 group"
                data-testid={`card-service-${index}`}
              >
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors duration-300 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                  <Icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 font-sans" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6" data-testid={`list-service-features-${index}`}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-center text-muted-foreground" data-testid={`text-feature-${index}-${featureIndex}`}>
                      <Check className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={scrollToContact}
                  className="text-primary font-semibold hover:text-primary/80 transition-colors duration-300 flex items-center"
                  data-testid={`button-learn-more-${index}`}
                >
                  En Savoir Plus <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
