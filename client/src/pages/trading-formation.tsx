import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Users, BookOpen, Target, Award, CheckCircle, ArrowRight, BarChart3, DollarSign } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import SEOHead, { createServiceSchema } from "@/components/seo-head";

export default function TradingFormation() {
  const [, setLocation] = useLocation();
  
  // Force scroll to top when component mounts to show hero section
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
      icon: <BookOpen className="h-8 w-8" />,
      title: "Formation Complète",
      description: "De débutant à trader confirmé avec méthodes éprouvées et stratégies gagnantes"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Coaching Personnalisé",
      description: "Accompagnement individuel adapté à votre profil et objectifs financiers"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analyse Technique",
      description: "Maîtrise des outils d'analyse chartiste et indicateurs professionnels"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Gestion des Risques",
      description: "Stratégies de money management pour préserver et faire fructifier votre capital"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certification",
      description: "Diplôme reconnu et réseau d'anciens élèves devenus traders rentables"
    }
  ];

  const programs = [
    {
      name: "Formation Débutant",
      price: "300€",
      duration: "6 semaines",
      description: "Bases solides du trading et premiers pas en bourse",
      features: [
        "20h de cours vidéo",
        "Ebook complet (200 pages)",
        "Simulateur de trading",
        "Support email",
        "Accès plateforme 6 mois",
        "Certification de fin"
      ]
    },
    {
      name: "Programme Avancé",
      price: "600€",
      duration: "12 semaines",
      description: "Stratégies professionnelles et trading algorithmique",
      features: [
        "40h de formation intensive",
        "Coaching personnalisé (3 sessions)",
        "Outils d'analyse avancés",
        "Stratégies automatisées",
        "Trading room privée",
        "Suivi 12 mois",
        "Garantie résultats"
      ],
      featured: true
    },
    {
      name: "Coaching VIP",
      price: "800€",
      duration: "6 mois",
      description: "Accompagnement exclusif pour traders ambitieux",
      features: [
        "Formation complète personnalisée",
        "Coaching hebdomadaire (24 sessions)",
        "Accès signaux premium",
        "Portfolio personnalisé",
        "Hotline prioritaire",
        "Réseau traders professionnels"
      ]
    }
  ];

  const markets = [
    "Forex (EUR/USD, GBP/USD...)",
    "Actions (CAC40, S&P500...)",
    "Crypto-monnaies (Bitcoin, Ethereum...)",
    "Matières premières (Or, Pétrole...)",
    "Indices boursiers",
    "Options et CFD"
  ];

  const testimonials = [
    {
      name: "Marie L.",
      role: "Entrepreneuse",
      result: "+180% sur portfolio en 8 mois",
      text: "Grâce à la formation, j'ai pu diversifier mes revenus et créer un complément financier stable. Les stratégies enseignées sont concrètes et applicables immédiatement."
    },
    {
      name: "Pierre M.",
      role: "Salarié",
      result: "€2,500/mois en trading à temps partiel",
      text: "En quelques mois, j'ai acquis les compétences pour trader efficacement le soir après mon travail. Le coaching personnalisé a fait toute la différence."
    },
    {
      name: "Sophie R.",
      role: "Retraitée",
      result: "Capital préservé et valorisé",
      text: "À 58 ans, j'ai appris à faire fructifier mon épargne retraite en toute sécurité. La gestion des risques enseignée est excellente."
    }
  ];

  const stats = [
    { value: "87%", label: "Taux de réussite élèves" },
    { value: "500+", label: "Traders formés" },
    { value: "12 ans", label: "D'expérience marchés" },
    { value: "€2.3M", label: "Gains cumulés élèves" }
  ];

  // Schema pour le service de trading et formation
  const serviceSchema = createServiceSchema(
    "Formation Trading et Investissement",
    "Formation complète en trading et investissement financier avec coaching personnalisé, analyse technique, gestion des risques et certification professionnelle. Programmes adaptés du débutant au trader confirmé.",
    "À partir de 300€"
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Formation Trading et Investissement - Momentum Group"
        description="Formation trading complète avec coaching personnalisé, analyse technique professionnelle et gestion des risques. Programmes débutant à expert avec certification. Simulateur de trading et support 24/7. Devenez trader rentable avec nos méthodes éprouvées."
        keywords="formation trading, investissement bourse, coaching trading, analyse technique, gestion risques, devenir trader, formation finance, bourse débutant, stratégies trading, Momentum Group"
        canonical="/trading-formation"
        ogType="service"
        structuredData={serviceSchema}
      />
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
                  Trading &
                  <span className="text-primary block">Formation Financière</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Maîtrisez les marchés financiers et créez une source de revenus 
                  durable. Formation complète du débutant au trader professionnel 
                  avec méthodes éprouvées et accompagnement personnalisé.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => scrollToSection("programs")}
                    className="bg-primary hover:bg-primary/90"
                    data-testid="button-view-programs"
                  >
                    Voir les Programmes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                    data-testid="button-consultation"
                  >
                    Formation Gratuite
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="bg-background/90 rounded-lg p-4 shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <TrendingUp className="h-6 w-6 text-green-500" />
                        <span className="text-sm font-medium text-green-600">+12.5%</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-8 bg-gradient-to-r from-green-400 to-green-600 rounded relative">
                          <div className="absolute inset-0 bg-green-500/20 rounded animate-pulse"></div>
                        </div>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>EUR/USD</span>
                          <span>1.0985</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background/90 rounded-lg p-3 shadow-lg text-center">
                        <DollarSign className="h-5 w-5 text-primary mx-auto mb-1" />
                        <p className="text-xs font-semibold">Multi-Marchés</p>
                      </div>
                      <div className="bg-background/90 rounded-lg p-3 shadow-lg text-center">
                        <BarChart3 className="h-5 w-5 text-secondary mx-auto mb-1" />
                        <p className="text-xs font-semibold">Analyse Pro</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
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
              Méthode d'Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Approche pédagogique progressive et personnalisée pour développer vos compétences trading
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

      {/* Markets Section */}
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
              Marchés Couverts
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Formation complète sur tous les instruments financiers majeurs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {markets.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-lg p-4 shadow-sm"
                data-testid={`market-${index}`}
              >
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-primary mr-3" />
                  <span className="font-medium text-foreground">{market}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Programmes de Formation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Parcours adaptés à votre niveau et objectifs financiers
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-card border rounded-xl p-8 ${
                  program.featured 
                    ? 'border-primary shadow-lg ring-1 ring-primary/20' 
                    : 'border-border'
                }`}
                data-testid={`card-program-${index}`}
              >
                {program.featured && (
                  <div className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                    Recommandé
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{program.name}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-primary">{program.price}</span>
                  <span className="text-muted-foreground">/ {program.duration}</span>
                </div>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    program.featured 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-secondary hover:bg-secondary/90'
                  }`}
                  onClick={goToContactForm}
                  data-testid={`button-program-${index}`}
                >
                  S'inscrire
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Témoignages Élèves
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez les résultats obtenus par nos anciens élèves
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
                data-testid={`card-testimonial-${index}`}
              >
                <div className="text-center mb-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mt-2 w-fit mx-auto">
                    {testimonial.result}
                  </div>
                </div>
                <p className="text-muted-foreground text-center italic">"{testimonial.text}"</p>
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
              Commencez Votre Aventure Trading
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Formation gratuite de 90 minutes pour découvrir nos méthodes. 
              Places limitées, inscription immédiate requise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  data-testid="button-contact-form"
                >
                  Formation Gratuite
                </Button>
              </Link>
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90"
                onClick={goToContactForm}
                data-testid="button-calendar"
              >
                Réserver Créneau
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}