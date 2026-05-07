import { Helmet } from "react-helmet-async";
import React from "react";
import BlogHero from "../../../components/common/BlogHero";

const sitemapData = [
  {
    title: "Main Pages",
    items: [
      { text: "Home", link: "/" },
      { text: "About Us", link: "/about-us/" },
      { text: "Services", link: "/services/" },
      { text: "Case Studies", link: "/case-studies/" },
      { text: "Industries We Serve", link: "/industries-we-serve/" },
      { text: "Blog", link: "/blog/" },
      { text: "Contact Us", link: "/contact-us/" },
      { text: "Testimonials", link: "/testimonial/" },
      { text: "Pricing", link: "/pricing/" },
      { text: "Team", link: "/team" },
      { text: "FAQ", link: "/faq/" },
    ],
  },
  {
    title: "Website Development",
    subcategories: [
      {
        subtitle: "HTML/CSS",
        items: [
          { text: "HTML/CSS Development", link: "/services/web-development/html-css-development-company" },
          { text: "Custom HTML Website Design", link: "/services/web-development/custom-html-website-design-company" },
          { text: "Template Customization", link: "/services/web-development/template-customization-company" },
          { text: "Responsive Web Design", link: "/services/web-development/responsive-web-design-company" },
          { text: "Cross-Browser Compatibility Testing", link: "/services/web-development/cross-browser-compatibility-testing-company" },
          { text: "Website Redesign and Revamp", link: "/services/web-development/website-redesign-and-revamp-company" },
        ],
      },
      {
        subtitle: "Webflow",
        items: [
          { text: "Webflow Development", link: "/services/web-development/webflow-development-company" },
          { text: "Custom Webflow Development", link: "/services/web-development/custom-webflow-development-company" },
          { text: "Webflow Theme Development", link: "/services/web-development/webflow-theme-development-company" },
          { text: "Figma to Webflow", link: "/services/web-development/figma-to-webflow-company" },
          { text: "Photoshop to Webflow", link: "/services/web-development/photoshop-to-webflow-company" },
          { text: "HTML to Webflow", link: "/services/web-development/html-to-webflow-company" },
          { text: "Webflow Integration", link: "/services/web-development/webflow-integration-company" },
        ],
      },
      {
        subtitle: "WordPress",
        items: [
          { text: "WordPress Development", link: "/services/web-development/wordpress-development-company" },
          { text: "Custom WordPress Website Design", link: "/services/web-development/custom-wordpress-website-design-company" },
          { text: "WooCommerce Development", link: "/services/web-development/woocommerce-development-company" },
          { text: "WordPress SEO Optimization", link: "/services/web-development/wordpress-seo-optimization-company" },
          { text: "WordPress Migration and Upgrades", link: "/services/web-development/wordpress-migration-and-upgrades-company" },
          { text: "BuddyBoss Design and Development", link: "/services/web-development/buddyboss-design-and-development-company" },
        ],
      },
      {
        subtitle: "Shopify",
        items: [
          { text: "Shopify Development", link: "/services/web-development/shopify-development-company" },
          { text: "Custom Shopify Store Design", link: "/services/web-development/custom-shopify-store-design-company" },
          { text: "Shopify Theme Customization", link: "/services/web-development/shopify-theme-customization-company" },
          { text: "Shopify SEO Optimization", link: "/services/web-development/shopify-seo-optimization-company" },
          { text: "Figma to Shopify", link: "/services/web-development/figma-to-shopify-services" },
          { text: "Photoshop to Shopify", link: "/services/web-development/photoshop-to-shopify-services" },
          { text: "HTML to Shopify", link: "/services/web-development/html-to-shopify-services" },
          { text: "Shopify App Integration and Development", link: "/services/web-development/shopify-app-integration-and-development-company" },
          { text: "Shopify E-commerce Management and Support", link: "/services/web-development/shopify-ecommerce-management-and-support-company" },
        ],
      },
      {
        subtitle: "React.js",
        items: [
          { text: "React.js Development", link: "/services/web-development/react-js-development-company" },
          { text: "Figma to React", link: "/services/web-development/figma-to-react-services" },
          { text: "Photoshop to React", link: "/services/web-development/photoshop-to-react-services" },
          { text: "HTML to React", link: "/services/web-development/html-to-react-services" },
          { text: "React.js Performance Optimization", link: "/services/web-development/reactjs-performance-optimization-company" },
          { text: "Custom React.js Web Application Development", link: "/services/web-development/custom-reactjs-web-application-development-company" },
          { text: "React.js Component Development and Integration", link: "/services/web-development/reactjs-component-development-and-integration-company" },
          { text: "React.js Mobile App Development", link: "/services/web-development/reactjs-mobile-app-development-company" },
          { text: "React.js Website Development with SSR", link: "/services/web-development/reactjs-ssr-website-development-company" },
          { text: "React.js UI/UX Design and Development", link: "/services/web-development/reactjs-ui-ux-design-and-development-company" },
        ],
      },
    ],
  },
  {
    title: "Graphics Design Services",
    items: [
      { text: "Logo Design", link: "/services/graphic-design/logo-design-company" },
      { text: "Branding and Identity Design", link: "/services/graphic-design/branding-and-identity-design-agency" },
      { text: "Social Media Banner Design", link: "/services/graphic-design/social-media-banner-design-company" },
      { text: "Flyer Design", link: "/services/graphic-design/flyer-design-services-company" },
      { text: "Brochure Design", link: "/services/graphic-design/brochure-design-company" },
      { text: "Poster Design", link: "/services/graphic-design/poster-design-services-company" },
      { text: "Hoarding Design", link: "/services/graphic-design/hoarding-design-services-company" },
      { text: "Packaging Design", link: "/services/graphic-design/packaging-design-agency" },
      { text: "Advertising Design", link: "/services/graphic-design/advertising-design-agency-company" },
      { text: "Newsletter Design", link: "/services/graphic-design/newsletter-design-service-company" },
      { text: "Infographic Design", link: "/services/graphic-design/infographic-design-services-company" },
      { text: "Business Card Design", link: "/services/graphic-design/visiting-card-design-service-company" },
      { text: "Presentation Design", link: "/services/graphic-design/presentation-design-services-company" },
      { text: "Magazine and Booklet Design", link: "/services/graphic-design/magazine-and-booklet-design-company" },
      { text: "Custom Illustration Design", link: "/services/graphic-design/custom-illustration-design-company" },
      { text: "Event Invitation Design", link: "/services/graphic-design/event-invitation-design-company" },
      { text: "Menu Design", link: "/services/graphic-design/menu-design-service-company" },
      { text: "Signage Design", link: "/services/graphic-design/signage-design-service-company" },
      { text: "Corporate Profile Design", link: "/services/graphic-design/corporate-profile-design-company" },
      { text: "Annual Report Design", link: "/services/graphic-design/annual-report-design-agency" },
      { text: "Digital Ad Design", link: "/services/graphic-design/digital-ad-design-agency" },
      { text: "Trade Show Booth Design", link: "/services/graphic-design/exhibition-booth-design-company" },
      { text: "Motion Graphics Design", link: "/services/graphic-design/motion-graphics-design-agency" },
      { text: "E-book Design", link: "/services/graphic-design/e-book-design-service-company" },
    ],
  },
  {
    title: "UI/UX Design Services",
    items: [
      { text: "Website UI/UX Design", link: "/services/ui-ux-design/website-ui-ux-design-company" },
      { text: "iOS UI/UX Design", link: "/services/ui-ux-design/ios-ui-ux-design-company" },
      { text: "Android UI/UX Design", link: "/services/ui-ux-design/android-ui-ux-design-company" },
      { text: "Backend UI/UX Design", link: "/services/ui-ux-design/backend-ui-ux-design-company" },
      { text: "ERP UI/UX Design", link: "/services/ui-ux-design/erp-ui-ux-design-company" },
    ],
  },

  {
    title: "Digital Marketing",
    items: [
      { text: "Digital Marketing", link: "/services/digital-marketing" },
      { text: "Best SEO Agency", link: "/services/digital-marketing/seo-company-in-ahmedabad" },
      { text: "SEO Company", link: "/services/digital-marketing/seo-agency" },
      { text: "Social Media Marketing Agency", link: "/services/digital-marketing/social-media-marketing-agency" },
      { text: "Social Media Marketing", link: "/services/digital-marketing/social-media-marketing-in-ahmedabad" },
      { text: "Email Marketing", link: "/services/digital-marketing/email-marketing-company" },
      { text: "Google Ads", link: "/services/digital-marketing/google-ads-management-agency" },
      { text: "Meta Ads", link: "/services/digital-marketing/meta-ads-management-company" },
    ],
  },
  {
    title: "Blog Posts",
    items: [
      { text: "How to Create a Brand Identity That Stands Out", link: "/blog/how-to-create-a-brand-identity-that-stands-out" },
      { text: "Human-AI Collaboration in Design: Where Creativity Meets Technology", link: "/blog/human-ai-collaboration-in-design" },
      { text: "Why Strong Branding Is Essential for Small Businesses?", link: "/blog/strong-branding-for-small-businesses" },
      { text: "Top Graphic Design Trends Businesses Should Follow in 2026", link: "/blog/top-graphic-design-trends-2026" },
      { text: "Top Shopify E-commerce SEO Strategies to Boost Sales in 2026", link: "/blog/top-shopify-e-commerce-seo-strategies-for-2026" },
      { text: "12 Future-Ready Web Development Tools Every Developer Needs In 2026", link: "/blog/future-ready-web-development-tools-2026" },
      { text: "Why E-E-A-T Matters More Than Ever in the AI Search Era?", link: "/blog/eeat-in-ai-search-era" },
    ],
  },
  {
    title: "Legal",
    items: [
      { text: "Privacy Policy", link: "/privacy-policy" },
      { text: "Terms and Conditions", link: "/terms-and-conditions" },
      { text: "Cookie Policy", link: "/cookie-policy" },
      { text: "Disclaimer", link: "/disclaimer" },
      { text: "Refund Policy", link: "/refund-policy" },
      { text: "Sitemap", link: "/sitemap" },
    ],
  },
];


