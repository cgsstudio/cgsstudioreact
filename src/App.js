import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/home-one/header"; // Navbar की जगह Header इस्तेमाल करें
import ImageSection from "./components/home-one/ImageSection"; // नया सेक्शन इम्पोर्ट करें

function App() {
  return (
    <BrowserRouter>
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