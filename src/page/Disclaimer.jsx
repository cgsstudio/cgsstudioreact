import { Helmet } from "react-helmet";
import React from "react";
import BlogHero from "../components/common/BlogHero";

const Disclaimer = () => {
    return (
        <>
            <Helmet>
                <title>Disclaimer | Chameleo GFX Studio</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <BlogHero title="Disclaimer" breadcrumbTitle="Disclaimer" />

            <section className="section aximo-section-padding bg-white-smoke">
                <div className="container py-5">

                   

                    <p className="paragraph-cgs">
                        Welcome to Chameleo GFX Studio. By accessing and using our website (<a href="https://chameleogfxstudio.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#ed1d24' }} >https://chameleogfxstudio.com/</a>), you accept and agree to be bound by the terms of this disclaimer. If you do not agree with any part of this disclaimer, please do not use our website.
                    </p>

                    <h3 className="cgs-heading mt-4">General Information</h3>

                    <p className="paragraph-cgs">
                        All the information on this website is published in good faith and for general informational and marketing purposes only. Chameleo GFX Studio makes no warranties about the completeness, reliability, or accuracy of this information. Any action you take upon the information you find on this website is strictly at your own risk. Chameleo GFX Studio will not be liable for any losses and/or damages in connection with the use of our website.
                    </p>

                    <h3 className="cgs-heading mt-4">Professional Disclaimer</h3>

                    <p className="paragraph-cgs">
                        The services and information provided on this website, including web design, development, branding, and digital marketing, are intended for general guidance only. While we strive to deliver high-quality and effective solutions, results may vary depending on various factors. We do not guarantee specific outcomes such as search engine rankings, traffic growth, or business success.
                    </p>

                    <h3 className="cgs-heading mt-4">External Links Disclaimer</h3>

                    <p className="paragraph-cgs">
                        Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Chameleo GFX Studio. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                    </p>

                    <h3 className="cgs-heading mt-4">Intellectual Property</h3>

                    <p className="paragraph-cgs">
                        All content on this website, including text, graphics, logos, images, and design elements, is the property of Chameleo GFX Studio unless otherwise stated. Unauthorized use, reproduction, or distribution of this content is strictly prohibited.
                    </p>

                    <h3 className="cgs-heading mt-4">Testimonials & Results</h3>

                    <p className="paragraph-cgs">
                        The website may contain testimonials, case studies, or examples of past work. These are provided for illustrative purposes only and do not guarantee that current or future clients will achieve the same results.
                    </p>

                    <h3 className="cgs-heading mt-4">Limitation of Liability</h3>

                    <p className="paragraph-cgs">
                        Under no circumstances shall Chameleo GFX Studio, its team, partners, or affiliates be held liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of this website or our services.
                    </p>

                    <h3 className="cgs-heading mt-4">Consent</h3>

                    <p className="paragraph-cgs">
                        By using our website, you hereby consent to our disclaimer and agree to its terms.
                    </p>

                    <h3 className="cgs-heading mt-4">Updates</h3>

                    <p className="paragraph-cgs">
                        We reserve the right to update, amend, or make any changes to this document at any time without prior notice. Any changes will be prominently posted on this page.
                    </p>

                </div>
            </section>
        </>
    );
};

export default Disclaimer;