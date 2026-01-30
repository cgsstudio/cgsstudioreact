import { useEffect, useRef, useState } from "react";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";

function HeroSection() {
	const vantaRef = useRef(null);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);

		let vantaEffect = null;

		if (vantaRef.current && window.VANTA && !isMobile) {
			const isMobileView = window.innerWidth <= 768;

			const vantaConfig = {
				el: vantaRef.current,
				mouseControls: !isMobileView,
				touchControls: isMobileView,
				gyroControls: false,
				minHeight: isMobileView ? 800.0 : 1000.0,
				minWidth: 100.0,
				scale: isMobileView ? 0.9 : 0.8,
				scaleMobile: 1.0,
				color: 0xff0000,
				color2: 0xe1e1e1,
				backgroundColor: 0x000000,
				size: isMobileView ? 0.7 : 0.7,
				rotateSpeed: isMobileView ? 0.1 : 0.2,
			};

			vantaEffect = window.VANTA.GLOBE(vantaConfig);
		}

		return () => {
			window.removeEventListener("resize", handleResize);
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [isMobile]);

	return (
		<div
			className="aximo-hero-section dark-bg"
			style={{
				position: "relative",
				minHeight: isMobile ? "auto" : "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: isMobile ? "flex-start" : "center",
				overflow: "hidden",
				paddingTop: isMobile ? "150px" : "180px",
				paddingBottom: isMobile ? "0px" : "20px",
				margin: 0,
				background: "#000000", // Fix background to black
				zIndex: 1,
			}}
		>
			{/* Content Container */}
			<div className="container position-relative" style={{ position: "relative", zIndex: 10, width: "100%" }}>
				<div className="row">
					<div className="col-lg-8">
						<HeroContent />
					</div>
					<div className="col-lg-4">
						<HeroThumbs />
					</div>
				</div>
			</div>

			{!isMobile && (
				<div
					ref={vantaRef}
					key={isMobile ? "mobile-vanta" : "desktop-vanta"}
					style={{
						position: isMobile ? "relative" : "absolute",
						top: isMobile ? "auto" : 0,
						left: isMobile ? "auto" : 0,
						width: "100%",
						height: isMobile ? "500px" : "100%",
						zIndex: isMobile ? 1 : -1,
						marginTop: isMobile ? "30px" : "0",
						display: "block",
						background: "transparent"
					}}
				></div>
			)}
		</div>
	);
}

export default HeroSection;
