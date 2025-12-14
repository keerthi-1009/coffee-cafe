import React from "react";
import "./Hero.css";
// import HeroImg from "../assets/images/Hero.jpg";
const heroImage = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200";


export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${HeroImg})` }}>
      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <h1 className="hero-title">
          Brewed with Love,<br /> Served with Warmth.
        </h1>

        <p className="hero-subtitle">
          Step into a cozy experience where every sip feels like home.
        </p>

        <div className="hero-buttons">
          <a href="/menu" className="hero-btn">View Menu</a>
          <a href="/order" className="hero-btn-secondary">Order Now</a>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span></span>
        </div>
      </div>
    </section>
  );
}
