import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/React.js_UI_UX_Design_and_Development.jpg";
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

function Reactjsuiuxdesigndetail() {
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
                  React.js UI/UX Design and Development – Crafting Engaging Digital Experiences
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h2>
                <p>
                A well-designed UI/UX is the key to user engagement and satisfaction. At Chameleo GFX Studio, we offer React.js UI/UX design and development services, ensuring that your web application is visually appealing, easy to navigate, and user-friendly. Our designers and developers work together to create custom UI components, responsive layouts, and interactive elements that enhance the overall user experience.
                </p>
                <p>
                Using industry-leading tools like Figma, Adobe XD, and Sketch, we design intuitive interfaces and convert them into fully functional React.js applications. Our React.js UI/UX design company in Ahmedabad follows a structured design approach, incorporating user feedback, usability testing, and accessibility best practices to create engaging experiences. Whether it’s a business dashboard, SaaS platform, or web portal, we ensure your UI is responsive, scalable, and aligned with your brand identity.
                </p>
                <p>
                With a strong focus on React.js performance optimization, we integrate lazy loading, virtual DOM updates, and efficient state management to create fast and responsive web applications. Our React.js UI/UX design and development services help businesses enhance user engagement, improve conversions, and provide a seamless digital experience across all devices

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

export default Reactjsuiuxdesigndetail;


