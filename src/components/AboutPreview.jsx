import React from "react";
import "./AboutPreview.css";
import aboutImg from "../assets/images/about.png"; // Replace with your image

export default function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="container about-container">

        {/* Image */}
        <div className="about-img-box">
          <img src={aboutImg} alt="Cafe Image" className="about-img" />
        </div>

        {/* Text */}
        <div className="about-text">
          <h2 className="section-heading">A Cozy Space Built for Coffee Lovers</h2>

          <p className="about-desc">
            At CaféAura, every cup tells a story.  
            We blend warm hospitality with handcrafted brews  
            to create a comforting experience you'll love to return to.  
          </p>

          <p className="about-desc">
            Whether you're working, relaxing, or meeting friends,  
            we make sure every moment feels special — just like home.
          </p>

          <a href="/about" className="btn about-btn">Learn More</a>
        </div>

      </div>
    </section>
  );
}
