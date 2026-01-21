import { useLocation, useParams } from 'react-router-dom';
import productSchemas from '../productSchemas';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const ProductSchema = () => {
  const location = useLocation();
  const { serviceId } = useParams();

  // Use the serviceId from URL params if available, otherwise get last path segment
  const rawPathSegment = serviceId || location.pathname.split('/').filter(Boolean).pop();
  const path = rawPathSegment ? String(rawPathSegment).toLowerCase() : '';

  // Find the schema for the current path (case-insensitive)
  const schema = productSchemas[path];

  // Only render the schema if it exists for the current path
  if (!schema) {
    if (process.env.NODE_ENV === 'development') {
      console.log(`No schema found for path: ${path}`);
    }
    return null;
  }

  // Get current URL
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  // Determine schema type
  const schemaType = schema['@type'] || 'Product';

  let enhancedSchema;

  if (schemaType === 'Service') {
    enhancedSchema = {
      '@context': 'https://schema.org',
      ...schema
    };
  } else {
    // Default to Product logic with enhancements
    enhancedSchema = {
      ...schema,
      '@context': 'https://schema.org/',
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
  }

  // Log schema in development for debugging
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Schema for', path, ':', enhancedSchema);
      // Validate schema
      try {
        JSON.stringify(enhancedSchema);
      } catch (e) {
        console.error('Invalid schema:', e);
      }
    }
  }, [enhancedSchema, path]);

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(enhancedSchema)}
      </script>
    </Helmet>
  );
};

export default ProductSchema;
