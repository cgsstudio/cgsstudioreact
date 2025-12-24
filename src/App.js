import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./components/home-one/header";
import ImageSection from "./components/home-one/ImageSection";
import ServicePageHeroBanner from "./components/common/ServicePageHeroBanner";
import ServicePage from "./pages/ServicePage";
import ProductSchema from "./components/ProductSchema";

const ConditionalHeroBanner = () => {
  const location = useLocation();
  const path = location.pathname || "";

  if (path === "/services" || path.startsWith("/services/")) {
    return <ServicePageHeroBanner />;
  }

  if (path.startsWith("/blog") || path.startsWith("/blogs") || path.startsWith("/blog-grid")) {
    return null;
  }

  return <ImageSection />;
};

const Layout = ({ children }) => (
  <>
    {children}
  </>
);

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
      <ProductSchema />
      <Header /> {/* Navbar */}
      <ConditionalHeroBanner />
      <Routes>
        <Route path="/" element={<Layout><div>Home Page</div></Layout>} />
        <Route path="/about-us" element={<Layout><div>About Page</div></Layout>} />
        <Route path="/services" element={<Layout><div>Services Page</div></Layout>} />
        <Route path="/services/:serviceId" element={<ServicePage />} />
        <Route path="/industries-we-serve" element={<Layout><div>Industries We Serve</div></Layout>} />
        <Route path="/blogs" element={<Layout><div>Blogs</div></Layout>} />
        <Route path="/contact-us" element={<Layout><div>Contact Us</div></Layout>} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;