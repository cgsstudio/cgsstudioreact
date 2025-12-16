
import React from "react";
import { Link } from "react-router-dom";
import "./FooterCenter.css";

const servicesData = [
    {
        title: "Graphics Design",
        links: [
            { text: "Logo Design", to: "/logo-design-company-ahmedabad" },
            { text: "Branding and Identity Design", to: "/branding-and-identity-design" },
            { text: "Social Media Banner Design", to: "/social-media-banner-design" },
            { text: "Packaging Design", to: "/packaging-design" },
            { text: "Presentation Design", to: "/presentation-design" },
            { text: "Corporate Profile Design", to: "/corporate-profile-design" },
        ],
    },
    {
        title: "UI/UX Design",
        links: [
            { text: "Website UI/UX Design", to: "/website-ui-ux-design" },
            { text: "iOS UI/UX Design", to: "/ios-ui-ux-design" },
            { text: "Android UI/UX Design", to: "/android-ui-ux-design" },
            { text: "Backend UI/UX Design", to: "/backend-ui-ux-design" },
            { text: "ERP UI/UX Design Design", to: "/erp-ui-ux-design" },
        ],
    },
    {
        title: "Website Development",
        links: [
            { text: "Webflow Theme Development", to: "/webflow-theme-development" },
            { text: "WordPress Development", to: "/wordpress" },
            { text: "WooCommerce Development", to: "/woocommerce-development" },
            { text: "Shopify Theme Customization", to: "/shopify-theme-customization" },
            { text: "Shopify E-commerce Management and Support", to: "/shopify-ecommerce-management-and-support" },
            { text: "React.js UI/UX Design and Development", to: "/reactjs-ui-ux-design-and-development" },
        ],
    },
    {
        title: "Digital Marketing",
        links: [
            { text: "Digital Marketing", to: "/digital-marketing" },
            { text: "Search Engine Optimization (SEO)", to: "/search-engine-optimization" },
            { text: "Social Media Marketing", to: "/social-media-marketing" },
            { text: "Email Marketing", to: "/email-marketing" },
            { text: "Google Ads", to: "/google-ads" },
            { text: "Meta Ads", to: "/meta-ads" },
        ],
    },
    {
        title: "Useful Links",
        links: [
            { text: "About Us", to: "/About-us" },
            { text: "Contact Us", to: "/contact-us" },
            { text: "Blogs", to: "/blogs" },
            { text: "Industries", to: "/industries-we-serve" },
            { text: "Sitemap", to: "/sitemap" },
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
