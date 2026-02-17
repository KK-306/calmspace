import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Founder from "./pages/Founder";
import Blog from "./pages/Blog"; // ✅ Blog Page Import

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* ✅ Home Page */}
        <Route path="/" element={<Home />} />

        {/* ✅ Founder Page */}
        <Route path="/founder" element={<Founder />} />

        {/* ✅ Blog Page */}
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
