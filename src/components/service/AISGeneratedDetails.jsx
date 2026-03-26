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

const faqData = [
	{
		question: "What is AI-generated development?",
		answer: "AI-generated development leverages artificial intelligence to create, optimize, and automate software development processes, resulting in faster, more efficient, and intelligent solutions.",
	},
	{
		question: "How does AI improve development processes?",
		answer: "AI improves development by automating repetitive tasks, generating code, optimizing performance, predicting bugs, and providing intelligent insights throughout the development lifecycle.",
	},
	{
		question: "What AI technologies do you use?",
		answer: "We utilize advanced AI technologies including machine learning, deep learning, natural language processing, computer vision, and neural networks to create intelligent solutions.",
	},
	{
		question: "Can AI replace human developers?",
		answer: "AI complements human developers by handling repetitive tasks and providing intelligent assistance, but human creativity, problem-solving, and strategic thinking remain essential.",
	},
	{
		question: "How long does AI development take?",
		answer: "AI-powered development typically reduces project timelines by 30-50% compared to traditional methods, depending on project complexity and requirements.",
	},
];

const AISGeneratedDetails = () => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	const [isSubmitted, setIsSubmitted] = useState(false);

	const submitForm = (data) => {
		emailjs
			.send(
				"service_4hzipjm",
				"template_vnt9ibw",
				{
					name: data.name,
					email: data.email,
					phone: data.phone,
					message: data.message,
				},
				"9QWvlBpES51DX7O1X"
			)
			.then((response) => {
				console.log("Email sent successfully:", response);
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
		<div className="section pb-0">
			<div className="container pt-5">
				<div className="aximo-service-details-wrap">
					<div className="row">
						<div className="col-lg-12">
							<div className="aximo-default-content">
								<h1 className="text-lg-center text-sm-left"><span className="custom-h2"><span style={{ color: 'red' }}>AI Development</span> · Ahmedabad, India</span></h1>

								<p className="text-lg-center text-sm-left pt-sm-2 pt-3 pt-lg-0">
									<b>AI-Generated Solutions for Modern Business</b><br /><br />
									In today's rapidly evolving digital landscape, artificial intelligence is not just a buzzword—it's a transformative force reshaping how we build, deploy, and scale software solutions. At Chameleo GFX Studio, we harness the power of AI-generated development to create intelligent systems that learn, adapt, and evolve with your business needs.
								</p>
								<p className="text-lg-center text-sm-left pt-sm-2 pt-3 pt-lg-0">
									Our AI-driven approach combines cutting-edge machine learning algorithms with human expertise to deliver solutions that are not only faster and more efficient but also smarter and more intuitive. From automated code generation to intelligent testing and optimization, we're pioneering the future of software development.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container pt-5">
				<div className="aximo-service-details-wrap">
					<div className="row">
						<div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
							<div className="aximo-default-content">
								<h2><span className="services-h2">Where <span style={{ color: 'red' }}>AI Meets Innovation</span></span></h2>
								<p className="mb-4">
									Traditional software development is time-consuming and prone to human error. AI-generated development revolutionizes this process by leveraging machine learning models trained on millions of code repositories, best practices, and design patterns. The result? Faster development cycles, higher code quality, and more robust solutions.
								</p>
								<p className="mb-0">
									Our AI-powered tools can generate entire application architectures, optimize database schemas, predict potential bugs before they occur, and even suggest performance improvements in real-time. This isn't just automation—it's intelligent assistance that amplifies human creativity and technical expertise.
								</p>
							</div>
						</div>
						<div className="col-lg-6 order-1 order-lg-2 pt-4 pt-lg-0">
							<div>
								<img src={servise_image2} alt="AI Generated Development" className="services_page_image" style={{ height: '400px', objectFit: 'cover', width: '100%', borderRadius: '8px' }} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container pt-5">
				<div className="aximo-service-details-wrap">
					<div className="row">
						<div className="col-lg-6">
							<div>
								<img src={servise_image4} alt="AI Development Process" className="services_page_image" style={{ height: '400px', objectFit: 'cover', width: '100%', borderRadius: '8px' }} />
							</div>
						</div>
						<div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
							<div className="aximo-default-content">
								<h2><span className="services-h2">Why Choose <span style={{ color: 'red' }}>AI-Generated Development</span></span></h2>
								<ul className="custom-list mt-1 ml-5 pl-5">
									<li className="ml-4 mt-0"><b>50% Faster Development.</b> AI-assisted coding and automated testing dramatically reduce development time while maintaining quality standards.</li>
									<li className="ml-4 mt-0"><b>Intelligent Bug Detection.</b> Our AI systems identify potential issues before deployment, reducing debugging time by up to 70%.</li>
									<li className="ml-4 mt-0"><b>Continuous Optimization.</b> AI algorithms continuously monitor and optimize performance, ensuring your applications run at peak efficiency.</li>
									<li className="ml-4 mt-0"><b>Scalable Architecture.</b> AI-generated designs automatically scale with your business needs, eliminating costly rewrites.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container pt-5">
				<div className="aximo-service-details-wrap">
					<div className="row">
						<div className="col-lg-6 order-2 order-lg-1 pt-4 pt-lg-0">
							<div className="aximo-default-content">
								<h2><span className="services-h2">Our AI <span style={{ color: 'red' }}>Development Stack</span></span></h2>
								<p>
									We leverage the most advanced AI technologies and frameworks to deliver cutting-edge solutions. Our stack includes TensorFlow, PyTorch, OpenAI GPT models, and custom-trained models for specific domains. From natural language processing to computer vision, we have the expertise to implement any AI-powered feature you can imagine.
								</p>
								<p>
									Our development process integrates AI at every stage—from initial requirement analysis and architecture design to coding, testing, and deployment. This holistic approach ensures that AI isn't just an add-on but a fundamental part of your solution's DNA.
								</p>
							</div>
						</div>
						<div className="col-lg-6 order-1 order-lg-2 pt-4 pt-lg-0">
							<div>
								<img src={servise_image1} alt="AI Development Stack" className="services_page_image" style={{ height: '400px', objectFit: 'cover', width: '100%', borderRadius: '8px' }} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container py-lg-5 py-3" id="contact-form">
				<div className="row align-items-center">
					<div className="col-md-6 mb-4 mb-md-0 pr-5 mr-5">
						<div className="servisepage-form-section servisepage-form-section-1 pr-5">
							<h2>Build the Future with AI</h2>
						</div>

						<div className="d-flex justify-content-between align-items-left py-3 mt-4">
							<div>
								<h3 className="text-danger fw-bold mb-0 our_efficiently">500+</h3>
								<small className="text-muted our_efficiently_1">AI Projects Delivered</small>
							</div>
							<div>
								<h3 className="text-danger fw-bold mb-0 our_efficiently">98%</h3>
								<small className="text-muted our_efficiently_1">Client Satisfaction</small>
							</div>
							<div>
								<h3 className="text-danger fw-bold mb-0 our_efficiently">24/7</h3>
								<small className="text-muted our_efficiently_1">AI Support</small>
							</div>
						</div>

						<p className="mt-4">
							The future of software development is here, and it's powered by artificial intelligence. Whether you're looking to automate existing processes, create intelligent applications, or leverage AI for competitive advantage, Chameleo GFX Studio has the expertise and technology to bring your vision to life.
						</p>
						<p className="mt-2">
							Ready to harness the power of AI for your next project? Let's build something extraordinary together.
						</p>
					</div>
					<div className="col-md-6">
						<form onSubmit={handleSubmit(submitForm)} className="servise-aximo-form-wrap3 border border-1 rounded p-4 shadow-sm">
							<Field error={errors.name}>
								<div className="aximo-form-field2 mb-5">
									<input
										{...register("name", { required: "Name is required." })}
										type="text"
										name="name"
										placeholder="Your Name*"
									/>
								</div>
							</Field>
							<Field error={errors.email}>
								<div className="aximo-form-field2 mb-5">
									<input
										{...register("email", { required: "Email is required." })}
										type="email"
										name="email"
										placeholder="Your Email*"
									/>
								</div>
							</Field>
							<Field error={errors.phone}>
								<div className="aximo-form-field2 mb-5">
									<input
										{...register("phone", { required: "Phone is required." })}
										type="tel"
										name="phone"
										placeholder="Your Phone*"
									/>
								</div>
							</Field>
							<Field error={errors.message}>
								<div className="aximo-form-field2 mb-5">
									<textarea
										{...register("message", { required: "Message is required." })}
										name="message"
										placeholder="Your Message*"
									></textarea>
								</div>
							</Field>
							<button
								type="submit"
								className="aximo-default-btn pill bg-red"
								disabled={isSubmitted}
							>
								{isSubmitted ? "Sending..." : "Start Your AI Project"}
							</button>
						</form>
					</div>
				</div>
			</div>

			<div className="container pt-5">
				<div className="aximo-service-details-wrap">
					<div className="row">
						<div className="col-lg-12">
							<div className="aximo-default-content text-center">
								<h2 className="text-center"><span className="services-h2">Frequently Asked Questions</span></h2>
								<p className="text-center">
									Got questions about AI-generated development? We've got answers.
								</p>
							</div>
						</div>
					</div>
					<div className="row mt-5">
						<div className="col-lg-8 mx-auto">
							<ServiceAccordion faqData={faqData} />
						</div>
					</div>
				</div>
			</div>

			<div className="container py-5">
				<div className="aximo-cta-section aximo-cta-section-1 text-center">
					<div className="aximo-cta-content">
						<div className="aximo-default-content">
							<h2 className="text-center"><span className="services-h2 text-white-smoke">Ready to Transform with AI?</span></h2>
							<p className="text-white-smoke text-center">
								Let's create intelligent solutions that drive innovation and growth for your business.
							</p>
							<div className="text-center mt-4">
								<Link to="/contact-us" className="aximo-default-btn pill bg-red">
									Start Your AI Journey
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AISGeneratedDetails;
