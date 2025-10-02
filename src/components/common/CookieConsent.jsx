import React, { useEffect, useState } from "react";

const STORAGE_KEY = "cgs_cookie_consent";

export default function CookieConsent() {
	const [isVisible, setIsVisible] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (!stored) {
				setIsVisible(true);
			}
		} catch (err) {
			setIsVisible(true);
		}
	}, []);

	useEffect(() => {
		const onResize = () => {
			try {
				setIsMobile(window.innerWidth <= 576);
			} catch (e) {}
		};
		onResize();
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	const handleAccept = () => {
		try {
			localStorage.setItem(
				STORAGE_KEY,
				JSON.stringify({ accepted: true, timestamp: Date.now() })
			);
		} catch (err) {}
		setIsVisible(false);
	};

	const handleReject = () => {
		try {
			localStorage.setItem(
				STORAGE_KEY,
				JSON.stringify({ accepted: false, rejected: true, timestamp: Date.now() })
			);
		} catch (err) {}
		setIsVisible(false);
	};

	const handleCancel = () => {
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<div className="container"
			style={{
				position: "fixed",
				left: 0,
				right: 0,
				bottom: isMobile ? "16px" : "5%",
				zIndex: 1050,
				background: "#ffffff",
				color: "#111827",
				padding: isMobile ? "12px 14px" : "14px 20px",
				boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
				borderRadius: isMobile ? "24px" : "9999px",
				maxWidth: isMobile ? "92%" : "1050px",
				margin: "0 auto",
				border: "1px solid #000000",
		
			}}
		>
			<div className="d-flex flex-column flex-md-row align-items-md-center gap-2 justify-content-between">
				<div className="d-flex align-items-center me-md-3" style={{ lineHeight: 1.5 }}>
					<span className="me-2" aria-hidden="true" style={{ display: "inline-flex", alignItems: "center" }}>
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c4.873 0 8.94-3.492 9.836-8.102A4.002 4.002 0 0 1 18 10a4 4 0 0 1-4-4 4.002 4.002 0 0 1 3.898-3.836C16.94 3.492 12.873 2 12 2Z" fill="#f59e0b"/>
							<circle cx="8.5" cy="11.5" r="1.25" fill="#ffffff"/>
							<circle cx="12.5" cy="15.5" r="1.25" fill="#ffffff"/>
							<circle cx="14" cy="10" r="0.9" fill="#ffffff"/>
						</svg>
					</span>
					<span style={{ fontSize: isMobile ? "16px" : "18px" }}>
						We use cookies to enhance your experience. <a href="/cookie-policy" target="_blank" style={{ color: "#111827",  fontSize: isMobile ? "16px" : "18px", textDecoration: "underline" }}>Learn More</a>.
					</span>
				</div>
				<div className="d-flex align-items-center gap-2" style={{ flexDirection: isMobile ? "column" : "row", width: isMobile ? "100%" : "auto" }}>
					<button
						onClick={handleCancel}
						className="btn btn-link px-2"
						style={{ color: "#000000", textDecoration: "underline", width: isMobile ? "100%" : undefined, textAlign: isMobile ? "center" : "left" }}
					>
						Cancel
					</button>
					<button
						onClick={handleReject}
						className="aximo-default-btn pill aximo-header-btn"
						style={{ padding: "15px", lineHeight: "0", height: "45px", width: isMobile ? "100%" : "120px" }}
					>
						Reject all
					</button>
					<button
						onClick={handleAccept}
						className="aximo-default-btn pill aximo-header-btn"
						style={{ padding: "15px", lineHeight: "0", height: "45px", width: isMobile ? "100%" : "120px" }}
					>
						Accept all
					</button>
				</div>
			</div>
		</div>
	);
}


