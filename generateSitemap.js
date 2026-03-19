// generateSitemap.js
import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

// ✅ Your domain
const sitemap = new SitemapStream({ hostname: "https://chameleogfxstudio.com" });

const pages = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about-us/", changefreq: "weekly", priority: 0.8 },
  { url: "/services/", changefreq: "weekly", priority: 0.8 },
  { url: "/case-studies/", changefreq: "weekly", priority: 0.7 },
  { url: "/industries-we-serve/", changefreq: "weekly", priority: 0.7 },
  { url: "/blog/", changefreq: "weekly", priority: 0.7 },
  { url: "/blog-grid", changefreq: "weekly", priority: 0.6 },
  { url: "/contact-us/", changefreq: "weekly", priority: 0.7 },
  { url: "/privacy-policy", changefreq: "weekly", priority: 0.7 },
  { url: "/terms-and-conditions", changefreq: "weekly", priority: 0.7 },
  { url: "/refund-policy", changefreq: "weekly", priority: 0.7 },
  { url: "/disclaimer", changefreq: "weekly", priority: 0.7 },
  { url: "/cookie-policy", changefreq: "weekly", priority: 0.7 },
  { url: "/sitemap", changefreq: "weekly", priority: 0.7 },
  { url: "/faq/", changefreq: "weekly", priority: 0.7 },
  { url: "/testimonial/", changefreq: "weekly", priority: 0.7 },
  { url: "/pricing/", changefreq: "weekly", priority: 0.7 },
  { url: "/team", changefreq: "weekly", priority: 0.7 },
  { url: "/niraj-mandaliya", changefreq: "weekly", priority: 0.7 },
  { url: "/dhiraj-ahuja", changefreq: "weekly", priority: 0.7 },
  { url: "/portfolio-two", changefreq: "weekly", priority: 0.7 },

  // ✅ Graphics Design Services
  { url: "/services/graphic-design", changefreq: "weekly", priority: 0.8 },
  { url: "/services/graphic-design/logo-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/branding-and-identity-design-agency-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/social-media-banner-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/flyer-design-services-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/brochure-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/poster-design-services-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/hoarding-design-services-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/packaging-design-agency-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/advertising-design-agency-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/newsletter-design-service-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/infographic-design-services-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/visiting-card-design-service-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/presentation-design-services-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/magazine-and-booklet-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/custom-illustration-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/event-invitation-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/menu-design-service-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/signage-design-service-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/corporate-profile-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/annual-report-design-agency-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/digital-ad-design-agency-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/exhibition-booth-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/motion-graphics-design-agency-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/graphic-design/e-book-design-service-company", changefreq: "weekly", priority: 0.7 },

  // ✅ UI/UX Design
  { url: "/services/ui-ux-design", changefreq: "weekly", priority: 0.8 },
  { url: "/services/ui-ux-design/website-ui-ux-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/ui-ux-design/ios-ui-ux-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/ui-ux-design/android-ui-ux-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/ui-ux-design/backend-ui-ux-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/ui-ux-design/erp-ui-ux-design-company", changefreq: "weekly", priority: 0.7 },

  // ✅ Web Development
  { url: "/services/web-development", changefreq: "weekly", priority: 0.8 },
  { url: "/services/web-development/html-css-development-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/custom-html-website-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/template-customization-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/responsive-web-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/cross-browser-compatibility-testing-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/website-redesign-and-revamp-company", changefreq: "weekly", priority: 0.7 },

  { url: "/services/web-development/webflow-development-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/custom-webflow-development-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/webflow-theme-development-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/figma-to-webflow-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/photoshop-to-webflow-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/html-to-webflow-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/webflow-integration-company", changefreq: "weekly", priority: 0.7 },

  { url: "/services/web-development/wordpress-development-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/custom-wordpress-website-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/woocommerce-development-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/wordpress-seo-optimization-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/wordpress-migration-and-upgrades-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/buddyboss-design-and-development-company", changefreq: "weekly", priority: 0.7 },

  { url: "/services/web-development/shopify-development-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/custom-shopify-store-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/shopify-theme-customization-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/shopify-seo-optimization-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/figma-to-shopify-services", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/photoshop-to-shopify-services", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/html-to-shopify-services", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/shopify-app-integration-and-development-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/shopify-ecommerce-management-and-support-company", changefreq: "weekly", priority: 0.7 },

  { url: "/services/web-development/react-js-development-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/figma-to-react-services", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/photoshop-to-react-services", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/html-to-react-services", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/reactjs-performance-optimization-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/custom-reactjs-web-application-development-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/reactjs-component-development-and-integration-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/reactjs-mobile-app-development-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/reactjs-ssr-website-development-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/web-development/reactjs-ui-ux-design-and-development-company", changefreq: "weekly", priority: 0.7 },

  // ✅ Digital Marketing
  { url: "/services/digital-marketing", changefreq: "weekly", priority: 0.8 },
  { url: "/services/digital-marketing/seo-agency", changefreq: "weekly", priority: 0.7 },
  { url: "/services/digital-marketing/social-media-marketing-agency", changefreq: "weekly", priority: 0.7 },
  { url: "/services/digital-marketing/email-marketing-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/digital-marketing/google-ads-management-agency", changefreq: "weekly", priority: 0.7 },
  { url: "/services/digital-marketing/meta-ads-management-company", changefreq: "weekly", priority: 0.7 },

  // ✅ Blog Posts
  { url: "/blog/role-of-ai-in-graphic-design", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/how-graphic-design-impacts-brand-success", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/impact-of-graphic-design-on-brand-identity", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/digital-marketing-vs-traditional-marketing", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/top-7-ways-to-drive-more-traffic-to-your-website", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/how-to-optimize-your-website-for-seo", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/why-choose-chameleo-gfx-studio-as-your-graphic-design-agency", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/tips-for-effective-logo-design", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/future-of-graphic-design-industries", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/common-ux-mistakes-to-avoid", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/understanding-colors-in-graphic-design", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/importance-of-high-quality-images-in-design", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/how-to-create-a-brand-identity-that-stands-out", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/effective-typography-tips", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/role-of-visual-storytelling-in-branding", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/minimalism-vs-maximalism-in-design", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/why-your-business-needs-a-professional-website", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/the-power-of-packaging-design", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/infographic-design-tips-to-make-complex-data-simple", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/branding-rebranding-knowing-is-it-the-right-time", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/ai-tools-for-efficiency-in-graphic-design", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/benefits-of-hiring-a-professional-graphic-design-agency", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/social-media-design-best-practices", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/user-experience-vs-user-interface", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/web-designing-impact-on-seo", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/brand-consistency-why-it-is-important", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/the-future-of-ui-ux-design", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/importance-of-white-space-in-web-design", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/how-graphic-designers-use-concept-development", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/digital-marketing-strategy-for-small-businesses", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/how-to-design-memorable-business-cards", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/psychology-of-color-in-marketing", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/the-rise-of-motion-graphics-in-digital-marketing", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/how-packaging-influences-consumer-behavior", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/visual-content-for-social-media-marketing", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/dark-ui-design-trends-and-benefits", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/brand-voice-and-graphic-design-harmony", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/ai-image-generation-impact-on-creativity", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/responsive-design-importance-for-modern-websites", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/impact-of-design-on-customer-retention", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/how-to-audit-your-brand-identity", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/web-development-trends-to-watch-in-2025", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/future-of-graphic-design-agency-ahmedabad", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/seo-optimization-in-ahmedabad-guide", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/visual-marketing-strategies-for-ahmedabad-businesses", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/hiring-ui-ux-design-agency-ahmedabad", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/local-branding-strategy-for-ahmedabad-startups", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/shopify-ecommerce-web-development-ahmedabad", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/social-media-design-trends-for-ahmedabad-brands", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/finding-the-best-graphic-design-agency-ahmedabad", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/importance-of-local-seo-for-ahmedabad-businesses", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/effective-ui-ux-design-tips-for-high-conversion", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/web-development-best-practices-for-fast-loading-sites", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/branding-identity-elements-logo-typography-color-palette", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/future-of-ai-assisted-graphic-design-services", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/importance-of-branding-identity-for-long-term-growth", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/human-ai-collaboration-in-design", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/strong-branding-for-small-businesses", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/top-graphic-design-trends-2026", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/top-shopify-e-commerce-seo-strategies-for-2026", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/future-ready-web-development-tools-2026", changefreq: "weekly", priority: 0.6 },
  { url: "/blog/eeat-in-ai-search-era", changefreq: "weekly", priority: 0.6 },
];

const generate = async () => {
  for (const page of pages) {
    sitemap.write(page);
  }

  sitemap.end();

  const data = await streamToPromise(sitemap);

  // Write to public folder (for future builds)
  fs.writeFileSync("./public/sitemap.xml", data.toString());

  // Write to dist folder (for current deployment if build already finished)
  if (fs.existsSync("./dist")) {
    fs.writeFileSync("./dist/sitemap.xml", data.toString());
  }

  console.log("✅ Sitemap generated successfully");
};

generate();
