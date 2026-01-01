'use client'

// pages/Landing.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CTASection from "../components/CTASection";
import MenuPreview from "../components/MenuPreview";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CTASection />
      <MenuPreview />
      <Reviews />
      <Footer />
    </div>
  );
}
