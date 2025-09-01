import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/menu/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
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