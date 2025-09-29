import { motion } from "framer-motion";
import { ArrowLeft, Ship, CheckCircle, ArrowRight, Anchor, Truck, FileText, TrendingUp, Box, ArrowUpDown, FileCheck } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import SEOHead, { createServiceSchema } from "@/components/seo-head";

export default function TransitMaritime() {
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
      icon: <Truck className="h-8 w-8" />,
      title: "Services de transport et logistique",
      description: "Solutions complètes de transport multimodal et gestion logistique intégrée"
    },
    {
      icon: <Ship className="h-8 w-8" />,
      title: "Expédition / Shipping",
      description: "Fret maritime FCL/LCL avec suivi complet et livraison sécurisée"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Contrats",
      description: "Gestion contractuelle et négociation de termes commerciaux avantageux"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Commerce / Trading",
      description: "Accompagnement dans vos opérations commerciales internationales"
    },
    {
      icon: <Box className="h-8 w-8" />,
      title: "Marchandises générales",
      description: "Transport sécurisé de tous types de marchandises et produits industriels"
    },
    {
      icon: <ArrowUpDown className="h-8 w-8" />,
      title: "Importations & exportations",
      description: "Import depuis la Chine et export depuis le Ghana avec expertise douanière complète"
    },
    {
      icon: <FileCheck className="h-8 w-8" />,
      title: "Dédouanement et transit",
      description: "Formalités douanières et procédures de transit simplifiées"
    }
  ];

  const services = [
    {
      name: "Import/Export FCL",
      price: "Sur devis",
      description: "Container complet 20'/40' pour gros volumes",
      features: [
        "Booking et réservation",
        "Documentation douanière",
        "Manutention portuaire",
        "Transport terrestre",
        "Dédouanement inclus",
        "Livraison finale"
      ]
    },
    {
      name: "Groupage LCL",
      price: "À partir de 150€/m³",
      description: "Consolidation pour petites et moyennes expéditions",
      features: [
        "Collecte marchandise",
        "Empotage sécurisé",
        "Groupage optimisé",
        "Déconsolidation arrivée",
        "Formalités douanes",
        "Distribution locale",
        "Assurance standard incluse"
      ],
      featured: true
    },
    {
      name: "Solutions Spéciales",
      price: "Tarif personnalisé",
      description: "Transport de marchandises hors normes ou réfrigérées",
      features: [
        "Étude faisabilité",
        "Equipment spécialisé",
        "Containers réfrigérés",
        "Marchandises dangereuses",
        "Projet industriel",
        "Expertise technique"
      ]
    }
  ];

  const routes = [
    { origin: "Tema (Ghana)", destination: "Europe", duration: "8-14 jours", frequency: "2x/semaine" },
    { origin: "Tema (Ghana)", destination: "Amérique du Nord", duration: "12-16 jours", frequency: "3x/semaine" },
    { origin: "Chine (Ports Partenaires)", destination: "Tema/Abidjan", duration: "18-25 jours", frequency: "Daily" },
    { origin: "Shanghai/Shenzhen", destination: "Afrique de l'Ouest", duration: "20-28 jours", frequency: "3x/semaine" },
    { origin: "Abidjan", destination: "Europe", duration: "8-12 jours", frequency: "2x/semaine" },
    { origin: "Ghana - Côte d'Ivoire", destination: "Méditerranée", duration: "6-10 jours", frequency: "4x/semaine" }
  ];

  const advantages = [
    {
      title: "Économique",
      description: "Jusqu'à 70% moins cher que le transport aérien pour les gros volumes",
      stat: "-70% coûts"
    },
    {
      title: "Écologique", 
      description: "Empreinte carbone réduite de 80% comparé aux autres modes de transport",
      stat: "-80% CO₂"
    },
    {
      title: "Capacité",
      description: "Transport de charges lourdes et volumineuses sans limitations majeures",
      stat: "Jusqu'à 28T"
    },
    {
      title: "Fiabilité",
      description: "Horaires réguliers et taux de ponctualité de 95% sur nos lignes principales",
      stat: "95% ponctualité"
    }
  ];

  const caseStudies = [
    {
      title: "Import Machines Chine-Ghana",
      industry: "Import & Manufacturing",
      challenge: "Faciliter l'achat et transport de machines industrielles depuis la Chine vers Tema avec contraintes techniques",
      solution: "Partenaires chinois vérifiés, négociation prix, containers spécialisés et dédouanement Tema",
      results: ["Coûts réduits de 35%", "Qualité garantie", "Délais respectés"]
    },
    {
      title: "Export Cacao Ghana-Europe",
      industry: "Agriculture & Export",
      challenge: "Optimiser l'export de cacao en vrac depuis Tema vers les ports européens avec contraintes de qualité",
      solution: "Containers spécialisés 20' avec contrôle température, certification Fair Trade et suivi GPS",
      results: ["100% qualité préservée", "Délais réduits de 25%", "Certification maintenue"]
    },
    {
      title: "Export Or et Minerais",
      industry: "Mining & Resources",
      challenge: "Transport sécurisé de minerais précieux depuis Tema vers marchés internationaux",
      solution: "Partenariat Tema-Abidjan, containers haute sécurité, escorte et assurance spéciale",
      results: ["Zéro perte", "Conformité 100%", "Expansion régionale réussie"]
    }
  ];

  // Schema pour le service de transit maritime
  const serviceSchema = createServiceSchema(
    "Transit Maritime et Commerce International",
    "Services complets de transit maritime, import/export, dédouanement et logistique internationale. Expertise Ghana-Chine avec gestion contractuelle et transport multimodal sécurisé.",
    "Sur devis"
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Transit Maritime et Commerce International - Momentum Group"
        description="Services experts en transit maritime, import/export Ghana-Chine, dédouanement et logistique internationale. Transport FCL/LCL, gestion contractuelle, formalités douanières et tracking complet. Solutions sur mesure pour votre commerce international."
        keywords="transit maritime, import export, commerce international, dédouanement, logistique, fret maritime, Ghana Chine, transport international, FCL LCL, Momentum Group"
        canonical="/transit-maritime"
        ogType="service"
        structuredData={serviceSchema}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
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
                  Transit Maritime
                  <span className="text-blue-600 block">International</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Experts en import/export maritime depuis le port de Tema (Ghana). 
                  Partenariats stratégiques avec la Chine, Abidjan et réseau mondial pour 
                  faciliter vos achats en Chine et optimiser vos expéditions internationales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => scrollToSection("services")}
                    className="bg-blue-600 hover:bg-blue-700"
                    data-testid="button-view-services"
                  >
                    Nos Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                    data-testid="button-quote"
                  >
                    Devis Gratuit
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="space-y-4">
                    <div className="bg-background/90 rounded-lg p-4 shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <Ship className="h-6 w-6 text-blue-600" />
                        <span className="text-sm font-medium text-green-600">En Transit</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Shanghai → Tema</span>
                          <span className="font-medium">J+22/25</span>
                        </div>
                        <div className="h-2 bg-blue-200 rounded-full">
                          <div className="h-2 bg-blue-600 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-background/90 rounded-lg p-3 shadow-lg text-center">
                        <Anchor className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                        <p className="text-xs font-semibold">150+ Ports</p>
                      </div>
                      <div className="bg-background/90 rounded-lg p-3 shadow-lg text-center">
                        <Truck className="h-5 w-5 text-cyan-600 mx-auto mb-1" />
                        <p className="text-xs font-semibold">Porte-à-Porte</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
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
              Pourquoi le Transport Maritime ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solution de référence pour le commerce international
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                data-testid={`advantage-${index}`}
              >
                <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{advantage.stat}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Notre Expertise Logistique
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Service complet de la collecte à la livraison finale
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Principales Routes Maritimes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Liaisons régulières depuis Tema, partenariats Chine-Afrique et collaboration Abidjan
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-lg p-4 shadow-sm"
                data-testid={`route-${index}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold text-foreground">{route.origin} → {route.destination}</div>
                  <Ship className="h-4 w-4 text-blue-600" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transit :</span>
                    <span className="font-medium">{route.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fréquence :</span>
                    <span className="font-medium">{route.frequency}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nos Solutions Transport
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Services adaptés à vos volumes et contraintes
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-card border rounded-xl p-8 ${
                  service.featured 
                    ? 'border-blue-600 shadow-lg ring-1 ring-blue-600/20' 
                    : 'border-border'
                }`}
                data-testid={`card-service-${index}`}
              >
                {service.featured && (
                  <div className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full w-fit mb-4">
                    Plus Populaire
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{service.name}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    service.featured 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-secondary hover:bg-secondary/90'
                  }`}
                  onClick={goToContactForm}
                  data-testid={`button-service-${index}`}
                >
                  Demander un Devis
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
              Succès Logistiques
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comment nous avons optimisé les flux logistiques de nos clients
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
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
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
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
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
      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Optimisez Votre Logistique Maritime
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Devis personnalisé sous 24h avec tarifs négociés et service dédié. 
              Expertise logistique pour réussir vos projets import/export.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  data-testid="button-contact-form"
                >
                  Demander un Devis
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100 border-0"
                data-testid="button-tracking"
              >
                Suivre Expédition
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}