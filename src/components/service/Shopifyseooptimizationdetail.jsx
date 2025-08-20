import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Shopify_SEO_Optimization.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

const services = [
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
];

function Shopifyseooptimizationdetail() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="aximo-service-details-wrap">
          <div className="aximo-service-details-thumb">
            <img src={SingleImg} alt="Web Development"/>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h2>
                  <span className="aximo-title-animation">
                  Shopify SEO Optimization
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span>
                  </span>
                </h2>
                <p>
                Having a beautifully designed Shopify store is not enough—you need to ensure that potential customers can find it easily. At Chameleo GFX Studio, we provide Shopify SEO optimization services, helping you rank higher on search engines and drive organic traffic to your store. Our SEO specialists in Ahmedabad implement proven strategies to optimize your store’s structure, content, and technical performance for better visibility.
                </p>
                <p>
                We focus on on-page SEO, optimizing product pages, meta titles, descriptions, and URLs to ensure they are search-engine-friendly. Additionally, we implement technical SEO strategies, such as site speed optimization, mobile responsiveness, and structured data markup, to improve your store’s performance. Our Shopify SEO experts also conduct keyword research, competitor analysis, and backlink strategies to help your store stay ahead in the competitive eCommerce landscape.
                </p>
                <p>
                Beyond initial optimization, we offer ongoing SEO support, tracking your store’s performance and making necessary adjustments to maintain and improve rankings. By leveraging Shopify SEO best practices, we help you attract more organic visitors, increase conversions, and boost your overall online sales.
                </p>
              </div>
            </div>
          </div>

          {/* Services List Section */}
          <div className="container pt-5">
  {services && services.length > 0 ? (
    services.map((service, index) => (
      <div key={index}>
        <div className="aximo-section-title main center">
          <h2 className="mb-3 subtitle-heading">
            <span className="aximo-title-animation">
              {service.title}
              <span className="aximo-title-icon">
                <img className="shape-color" src={Star2Img} alt="Star2Img" />
            </span>
            </span>
          </h2>
        </div>

        {/* Loop through categories */}
        {service.categories.map((category, catIndex) => (
          <div className="mb-4" key={catIndex}>
            <h4 className="mb-3 subtitle-heading">
                  <a href={category.subtitleLink} rel="noopener noreferrer">
                   {category.subtitle}
                  </a>
                  </h4>
            <div className="row">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="col-12 col-md-4">
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
      </div>
    ))
  ) : (
    <p>No services available</p>
  )}
</div>

        </div>
      </div>
    </div>
  );
}

export default Shopifyseooptimizationdetail;


