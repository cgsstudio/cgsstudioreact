
import React from "react";
import { Link } from "react-router-dom";
import "./FooterCenter.css";

const servicesData = [
    {
        title: "Graphics Design",
        links: [
            { text: "Logo Design", to: "/services/graphic-design/logo-design-company" },
            { text: "Branding and Identity Design", to: "/services/graphic-design/branding-and-identity-design-agency-company" },
            { text: "Social Media Banner Design", to: "/services/graphic-design/social-media-banner-design-company" },
            { text: "Packaging Design", to: "/services/graphic-design/packaging-design-agency-company" },
            { text: "Presentation Design", to: "/services/graphic-design/presentation-design-services-company" },
            { text: "Corporate Profile Design", to: "/services/graphic-design/corporate-profile-design-company" },
        ],
    },
    {
        title: "UI/UX Design",
        links: [
            { text: "Website UI/UX Design", to: "/services/ui-ux-design/website-ui-ux-design-company" },
            { text: "iOS UI/UX Design", to: "/services/ui-ux-design/ios-ui-ux-design-company" },
            { text: "Android UI/UX Design", to: "/services/ui-ux-design/android-ui-ux-design-company" },
            { text: "Backend UI/UX Design", to: "/services/ui-ux-design/backend-ui-ux-design-company" },
            { text: "ERP UI/UX Design", to: "/services/ui-ux-design/erp-ui-ux-design-company" },
        ],
    },
    {
        title: "Website Development",
        links: [
            { text: "Webflow Theme Development", to: "/services/web-development/webflow-theme-development-company" },
            { text: "WordPress Development", to: "/services/web-development/wordpress-development-company" },
            { text: "WooCommerce Development", to: "/services/web-development/woocommerce-development-company" },
            { text: "Shopify Theme Customization", to: "/services/web-development/shopify-theme-customization-company" },
            { text: "Shopify E-commerce Management and Support", to: "/services/web-development/shopify-ecommerce-management-and-support-company" },
            { text: "React.js UI/UX Design and Development", to: "/services/web-development/reactjs-ui-ux-design-and-development-company" },
        ],
    },
    {
        title: "Digital Marketing",
        links: [
            { text: "Digital Marketing", to: "/services/digital-marketing" },
            { text: "Search Engine Optimization (SEO)", to: "/services/digital-marketing/seo-agency" },
            { text: "Social Media Marketing", to: "/services/digital-marketing/social-media-marketing-agency" },
            { text: "Email Marketing", to: "/services/digital-marketing/email-marketing-company" },
            { text: "Google Ads", to: "/services/digital-marketing/google-ads-management-agency" },
            { text: "Meta Ads", to: "/services/digital-marketing/meta-ads-management-company" },
        ],
    },
    {
        title: "Useful Links",
        links: [
            { text: "About Us", to: "/about-us/" },
            { text: "Contact Us", to: "/contact-us/" },
            { text: "Blogs", to: "/blog/" },
            { text: "Industries", to: "/industries-we-serve/" },
            { text: "Sitemap", to: "/sitemap/" },
            { text: "Career", to: "/" },
        ],
    },
];

const FooterCenter = () => {
    return (
        <div className="container pb-5">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5">
                {servicesData.map((category, index) => (
                    <div key={index} className="col mb-4">
                        <h4 className="text-whitesmoke mb-4 fw-bold footer-service-title">
                            {category.title}
                        </h4>
                        <ul className="list-unstyled">
                            {category.links.map((link, linkIndex) => (
                                <li key={linkIndex} className="mb-2">
                                    <Link to={link.to} className="footer-service-link ">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default FooterCenter;
