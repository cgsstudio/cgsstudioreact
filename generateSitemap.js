// generateSitemap.js
import fs from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

// ✅ Your domain
const sitemap = new SitemapStream({ hostname: "https://chameleogfxstudio.com" });

const pages = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about-us/", changefreq: "weekly", priority: 0.7 },
  { url: "/services/", changefreq: "weekly", priority: 0.7 },
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
  { url: "/services/graphic-design", changefreq: "weekly", priority: 0.7 },
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
  { url: "/services/ui-ux-design", changefreq: "weekly", priority: 0.7 },
  { url: "/services/ui-ux-design/website-ui-ux-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/ui-ux-design/ios-ui-ux-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/ui-ux-design/android-ui-ux-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/ui-ux-design/backend-ui-ux-design-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/ui-ux-design/erp-ui-ux-design-company", changefreq: "weekly", priority: 0.7 },

  // ✅ Web Development
  { url: "/services/web-development", changefreq: "weekly", priority: 0.7 },
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
  { url: "/services/digital-marketing", changefreq: "weekly", priority: 0.7 },
  { url: "/services/digital-marketing/seo-agency", changefreq: "weekly", priority: 0.7 },
  { url: "/services/digital-marketing/seo-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/digital-marketing/social-media-marketing-agency", changefreq: "weekly", priority: 0.7 },
  { url: "/services/digital-marketing/social-media-marketing", changefreq: "weekly", priority: 0.7 },
  { url: "/services/digital-marketing/email-marketing-company", changefreq: "weekly", priority: 0.7 },
  { url: "/services/digital-marketing/google-ads-management-agency", changefreq: "weekly", priority: 0.7 },
  { url: "/services/digital-marketing/meta-ads-management-company", changefreq: "weekly", priority: 0.7 },

  // ✅ Blog Posts will be added dynamically below
];

// ✅ Dynamic Blog Routes from BlogData.js
const blogDataPath = "./src/components/blog/BlogData.js";
if (fs.existsSync(blogDataPath)) {
  const blogDataContent = fs.readFileSync(blogDataPath, "utf-8");
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  let match;
  while ((match = slugRegex.exec(blogDataContent)) !== null) {
    const slug = match[1];
    pages.push({ url: `/blog/${slug}`, changefreq: "weekly", priority: 0.6 });
  }
}

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
