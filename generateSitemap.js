// generateSitemap.js
import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

// ✅ Your domain
const sitemap = new SitemapStream({ hostname: "https://chameleogfxstudio.com" });

const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/About-us", changefreq: "monthly", priority: 0.8 },
  { url: "/service", changefreq: "monthly", priority: 0.8 },
  { url: "/portfolio", changefreq: "monthly", priority: 0.7 },
  { url: "/industries-we-serve", changefreq: "monthly", priority: 0.7 },
  { url: "/blogs", changefreq: "monthly", priority: 0.7 },
  { url: "/contact-us", changefreq: "monthly", priority: 0.7 },
  { url: "/privacy-policy", changefreq: "monthly", priority: 0.7 },
  { url: "/terms-and-conditions", changefreq: "monthly", priority: 0.7 },
  { url: "/sitemap", changefreq: "monthly", priority: 0.7 },
  { url: "/faq", changefreq: "monthly", priority: 0.7 },

  // ✅ Graphics Design Services
  { url: "/logo-design-company-ahmedabad", changefreq: "monthly", priority: 0.7 },
  { url: "/branding-and-identity-design", changefreq: "monthly", priority: 0.7 },
  { url: "/social-media-banner-design", changefreq: "monthly", priority: 0.7 },
  { url: "/flyer-design", changefreq: "monthly", priority: 0.7 },
  { url: "/brochure-design", changefreq: "monthly", priority: 0.7 },
  { url: "/poster-design", changefreq: "monthly", priority: 0.7 },
  { url: "/hoarding-design", changefreq: "monthly", priority: 0.7 },
  { url: "/packaging-design", changefreq: "monthly", priority: 0.7 },
  { url: "/advertising-design", changefreq: "monthly", priority: 0.7 },
  { url: "/newsletter-design", changefreq: "monthly", priority: 0.7 },
  { url: "/infographic-design", changefreq: "monthly", priority: 0.7 },
  { url: "/business-card-design", changefreq: "monthly", priority: 0.7 },
  { url: "/presentation-design", changefreq: "monthly", priority: 0.7 },
  { url: "/magazine-and-booklet-design", changefreq: "monthly", priority: 0.7 },
  { url: "/custom-illustration-design", changefreq: "monthly", priority: 0.7 },
  { url: "/event-invitation-design", changefreq: "monthly", priority: 0.7 },
  { url: "/menu-design", changefreq: "monthly", priority: 0.7 },
  { url: "/signage-design", changefreq: "monthly", priority: 0.7 },
  { url: "/corporate-profile-design", changefreq: "monthly", priority: 0.7 },
  { url: "/annual-report-design", changefreq: "monthly", priority: 0.7 },
  { url: "/digital-ad-design", changefreq: "monthly", priority: 0.7 },
  { url: "/trade-show-booth-design", changefreq: "monthly", priority: 0.7 },
  { url: "/motion-graphics-design", changefreq: "monthly", priority: 0.7 },
  { url: "/e-book-design", changefreq: "monthly", priority: 0.7 },

  // ✅ UI/UX Design
  { url: "/website-ui-ux-design", changefreq: "monthly", priority: 0.7 },
  { url: "/ios-ui-ux-design", changefreq: "monthly", priority: 0.7 },
  { url: "/android-ui-ux-design", changefreq: "monthly", priority: 0.7 },
  { url: "/backend-ui-ux-design", changefreq: "monthly", priority: 0.7 },
  { url: "/erp-ui-ux-design", changefreq: "monthly", priority: 0.7 },

  // ✅ HTML/CSS
  { url: "/html-css", changefreq: "monthly", priority: 0.7 },
  { url: "/custom-html-website-design", changefreq: "monthly", priority: 0.7 },
  { url: "/template-customization", changefreq: "monthly", priority: 0.7 },
  { url: "/responsive-web-design", changefreq: "monthly", priority: 0.7 },
  { url: "/cross-browser-compatibility-testing", changefreq: "monthly", priority: 0.7 },
  { url: "/website-redesign-and-revamp", changefreq: "monthly", priority: 0.7 },

  // ✅ Webflow
  { url: "/webflow", changefreq: "monthly", priority: 0.7 },
  { url: "/custom-webflow-development", changefreq: "monthly", priority: 0.7 },
  { url: "/webflow-theme-development", changefreq: "monthly", priority: 0.7 },
  { url: "/figma-to-webflow", changefreq: "monthly", priority: 0.7 },
  { url: "/photoshop-to-webflow", changefreq: "monthly", priority: 0.7 },
  { url: "/html-to-webflow", changefreq: "monthly", priority: 0.7 },
  { url: "/webflow-integration", changefreq: "monthly", priority: 0.7 },

  // ✅ WordPress
  { url: "/wordpress", changefreq: "monthly", priority: 0.7 },
  { url: "/custom-wordpress-website-design", changefreq: "monthly", priority: 0.7 },
  { url: "/woocommerce-development", changefreq: "monthly", priority: 0.7 },
  { url: "/wordpress-seo-optimization", changefreq: "monthly", priority: 0.7 },
  { url: "/wordpress-migration-and-upgrades", changefreq: "monthly", priority: 0.7 },
  { url: "/buddyboss-design-and-development", changefreq: "monthly", priority: 0.7 },
  { url: "/learndash-design-and-development", changefreq: "monthly", priority: 0.7 },
  { url: "/dokan-design-and-development", changefreq: "monthly", priority: 0.7 },
  { url: "/responsive-wordpress-design", changefreq: "monthly", priority: 0.7 },
  { url: "/figma-to-wordpress", changefreq: "monthly", priority: 0.7 },
  { url: "/photoshop-to-wordpress", changefreq: "monthly", priority: 0.7 },
  { url: "/html-to-wordpress", changefreq: "monthly", priority: 0.7 },
  { url: "/theme-and-plugin-customization", changefreq: "monthly", priority: 0.7 },
  { url: "/woocommerce-design-and-development", changefreq: "monthly", priority: 0.7 },
  { url: "/wordpress-website-maintenance-and-support", changefreq: "monthly", priority: 0.7 },

  // ✅ Shopify
  { url: "/shopify", changefreq: "monthly", priority: 0.7 },
  { url: "/custom-shopify-store-design", changefreq: "monthly", priority: 0.7 },
  { url: "/shopify-theme-customization", changefreq: "monthly", priority: 0.7 },
  { url: "/shopify-seo-optimization", changefreq: "monthly", priority: 0.7 },
  { url: "/figma-to-shopify", changefreq: "monthly", priority: 0.7 },
  { url: "/photoshop-to-shopify", changefreq: "monthly", priority: 0.7 },
  { url: "/html-to-shopify", changefreq: "monthly", priority: 0.7 },
  { url: "/shopify-app-integration-and-development", changefreq: "monthly", priority: 0.7 },
  { url: "/shopify-ecommerce-management-and-support", changefreq: "monthly", priority: 0.7 },

  // ✅ React.js
  { url: "/react-js", changefreq: "monthly", priority: 0.7 },
  { url: "/figma-to-react", changefreq: "monthly", priority: 0.7 },
  { url: "/photoshop-to-react", changefreq: "monthly", priority: 0.7 },
  { url: "/html-to-react", changefreq: "monthly", priority: 0.7 },
  { url: "/reactjs-performance-optimization", changefreq: "monthly", priority: 0.7 },
  { url: "/custom-reactjs-web-application-development", changefreq: "monthly", priority: 0.7 },
  { url: "/reactjs-component-development-and-integration", changefreq: "monthly", priority: 0.7 },
  { url: "/reactjs-mobile-app-development", changefreq: "monthly", priority: 0.7 },
  { url: "/reactjs-ssr-website-development", changefreq: "monthly", priority: 0.7 },
  { url: "/reactjs-ui-ux-design-and-development", changefreq: "monthly", priority: 0.7 },

  // ✅ Digital Marketing
  { url: "/digital-marketing", changefreq: "monthly", priority: 0.7 },
  { url: "/search-engine-optimization", changefreq: "monthly", priority: 0.7 },
  { url: "/social-media-marketing", changefreq: "monthly", priority: 0.7 },
  { url: "/email-marketing", changefreq: "monthly", priority: 0.7 },
  { url: "/google-ads", changefreq: "monthly", priority: 0.7 },
  { url: "/meta-ads", changefreq: "monthly", priority: 0.7 },

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


];

const generate = async () => {
  for (const page of pages) {
    sitemap.write(page);
  }

  sitemap.end();

  const data = await streamToPromise(sitemap);
  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("✅ Sitemap generated: public/sitemap.xml");
};

generate();
