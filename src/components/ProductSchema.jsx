import { useLocation, useParams } from 'react-router-dom';
import productSchemas from '../productSchemas';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const ProductSchema = () => {
  const location = useLocation();
  const { serviceId } = useParams();

  const rawPathSegment = serviceId || location.pathname.split('/').filter(Boolean).pop();
  const path = rawPathSegment ? String(rawPathSegment).toLowerCase() : '';
  const schema = productSchemas[path];

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const schemaType = schema?.['@type'] || 'Product';

  const enhancedSchema = !schema
    ? null
    : schemaType === 'Service'
      ? {
          '@context': 'https://schema.org',
          ...schema,
        }
      : {
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
            name: 'Chameleo GFX Studio',
          },
          offers: {
            '@type': 'Offer',
            priceCurrency: 'INR',
            price: '0',
            priceValidUntil: '2025-12-31',
            availability: 'https://schema.org/InStock',
            url: currentUrl,
            ...(schema.offers || {}),
          },
          aggregateRating: schema.aggregateRating
            ? {
                '@type': 'AggregateRating',
                ratingValue: schema.aggregateRating.ratingValue || '5.0',
                reviewCount: schema.aggregateRating.reviewCount || '25',
                bestRating: '5',
                worstRating: '1',
              }
            : {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '25',
                bestRating: '5',
                worstRating: '1',
              },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': currentUrl,
          },
        };

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    if (!enhancedSchema) {
      console.log(`No schema found for path: ${path}`);
      return;
    }

    console.log('Schema for', path, ':', enhancedSchema);
    try {
      JSON.stringify(enhancedSchema);
    } catch (e) {
      console.error('Invalid schema:', e);
    }
  }, [enhancedSchema, path]);

  if (!enhancedSchema) {
    return null;
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(enhancedSchema)}
      </script>
    </Helmet>
  );
};

export default ProductSchema;
