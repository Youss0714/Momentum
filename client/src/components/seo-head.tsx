import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'service';
  ogImage?: string;
  ogImageAlt?: string;
  structuredData?: object;
  noindex?: boolean;
}

const DEFAULT_DOMAIN = 'https://momentumgr.com';
const DEFAULT_IMAGE = '/images/momentum-group-og.jpg';

export default function SEOHead({
  title,
  description,
  keywords = 'développement applications, sites web professionnels, trading formation, transit maritime, solutions digitales, momentum group',
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  ogImageAlt = 'Momentum Group - Solutions Digitales Professionnelles',
  structuredData,
  noindex = false
}: SEOProps) {
  
  // Construire l'URL canonique complète
  const fullCanonical = canonical ? `${DEFAULT_DOMAIN}${canonical}` : DEFAULT_DOMAIN;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${DEFAULT_DOMAIN}${ogImage}`;
  
  // Titre optimisé SEO avec domain branding
  const fullTitle = title.includes('Momentum Group') ? title : `${title} | Momentum Group`;
  
  useEffect(() => {
    // Mise à jour du titre de la page
    document.title = fullTitle;
    
    // Fonction pour mettre à jour ou créer une meta tag
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Fonction pour mettre à jour ou créer un lien
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };
    
    // Meta tags basiques
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Robots
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }
    
    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', fullCanonical, true);
    updateMetaTag('og:image', fullOgImage, true);
    updateMetaTag('og:image:alt', ogImageAlt, true);
    updateMetaTag('og:site_name', 'Momentum Group', true);
    updateMetaTag('og:locale', 'fr_FR', true);
    
    // Twitter Cards
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullOgImage);
    updateMetaTag('twitter:image:alt', ogImageAlt);
    
    // URL canonique
    updateLinkTag('canonical', fullCanonical);
    
    // Données structurées Schema.org
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
    
    // Cleanup function
    return () => {
      // Optionnel: nettoyage si nécessaire
    };
  }, [fullTitle, description, keywords, fullCanonical, ogType, fullOgImage, ogImageAlt, structuredData, noindex]);

  return null; // Ce composant ne rend rien visuellement
}

// Schémas pré-définis pour les données structurées
export const createOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Momentum Group",
  "url": "https://momentumgr.com",
  "logo": "https://momentumgr.com/images/momentum-group-logo.png",
  "description": "Solutions digitales professionnelles : développement d'applications, sites web, trading & formation, transit maritime",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "French"
  },
  "sameAs": [
    // Ajouter les réseaux sociaux si disponibles
  ]
});

export const createServiceSchema = (serviceName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "Momentum Group",
    "url": "https://momentumgr.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "France"
  },
  ...(price && {
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "EUR"
    }
  })
});

export const createWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Momentum Group",
  "url": "https://momentumgr.com",
  "description": "Solutions digitales professionnelles pour entreprises",
  "inLanguage": "fr-FR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://momentumgr.com/recherche?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
});