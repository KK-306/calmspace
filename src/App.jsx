import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // ✅ Auto Scroll Reset

import Home from "./pages/Home";
import Founder from "./pages/Founder";

// ✅ Blog Pages
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost"; // ✅ New Dynamic Blog Page

export default function App() {
  return (
    <BrowserRouter>
      
      {/* ✅ Auto Scroll Reset on Page Change */}
      <ScrollToTop />

      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Routes */}
      <Routes>
        
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Founder Page */}
        <Route path="/founder" element={<Founder />} />

        {/* Blog Main Page */}
        <Route path="/blog" element={<Blog />} />

        {/* ✅ Blog Post Page (Dynamic Slug Route) */}
        <Route path="/blog/:slug" element={<BlogPost />} />

      </Routes>

      {/* ✅ Footer */}
      <Footer />
    </BrowserRouter>
  );
}
