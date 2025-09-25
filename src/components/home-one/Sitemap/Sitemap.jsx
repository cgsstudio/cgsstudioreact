import { Helmet } from "react-helmet";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumb from "../../../components/common/Breadcrumb";

const sitemapData = [
    {
      title: "Home",
      items: [
        { text: "Home", link: "//localhost:5174" },
      ],
    },
    {
      title: "About Us",
      items: [
        { text: "About Us", link: "/about-us" },
      ],
    },
    {
      title: "Services",
      subcategories: [
        {
          subtitle: "Graphics Design",
          items: [
            { text: "Logo Design", link: "/logo-design-company-ahmedabad" },
            { text: "Branding and Identity Design", link: "/branding-and-identity-design" },
            { text: "Social Media Banner Design", link: "/social-media-banner-design" },
            { text: "Flyer Design", link: "/flyer-design" },
            { text: "Brochure Design", link: "/brochure-design" },
            { text: "Poster Design", link: "/poster-design" },
            { text: "Hoarding Design", link: "/hoarding-design" },
            { text: "Packaging Design", link: "/packaging-design" },
            { text: "Advertising Design", link: "/advertising-design" },
            { text: "Newsletter Design", link: "/newsletter-design" },
            { text: "Infographic Design", link: "/infographic-design" },
            { text: "Business Card Design", link: "/business-card-design" },
            { text: "Presentation Design", link: "/presentation-design" },
            { text: "Magazine and Booklet Design", link: "/magazine-and-booklet-design" },
            { text: "Custom Illustration Design", link: "/custom-illustration-design" },
            { text: "Event Invitation Design", link: "/event-invitation-design" },
            { text: "Menu Design", link: "/menu-design" },
            { text: "Signage Design", link: "/signage-design" },
            { text: "Corporate Profile Design", link: "/corporate-profile-design" },
            { text: "Annual Report Design", link: "/annual-report-design" },
            { text: "Digital Ad Design", link: "/digital-ad-design" },
            { text: "Trade Show Booth Design", link: "/trade-show-booth-design" },
            { text: "Motion Graphics Design", link: "/motion-graphics-design" },
            { text: "E-book Design", link: "/e-book-design" },
          ],
        },
      ],
    },
    {
      title: "UI/UX Design",
      items: [
        { text: "Website UI/UX Design", link: "/website-ui-ux-design" },
        { text: "iOS UI/UX Design", link: "/ios-ui-ux-design" },
        { text: "Android UI/UX Design", link: "/android-ui-ux-design" },
        { text: "Backend UI/UX Design", link: "/backend-ui-ux-design" },
        { text: "ERP UI/UX Design", link: "/erp-ui-ux-design" },
      ],
    },
    {
      title: "Website Development",
      subcategories: [
        {
          subtitle: "HTML/CSS",
          items: [
            { text: "HTML/CSS", link: "/html-css" },
            { text: "Custom HTML Website Design", link: "/custom-html-website-design" },
            { text: "Template Customization", link: "/template-customization" },
            { text: "Responsive Web Design", link: "/responsive-web-design" },
            { text: "Cross-Browser Compatibility Testing", link: "/cross-browser-compatibility-testing" },
            { text: "Website Redesign and Revamp", link: "/website-redesign-and-revamp" },
          ],
        },
        {
          subtitle: "Webflow",
          items: [
            { text: "Webflow", link: "/webflow" },
            { text: "Custom Webflow Development", link: "/custom-webflow-development" },
            { text: "Webflow Theme Development", link: "/webflow-theme-development" },
            { text: "Figma to Webflow", link: "/figma-to-webflow" },
            { text: "Photoshop to Webflow", link: "/photoshop-to-webflow" },
            { text: "HTML to Webflow", link: "/html-to-webflow" },
            { text: "Webflow Integration", link: "/webflow-integration" },
          ],
        },
        {
          subtitle: "WordPress",
          items: [
            { text: "WordPress", link: "/wordpress" },
            { text: "Custom WordPress Website Design", link: "/custom-wordpress-website-design" },
            { text: "WooCommerce Development", link: "/woocommerce-development" },
            { text: "WordPress SEO Optimization", link: "/wordpress-seo-optimization" },
            { text: "WordPress Migration and Upgrades", link: "/wordpress-migration-and-upgrades" },
            { text: "BuddyBoss Design and Development", link: "/buddyboss-design-and-development" },
            { text: "LearnDash Design and Development", link: "/learndash-design-and-development" },
            { text: "Dokan Design and Development", link: "/dokan-design-and-development" },
            { text: "Responsive WordPress Design", link: "/responsive-wordpress-design" },
            { text: "Figma to WordPress", link: "/figma-to-wordpress" },
            { text: "Photoshop to WordPress", link: "/photoshop-to-wordpress" },
            { text: "HTML to WordPress", link: "/html-to-wordpress" },
            { text: "Theme and Plugin Customization", link: "/theme-and-plugin-customization" },
            { text: "WooCommerce Design and Development", link: "/woocommerce-design-and-development" },
            { text: "WordPress Website Maintenance and Support", link: "/wordpress-website-maintenance-and-support" },
          ],
        },
        {
          subtitle: "Shopify",
          items: [
            { text: "Shopify", link: "/shopify" },
            { text: "Custom Shopify Store Design", link: "/custom-shopify-store-design" },
            { text: "Shopify Theme Customization", link: "/shopify-theme-customization" },
            { text: "Shopify SEO Optimization", link: "/shopify-seo-optimization" },
            { text: "Figma to Shopify", link: "/figma-to-shopify" },
            { text: "Photoshop to Shopify", link: "/photoshop-to-shopify" },
            { text: "HTML to Shopify", link: "/html-to-shopify" },
            { text: "Shopify App Integration and Development", link: "/shopify-app-integration-and-development" },
            { text: "Shopify E-commerce Management and Support", link: "/shopify-ecommerce-management-and-support" },
          ],
        },
        {
          subtitle: "React.js",
          items: [
            { text: "React.js", link: "/react-js" },
            { text: "Figma to React", link: "/figma-to-react" },
            { text: "Photoshop to React", link: "/photoshop-to-react" },
            { text: "HTML to React", link: "/html-to-react" },
            { text: "React.js Performance Optimization", link: "/reactjs-performance-optimization" },
            { text: "Custom React.js Web Application Development", link: "/custom-reactjs-web-application-development" },
            { text: "React.js Component Development and Integration", link: "/reactjs-component-development-and-integration" },
            { text: "React.js Mobile App Development (React Native)", link: "/reactjs-mobile-app-development" },
            { text: "React.js Website Development with SSR", link: "/reactjs-ssr-website-development" },
            { text: "React.js UI/UX Design and Development", link: "/reactjs-ui-ux-design-and-development" },
          ],
        },
      ],
    },
    {
      title: "Digital Marketing",
      items: [
        { text: "Digital Marketing", link: "/digital-marketing" },
        { text: "Search Engine Optimization (SEO)", link: "/search-engine-optimization" },
        { text: "Social Media Marketing", link: "/social-media-marketing" },
        { text: "Email Marketing", link: "/email-marketing" },
        { text: "Google Ads", link: "/google-ads" },
        { text: "Meta Ads", link: "/meta-ads" },
      ],
    },
    {
        title: "Industries We Serve",
        items: [
          { text: "Industries We Serve", link: "/industries-we-serve" },
        ],
      },
      {
        title: "Blogs",
        items: [
          { text: "How AI is Revolutionizing SEO in 2025: A Human-Centric Guide for Business Growth", link: "/blog/how-ai-is-revolutionizing-seo-in-2025-human-centric-guide-for-business-growth" },
          { text: "5 UI/UX Mistakes That Are Hurting Your Website’s Performance And How to Fix Them", link: "/blog/5-ui-ux-mistakes-that-are-hurting-websites-performance" },
          { text: "How Does SEO Help Fashion Retailers Attract More Organic Traffic?", link: "/blog/seo-for-fashion-retailers" },
          { text: "Google Ads vs. Social Media Ads: How to Choose the Best Platform for Your Business", link: "/blog/google-ads-vs-social-media-ads-choose-the-best-platform-for-business" },
          { text: "Optimizing Your Web Presence: The Power of SEO Strategies", link: "/blog/power-of-seo-strategies" },
          { text: "Top 10 SEO Strategies to Boost Your Website’s Google Ranking in 2024", link: "/blog/seo-strategies-to-boost-website-google-ranking" },
          { text: "How to Build a Unique and Memorable Brand Identity", link: "/blog/how-to-build-a-unique-and-memorable-brand-identity" },
          { text: "How to Improve Your Company Website’s SEO Rankings", link: "/blog/how-to-improve-your-company-website-seo-ranking" },
          { text: "Top 5 Graphic Design Trends for 2024 You Need to Know", link: "/blog/graphic-design-trends-for-2024" },
          { text: "How to Create a Brand Identity That Stands Out", link: "/blog/how-to-create-a-brand-identity-that-stands-out" },
          { text: "How E-commerce Businesses Can Thrive with Digital Marketing in 2024", link: "/blog/e-commerce-businesses-can-thrive-with-digital-marketing-in-2024" },
          { text: "How to Optimize Your Website for Increasing Clicks", link: "/blog/how-to-optimize-your-website-for-increasing-clicks" },
          { text: "The Beginner’s Guide to SEO-Friendly Website Development", link: "/blog/the-beginners-guide-to-seo-friendly-website-development" },
          { text: "How To Make the E-Commerce Websites Efficient for Better Selling and Good SEO", link: "/blog/how-to-make-the-e-commerce-websites-efficient-for-better-selling-and-good-seo" },
          { text: "E-commerce Website Design Trends in 2024 You Should Know", link: "/blog/e-commerce-website-design-trends-in-2024-you-should-know" },
          { text: "How a Web Design and Development Agency in Ahmedabad, India Can Revolutionize Your Business for the Digital Era", link: "/blog/how-a-web-design-and-development-agency-in-ahmedabad-india-can-revolutionize-your-business-for-the-digital-era" },
          { text: "How SEO Boosts Online Visibility for Dubai’s Tourism and Hospitality", link: "/blog/how-seo-boosts-online-visibility-for-dubai-tourism-and-hospitality" },
          { text: "How a Professional Logo Designer Can Help Your Brand Achieve Long-Term Success?", link: "/blog/professional-logo-designer-can-help-your-brand-achieve-long-term-success" },
          { text: "How SEO and AI Work Together to Drive Targeted Traffic and Leads for Online Stores?", link: "/blog/seo-ai-to-drive-targeted-traffic-and-leads-for-online-stores" },
          { text: "How to Choose the Right eCommerce Platform for Your Business?", link: "/blog/right-ecommerce-platform-for-your-business" },
          { text: "How to Design High-Converting Infographics for Amazon A+ Content?", link: "/blog/how-to-design-high-converting-infographics-for-amazon-a-plus-content" },
          { text: "Top SEO Strategies for Healthcare Providers to Boost Online Visibility", link: "/blog/seo-strategies-for-healthcare" },
          { text: "Why UI/UX Design is Crucial for Android App Success?", link: "/blog/why-ui-ux-design-is-crucial-for-android-app" },
          { text: "How Custom-Coded Websites Boost UX and Conversions for Indian Businesses", link: "/blog/custom-coded-websites-boost-ux-conversions-for-indian-businesses" },
          { text: "Why Businesses Should Consider Custom Shopify Development?", link: "/blog/businesses-should-consider-custom-shopify-development" },
          { text: "React Performance Optimization: Techniques for Faster Apps", link: "/blog/react-performance-optimization-techniques-for-faster-apps" },
          { text: "Voice Search Optimization: How to Prepare Your Website for 2025", link: "/blog/how-to-prepare-your-website-for-voice-search-optimization-2025" },
          { text: "What Is the Easiest Way to Convert an HTML Website to WordPress?", link: "/blog/way-to-convert-an-html-website-to-wordpress" },
          { text: "How Webflow Enhances Speed, Security, and Scalability for Businesses?", link: "/blog/how-webflow-enhances-speed-security-and-scalability-for-businesses" },
          { text: "How AI Personalization Affects Search Results & CTR?", link: "/blog/how-AI-personalization-affects-search-results-&-CTR" },
          { text: "A Step-by-Step Guide: How to Choose the Right SEO Agency for Your Business", link: "/blog/best-seo-agency-in-bangalore-for-small-businesses" },
        ],
      },
      {
        title: "Contact Us",
        items: [
          { text: "Contact Us", link: "/contact-us" },
        ],
      },
      {
        title: "Privacy Policy",
        items: [
          { text: "Privacy Policy", link: "/privacy-policy" },
        ],
      },
      {
        title: "Terms and Conditions",
        items: [
          { text: "Terms and Conditions", link: "/terms-and-conditions" },
        ],
      },
  ];
  

function SiteMapPage() {
  return (
    <>
      <Helmet>
        <title>Sitemap</title>
        <meta name="description" content="Sitemap of our services" />
        <link rel="canonical" href="https://chameleogfxstudio.com/sitemap" />
      </Helmet>

      <BreadCrumb title="Sitemap" />

      <div className="container py-5">
        {sitemapData.map((section, i) => (
          <div key={i} className="mb-5">
            <h2 className="mb-4 mainheading-sitemap">{section.title}</h2>

            {/* Subcategories (for Website Development) */}
            {section.subcategories ? (
              section.subcategories.map((sub, j) => (
                <div key={j} className="mb-3 ">
                  <h5 className="mb-2">{sub.subtitle}</h5>
                  <ul className="list-unstyled sitemap-left">
                    {sub.items.map((item, k) => (
                      <li key={k} className="col-12 col-md-6 mb-2 sitemap-linkmain ">
                        <a href={item.link} rel="noopener noreferrer">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <ul className="list-unstyled sitemap-left">
                {section.items.map((item, j) => (
                  <li key={j} className="col-12 col-md-12 mb-2 sitemap-linkmain ">
                    <a href={item.link} rel="noopener noreferrer">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
export default SiteMapPage;
