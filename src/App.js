import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./components/home-one/header"; // Navbar की जगह Header इस्तेमाल करें
import ImageSection from "./components/home-one/ImageSection"; // नया सेक्शन इम्पोर्ट करें

function App() {
	return (
		<BrowserRouter>
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
			<Header /> {/* Navbar की जगह Header कंपोनेंट */}
			<Routes>
				<Route
					path="/"
					element={
						<div>
							{/* आप यहां और भी सेक्शन जोड़ सकते हैं */}
							<ImageSection />
						</div>
					}
				/>
				<Route path="/About-us" element={<div>About Page</div>} />
				<Route path="/service" element={<div>Services Page</div>} />
				<Route path="/industries-we-serve" element={<div>Industries We Serve</div>} />
				<Route path="/blogs" element={<div>Blogs</div>} />
				<Route path="/contact-us" element={<div>Contact Us</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;