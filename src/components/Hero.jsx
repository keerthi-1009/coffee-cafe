import React from "react";
import "./Hero.css";
import heroImg from "../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
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
