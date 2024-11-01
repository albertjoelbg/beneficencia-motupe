import ogImageSrc from "@images/social.jpg";

export const SITE = {
  title: "Sociedad de Beneficencia de Motupe",
  tagline: "Top-quality Hardware Tools",
  description: "Somos una organización que brinda servicios comunitarios y en beneficio de los más" +
    " desfavorecidos.",
  description_short: "Brindamos servicios comunitarios y en beneficio de los más desfavorecidos",
  url: "https://beneficencia-motupe.vercel.app",
  author: "Albert Bonilla Guerrero"
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description
    }
  }
};

export const OG = {
  locale: "es_PE",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Trabajamos junto con el pueblo`,
  description: "Somos una organización que brinda servicios comunitarios y en beneficio de los más" +
    " desfavorecidos",
  image: ogImageSrc
};
