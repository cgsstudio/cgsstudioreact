import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/dev-1.jpg";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";
import ServiceAccordion from "../../components/common/ServiceAccordion";

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
		answer: "We create all types—business sites, e-commerce websites, corporate websites, blogs, and custom web solutions.",
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
	return (
		<div className="section aximo-section-padding2 pb-0">
			<Helmet>
				<title>Website Development Company in Ahmedabad - Chameleo GFX Studio</title>
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
					<div className="aximo-service-details-thumb">
						<img src={SingleImg} alt="Web Development" />
					</div>

					<div className="row">
						<div className="col-lg-12">
							<div className="aximo-default-content">
								<h1>
									<span className="aximo-title-animation">
										<span className="custom-h2">Website Development Company in Ahmedabad</span>
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h1>

								<p>
									A website is like the virtual home of a company. Just as a physical store, it must be inviting, well-structured, and appealing. Website designing is the process of creating that virtual house, ensuring it is aesthetically pleasing, functions well, and provides users with the information they require.
								</p>

								<p>
									At Chameleo GFX Studio, one of the top Website Development companies in Ahmedabad, we develop websites that are not just beautiful but also dynamic. Our websites are quick, responsive, and optimized to grow businesses. Whether you need a clean business website, an e-commerce website, or a corporate site, we develop solutions that match your objectives. For long-term business success, we also implement AI-powered strategies for performance, personalization, and intelligent engagement.
								</p>

								<h2><span className="custom-h2">Why Website Development Matters?</span></h2>
								<p>
									In the age of the internet, most consumers log on to research before making a purchase. Without a professional website, you risk losing customers to others who do. A website is in action 24 hours a day, 7 days a week, spreading the word about your brand, products, and services.
								</p>
								<p><b>Here's why website development matters: </b></p>


								<ul className="custom-list">
									<li><b>First impressions count –</b> Your website is usually the first point of contact people have with your business.</li>
									<li><b>Establishes credibility –</b> A fresh, organized site makes your company trustworthy.</li>
									<li><b>Delivers leads and sales –</b> Sites convert visitors into customers with obvious calls to action.</li>
									<li><b>Works 24/7 –</b> Unlike a brick-and-mortar shop, your site is open 24 hours a day, 7 days a week.</li>
									<li><b>Complements marketing efforts –</b> Search engine optimization-friendly sites rank higher on Google and drive organic traffic.</li>
								</ul><br />

								<p>At Chameleo GFX Studio, we ensure your website is greater than a digital brochure—it is transformed into a business growth tool.</p>

								<h2><span className="custom-h2">What We Do at Chameleo GFX Studio?</span></h2>
								<p>
									As a reliable Website Development Company in Ahmedabad, we offer complete web solutions as per your requirements. Our services are:
								</p>
								<ul className="custom-list">
									<li><b>Custom Website Development –</b> Special websites designed to reflect your brand and objectives.</li>
									<li><b>E-commerce Development –</b> Secure payment online stores and hassle-free shopping websites.</li>
									<li><b>Corporate and Business Websites –</b> Trusted, professional sites that highlight services.</li>
									<li><b>CMS-Based Websites –</b> Simple-to-maintain websites based on WordPress, Shopify, or other software.</li>
									<li><b>Responsive Design –</b> Sites that are a breeze to use on mobiles, tablets, and desktops.</li>
									<li><b>SEO-Friendly Development –</b> Clean code and optimization for better search rankings.</li>
								</ul>

								<h2><span className="custom-h2">Our Development Process</span></h2>
								<ul className="custom-list">
									<li><b>Discovery –</b> Acquiring a clear vision of your business, objectives, and clientele.</li>
									<li><b>Planning –</b> Creating a clear plan with the appropriate designs and functionalities.</li>
									<li><b>Design & Development –</b> Constructing the site with new tools and technology.</li>
									<li><b>Testing –</b> Vetting speed, performance, and usability.</li>
									<li><b>Launch –</b> Publishing your website live for the world to see.</li>
									<li><b>Support –</b> Offering constant updates, upkeep, and enhancements.</li>
								</ul><br />
								<p>
									This process guarantees your site is not only operational but also effective.
								</p>

								<h2><span className="custom-h2">Why Work with Chameleo GFX Studio for Website Development?</span></h2>
								<p>
									There are many website developers to go around, but here's why companies hire us:
								</p>
								<ul className="custom-list">
									<li><b>Design + coding skills –</b> We combine style with robust coding.</li>
									<li><b>User-centric –</b> Our sites are straightforward and simple to use.</li>
									<li><b>New tech –</b> We take advantage of the latest tools for performance and security.</li>
									<li><b>Search-engine friendly –</b> All sites we create are optimized for search engines.</li>
									<li><b>Reasonably priced solutions –</b> Excellent sites at affordable rates.</li>
									<li><b>Personalized support –</b> We don't merely construct; we sustain and enhance.</li>
									<li><b>AI-driven strategies –</b> From intelligent recommendations to predictive insights, we future-proof your site.</li>
								</ul><br />
								<p>
									We have one aim: to build sites that make a lasting impression and deliver genuine results.
								</p>


								<h2><span className="custom-h2">The Role of Websites in Today's Digital World</span></h2>
								<p>
									The internet is now the go-to platform for nearly everything—shopping, education, leisure, and services. That's why it's no longer a choice to have a strong online presence; it's necessary.
								</p>
								<ul className="custom-list">
									<li>Websites build confidence and bring local customers for small businesses.</li>
									<li>Websites drive sales with hassle-free shopping experiences for e-commerce stores.</li>
									<li>Websites enhance brand image and deliver critical updates for corporates.</li>
									<li>A properly developed website is the core of your growth and digital marketing strategy.</li>
								</ul>

								<h2><span className="custom-h2">Final Words</span></h2>
								<p>
									A website is not just a virtual space; it is the online face of your business. At Ahmedabad's Chameleo GFX Studio, we design websites that are contemporary, high-traffic, and effective.
								</p>
								<p>
									Whether you require a small business website, an online store, or a complete corporate solution, our team is prepared to deliver. With us, you don't get a website—you get a platform that attracts, engages, and converts. Because at Chameleo GFX Studio, we don't build websites—we build digital growth machines.
								</p>

								{/* Services List */}
								<div className="container pt-5">
									{services.map((service, index) => (
										<div key={index}>
											<h2>
												<span className="custom-h2">{service.title}</span>
											</h2>
											{service.categories.map((category, catIndex) => (
												<div key={catIndex} className="mb-4">
													<h4 className="mb-3">{category.subtitle}</h4>
													<div className="row">
														{category.items.map((item, itemIndex) => (
															<div key={itemIndex} className="col-12 col-lg-4 col-md-6 col-sm-6">
																<ul className="list-unstyled custom-list">
																	<li><a href={item.link}>{item.text}</a></li>
																</ul>
															</div>
														))}
													</div>
												</div>
											))}
										</div>
									))}
								</div>

								{/* WebDevApproach Component */}
								<WebDevApproach />

								{/* FAQ Section */}
								<section className="faq-section py-5">
									<div className="container">
										<h2 className="mb-4 text-center">
											<span className="custom-h2">FAQs on Website Development</span>
										</h2>
										<ServiceAccordion items={faqData} defaultOpen={0} />
									</div>
								</section>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WebDevelopmentDetails;
