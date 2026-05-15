import Star2Img from "../../assets/images/v1/star2.png";

const faqData = {
	faq1: [
		{
			id: crypto.randomUUID(),
			title: "What services does Chameleo GFX Studio offer?",
			text: "<a href='https://chameleogfxstudio.com/' target='_blank' rel='noopener noreferrer' style='color:#ed1d24; font-weight:600;'>Chameleo GFX Studio</a> is a leading Digital Marketing & Web Development Agency in Ahmedabad offering services like website design & development, SEO, social media marketing, branding, logo design, graphic design, performance marketing, and eCommerce solutions for businesses of all sizes.",
		},
		{
			id: crypto.randomUUID(),
			title: "Do you work with startups and small businesses?",
			text: "Absolutely! We work with startups, local businesses, and established brands across different industries. Our digital marketing and web development solutions are designed to fit businesses of every size and budget.",
		},
		{
			id: crypto.randomUUID(),
			title: "Can I see your previous work or portfolio?",
			text: "Yes, you can explore our portfolio to view our latest website designs, branding projects, SEO projects, and digital marketing campaigns created for clients across multiple industries.",
		},
	],
	faq2: [
		{
			id: crypto.randomUUID(),
			title: "Do you provide ongoing website maintenance and support?",
			text: "Yes, we offer website maintenance, security updates, performance optimization, content updates, and technical support to ensure your website runs smoothly and stays updated.",
		},
		{
			id: crypto.randomUUID(),
			title: "Can you redesign my existing website?",
			text: "Yes, we provide website redesign services to improve website design, speed, user experience, mobile responsiveness, SEO performance, and overall conversion rate.",
		},
		{
			id: crypto.randomUUID(),
			title: "How can I get started with Chameleo GFX Studio?",
			text: "Getting started is simple! Contact our team through the phone numbers: <a href='tel:+918460384838' style='color:#ed1d24; font-weight:600;'>+91-846-038-4838</a>, <a href='tel:+919737472636' style='color:#ed1d24; font-weight:600;'>+91-973-747-2636</a>, or email us at <a href='mailto:info@chameleogfxstudio.com' style='color:#ed1d24; font-weight:600;'>info@chameleogfxstudio.com</a>, <a href='mailto:sales@chameleogfxstudio.com' style='color:#ed1d24; font-weight:600;'>sales@chameleogfxstudio.com</a>. We'll understand your requirements and provide the best digital marketing and web development solution for your business.",
		},
	],
};

function ContactFaq() {
	return (
		<div className="section aximo-section-padding bg-white-smoke">
			<div className="container">
				<div className="text-center mb-5">
					<h2>
						These FAQs help clients learn about us
						<span className="aximo-title-animation">

							<span className="aximo-title-icon">
								<img className="shape-color" src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap responsive-margin">
							{faqData.faq1.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
											<circle cx="15" cy="15" r="9" fill="black" />
											<path fillRule="evenodd" clipRule="evenodd" d="M27 15C27 21.6274 21.6274 27 15 27C8.37258 27 3 21.6274 3 15C3 8.37258 8.37258 3 15 3C21.6274 3 27 8.37258 27 15ZM15 10.5C14.4467 10.5 13.9614 10.7988 13.6998 11.2511C13.285 11.9682 12.3674 12.2132 11.6503 11.7984C10.9332 11.3836 10.6881 10.466 11.103 9.74891C11.8788 8.40777 13.3325 7.5 15 7.5C17.4853 7.5 19.5 9.51472 19.5 12C19.5 13.9593 18.2478 15.6262 16.5 16.2439V16.5C16.5 17.3284 15.8284 18 15 18C14.1716 18 13.5 17.3284 13.5 16.5V15C13.5 14.1716 14.1716 13.5 15 13.5C15.8284 13.5 16.5 12.8284 16.5 12C16.5 11.1716 15.8284 10.5 15 10.5ZM15 22.5C15.8284 22.5 16.5 21.8284 16.5 21C16.5 20.1716 15.8284 19.5 15 19.5C14.1716 19.5 13.5 20.1716 13.5 21C13.5 21.8284 14.1716 22.5 15 22.5Z" fill="#ed1d24" />
										</svg>
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p dangerouslySetInnerHTML={{ __html: faq.text }}></p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap">
							{faqData.faq2.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
											<circle cx="15" cy="15" r="9" fill="black" />
											<path fillRule="evenodd" clipRule="evenodd" d="M27 15C27 21.6274 21.6274 27 15 27C8.37258 27 3 21.6274 3 15C3 8.37258 8.37258 3 15 3C21.6274 3 27 8.37258 27 15ZM15 10.5C14.4467 10.5 13.9614 10.7988 13.6998 11.2511C13.285 11.9682 12.3674 12.2132 11.6503 11.7984C10.9332 11.3836 10.6881 10.466 11.103 9.74891C11.8788 8.40777 13.3325 7.5 15 7.5C17.4853 7.5 19.5 9.51472 19.5 12C19.5 13.9593 18.2478 15.6262 16.5 16.2439V16.5C16.5 17.3284 15.8284 18 15 18C14.1716 18 13.5 17.3284 13.5 16.5V15C13.5 14.1716 14.1716 13.5 15 13.5C15.8284 13.5 16.5 12.8284 16.5 12C16.5 11.1716 15.8284 10.5 15 10.5ZM15 22.5C15.8284 22.5 16.5 21.8284 16.5 21C16.5 20.1716 15.8284 19.5 15 19.5C14.1716 19.5 13.5 20.1716 13.5 21C13.5 21.8284 14.1716 22.5 15 22.5Z" fill="#ed1d24" />
										</svg>
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p dangerouslySetInnerHTML={{ __html: faq.text }}></p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactFaq;
