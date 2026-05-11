import FooterBottom from "./FooterBottom";
import FooterContent from "./FooterContent";
import MessageForm from "./MessageForm";
import FooterTop from "./FooterTop";
import FooterCenter from "./FooterCenter";
import WhatsAppWidget from "../../WhatsappWidget/WhatsAppWidget.jsx"

function Footer() {
	return (
		<footer className="aximo-footer-section dark-bg pt-5">
			<div className="container">
				<FooterTop />
				<FooterCenter />
				<div className="text-center pb-3 border-bottom border-light border-opacity-10 mb-4">
					<p className="footer-text" style={{ color: "#fdfde1", opacity: 0.7, margin: 0 }}>
						Digital Marketing & Web Development Agency in Ahmedabad india
					</p>
				</div>
				<div className="aximo-footer-bottom">
					<div className="row">
						<FooterBottom />
					</div>
				</div>
			</div>
			<WhatsAppWidget />
		</footer>
	);
}

export default Footer;
