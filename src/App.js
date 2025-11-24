import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./components/home-one/header"; // Navbar की जगह Header इस्तेमाल करें
import ImageSection from "./components/home-one/ImageSection"; // ब्लॉग जैसा बैनर
import ServicePageHeroBanner from "./components/common/ServicePageHeroBanner"; // केवल सर्विस पेज के लिए नया बैनर

// यह कंपोनेंट तय करेगा कि कौनसा बैनर दिखाना है
const ConditionalHeroBanner = () => {
	const location = useLocation();
	const path = location.pathname || "";

	// अगर हम सर्विस पेज पर हैं तो सिर्फ़ सर्विस का ही बैनर दिखाएं
	if (path === "/service" || path.startsWith("/service/")) {
		return <ServicePageHeroBanner />;
	}

	// ब्लॉग पेज और सिंगल ब्लॉग पेज अपने-अपने ही बैनर घटक उपयोग करते हैं,
	// इसलिए ग्लोबल/डिफ़ॉल्ट बैनर यहाँ न दिखाएं — वापस null कर दें
	if (path.startsWith("/blog") || path.startsWith("/blogs") || path.startsWith("/blog-grid")) {
		return null;
	}

	// बाकी सभी पेजों के लिए डिफ़ॉल्ट ImageSection दिखाएं (होम व अन्य)
	return <ImageSection />;
};

// AppContent कंपोनेंट जो राउटर के अंदर रहेगा
const AppContent = () => {
	return (
		<>
			<Helmet>
				<meta name="Yahoobot" content="Index, Follow" />
				<meta name="MSNbot" content="index, follow" />
				<meta name="allow-search" content="yes" />
				<meta name="robots" content="index, follow" />
				<meta name="author" content="Chameleo GFX Studio" />
				<meta name="geo.region" content="IN-GJ" />
				<meta name="Geography" content="F Block, PNTC, F - 1001, Times Of India Press Rd, Rajmani Society, Satellite, Shyamal, Ahmedabad, Gujarat 380015" />
				<meta name="publisher" content="Chameleo GFX Studio" />
			</Helmet>
			<Header /> {/* Navbar */}
			<ConditionalHeroBanner /> {/* यह URL के हिसाब से सही बैनर दिखाएगा */}
			<Routes>
				<Route path="/" element={<div />} /> {/* होम पेज का कंटेंट यहां आएगा */}
				<Route path="/About-us" element={<div>About Page</div>} />
				<Route path="/service" element={<div>Services Page</div>} />
				<Route path="/industries-we-serve" element={<div>Industries We Serve</div>} />
				<Route path="/blogs" element={<div>Blogs</div>} />
				<Route path="/contact-us" element={<div>Contact Us</div>} />
			</Routes>
		</>
	);
};

function App() {
	return (
		<BrowserRouter>
			<AppContent />
		</BrowserRouter>
	);
}

export default App;