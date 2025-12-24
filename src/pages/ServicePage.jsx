import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import productSchemas from '../productSchemas';

const ServicePage = () => {
  const { serviceId } = useParams();
  
  // Create schema data
  const schemaData = useMemo(() => {
    if (!serviceId || !productSchemas[serviceId]) return null;
    
    const schema = productSchemas[serviceId];
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    
    return {
      ...schema,
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': `${currentUrl}#product`,
      url: currentUrl,
      name: schema.name || 'Product Name',
      description: schema.description || 'Professional service provided by Chameleo GFX Studio',
      image: schema.image || `${origin}/logo.png`,
      brand: {
        '@type': 'Brand',
        name: 'Chameleo GFX Studio'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '0',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
        url: currentUrl,
        ...(schema.offers || {})
      },
      aggregateRating: schema.aggregateRating ? {
        '@type': 'AggregateRating',
        ratingValue: schema.aggregateRating.ratingValue || '5.0',
        reviewCount: schema.aggregateRating.reviewCount || '25',
        bestRating: '5',
        worstRating: '1'
      } : {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '25',
        bestRating: '5',
        worstRating: '1'
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': currentUrl
      }
    };
  }, [serviceId]);
  
  return (
    <div className="service-page">
      {/* Add JSON-LD to head */}
      {schemaData && (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        </Helmet>
      )}
      
      {/* Your service page content here */}
      <h1>{serviceId ? serviceId.replace(/-/g, ' ') : 'Service Page'}</h1>
    </div>
  );
};

export default ServicePage;
