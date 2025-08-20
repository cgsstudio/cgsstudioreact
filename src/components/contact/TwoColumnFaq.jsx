import Star2Img from "../../assets/images/v1/star2.png";
import QuestionImg from "../../assets/images/icon/question.svg";
const faqData = {
	faq1: [
		{
			id: crypto.randomUUID(),
			title: "What services does agency offer?",
			text: "The range of an agency's design services are: graphics, web design, digital marketing, and branding.",
		},
		{
			id: crypto.randomUUID(),
			title: "What is your design process like?",
			text: "Explaining the design agency's process from initial concept to final delivery helps clients understand what to expect.",
		},
		{
			id: crypto.randomUUID(),
			title: "How much does design work cost?",
			text: "The cost of our design services varies depending on the scope of the project. We provide customized quotes after discussing requirements.",
		},
	],
	faq2: [
		{
			id: crypto.randomUUID(),
			title: "What's your design process like?",
			text: "Our design process typically involves discovery, concept development, design, revisions based on feedback, and finalization.",
		},
		{
			id: crypto.randomUUID(),
			title: "How do you handle user feedback?",
			text: "We value client feedback and work closely with you to make sure user happy with the final design. We offer a specific number of revisions.",
		},
		{
			id: crypto.randomUUID(),
			title: "Can we see samples of your work?",
			text: "Yes, we're proud to showcase a portfolio of our previous projects. You can find examples of our work on our website or view our portfolio.",
		},
	],
};
function TwoColumnFaq() {
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="text-center mb-5">
					<h2>
						These FAQs help
						<span className="aximo-title-animation">
							clients learn about us
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
<circle cx="15" cy="15" r="9" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 15C27 21.6274 21.6274 27 15 27C8.37258 27 3 21.6274 3 15C3 8.37258 8.37258 3 15 3C21.6274 3 27 8.37258 27 15ZM15 10.5C14.4467 10.5 13.9614 10.7988 13.6998 11.2511C13.285 11.9682 12.3674 12.2132 11.6503 11.7984C10.9332 11.3836 10.6881 10.466 11.103 9.74891C11.8788 8.40777 13.3325 7.5 15 7.5C17.4853 7.5 19.5 9.51472 19.5 12C19.5 13.9593 18.2478 15.6262 16.5 16.2439V16.5C16.5 17.3284 15.8284 18 15 18C14.1716 18 13.5 17.3284 13.5 16.5V15C13.5 14.1716 14.1716 13.5 15 13.5C15.8284 13.5 16.5 12.8284 16.5 12C16.5 11.1716 15.8284 10.5 15 10.5ZM15 22.5C15.8284 22.5 16.5 21.8284 16.5 21C16.5 20.1716 15.8284 19.5 15 19.5C14.1716 19.5 13.5 20.1716 13.5 21C13.5 21.8284 14.1716 22.5 15 22.5Z" fill="#ed1d24"/>
</svg>
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
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
<circle cx="15" cy="15" r="9" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27 15C27 21.6274 21.6274 27 15 27C8.37258 27 3 21.6274 3 15C3 8.37258 8.37258 3 15 3C21.6274 3 27 8.37258 27 15ZM15 10.5C14.4467 10.5 13.9614 10.7988 13.6998 11.2511C13.285 11.9682 12.3674 12.2132 11.6503 11.7984C10.9332 11.3836 10.6881 10.466 11.103 9.74891C11.8788 8.40777 13.3325 7.5 15 7.5C17.4853 7.5 19.5 9.51472 19.5 12C19.5 13.9593 18.2478 15.6262 16.5 16.2439V16.5C16.5 17.3284 15.8284 18 15 18C14.1716 18 13.5 17.3284 13.5 16.5V15C13.5 14.1716 14.1716 13.5 15 13.5C15.8284 13.5 16.5 12.8284 16.5 12C16.5 11.1716 15.8284 10.5 15 10.5ZM15 22.5C15.8284 22.5 16.5 21.8284 16.5 21C16.5 20.1716 15.8284 19.5 15 19.5C14.1716 19.5 13.5 20.1716 13.5 21C13.5 21.8284 14.1716 22.5 15 22.5Z" fill="#ed1d24"/>
</svg>
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
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

export default TwoColumnFaq;
