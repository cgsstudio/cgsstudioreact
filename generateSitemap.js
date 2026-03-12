// generateSitemap.js
import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

// ✅ Your domain
const sitemap = new SitemapStream({ hostname: "https://www.chameleogfxstudio.com" });

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about-us/", changefreq: "monthly", priority: 0.8 },
  { url: "/services/", changefreq: "monthly", priority: 0.8 },
  { url: "/case-studies/", changefreq: "monthly", priority: 0.7 },
  { url: "/industries-we-serve/", changefreq: "monthly", priority: 0.7 },
  { url: "/blog/", changefreq: "monthly", priority: 0.7 },
  { url: "/contact-us/", changefreq: "monthly", priority: 0.7 },
  { url: "/privacy-policy/", changefreq: "monthly", priority: 0.7 },
  { url: "/terms-and-conditions/", changefreq: "monthly", priority: 0.7 },
  { url: "/sitemap/", changefreq: "monthly", priority: 0.7 },
  { url: "/faq/", changefreq: "monthly", priority: 0.7 },

  // ✅ Graphics Design Services
  { url: "/services/graphic-design/logo-design-company", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/branding-and-identity-design-agency", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/social-media-banner-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/flyer-design-services", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/brochure-design-company", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/poster-design-services", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/hoarding-design-services", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/packaging-design-agency", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/advertising-design-agency", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/newsletter-design-service", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/infographic-design-services", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/visiting-card-design-service", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/presentation-design-services", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/magazine-and-booklet-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/custom-illustration-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/event-invitation-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/menu-design-service", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/signage-design-service", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/corporate-profile-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/annual-report-design-agency", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/digital-ad-design-agency", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/exhibition-booth-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/motion-graphics-design-agency", changefreq: "monthly", priority: 0.7 },
  { url: "/services/graphic-design/e-book-design-service", changefreq: "monthly", priority: 0.7 },

  // ✅ UI/UX Design
  { url: "/services/ui-ux-design/website-ui-ux-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/ui-ux-design/ios-ui-ux-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/ui-ux-design/android-ui-ux-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/ui-ux-design/backend-ui-ux-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/ui-ux-design/erp-ui-ux-design", changefreq: "monthly", priority: 0.7 },

  // ✅ HTML/CSS Web Development
  { url: "/services/web-development/html-css-development", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/custom-html-website-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/template-customization", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/responsive-web-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/cross-browser-compatibility-testing", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/website-redesign-and-revamp", changefreq: "monthly", priority: 0.7 },

  // ✅ Webflow
  { url: "/services/web-development/webflow-development", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/custom-webflow-development", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/webflow-theme-development", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/figma-to-webflow", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/photoshop-to-webflow", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/html-to-webflow", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/webflow-integration", changefreq: "monthly", priority: 0.7 },

  // ✅ WordPress
  { url: "/services/web-development/wordpress-development", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/custom-wordpress-website-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/woocommerce-development", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/wordpress-seo-optimization", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/wordpress-migration-and-upgrades", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/buddyboss-design-and-development", changefreq: "monthly", priority: 0.7 },

  // ✅ Shopify
  { url: "/services/web-development/shopify-development", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/custom-shopify-store-design", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/shopify-theme-customization", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/shopify-seo-optimization", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/figma-to-shopify", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/photoshop-to-shopify", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/html-to-shopify", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/shopify-app-integration-and-development", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/shopify-ecommerce-management-and-support", changefreq: "monthly", priority: 0.7 },

  // ✅ React.js
  { url: "/services/web-development/react-js-development", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/figma-to-react", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/photoshop-to-react", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/html-to-react", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/reactjs-performance-optimization", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/custom-reactjs-web-application-development", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/reactjs-component-development-and-integration", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/reactjs-mobile-app-development", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/reactjs-ssr-website-development", changefreq: "monthly", priority: 0.7 },
  { url: "/services/web-development/reactjs-ui-ux-design-and-development", changefreq: "monthly", priority: 0.7 },

  // ✅ Digital Marketing
  { url: "/services/digital-marketing", changefreq: "monthly", priority: 0.7 },
  { url: "/services/digital-marketing/search-engine-optimization", changefreq: "monthly", priority: 0.7 },
  { url: "/services/digital-marketing/social-media-marketing", changefreq: "monthly", priority: 0.7 },
  { url: "/services/digital-marketing/email-marketing", changefreq: "monthly", priority: 0.7 },
  { url: "/services/digital-marketing/google-ads", changefreq: "monthly", priority: 0.7 },
  { url: "/services/digital-marketing/meta-ads", changefreq: "monthly", priority: 0.7 },

  // ✅ Blog Posts
  { url: "/blog/how-ai-is-revolutionizing-seo-in-2025-human-centric-guide-for-business-growth", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/5-ui-ux-mistakes-that-are-hurting-websites-performance", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/seo-for-fashion-retailers", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/google-ads-vs-social-media-ads-choose-the-best-platform-for-business", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/power-of-seo-strategies", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/seo-strategies-to-boost-website-google-ranking", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-to-build-a-unique-and-memorable-brand-identity", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-to-improve-your-company-website-seo-ranking", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/graphic-design-trends-for-2024", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-to-create-a-brand-identity-that-stands-out", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/e-commerce-businesses-can-thrive-with-digital-marketing-in-2024", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-to-optimize-your-website-for-increasing-clicks", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/the-beginners-guide-to-seo-friendly-website-development", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-to-make-the-e-commerce-websites-efficient-for-better-selling-and-good-seo", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/e-commerce-website-design-trends-in-2024-you-should-know", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-a-web-design-and-development-agency-in-ahmedabad-india-can-revolutionize-your-business-for-the-digital-era", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-seo-boosts-online-visibility-for-dubai-tourism-and-hospitality", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/professional-logo-designer-can-help-your-brand-achieve-long-term-success", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/seo-ai-to-drive-targeted-traffic-and-leads-for-online-stores", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/right-ecommerce-platform-for-your-business", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-to-design-high-converting-infographics-for-amazon-a-plus-content", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/seo-strategies-for-healthcare", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/why-ui-ux-design-is-crucial-for-android-app", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/react-performance-optimization-techniques-for-faster-apps", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/businesses-should-consider-custom-shopify-development", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/custom-coded-websites-boost-ux-conversions-for-indian-businesses", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-to-prepare-your-website-for-voice-search-optimization-2025", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/way-to-convert-an-html-website-to-wordpress", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-webflow-enhances-speed-security-and-scalability-for-businesses", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-AI-personalization-affects-search-results-&-CTR", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/best-seo-agency-in-bangalore-for-small-businesses", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/demand-for-reactjs-developers-bangalore", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-ai-is-transforming-ui-ux-design-in-bangalore-tech-scene", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/digital-marketing-trends-bangalore-startups", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/google-gemini-transforming-design-2025", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/wordpress-security-best-practices-bangalore", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/rise-of-ai-in-search-bangalore-digital-marketers", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/seo-for-bangalore-saas-tech-companies-winning-strategies", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-tech-companies-in-bangalore-are-leveraging-web3-for-growth", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/ui-ux-case-study-landing-page-redesign", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-ai-automation-tools-are-transforming-it-operations-2025", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/the-best-ai-tools-for-software-development-teams-in-2025", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/it-infrastructure-automation-using-ai-future-of-devops", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/ui-ux-design-trends-transforming-indian-businesses-2025", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/how-ai-helps-it-departments-reduce-costs-increase-efficiency", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/logo-design-fundamentals-ai-tools-guide", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/ai-in-cloud-management-monitoring-cost-control-scaling", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/wordpress-development-workflow-local-to-production", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/ai-powered-qa-testing-tools-future-software-quality", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/future-of-ui-ux-design-human-centered-ai", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/linkedin-marketing-for-b2b-brands-complete-guide", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/human-ai-collaboration-in-design", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/strong-branding-for-small-businesses", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/top-graphic-design-trends-2026", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/top-shopify-e-commerce-seo-strategies-for-2026", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/future-ready-web-development-tools-2026", changefreq: "monthly", priority: 0.6 },
  { url: "/blog/eeat-in-ai-search-era", changefreq: "monthly", priority: 0.6 },
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
