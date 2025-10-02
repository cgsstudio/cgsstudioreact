import React from "react";

import image1 from "../../../assets/images/Certifications/chamaleogfxstudio.png";
import image2 from "../../../assets/images/Certifications/review-google.png";
import image3 from "../../../assets/images/Certifications/Frame-3.webp";
import image4 from "../../../assets/images/Certifications/Frame-4.webp";

// Data for certifications
const certifications = [
	{
		href: "https://clutch.co/profile/vulture-concepts",
		imgSrc: image1,
		alt: "Clutch Certification Badge",
		title: "Top Web Development Company on Clutch",
	},
	{
		href: "https://g.page/r/Cbnq-ryCGnacEAE/review",
		imgSrc: image2,
		alt: "Google Reviews for Chameleo GFX Studio",
		title: "Google Customer Reviews",
	},
	{
		href: "https://www.goodfirms.co/company/chameleo-gfx-studio",
		imgSrc: "https://assets.goodfirms.co/badges/color-badge/top-web-design-companies.svg",
		alt: "GoodFirms Top Web Design Company Badge",
		title: "Top Web Designing (UI/UX) Company on GoodFirms",
	},
	{
		imgSrc: image4,
		alt: "Another Certification Badge",
		title: "Certification Badge",
	},
	{
		imgSrc: image3,
		alt: "One More Certification Badge",
		title: "Certification Badge",
	},
];

// Common style for images
const imageStyle = {
	width: "200px",
	height: "120px",
	objectFit: "contain",
};

function ImageSection() {
	return (
		<div className="aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>Global Recognition & Certifications</h2>
				</div>

				<div className="row justify-content-center align-items-center g-4 mt-4">
					{certifications.map((cert, index) => (
						<div key={index} className="col-6 col-md-4 col-lg-auto text-center">
							{cert.href ? (
								<a href={cert.href} target="_blank" rel="noopener noreferrer" title={cert.title}>
									<img src={cert.imgSrc} alt={cert.alt} style={imageStyle} />
								</a>
							) : (
								<img src={cert.imgSrc} alt={cert.alt} style={imageStyle} title={cert.title} />
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ImageSection;
