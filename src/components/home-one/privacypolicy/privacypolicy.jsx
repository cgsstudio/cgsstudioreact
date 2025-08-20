import { Helmet } from "react-helmet";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumb from "../../../components/common/Breadcrumb";

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Chameleo GFX Studio</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <BreadCrumb title="Privacy Policy" />
            <div className="container py-5">
                <h2 className="my-4">Privacy Policy</h2>
                <p className="paragraph-cgs mb-3">
                    This Privacy Policy explains how Chameleo GFX Studio (“we,” “our,” or “us”) collects, uses, and protects any information you provide while using our website, 
                    <a className="text-link-main" href="/" rel="noopener noreferrer"> https://chameleogfxstudio.com/</a>.
                </p>

                <p className="paragraph-cgs">
                    We are committed to safeguarding your privacy. If we request any personally identifiable information, rest assured that it will only be used in accordance with this policy. 
                    We may update this policy periodically, so please review this page to stay informed of any changes. This policy is effective from [Insert Date].
                </p>

                <h4 className="cgs-heading">Information We Collect</h4>
                <p className="paragraph-cgs">We may collect the following details:</p>
                <ul className="list-main-disc">
                    <li>Your name and company name</li>
                    <li>Contact details, including email address and phone number</li>
                    <li>Demographic information such as location, preferences, and interests</li>
                    <li>Business-related information such as company profile, website, products, and services</li>
                    <li>Any other information relevant to customer inquiries, surveys, or promotional offers</li>
                </ul>

                <h4 className="cgs-heading">How We Use Your Information</h4>
                <p className="paragraph-cgs">We collect this data to enhance our services and improve your experience. Specifically, we use it for:</p>
                <ul className="list-main-disc">
                    <li>Internal record-keeping</li>
                    <li>Improving our products and services</li>
                    <li>Sending updates, promotions, or offers that may interest you</li>
                    <li>Market research via email, phone, or other communication channels</li>
                    <li>Personalizing the website based on user interests</li>
                </ul>

                <h4 className="cgs-heading">Data Security</h4>
                <p className="paragraph-cgs">
                    We prioritize the security of your personal information and have implemented appropriate physical, electronic, and managerial measures to prevent unauthorized access, disclosure, or misuse.
                </p>

                <h4 className="cgs-heading">Cookies and Their Use</h4>
                <p className="paragraph-cgs mb-3">
                    Cookies are small files placed on your device to enhance your browsing experience. We use traffic log cookies to analyze website usage and improve our services. These cookies only collect data for statistical analysis and are not stored long-term.
                </p>
                <p className="paragraph-cgs">
                    You can choose to accept or decline cookies. Most browsers accept them by default, but you can adjust your settings to disable cookies if preferred. However, this may impact website functionality.
                </p>

                <h4 className="cgs-heading">Third-Party Links</h4>
                <p className="paragraph-cgs">
                    Our website may contain links to external sites. Once you leave our site, we are not responsible for how those websites handle your information. Please review their privacy policies before sharing any data.
                </p>

                <h4 className="cgs-heading">Managing Your Personal Information</h4>
                <p className="paragraph-cgs mb-3">
                    We do not sell, distribute, or share your personal information with third parties unless required by law or with your explicit permission. If you have opted to receive marketing communications, you can unsubscribe at any time.
                </p>
                <p className="paragraph-cgs">
                    If you believe any information we have is incorrect or incomplete, please contact us at <a className="text-link-main" href="mailto:info@chameleogfxstudio.com">info@chameleogfxstudio.com</a> and we will promptly update it.
                </p>

                <p className="paragraph-cgs">
                    For further inquiries, visit <a className="text-link-main" href="/" rel="noopener noreferrer">https://chameleogfxstudio.com/</a>.
                </p>
            </div>
        </>
    );
};

export default PrivacyPolicy;
