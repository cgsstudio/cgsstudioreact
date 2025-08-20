function Accordion() {
	return (
		<div className="accordion aximo-accordion-wrap" id="aximo-accordion">
			<div className="accordion-item">
				<h4 className="accordion-header">
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
					>
						Creative Branding Solutions
					</button>
				</h4>
				<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Transforming your business into a memorable brand with innovative designs.
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<h4 className="accordion-header" id="headingOne">
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseTwo"
					>
						Custom Design Expertise
					</button>
				</h4>
				<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Delivering unique visuals tailored to make your brand shine brighter.
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<h4 className="accordion-header">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseThree"
					>
						High-Quality Visuals
					</button>
				</h4>
				<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					Elevate your brand with professional and captivating designs.
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<h4 className="accordion-header">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseFour"
					>
						End-to-End Design Services
					</button>
				</h4>
				<div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#aximo-accordion">
					<div className="accordion-body">
					From concept to creation, we craft designs that leave a lasting impact.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Accordion;
