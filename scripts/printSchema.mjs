import productSchemas from '../src/productSchemas.js';

function buildEnhancedSchema(slug, origin = 'https://chameleogfxstudio.com'){
  const schema = productSchemas[slug];
  if(!schema) return null;
  const currentUrl = `${origin}/${slug}`;
  return {
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
    } : null,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    }
  };
}

const samples = [
  'graphic-design-company-in-ahmedabad',
  'logo-design-company-ahmedabad',
  'flyer-design'
];

for(const s of samples){
  const out = buildEnhancedSchema(s);
  if(!out){
    console.error('No schema for', s);
    continue;
  }
  console.log('---', s, '---');
  console.log(JSON.stringify(out, null, 2));
}
