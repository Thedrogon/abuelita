'use client'

// pages/Landing.jsx
import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import CTASection from "../components/Landing/CTASection";
import MenuPreview from "../components/Landing/MenuPreview";
import Reviews from "../components/Landing/Reviews";
import Footer from "../components/Landing/Footer";

export default function Landing() {
  return (
    <div className="px-24 pt-5">
      <Navbar />
      <Hero />
      <CTASection />
      <MenuPreview />
      <Reviews />
      <Footer />
    </div>
  );
}
