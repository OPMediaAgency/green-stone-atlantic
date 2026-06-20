import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = '/og-image.jpg', 
  url = 'https://greenstoneatlantic.ca',
  type = 'website'
}) => {
  const fullTitle = title.includes(BUSINESS_INFO.name)
    ? title
    : `${title} | ${BUSINESS_INFO.name}`;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LandscapingService",
    "name": "Green Stone Atlantic",
    "description": "Halifax's premium landscaping and hardscaping company. Specializing in patios, walls, and luxury lawn care.",
    "url": "https://greenstoneatlantic.ca",
    "telephone": BUSINESS_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Halifax",
      "addressRegion": "NS",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.6488,
      "longitude": -63.5752
    },
    "potentialAction": {
      "@type": "QuoteAction",
      "target": "https://greenstoneatlantic.ca/quote"
    },
    "openingHours": "Mo,Tu,We,Th,Fr 08:00-18:00",
    "areaServed": "Halifax Regional Municipality"
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};
