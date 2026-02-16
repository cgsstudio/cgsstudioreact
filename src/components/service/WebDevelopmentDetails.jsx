import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaPaintBrush, FaLaptopCode, FaVial } from 'react-icons/fa';
import BlogHero from "../../components/common/BlogHero";
import ServiceAccordion from "../../components/common/ServiceAccordion";
import servise_image1 from "../../assets/images/v1/WebDev_3.png";
import servise_image2 from "../../assets/images/v1/WebDev_1.png";
import servise_image3 from "../../assets/images/v1/WebDev_4.png";
import servise_image4 from "../../assets/images/v1/WebDev_5.png";
import servise_image5 from "../../assets/images/v1/Group 109 .png";
import servise_image6 from "../../assets/images/v1/Group 110.png";
import servise_image7 from "../../assets/images/v1/Group 111.png";
import servise_image8 from "../../assets/images/v1/Group 108.png";

import ProcessFlow from "./ProcessFlow";
import WebDevApproach from "./WebDevApproach";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Field from "../common/Field";
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
					//{ text: "Photoshop to Webflow", link: "/photoshop-to-webflow" },
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
					// { text: "LearnDash Design and Development", link: "/learndash-design-and-development" },
					// { text: "Dokan Design and Development", link: "/dokan-design-and-development" },
					// { text: "Responsive WordPress Design", link: "/responsive-wordpress-design" },
					// { text: "Figma to WordPress", link: "/figma-to-wordpress" },
					// { text: "Photoshop to WordPress", link: "/photoshop-to-wordpress" },
					// { text: "HTML to WordPress", link: "/html-to-wordpress" },
					// { text: "Theme and Plugin Customization", link: "/theme-and-plugin-customization" },
					// { text: "WooCommerce Design and Development", link: "/woocommerce-design-and-development" },
					// { text: "WordPress Website Maintenance and Support", link: "/wordpress-website-maintenance-and-support" },
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

const faqData = [
	{
		question: "What is website development in easy words?",
		answer: "Website development means developing and running a website so that people can visit and use it on the internet.",
	},
	{
		question: "Why should my business have a website?",
		answer: "Because the majority of customers shop online first. A website establishes credibility and provides your business with visibility 24/7.",
	},
	{
		question: "What kind of websites does Chameleo GFX Studio create?",
		answer: "We create all types business sites, e-commerce websites, corporate websites, blogs, and custom web solutions.",
	},
	{
		question: "How long does it take to create a website?",
		answer: "The duration varies based on the project. Simple websites might take a few weeks, but complicated ones may take longer.",
	},
	{
		question: "Will my website be accessible on mobile phones?",
		answer: "Yes! All our websites are responsive, and hence they adjust to mobiles, tablets, and desktops.",
	},
	{
		question: "Can I make changes to my website after it's live?",
		answer: "Yes, we build easy-to-use websites that are simple for you to maintain, and we provide ongoing support as required.",
	},
	{
		question: "Why Chameleo GFX Studio for website creation?",
		answer: "Because we merge creativity, technical ability, and strategy to create effective, high-quality websites.",
	},
];

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqData.map((item) => ({
		"@type": "Question",
		name: item.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: item.answer,
		},
	})),
};

