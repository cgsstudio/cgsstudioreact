import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Field from "../common/Field";
import ServiceAccordion from "../common/ServiceAccordion";
import servise_image2 from "../../assets/images/v1/Process_1 2.webp";
import servise_image4 from "../../assets/images/v1/Process_1 2 (1).webp";
import servise_image1 from "../../assets/images/v1/Process_1 3 (2).webp";
import servise_image3 from "../../assets/images/v1/WebDev_5.png";
import "../../assets/css/ai-chatbot-spacing.css";

const faqData = [
	{
		question: "What is AI chatbot development?",
		answer: "AI chatbot development is the process of creating intelligent conversational agents that can understand natural language, provide automated responses, and handle customer interactions without human intervention.",
	},
	{
		question: "How long does it take to develop an AI chatbot?",
		answer: "The development timeline varies based on complexity. Simple FAQ bots may take 2-4 weeks, while advanced AI chatbots with custom features typically take 6-12 weeks.",
	},
	{
		question: "Can AI chatbots integrate with my existing systems?",
		answer: "Yes! Our AI chatbots can seamlessly integrate with CRMs, helpdesks, payment systems, and other business tools to create a unified customer experience.",
	},
	{
		question: "What platforms do you build chatbots for?",
		answer: "We build chatbots for websites, mobile apps, WhatsApp, Facebook Messenger, and enterprise applications based on your business needs.",
	},
	{
		question: "Do you provide ongoing support and maintenance?",
		answer: "Yes, we offer comprehensive support packages including monitoring, updates, performance optimization, and continuous improvement of your chatbot.",
	},
	{
		question: "How do AI chatbots improve business efficiency?",
		answer: "AI chatbots reduce operational costs by 60%, provide 24/7 support, improve response times from hours to seconds, and increase customer satisfaction scores.",
	},
	{
		question: "Why choose Chameleo GFX Studio for AI chatbot development?",
		answer: "We combine technical expertise with business understanding to create chatbots that not only work technically but also drive real business results and customer satisfaction.",
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

function AIChatbotDetails() {
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
		<div className="section pb-0 ai-chatbot-page-enhanced">
			<div className="container pt-5 pt-md-0">
				<div className="aximo-service-details-wrap">
					<div className="row">
						<div className="col-lg-12">
							<div className="aximo-default-content">
								<h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>AI Chatbot Development</span> · Ahmedabad, India</span></h1>

								<p className="text-lg-center text-sm-left pt-sm-2 pt-3 pt-lg-0">
									<b>Your Customers Expect Answers. Not Waiting.</b><br /><br />
									There's a quiet expectation that's reshaped how businesses need to operate: customers want a response, and they want it now. Not in business hours. Not after a ticket is logged. Right now. For businesses trying to scale without scaling their support costs, that expectation can feel impossible to meet until you stop trying to meet it with headcount alone and start meeting it with intelligence.
								</p>

								<p className="text-lg-center text-sm-left">
									AI chatbots have matured far beyond scripted FAQ bots. Today's conversational AI understands context, adapts to tone, handles complex multi-step interactions, and improves with every conversation it has. Chameleo GFX Studio builds chatbot solutions that feel less like talking to software and more like talking to a knowledgeable team member who never clocks out.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container pt-5" style={{ paddingTop: '80px' }}>
				<div className="aximo-service-details-wrap">
					<div className="row">
						<div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
							<div className="aximo-default-content" style={{ minHeight: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
								<h2><span className="services-h2">What a Well-Built <span style={{ color: 'red' }}>AI Chatbot</span> Actually Does</span></h2>
								<p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
									Our AI Chatbot Development Services in Ahmedabad cover every dimension of intelligent conversation design, from the first user message to the final conversion or resolution:
								</p>
								<ul className="custom-list mt-1 ml-5 pl-5" style={{ lineHeight: '1.7' }}>
									<li className="ml-4 mt-0" style={{ marginBottom: '12px' }}><b>24/7 customer support –</b> Handle queries, returns, complaints, and guidance around the clock, without adding a single support hire.</li>
									<li className="ml-4 mt-0" style={{ marginBottom: '12px' }}><b>Lead qualification and nurturing –</b> Engage website visitors the moment intent appears, qualify them through smart dialogue, and hand off warm leads directly to your sales team.</li>
									<li className="ml-4 mt-0" style={{ marginBottom: '12px' }}><b>Appointment and booking automation –</b> Let users self-schedule, reschedule, and get confirmations through natural conversation, no forms, no friction.</li>
									<li className="ml-4 mt-0" style={{ marginBottom: '12px' }}><b>Product guidance and recommendations –</b> Walk users through complex decisions, compare options, and surface the right product or service based on their specific needs.</li>
									<li className="ml-4 mt-0" style={{ marginBottom: '12px' }}><b>Seamless system integration –</b> Connect your chatbot to CRMs, helpdesks, payment systems, and internal tools so every conversation drives action, not just answers.</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6 order-1 order-lg-2 pt-4 pt-lg-0">
							<div>
								<img src={servise_image2} alt="AI Chatbot Development" className="services_page_image" style={{ height: '600px', objectFit: 'cover', width: '100%', borderRadius: '8px' }} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container pt-5">
				<div className="aximo-service-details-wrap">
					<div className="row ">
						<div className="col-lg-6 ">
							<div>
								<img src={servise_image4} alt="Why Forward-Thinking Businesses Invest in AI Chatbots" className="services_page_image" />
							</div>
						</div>
						<div className="col-lg-6 pt-4 pt-lg-0">
							<div className="aximo-default-content">
								<h2><span className="services-h2">Why Forward-Thinking Businesses <span style={{ color: 'red' }}>Invest in AI Chatbots</span></span></h2>
								<p>
									The case for AI chatbots isn't built on novelty; it's built on measurable outcomes. Businesses that deploy intelligent conversational AI consistently report faster resolution times, higher customer satisfaction scores, improved lead conversion rates, and significant reductions in operational overhead. More importantly, a well-designed chatbot makes every customer feel attended to, regardless of the hour or the volume of simultaneous interactions happening in the background.
								</p>
								<p>
									For growing businesses, that means you can expand your customer-facing capability without a proportional expansion in team size, and maintain a consistent, high-quality experience across every touchpoint as you scale.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container py-lg-5 py-3 " id='contact-form'>
				<div className="row align-items-center">
					<div className="col-md-6 mb-4 mb-md-0 pr-5  mr-5">
						<div className="servisepage-form-section servisepage-form-section-1 pr-5">
							<h2>Start Every Conversation with Confidence </h2>
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

			<div className="container pt-5">
				<div className="aximo-service-details-wrap">
					<div className="row ">
						<div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
							<div className="aximo-default-content">
								<h2><span className="services-h2">Why Choose <span style={{ color: 'red' }}>Chameleo GFX Studio</span> for AI Chatbot Development</span></h2>
								<p>
									Chameleo GFX Studio is recognized as a trusted AI Chatbot Development Company in Ahmedabad, India. We don't apply cookie-cutter solutions. We study your customer journey, your most common friction points, and the tone that reflects your brand, then engineer a chatbot that fits naturally into how your business already communicates.
								</p>
								<p>
									As a leading AI chatbot service provider in Ahmedabad, we build across platforms with multilingual support, analytics dashboards, and continuous improvement cycles. Our clients don't just launch chatbots; they deploy systems that get measurably better over time.
								</p>
								<p>
									If you're looking for the best AI Chatbot Development Services in Ahmedabad, India, you're looking for a team that cares about what happens after go-live. Chameleo GFX Studio delivers that care alongside deep technical expertise and a track record of chatbot solutions that genuinely perform in the real world.
								</p>
							</div>
						</div>
						<div className="col-lg-6  order-1 order-lg-2">
							<div>
								<img src={servise_image1} alt="Why Choose Chameleo GFX Studio" className="services_page_image" />
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="containar-flude bg-black mt-5">
				<div className="container pt-5 pb-5">
					<div className="aximo-service-details-wrap">
						<div className="row">
							<div className="col-lg-12">
								<div className="aximo-default-content">
									<h2 className="text-center"><span className="services-h2 text-white-smoke">Ready to turn every conversation into an opportunity?</span></h2>
									<p className="text-white-smoke text-center">
										Every unanswered query is a missed opportunity. Every delayed response is a trust signal working against you. AI Chatbot Development in Ahmedabad with the right partner means every visitor gets a timely, intelligent, and brand-consistent response, from the first hello to the final conversion. Chameleo GFX Studio is ready to build that experience for you.
									</p>
									<p className="text-white-smoke text-center">
										Let's build your AI chatbot together reach out to Chameleo GFX Studio today.
									</p>
									<div className="text-center mt-4">
										<Link to="/contact-us" className="aximo-default-btn pill bg-red">
											Get Started Today
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container mt-5">
				<section className="faq-section py-5 bg-white-smoke">
					<div className="container">
						<h2 className="mb-4 text-lg-center text-left">
							<span className="services-h2 text-lg-center text-left">FAQs on AI Chatbot Development</span>
						</h2>
						<ServiceAccordion items={faqData} defaultOpen={0} />
					</div>
				</section>
			</div>
		</div>
	);
}

export default AIChatbotDetails;
