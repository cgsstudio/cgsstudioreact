import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./components/home-one/header";
import ImageSection from "./components/home-one/ImageSection";
import ServicePageHeroBanner from "./components/common/ServicePageHeroBanner";

const ConditionalHeroBanner = () => {
	const location = useLocation();
	const path = location.pathname || "";

	if (path === "/service" || path.startsWith("/service/")) {
		return <ServicePageHeroBanner />;
	}

	if (path.startsWith("/blog") || path.startsWith("/blogs") || path.startsWith("/blog-grid")) {
		return null;
	}

	return <ImageSection />;
};

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
			<ConditionalHeroBanner /> { }
			<Routes>
				<Route path="/" element={<div />} /> { }
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