function WebDevelopmentDetails() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const submitForm = (formData) => {
		const serviceID = "service_4hzipjm";
		const templateID = "template_vnt9ibw";
		const userID = "9QWvlBpES51DX7O1X";

		emailjs
			.send(serviceID, templateID, formData, userID)
			.then(() => {
				setIsSubmitted(true);
				reset();
				setTimeout(() => {
					setIsSubmitted(false);
				}, 3000);
			})
			.catch((error) => {
				console.error("Error sending email:", error);
			});
	};
	return (
		<div className="section  pb-0">
			<Helmet>
				<title>Website Development Company in Ahmedabad</title>
				<meta
					name="description"
					content="Chameleo GFX Studio provides professional Website Development services in Ahmedabad. We develop websites that are fast, responsive, and optimized to grow your business online."
				/>
				<meta
					name="keywords"
					content="Website Development Company in Ahmedabad, Web Development Services, HTML CSS, WordPress Development, Shopify Development, React.js Development"
				/>
				<link
					rel="canonical"
					href="https://chameleogfxstudio.com/website-development-company-in-ahmedabad"
				/>
				<script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
			</Helmet>

			<div className="container">
				<div className="aximo-service-details-wrap">
					<div className="row ">
						<div className="col-lg-12">
							<div className="aximo-default-content">
								<h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>Website Development</span> Company in Ahmedabad</span></h1>

								<p className="text-lg-center text-sm-left pt-sm-2 pt-3 pt-lg-0">
									A website is like the virtual home of a company. Just as a physical store, it must be inviting, well-structured, and appealing. Website designing is the process of creating that virtual house, ensuring it is aesthetically pleasing, functions well, and provides users with the information they require.
								</p>

								<p className="text-lg-center text-sm-left">
									At Chameleo GFX Studio, one of the top Website Development companies in Ahmedabad, we develop websites that are not just beautiful but also dynamic. Our websites are quick, responsive, and optimized to grow businesses. Whether you need a clean business website, an e-commerce website, or a corporate site, we develop solutions that match your objectives. For long-term business success, we also implement AI-powered strategies for performance, personalization, and intelligent engagement.
								</p>

							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container pt-5">
				<div className="aximo-service-details-wrap">
					<div className="row align-items-center">
						<div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
							<div className="aximo-default-content">

								<h2><span className="services-h2">Why <span style={{ color: 'red' }}>Website Development Service </span> Matters?</span></h2>
								<p>
									In the age of the internet, most consumers log on to research before making a purchase. Without a professional website, you risk losing customers to others who do. A website is in action 24 hours a day, 7 days a week, spreading the word about your brand, products, and services.
								</p>
								<p><b>Here's why website development matters: </b></p>


								<ul className="custom-list mt-1 ml-5 pl-5">
									<li className="ml-4 mt-0" ><b>First impressions count –</b> Your website is usually the first point of contact people have with your business.</li>
									<li className="ml-4 mt-0"><b>Establishes credibility –</b> A fresh, organized site makes your company trustworthy.</li>
									<li className="ml-4 mt-0"><b>Delivers leads and sales –</b> Sites convert visitors into customers with obvious calls to action.</li>
									<li className="ml-4 mt-0"><b>Works 24/7 –</b> Unlike a brick-and-mortar shop, your site is open 24 hours a day, 7 days a week.</li>
									<li className="ml-4 mt-0"><b>Complements marketing efforts –</b> Search engine optimization-friendly sites rank higher on Google and drive organic traffic.</li>
								</ul><br />

								<p>At Chameleo GFX Studio, we ensure your website is greater than a digital brochure it is transformed into a business growth tool.</p>
							</div>
						</div>
						<div className="col-lg-6 align-items-center order-1 order-lg-2 pt-4 pt-lg-0">
							<div >
								<img src={servise_image2} alt="Graphic Design" className="services_page_image" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container pt-5	">
				<div className="aximo-service-details-wrap">
					<div className="row align-items-center">
						<div className="col-lg-6 align-items-center">
							<div>
								<img src={servise_image4} alt="What We Do at Chameleo GFX Studio" className="services_page_image" />
							</div>
						</div>
						<div className="col-lg-6 pt-4 pt-lg-0">
							<div className="aximo-default-content">
								<h2><span className="services-h2">End-to-End <span style={{ color: 'red' }}>Website Development Solutions in Ahmedabad </span>for Growing Businesses</span></h2>
								<p>
									As a reliable Website Development Company in Ahmedabad, we offer complete web solutions as per your requirements. Our services are:
								</p>
								<ul className="custom-list mt-1 ml-5 pl-5">
									<li className="ml-4 mt-0"><b>Custom Website Development –</b> Special websites designed to reflect your brand and objectives.</li>
									<li className="ml-4 mt-0"><b>E-commerce Development –</b> Secure payment online stores and hassle-free shopping websites.</li>
									<li className="ml-4 mt-0"><b>Corporate and Business Websites –</b> Trusted, professional sites that highlight services.</li>
									<li className="ml-4 mt-0"><b>CMS-Based Websites –</b> Simple-to-maintain websites based on WordPress, Shopify, or other software.</li>
									<li className="ml-4 mt-0"><b>Responsive Design –</b> Sites that are a breeze to use on mobiles, tablets, and desktops.</li>
									<li className="ml-4 mt-0"><b>SEO-Friendly Development –</b> Clean code and optimization for better search rankings.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container py-5" id="contact-form">
				<div className="row align-items-center" >
					<div className="col-md-6 mb-4 mb-md-0 pr-5  mr-5">
						<div className="servisepage-form-section servisepage-form-section-1 pr-5">
							<h2>Optimize your Business Hours Efficiently  </h2>
						</div>

						<div className="d-flex justify-content-between align-items-left py-3 mt-4">
							<div className="https://prnt.sc/lIfcJEfFEPPm">
								<h3 className="text-danger fw-bold mb-0 our_efficiently">5K+</h3>
								<small className="text-muted our_efficiently_1">Projects Delivered</small>
							</div>
							<div className="https://prnt.sc/lIfcJEfFEPPm">
								<h3 className="text-danger fw-bold mb-0 our_efficiently">11+</h3>
								<small className="text-muted our_efficiently_1">Years of Experience</small>
							</div>
							<div className="https://prnt.sc/lIfcJEfFEPPm">
								<h3 className="text-danger fw-bold mb-0 our_efficiently">100%</h3>
								<small className="text-muted our_efficiently_1">Success Projects</small>
							</div>
						</div>


					</div>
					<div className="col-md-6">
						<form onSubmit={handleSubmit(submitForm)} className="servise-aximo-form-wrap3 border border-1 rounded p-4  shadow-sm">
							<Field error={errors.name}>
								<div className="aximo-form-field2 mb-5">
									<input
										{...register("name", { required: "Name is required." })}
										type="text"
										name="name"
										className="form-control"
										placeholder="Your Name"
									/>
								</div>
							</Field>
							<Field error={errors.email}>
								<div className="aximo-form-field2 mb-5">
									<input
										{...register("email", { required: "Email is required." })}
										type="email"
										name="email"
										className="form-control"
										placeholder="Your Email"
									/>
								</div>
							</Field>
							<Field error={errors.phone}>
								<div className="aximo-form-field2 mb-5">
									<input
										{...register("phone")}
										type="text"
										name="phone"
										className="form-control"
										placeholder="Your Phone Number"
									/>
								</div>
							</Field>
							<Field error={errors.message}>
								<div className="aximo-form-field2  mb-5">
									<textarea
										{...register("message", { required: "Message is required." })}
										name="message"
										className="form-control"
										style={{ backgroundColor: "#FFFFF5" }}
										rows="3"
										placeholder="Message"
									></textarea>
								</div>
							</Field>
							<button type="submit" className="aximo-default-btn bg-red w-100 fw-bold">
								<span className="aximo-label-up">SUBMIT</span>
								<span className="aximo-label-up">SUBMIT</span>
							</button>
							{isSubmitted && (
								<div className="alert-box mt-3 text-success">Thank you for your message!</div>
							)}
						</form>
					</div>
				</div>
			</div>
			<div className="design-body-wrapper">
				<div className="container">
					<div className="container py-5">
						<div className="design-main-card">
							<div className="row gy-4">
								<div className="col-lg-5 col-md-5">
									<div className="design-title-section">
										<h1 className="design-title-heading">The Role of Design in Today's Digital World.</h1>
									</div>
								</div>

								<div className="col-lg-7 col-md-7">
									<div className="design-timeline-wrapper">
										<div className="design-timeline-vertical-line"></div>

										<div className="design-timeline-single-item">
											<div className="design-timeline-circle-dot"></div>
											<div className="design-info-content-box">
												<p className="design-info-text-paragraph">On websites, design influences how long visitors stay.</p>
											</div>
										</div>

										<div className="design-timeline-single-item">
											<div className="design-timeline-circle-dot"></div>
											<div className="design-info-content-box">
												<p className="design-info-text-paragraph">On apps, design decides whether users keep or delete it.</p>
											</div>
										</div>

										<div className="design-timeline-single-item">
											<div className="design-timeline-circle-dot"></div>
											<div className="design-info-content-box">
												<p className="design-info-text-paragraph">In software, design impacts efficiency and productivity.</p>
											</div>
										</div>

										<div className="design-timeline-single-item">
											<div className="design-timeline-circle-dot"></div>
											<div className="design-info-content-box">
												<p className="design-info-text-paragraph">Strong UI/UX is the secret to customer satisfaction, retention, and long-term growth.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container pt-5">
				<div className="aximo-service-details-wrap">
					<div className="row align-items-center">
						<div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
							<div className="aximo-default-content">
								<h2><span className="services-h2">Our <span style={{ color: 'red' }}>Web Development Process</span></span></h2>
								<ul className="custom-list mt-1 ml-5 pl-5">
									<li className="ml-4 mt-0"><b>Discovery –</b> Acquiring a clear vision of your business, objectives, and clientele.</li>
									<li className="ml-4 mt-0"><b>Planning –</b> Creating a clear plan with the appropriate designs and functionalities.</li>
									<li className="ml-4 mt-0"><b>Design & Development –</b> Constructing the site with new tools and technology.</li>
									<li className="ml-4 mt-0"><b>Testing –</b> Vetting speed, performance, and usability.</li>
									<li className="ml-4 mt-0"><b>Launch –</b> Publishing your website live for the world to see.</li>
									<li className="ml-4 mt-0"><b>Support –</b> Offering constant updates, upkeep, and enhancements.</li>
								</ul><br />
								<p>
									This process guarantees your site is not only operational but also effective.
								</p>
							</div>
						</div>
						<div className="col-lg-6 align-items-center order-1 order-lg-2">
							<div>
								<img src={servise_image1} alt="Our Development Process" className="services_page_image" />
							</div>
						</div>
					</div>
				</div>
			</div>



			{/* NEWLY REGENERATED SECTION */}


			<div className="container pt-5">
				<div className="aximo-service-details-wrap">
					<div className="row align-items-center">
						<div className="col-lg-6 align-items-center">
							<div>
								<img src={servise_image3} alt="Why Work with Chameleo GFX Studio" className="services_page_image" />
							</div>
						</div>
						<div className="col-lg-6 pt-4 pt-lg-0">
							<div className="aximo-default-content">

								<h2><span className="services-h2 mb-2">Why Choose <span style={{ color: 'red' }}>Chameleo GFX Studio</span> for Website Development in Ahmedabad?</span></h2>
								<p>
									There are many website developers to go around, but here's why companies hire us:
								</p>
								<ul className="custom-list mt-1 ml-5 pl-5">
									<li className="ml-4 mt-0"><b>Design + coding skills –</b> We combine style with robust coding.</li>
									<li className="ml-4 mt-0"><b>User-centric –</b> Our sites are straightforward and simple to use.</li>
									<li className="ml-4 mt-0"><b>New tech –</b> We take advantage of the latest tools for performance and security.</li>
									<li className="ml-4 mt-0"><b>Search-engine friendly –</b> All sites we create are optimized for search engines.</li>
									<li className="ml-4 mt-0"><b>Reasonably priced solutions –</b> Excellent sites at affordable rates.</li>
									<li className="ml-4 mt-0"><b>Personalized support –</b> We don't merely construct; we sustain and enhance.</li>
									<li className="ml-4 mt-0"><b>AI-driven strategies –</b> From intelligent recommendations to predictive insights, we future-proof your site.</li>
								</ul><br />
								<p>
									We have one aim: to build sites that make a lasting impression and deliver genuine results.
								</p>

							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="container pt-5">
					<div className="aximo-service-details-wrap">
						<div className="row">
							<div className="col-lg-6 align-items-center">
								<div>
									<img src={servise_image3} alt="Graphic Design" className="services_page_image" />
								</div>
							</div>
							<div className="col-lg-6">
								<div className="aximo-default-content">

									<h2><span className="custom-h2">The Role of Websites in Today's Digital World</span></h2>
									<p>
										The internet is now the go-to platform for nearly everything shopping, education, leisure, and services. That's why it's no longer a choice to have a strong online presence; it's necessary.
									</p>
									<ul className="custom-list">
										<li>Websites build confidence and bring local customers for small businesses.</li>
										<li>Websites drive sales with hassle-free shopping experiences for e-commerce stores.</li>
										<li>Websites enhance brand image and deliver critical updates for corporates.</li>
										<li>A properly developed website is the core of your growth and digital marketing strategy.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			<div className="container pt-5">
				<div className="aximo-service-details-wrap">
					<h2 className="text-center mb-5">
						<span className="services-h2">Website Development Services We Offer</span>
					</h2>

					{services.map((service, serviceIndex) => (
						<div key={serviceIndex} className="mb-5">
							<div className="row">
								{service.categories.map((category, catIndex) => (
									<div
										key={catIndex}
										className="col-12 col-lg-4 col-md-6 d-flex flex-column align-items-start mb-5"
									>
										<button
											className="px-4 py-2 bg-black text-white rounded-pill fw-semibold mb-3"
											style={{ fontSize: "16px" }}
										>
											{category.subtitle}
										</button>
										<ul className="list-unstyled custom-list">
											{category.items.map((item, iIndex) => (
												<li key={iIndex} className="mb-2">
													<a href={item.link} className="text-dark">
														{item.text}
													</a>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
					))}
				</div>


			</div>

			<div className="containar-flude bg-black mt-5 ">
				<div className="container pt-5 pb-5">
					<div className="aximo-service-details-wrap">
						<div className="row">
							<div className="col-lg-12">
								<div className="aximo-default-content">

									<h2 className="text-center"><span className="services-h2 text-white-smoke">Hire Best Website Development Company in Ahmedabad For Business</span></h2>
									<p className="text-white-smoke text-center">
										A website is not just a virtual space; it is the online face of your business. At Ahmedabad's Chameleo GFX Studio, we design websites that are contemporary, high-traffic, and effective.
									</p>
									<p className="text-white-smoke text-center">
										Whether you require a small business website, an online store, or a complete corporate solution, our team is prepared to deliver. With us, you don't get a website you get a platform that attracts, engages, and converts. Because at Chameleo GFX Studio, we don't build websites we build digital growth machines.
									</p>
									<div className="text-center mt-4">
										<Link to="/contact-us" className="aximo-default-btn pill bg-red">
											Schedule a call
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="container pt-5">
				<div className="row ">
					<div className="col-12 d-flex flex-column">
					<div className=" d-flex flex-column align-items-center">
						<img  src={servise_image5} alt="Service" style={{ paddingLeft: "20px" }}
						/>

						<div className="card bg-light mt-3 p-3 border-0 shadow-sm">
							<h3 className="text-center mb-3">Planning</h3>
							<p> We start with knowing your target audience, learning about your goals, and your exact project requirements. We plan everything from start to finish based on our complete survey.
							</p>
						</div>
					</div>

					<div className=" d-flex flex-column align-items-center ">
						<img src={servise_image6} alt="Service" style={{ paddingLeft: "20px" }} />
						<div className="card bg-light mt-3 p-3 border-0 shadow-sm">
							<h3 className="text-center mb-3">Planning</h3>
							<p> We start with knowing your target audience, learning about your goals, and your exact project requirements. We plan everything from start to finish based on our complete survey.
							</p>
						</div>
					</div>

					<div className=" d-flex flex-column align-items-center">
						<img src={servise_image7} alt="Service" style={{ paddingLeft: "20px" }} />
						<div className="card bg-light mt-3 p-3 border-0 shadow-sm">
							<h3 className="text-center mb-3">Planning</h3>
							<p> We start with knowing your target audience, learning about your goals, and your exact project requirements. We plan everything from start to finish based on our complete survey.
							</p>
						</div>
					</div>

					<div className=" d-flex flex-column align-items-center">
						<img src={servise_image8} alt="Service" />
						<div className="card bg-light mt-3 p-3 border-0 shadow-sm">
							<h3 className="text-center mb-3">Planning</h3>
							<p> We start with knowing your target audience, learning about your goals, and your exact project requirements. We plan everything from start to finish based on our complete survey.
							</p>
						</div>
					</div>
</div>
				</div>
			</div> */}


			<div className="container mt-5">

				<section className="faq-section py-5 bg-white-smoke">
					<div className="container">
						<h2 className="mb-4 text-lg-center text-left">
							<span className="services-h2 text-lg-center text-left">FAQs on Website Development</span>
						</h2>

						<ServiceAccordion items={faqData} defaultOpen={0} />
					</div>
				</section>
			</div>
		</div>
	);
}

export default WebDevelopmentDetails;
