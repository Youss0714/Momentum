import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import SEOHead, { createOrganizationSchema, createWebSiteSchema } from "@/components/seo-head";

export default function Home() {
  const organizationSchema = createOrganizationSchema();
  const websiteSchema = createWebSiteSchema();
  
  // Schema combiné pour la page d'accueil
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Momentum Group - Solutions Digitales Professionnelles"
        description="Momentum Group offre des services experts en développement d'applications mobiles et desktop, création de sites web professionnels SEO, trading & formation personnalisée, et conseil en transit maritime. Transformez votre entreprise avec nos solutions digitales innovantes."
        keywords="développement applications mobiles, sites web professionnels, SEO, trading formation, transit maritime, solutions digitales France, Momentum Group, développement web, applications iOS Android"
        canonical="/"
        ogType="website"
        structuredData={structuredData}
      />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
