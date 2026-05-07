import { Helmet } from "react-helmet-async";
import BlogHero from "../components/common/BlogHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import GoogleMap from "../components/contact/GoogleMap";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
import heroBannerImage from "../assets/images/v1/Group 112.webp";
function ContactUs() {
	const location = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};
	return (
		<>
			<Helmet>
				<title>Contact Details of Best Graphic & Branding Agency in Ahmedabad - Chameleo GFX Studio</title>
				<meta name="description" content="Contact Details of Chameleo GFX Studio– Best Graphic & Branding Agency in Ahmedabad. Call on +919737472636 & Email on info@chameleogfxstudio.com." />
				<meta name="keywords" content="Contact US, Chameleo GFX Studio, Chameleo GFX Studio, Contact Details, Call, Email, Address, Ahmedabad, India, Contact Details of Graphic Company, Graphic Services Provider Contact details, Contact Details of Branding Company, Graphic Services Provider Contact details" />
				<link
					rel="canonical"
					href="https://chameleogfxstudio.com/contact-us/"
				/>
			</Helmet>
			<BlogHero title="Contact Us" breadcrumbTitle="Contact Us" image={heroBannerImage} />
			<div className="bg-white-smoke">
				<ContactForm />
				<ContactInfo />
				<GoogleMap location={location} />
				<TwoColumnFaq />
			</div>

		</>
	);
}

export default ContactUs;
