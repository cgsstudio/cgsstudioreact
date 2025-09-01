import { Helmet } from "react-helmet";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Star2Img from "../../../assets/images/v1/star2.png";
import BreadCrumb from "../../../components/common/Breadcrumb";

const services = [
  {
    title: "Graphics Design",
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
  {
    title: "UI/UX Design",
    items: [
      { text: "Website UI/UX Design", link: "/website-ui-ux-design" },
      { text: "iOS UI/UX Design", link: "/ios-ui-ux-design" },
      { text: "Android UI/UX Design", link: "/android-ui-ux-design" },
      { text: "Backend UI/UX Design", link: "/backend-ui-ux-design" },
      { text: "ERP UI/UX Design Design", link: "/erp-ui-ux-design" },
    ],
  },
  {
    title: "Website Development",
    categories: [
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
          { text: "React.js Website Development with Server-Side Rendering (SSR)", link: "/reactjs-ssr-website-development" },
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
  
];

function ServicePage() {
  return (
    <>
      {/* Helmet for SEO metadata */}
      <Helmet>
        <title>Services</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="https://chameleogfxstudio.com/service" />
      </Helmet>

      {/* Breadcrumb Component */}
      <BreadCrumb title="Services" />

      {/* Service Content */}
      <div className="container py-10">
        {services.map((service, index) => (
          <div key={index} className="mb-5">
            {/* Heading for each main category */}
            <div className="aximo-section-title main center">
              <h2>
                <span className="aximo-title-animation">
                  {service.title}
                  <span className="aximo-title-icon">
                    <img className="shape-color" src={Star2Img} alt="Star2Img" />
                  </span>
                </span>
              </h2>
            </div>

            {/* Agar category available hai to isko render kare */}
            {service.categories &&
              service.categories.map((category, catIndex) => (
                <div key={catIndex} className="mb-4">
                 <h4 className="mb-3 subtitle-heading">
                  <a href={category.subtitleLink} rel="noopener noreferrer">
                   {category.subtitle}
                  </a>
                  </h4>
                  <div className="row">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="col-12 col-md-6">
                        <ul className="list-unstyled custom-list">
                          <li>
                            <a href={item.link} rel="noopener noreferrer">
                              {item.text}
                            </a>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            {/* Agar category nahi hai, to sirf items render kare */}
            {!service.categories && (
              <div className="row">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="col-12 col-md-6">
                    <ul className="list-unstyled custom-list">
                      <li>
                        <a href={item.link} rel="noopener noreferrer">
                          {item.text}
                        </a>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ServicePage;

