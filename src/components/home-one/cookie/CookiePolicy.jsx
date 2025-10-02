import { Helmet } from "react-helmet";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumb from "../../../components/common/Breadcrumb";

const CookiePolicy = () => {
    return (
        <>
            <Helmet>
                <title>Cookie Policy | Chameleo GFX Studio</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <BreadCrumb title="Cookie Policy" />
            <div className="container py-5">
                <h2 className="my-4">Cookie Policy</h2>
                <p className="paragraph-cgs mb-3">Last Updated: 23rd Sept, 2025</p>
                <p className="paragraph-cgs mb-3">
                    Welcome to Chameleo GFX Studio ("we," "us," or "our"). This Cookie Policy explains how we use cookies and similar technologies on our website 
                    <a className="text-link-main" href="/" rel="noopener noreferrer"> https://chameleogfxstudio.com/</a> ("Site"), and how you can control them.
                </p>

                <h4 className="cgs-heading">1. What are cookies</h4>
                <p className="paragraph-cgs">
                    Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work, work more efficiently, as well as to provide information to the site owners.
                </p>

                <h4 className="cgs-heading">2. How we use cookies</h4>
                <p className="paragraph-cgs">We use cookies and similar tracking technologies for a variety of purposes, including:</p>
                <ul className="list-main-disc">
                    <li><strong>Necessary cookies:</strong> These are essential for the Site to function properly, for example, enabling you to navigate the Site, use basic features, and access secure areas.</li>
                    <li><strong>Performance cookies:</strong> These collect information about how visitors use the Site, such as which pages are visited most, or if visitors encounter error pages, with the goal of improving how the Site works.</li>
                    <li><strong>Functional cookies:</strong> These remember choices you make on the Site, such as language preferences or region, to provide enhanced and more personal features.</li>
                    <li><strong>Analytics cookies:</strong> We use third-party analytics services (for example, Google Analytics) to understand how users interact with the Site, compile reports, and help us improve the Site. These cookies help us measure traffic, usage patterns, and more.</li>
                    <li><strong>Marketing / Advertising cookies:</strong> If we run advertising or promotional campaigns, cookies may be used to deliver relevant ads or measure the effectiveness of our campaigns.</li>
                </ul>

                <h4 className="cgs-heading">3. Which cookies we use</h4>
                <p className="paragraph-cgs">Below is a non-exhaustive list of types of cookies that may be placed when you visit our Site:</p>
                <table className="table table-bordered mt-4">
                    <thead>
                        <tr>
                            <th>Cookie Type</th>
                            <th>Examples / Purposes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Session cookies</td>
                            <td>Temporary cookies that expire when you close your browser</td>
                        </tr>
                        <tr>
                            <td>Persistent cookies</td>
                            <td>Remain on your device for a set period, for example, 30 days or 1 year</td>
                        </tr>
                        <tr>
                            <td>Third-party cookies</td>
                            <td>Cookies set by services not operated by us, such as analytics or social media tools</td>
                        </tr>
                    </tbody>
                </table>

                <h4 className="cgs-heading">4. Cookie list (examples)</h4>
                <p className="paragraph-cgs">
                    Here are some specific cookies that we or our third parties might use. This list may change depending on updates to our Site or our service providers.
                </p>
                <table className="table table-striped table-bordered mt-4">
                    <thead>
                        <tr>
                            <th>Cookie Name / Provider</th>
                            <th>Purpose</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>_ga (Google Analytics)</td>
                            <td>Used to distinguish users and track site usage</td>
                            <td>2 years</td>
                        </tr>
                        <tr>
                            <td>_gid</td>
                            <td>Used to distinguish users for a shorter period</td>
                            <td>24 hours</td>
                        </tr>
                        <tr>
                            <td>_gat / _gtag</td>
                            <td>Used to limit request rate, adjust the collection of data</td>
                            <td>1 minute</td>
                        </tr>
                        <tr>
                            <td>FunctionalLang / region</td>
                            <td>Store user's language or region preference</td>
                            <td>Persistent, 30-365 days</td>
                        </tr>
                    </tbody>
                </table>
                <p className="paragraph-cgs"><em>Note: These are illustrative, you should insert actual cookie names and durations used on your Site.</em></p>

                <h4 className="cgs-heading">5. How to control cookies</h4>
                <p className="paragraph-cgs">You have choices about whether or not to allow cookies. Most web browsers allow you to manage cookie preferences, for example, block or delete cookies, through browser settings.</p>
                <p className="paragraph-cgs">You can also opt out of certain third-party cookies via provider opt-out tools, for example, Google Analytics provides an opt-out plugin.</p>
                <p className="paragraph-cgs">Please note that if you disable or delete some cookies, parts of the Site may not function correctly or may be less user-friendly.</p>

                <h4 className="cgs-heading">6. Third-party services</h4>
                <p className="paragraph-cgs">
                    We may allow third-party services, such as analytics, social media, or advertising networks, to set cookies on our services. These parties may collect information about your online activities over time and across different websites when you use the Site.
                    We do not control all of these third-party cookies, so please review the privacy and cookie policies of these third parties to understand how they use cookies and how to opt out.
                </p>

                <h4 className="cgs-heading">7. Changes to this Cookie Policy</h4>
                <p className="paragraph-cgs">
                    We may update this Cookie Policy from time to time to reflect changes in our practices, or for other operational, legal, or regulatory reasons. The revised policy will be posted on this page with a new “Last Updated” date.
                </p>

                <h4 className="cgs-heading">8. Contact us</h4>
                <address className="paragraph-cgs">
                    Chameleo GFX Studio<br/>
                    F - 1001, PNTC, <br/>
                    Times Of India Press Rd, <br/>
                    Rajmani Society, Satellite, <br/>
                    Shyamal, Ahmedabad, <br/>
                    Gujarat 380015<br/>
                    Email: <a className="text-link-main" href="mailto:info@chameleogfxstudio.com">info@chameleogfxstudio.com</a><br/>
                    Phone: <a className="text-link-main" href="tel:+918460384838">+918460384838</a>
                </address>
            </div>
        </>
    );
};

export default CookiePolicy;


