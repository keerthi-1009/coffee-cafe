import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand & Tagline */}
        <div className="footer-brand">
          <h2>Cozy Café</h2>
          <p>Your daily dose of warmth & aroma ☕</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noreferrer">📘</a>
            <a href="#" target="_blank" rel="noreferrer">🐦</a>
            <a href="#" target="_blank" rel="noreferrer">📸</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Cozy Café. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
