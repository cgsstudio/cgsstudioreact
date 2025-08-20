import React, { useState, useEffect } from 'react';
import DesktopImage from "../../assets/images/contact/Location.jpg";
import MobileImage from "../../assets/images/contact/Location-mobile.jpg"; // add your mobile image

function MyMap() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768); // mobile breakpoint
		};

		handleResize(); // check on load
		window.addEventListener('resize', handleResize); // update on resize
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className="section">
			<div className="container">
				<div className="aximo-map-wrap" style={{ height: "100%", overflow: "hidden" }}>
					<div id="map" style={{ height: "100%" }}>
						<a 
							href="https://maps.app.goo.gl/FiaLxgNzQ2idjJYu5" 
							target="_blank" 
							rel="noopener noreferrer"
							style={{ display: "block", height: "100%" }}
						>
							<img 
								src={isMobile ? MobileImage : DesktopImage} 
								alt="Map Location" 
								style={{ 
									width: "100%", 
									height: "100%", 
									objectFit: "cover", 
									display: "block", 
									cursor: "pointer"
								}} 
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyMap;