function SiteMapPage() {
  return (
    <>
      <Helmet>
        <title>Sitemap | Chameleo GFX Studio</title>
        <meta name="description" content="Sitemap of Chameleo GFX Studio services and pages." />
        <link rel="canonical" href="https://chameleogfxstudio.com/sitemap" />
      </Helmet>

      <BlogHero title="Sitemap" breadcrumbTitle="Sitemap" />
      <section className="section aximo-section-padding bg-white-smoke">
        <div className="container py-5">
          {sitemapData.map((section, i) => (
            <div key={i} className="mb-5">
              <h2 className="mb-4 mainheading-sitemap" style={{ color: "#ed1d24", borderBottom: "2px solid #ed1d24", paddingBottom: "10px" }}>{section.title}</h2>

              {/* Subcategories (for Website Development) */}
              {section.subcategories ? (
                <div className="row">
                  {section.subcategories.map((sub, j) => (
                    <div key={j} className="col-12 col-md-4 mb-4">
                      <h4 className="mb-3" style={{ color: "#000", fontWeight: "700" }}>{sub.subtitle}</h4>
                      <ul className="list-unstyled">
                        {sub.items.map((item, k) => (
                          <li key={k} className="mb-2">
                            <a href={item.link} style={{ color: "#333", textDecoration: "none", fontSize: "16px" }} onMouseOver={(e) => e.target.style.color = "#ed1d24"} onMouseOut={(e) => e.target.style.color = "#333"}>
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="list-unstyled row">
                  {section.items.map((item, j) => (
                    <li key={j} className="col-12 col-md-4 mb-2">
                      <a href={item.link} style={{ color: "#333", textDecoration: "none", fontSize: "16px" }} onMouseOver={(e) => e.target.style.color = "#ed1d24"} onMouseOut={(e) => e.target.style.color = "#333"}>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default SiteMapPage;
