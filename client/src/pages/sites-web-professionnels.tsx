import { motion } from "framer-motion";
import { ArrowLeft, Globe, Smartphone, Search, Zap, Shield, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";
import { Link, useLocation } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function SitesWebProfessionnels() {
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
      icon: <Globe className="h-8 w-8" />,
      title: "Design Responsive",
      description: "Sites adaptatifs parfaits sur tous les appareils, du mobile au desktop"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimisé",
      description: "Référencement naturel intégré pour une visibilité maximale sur Google"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Élevée",
      description: "Temps de chargement ultra-rapides et scores Google PageSpeed excellents"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sécurité Renforcée",
      description: "HTTPS, protection contre les attaques et sauvegardes automatiques"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Analytics Intégrés",
      description: "Suivi des performances et comportements visiteurs en temps réel"
    }
  ];

  const pricing = [
    {
      name: "Site Vitrine",
      price: "300€",
      description: "Parfait pour présenter votre activité",
      features: [
        "5-8 pages optimisées",
        "Design responsive premium",
        "Formulaire de contact",
        "SEO de base inclus",
        "Hébergement 1 an offert",
        "Support 3 mois"
      ]
    },
    {
      name: "Site Business",
      price: "500€",
      description: "Solution complète pour entreprises dynamiques",
      features: [
        "10-15 pages sur mesure",
        "CMS intégré pour gestion contenu",
        "Blog professionnel",
        "Intégrations réseaux sociaux",
        "Analytics avancés",
        "Formation à la gestion",
        "Support 6 mois"
      ],
      featured: true
    },
    {
      name: "E-commerce",
      price: "800€",
      description: "Boutique en ligne professionnelle",
      features: [
        "Catalogue produits illimité",
        "Paiements sécurisés multiples",
        "Gestion stocks automatisée",
        "Tableaux de bord vendeur",
        "Marketing automation",
        "Formation équipe complète",
        "Support prioritaire 12 mois"
      ]
    }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", 
    "WordPress", "Shopify", "WooCommerce", "Strapi"
  ];

  const caseStudies = [
    {
      title: "Cabinet d'Avocats Digital",
      industry: "Services Juridiques",
      challenge: "Moderniser l'image de marque et attirer de nouveaux clients",
      solution: "Site vitrine premium avec blog expertise, formulaires de consultation et optimisation SEO local",
      results: ["+200% trafic web", "+150% demandes consultation", "Position #1 Google local"]
    },
    {
      title: "E-commerce Artisanal",
      industry: "Artisanat",
      challenge: "Transition du physique au digital pendant la pandémie",
      solution: "Boutique en ligne complète avec personnalisation produits, paiements sécurisés et logistique intégrée",
      results: ["+300% chiffre d'affaires", "85% nouveaux clients en ligne", "Expansion nationale réussie"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-secondary/5 to-primary/5">
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
                  Sites Web
                  <span className="text-secondary block">Professionnels</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Votre présence digitale est votre premier commercial. Nous créons 
                  des sites web modernes, performants et optimisés qui convertissent 
                  vos visiteurs en clients et propulsent votre croissance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => scrollToSection("pricing")}
                    className="bg-secondary hover:bg-secondary/90"
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
                    Audit Gratuit
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="bg-background/80 rounded-lg p-4 shadow-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Globe className="h-6 w-6 text-secondary" />
                        <span className="text-xs text-muted-foreground">yoursite.com</span>
                      </div>
                      <div className="h-2 bg-secondary/20 rounded mb-2"></div>
                      <div className="h-2 bg-secondary/10 rounded w-3/4"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background/80 rounded-lg p-3 shadow-lg text-center">
                        <TrendingUp className="h-5 w-5 text-primary mx-auto mb-1" />
                        <p className="text-xs font-semibold">SEO Optimisé</p>
                      </div>
                      <div className="bg-background/80 rounded-lg p-3 shadow-lg text-center">
                        <Smartphone className="h-5 w-5 text-secondary mx-auto mb-1" />
                        <p className="text-xs font-semibold">Mobile First</p>
                      </div>
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
              Excellence Technique & Design
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Chaque site est développé selon les standards les plus élevés pour garantir performances et résultats
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
                <div className="text-secondary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Technologies Modernes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stack technique de pointe pour des sites rapides, sécurisés et évolutifs
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-lg px-4 py-2 shadow-sm"
                data-testid={`tech-${index}`}
              >
                <span className="font-medium text-foreground">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Formules Adaptées
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solutions web sur mesure pour tous types d'entreprises et budgets
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
                    ? 'border-secondary shadow-lg ring-1 ring-secondary/20' 
                    : 'border-border'
                }`}
                data-testid={`card-pricing-${index}`}
              >
                {plan.featured && (
                  <div className="bg-secondary text-secondary-foreground text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                    Populaire
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-secondary mb-2">{plan.price}</p>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full mt-8 ${
                    plan.featured 
                      ? 'bg-secondary hover:bg-secondary/90' 
                      : 'bg-primary hover:bg-primary/90'
                  }`}
                  onClick={goToContactForm}
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
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Succès Clients
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comment nos sites web ont transformé la présence digitale de nos clients
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
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
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
                          <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
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
      <section id="contact" className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformez Votre Présence Digitale
            </h2>
            <p className="text-xl mb-8 text-secondary-foreground/90">
              Audit gratuit de votre site actuel et stratégie personnalisée. 
              Devis détaillé et maquettes sous 72h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
                onClick={goToContactForm}
                data-testid="button-contact-form"
              >
                Demander un Audit
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10"
                data-testid="button-portfolio"
              >
                Voir Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}