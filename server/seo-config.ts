// Configuration SEO côté serveur pour chaque route
export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogType: 'website' | 'article' | 'service';
  ogImage?: string;
  ogImageAlt?: string;
  structuredData?: object;
}

const DEFAULT_DOMAIN = 'https://momentumgr.com';
const DEFAULT_IMAGE = '/images/momentum-group-og.jpg';

export const seoRoutes: Record<string, SEOData> = {
  '/': {
    title: 'Momentum Group - Solutions Digitales Professionnelles',
    description: 'Momentum Group offre des services experts en développement d\'applications mobiles et desktop, création de sites web professionnels SEO, trading & formation personnalisée, et conseil en transit maritime. Transformez votre entreprise avec nos solutions digitales innovantes.',
    keywords: 'développement applications mobiles, sites web professionnels, SEO, trading formation, transit maritime, solutions digitales France, Momentum Group, développement web, applications iOS Android',
    canonical: '/',
    ogType: 'website',
    ogImage: DEFAULT_IMAGE,
    ogImageAlt: 'Momentum Group - Solutions Digitales Professionnelles',
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
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
          }
        },
        {
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
        }
      ]
    }
  },

  '/developpement-applications': {
    title: 'Développement d\'Applications Mobiles et Desktop - Momentum Group',
    description: 'Développement d\'applications mobiles natives iOS et Android, applications desktop cross-platform et PWA modernes. Solutions complètes avec UI/UX personnalisé, intégrations API, sécurité RGPD et performances optimales. Devis gratuit sous 48h.',
    keywords: 'développement application mobile, application iOS Android, développement desktop, application native, React Native, PWA, développement logiciel, intégration API, sécurité RGPD, Momentum Group',
    canonical: '/developpement-applications',
    ogType: 'service',
    ogImage: DEFAULT_IMAGE,
    ogImageAlt: 'Développement d\'Applications Mobiles et Desktop',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Développement d'Applications Mobiles et Desktop",
      "description": "Services experts en développement d'applications natives iOS et Android, applications desktop multiplateformes, et applications web progressives. Solutions sur mesure avec intégrations API, sécurité avancée et interface utilisateur intuitive.",
      "provider": {
        "@type": "Organization",
        "name": "Momentum Group",
        "url": "https://momentumgr.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "offers": {
        "@type": "Offer",
        "price": "À partir de 1 000€",
        "priceCurrency": "EUR"
      }
    }
  },

  '/sites-web-professionnels': {
    title: 'Création de Sites Web Professionnels SEO - Momentum Group',
    description: 'Création de sites web professionnels responsive avec référencement SEO optimisé, performances ultra-rapides et sécurité renforcée. Sites vitrines, business et e-commerce sur mesure. Hébergement inclus, formation équipe et support prioritaire.',
    keywords: 'création site web professionnel, site internet entreprise, développement web SEO, site responsive, e-commerce, site vitrine, WordPress, Shopify, référencement naturel, Momentum Group',
    canonical: '/sites-web-professionnels',
    ogType: 'service',
    ogImage: DEFAULT_IMAGE,
    ogImageAlt: 'Création de Sites Web Professionnels',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Création de Sites Web Professionnels",
      "description": "Création de sites web professionnels responsive avec SEO optimisé, performances élevées et sécurité renforcée. Sites vitrines, business et e-commerce avec CMS intégré, analytics et formation incluse.",
      "provider": {
        "@type": "Organization",
        "name": "Momentum Group",
        "url": "https://momentumgr.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "offers": {
        "@type": "Offer",
        "price": "À partir de 300€",
        "priceCurrency": "EUR"
      }
    }
  },

  '/trading-formation': {
    title: 'Formation Trading et Investissement - Momentum Group',
    description: 'Formation trading complète avec coaching personnalisé, analyse technique professionnelle et gestion des risques. Programmes débutant à expert avec certification. Simulateur de trading et support 24/7. Devenez trader rentable avec nos méthodes éprouvées.',
    keywords: 'formation trading, investissement bourse, coaching trading, analyse technique, gestion risques, devenir trader, formation finance, bourse débutant, stratégies trading, Momentum Group',
    canonical: '/trading-formation',
    ogType: 'service',
    ogImage: DEFAULT_IMAGE,
    ogImageAlt: 'Formation Trading et Investissement',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Formation Trading et Investissement",
      "description": "Formation complète en trading et investissement financier avec coaching personnalisé, analyse technique, gestion des risques et certification professionnelle. Programmes adaptés du débutant au trader confirmé.",
      "provider": {
        "@type": "Organization",
        "name": "Momentum Group",
        "url": "https://momentumgr.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "offers": {
        "@type": "Offer",
        "price": "À partir de 300€",
        "priceCurrency": "EUR"
      }
    }
  },

  '/transit-maritime': {
    title: 'Transit Maritime et Commerce International - Momentum Group',
    description: 'Services experts en transit maritime, import/export Ghana-Chine, dédouanement et logistique internationale. Transport FCL/LCL, gestion contractuelle, formalités douanières et tracking complet. Solutions sur mesure pour votre commerce international.',
    keywords: 'transit maritime, import export, commerce international, dédouanement, logistique, fret maritime, Ghana Chine, transport international, FCL LCL, Momentum Group',
    canonical: '/transit-maritime',
    ogType: 'service',
    ogImage: DEFAULT_IMAGE,
    ogImageAlt: 'Transit Maritime et Commerce International',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Transit Maritime et Commerce International",
      "description": "Services complets de transit maritime, import/export, dédouanement et logistique internationale. Expertise Ghana-Chine avec gestion contractuelle et transport multimodal sécurisé.",
      "provider": {
        "@type": "Organization",
        "name": "Momentum Group",
        "url": "https://momentumgr.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "offers": {
        "@type": "Offer",
        "price": "Sur devis",
        "priceCurrency": "EUR"
      }
    }
  }
};

export function getSEOData(path: string): SEOData {
  return seoRoutes[path] || seoRoutes['/'];
}

export function generateMetaTags(seoData: SEOData): string {
  const fullCanonical = `${DEFAULT_DOMAIN}${seoData.canonical}`;
  const fullOgImage = seoData.ogImage?.startsWith('http') ? seoData.ogImage : `${DEFAULT_DOMAIN}${seoData.ogImage}`;

  return `
    <title>${seoData.title}</title>
    <meta name="description" content="${seoData.description}" />
    <meta name="keywords" content="${seoData.keywords}" />
    <link rel="canonical" href="${fullCanonical}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${seoData.title}" />
    <meta property="og:description" content="${seoData.description}" />
    <meta property="og:type" content="${seoData.ogType}" />
    <meta property="og:url" content="${fullCanonical}" />
    <meta property="og:image" content="${fullOgImage}" />
    <meta property="og:image:alt" content="${seoData.ogImageAlt || seoData.title}" />
    <meta property="og:site_name" content="Momentum Group" />
    <meta property="og:locale" content="fr_FR" />
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seoData.title}" />
    <meta name="twitter:description" content="${seoData.description}" />
    <meta name="twitter:image" content="${fullOgImage}" />
    <meta name="twitter:image:alt" content="${seoData.ogImageAlt || seoData.title}" />
    
    <!-- Données structurées -->
    ${seoData.structuredData ? `<script type="application/ld+json">${JSON.stringify(seoData.structuredData)}</script>` : ''}
  `;
}