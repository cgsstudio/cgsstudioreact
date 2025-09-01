import React from "react";

function ServiceAccordion({ items, defaultOpen = 0 }) {
	return (
		<div className="accordion aximo-accordion-wrap" id="service-accordion">
			{items.map((faq, index) => {
				const collapseId = `collapse-${index}`;
				const isOpen = index === defaultOpen;

				return (
					<div className="accordion-item" key={index}>
						<h4 className="accordion-header">
							<button
								className={`accordion-button ${isOpen ? "" : "collapsed"}`}
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={`#${collapseId}`}
							>
								{faq.question}
							</button>
						</h4>
						<div
							id={collapseId}
							className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
							data-bs-parent="#service-accordion"
						>
							<div className="accordion-body">{faq.answer}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default ServiceAccordion;
