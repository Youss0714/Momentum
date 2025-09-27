import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, Monitor, Users, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function DeveloppementApplications() {
  const [, setLocation] = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToContactForm = () => {
    setLocation("/");
    // Délai pour permettre le chargement de la page d'accueil
    setTimeout(() => {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Applications Mobiles Natives",
      description: "iOS et Android avec performances optimales et interface utilisateur intuitive"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Applications Desktop",
      description: "Solutions multiplateformes Windows, macOS et Linux avec React Native ou Electron"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Applications Web Progressives",
      description: "PWA modernes avec fonctionnalités offline et notifications push"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Intégrations API",
      description: "Connexions fluides avec systèmes existants et services tiers"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sécurité Avancée",
      description: "Chiffrement des données, authentification sécurisée et conformité RGPD"
    }
  ];

  const pricing = [
    {
      name: "Application Mobile Simple",
      price: "À partir de 1 000€",
      description: "Application avec fonctionnalités de base",
      features: [
        "Design UI/UX personnalisé",
        "Fonctionnalités CRUD de base",
        "Authentification utilisateur",
        "Version iOS ET Android",
        "Tests et déploiement",
        "1 mois de support"
      ]
    },
    {
      name: "Application Complexe",
      price: "À partir de 6 000€",
      description: "Solution complète avec fonctionnalités avancées",
      features: [
        "Architecture scalable",
        "Intégrations API multiples",
        "Notifications push",
        "Analytics intégrés",
        "Base de données optimisée",
        "3 mois de support",
        "Mises à jour mineures incluses"
      ],
      featured: true
    },
    {
      name: "Solution Enterprise",
      price: "Sur devis",
      description: "Architecture personnalisée pour grandes entreprises",
      features: [
        "Consultation architecture",
        "Développement sur mesure",
        "Intégration systèmes existants",
        "Formation équipes",
        "Support prioritaire 24/7",
        "SLA garantis"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Application E-commerce Mobile",
      industry: "Retail",
      challenge: "Digitalisation des ventes avec interface intuitive",
      solution: "App native iOS/Android avec panier, paiements sécurisés et tracking commandes",
      results: ["+150% de ventes mobile", "Temps de commande réduit de 60%", "4.8/5 étoiles sur les stores"]
    },
    {
      title: "Plateforme de Gestion Logistique",
      industry: "Transport",
      challenge: "Suivi en temps réel des livraisons et optimisation des routes",
      solution: "App desktop avec géolocalisation, algorithmes d'optimisation et dashboard analytics",
      results: ["-25% coûts logistiques", "Satisfaction client +40%", "ROI de 300% en 6 mois"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Développement d'Applications
                  <span className="text-primary block">Mobiles & Desktop</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Transformez vos idées en applications performantes et intuitives. 
                  Du concept au déploiement, nous créons des solutions digitales 
                  qui engagent vos utilisateurs et génèrent des résultats mesurables.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => scrollToSection("pricing")}
                    className="bg-primary hover:bg-primary/90"
                    data-testid="button-view-pricing"
                  >
                    Voir les Tarifs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                    data-testid="button-consultation"
                  >
                    Consultation Gratuite
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/80 rounded-lg p-4 shadow-lg">
                      <Smartphone className="h-8 w-8 text-primary mb-2" />
                      <p className="font-semibold">Mobile Native</p>
                    </div>
                    <div className="bg-background/80 rounded-lg p-4 shadow-lg">
                      <Monitor className="h-8 w-8 text-secondary mb-2" />
                      <p className="font-semibold">Desktop Cross-Platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nos Expertises Techniques
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technologies modernes et meilleures pratiques pour des applications robustes et évolutives
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                data-testid={`card-feature-${index}`}
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tarifs Transparents
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Investissement adapté à votre projet et votre budget
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-card border rounded-xl p-8 ${
                  plan.featured 
                    ? 'border-primary shadow-lg ring-1 ring-primary/20' 
                    : 'border-border'
                }`}
                data-testid={`card-pricing-${index}`}
              >
                {plan.featured && (
                  <div className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                    Recommandé
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{plan.price}</p>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full mt-8 ${
                    plan.featured 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary hover:bg-secondary/90'
                  }`}
                  onClick={() => scrollToSection("contact")}
                  data-testid={`button-pricing-${index}`}
                >
                  Commencer le Projet
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Études de Cas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez comment nos applications ont transformé les entreprises de nos clients
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-8"
                data-testid={`card-case-study-${index}`}
              >
                <div className="flex items-center mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{study.title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Défi</h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Résultats</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à Lancer Votre Projet ?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Discutons de votre vision et transformons-la en application performante. 
              Consultation gratuite et devis détaillé sous 48h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={goToContactForm}
                data-testid="button-contact-form"
              >
                Formulaire de Contact
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-phone-call"
              >
                Appel Téléphonique
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}