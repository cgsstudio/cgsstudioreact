import { Helmet } from "react-helmet";
import React from "react";
import BlogHero from "../components/common/BlogHero";

const RefundPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Refund Policy | Chameleo GFX Studio</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <BlogHero title="Refund Policy" breadcrumbTitle="Refund Policy" />

            <section className="section aximo-section-padding bg-white-smoke">
                <div className="container py-5">



                    <h3 className="cgs-heading">Returns & Refunds</h3>
                    <p className="paragraph-cgs mb-3">
                        At Chameleo GFX Studio, we are dedicated to delivering high-quality web design, development, and digital marketing solutions. However, if you are not completely satisfied with your purchase, we are here to assist you—subject to the terms outlined below.
                    </p>

                    <h3 className="cgs-heading">Refund Eligibility</h3>
                    <p className="paragraph-cgs">
                        Our refund policy is valid for 7 calendar days from the date of purchase. If more than 7 days have passed, we regret that we will not be able to process any refund or exchange request.
                    </p>
                    <p className="paragraph-cgs">
                        To qualify for a refund, the following conditions must be met:
                    </p>
                    <ul className="list-main-disc">
                        <li>The service or product must have verifiable issues, such as defects, errors, or functionality problems</li>
                        <li>You must provide valid supporting evidence, including screenshots, screen recordings, or written documentation</li>
                        <li>The issue must relate directly to the intended functionality or purpose of the service or digital product</li>
                    </ul>

                    <h3 className="cgs-heading">Non-Refundable Services & Products</h3>
                    <p className="paragraph-cgs">
                        The following are not eligible for refunds:
                    </p>
                    <ul className="list-main-disc">
                        <li>Free resources, templates, or downloadable materials available on our website</li>
                        <li>Services or packages clearly marked as non-refundable at the time of purchase</li>
                        <li>Trial versions, beta releases, or discounted offerings</li>
                        <li>Custom-designed or personalized services delivered based on client requirements</li>
                        <li>Issues caused by incompatibility with your device, browser, operating system, or third-party tools</li>
                    </ul>

                    <h3 className="cgs-heading">Partial Refunds (If Applicable)</h3>
                    <p className="paragraph-cgs">
                        In certain situations, partial refunds may be granted:
                    </p>
                    <ul className="list-main-disc">
                        <li>If a project or service is cancelled after partial completion, the refund will be calculated after deducting the cost of work already completed, based on agreed pricing</li>
                        <li>If a digital product (such as a design asset or code-based solution) fails to perform its core function, and the issue is reported with proper proof within 7 days</li>
                    </ul>

                    <h3 className="cgs-heading">Additional Non-Refundable Items</h3>
                    <p className="paragraph-cgs">
                        We do not offer refunds for:
                    </p>
                    <ul className="list-main-disc">
                        <li>Gift cards or promotional vouchers</li>
                        <li>Free consultations or advisory sessions</li>
                        <li>Services fully delivered via phone, chat, or remote support</li>
                    </ul>

                    <h3 className="cgs-heading">Refund Request Process</h3>
                    <p className="paragraph-cgs">
                        To request a refund, please contact us with the following details:
                    </p>
                    <ul className="list-main-disc">
                        <li>Order or invoice number</li>
                        <li>Date of purchase</li>
                        <li>Clear description of the issue along with supporting proof</li>
                    </ul>
                    <br/>
                    <p className="paragraph-cgs">
                        📧 Email: <a className="text-link-main" href="mailto:info@chameleogfxstudio.com">info@chameleogfxstudio.com</a>
                    </p>
                    <p className="paragraph-cgs">
                        🌐 Website: <a className="text-link-main" href="https://chameleogfxstudio.com/">https://chameleogfxstudio.com/</a>
                    </p>

                    <p className="paragraph-cgs">
                        Once your request is received, our team will review it and notify you of the approval or rejection of your refund. All decisions are made after careful internal evaluation.
                    </p>

                </div>
            </section>
        </>
    );
};

export default RefundPolicy;