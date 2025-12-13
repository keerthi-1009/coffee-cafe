import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import aboutHero from "../assets/images/about_hero.png";
import story from "../assets/images/story.png";
import cafe1 from "../assets/images/cafe1.png";
import cafe2 from "../assets/images/cafe2.png";
import cafe3 from "../assets/images/cafe3.png";

export default function About() {
    return (
        <div className="about-page">

            {/* HERO SECTION */}
         <section
  className="about-hero"
  style={{
    background: `linear-gradient(rgba(54,40,28,0.6), rgba(54,40,28,0.8)), url(${aboutHero}) center/cover no-repeat`
  }}
>
  <div className="about-hero-overlay"></div>
  <div className="about-hero-content">
    <h1>Our Story Begins with a Cup</h1>
    <p>
      A cozy corner crafted for dreamers, thinkers, and coffee lovers.
      Where aroma meets comfort, and every sip feels like home.
    </p>
  </div>
</section>

            {/* STORY SECTION */}
            <section className="about-story container">
                <div className="story-content">
                    <h2>How It All Started</h2>
                    <p>
                        What began as a small idea — a warm café where people can slow down and
                        enjoy the little things — grew into a space filled with love, conversation,
                        and the rich aroma of freshly brewed beans.
                    </p>
                    <p>
                        Our café is built on the belief that a cup of coffee can brighten someone’s day,
                        start a conversation, spark an idea, or bring a moment of peace.
                    </p>
                </div>

                <div className="story-image">
                    <img src={story} alt="Cafe Story" />
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="mission">
                <h2 className="section-heading">Our Vision & Mission</h2>

                <div className="mission-box-container">
                    <div className="mission-box">
                        <h3>Vision</h3>
                        <p>
                            To create a café that feels like a second home — warm, calm, and filled with positivity.
                            A place where stories brew along with the coffee.
                        </p>
                    </div>

                    <div className="mission-box">
                        <h3>Mission</h3>
                        <p>
                            To serve quality brews, comforting food, and heartfelt experiences while building
                            a community that believes in sharing, kindness, and togetherness.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="why-choose">
                <h2 className="section-heading">Why People Love Us</h2>

                <div className="why-grid">
                    <div className="why-item">
                        <span>☕</span>
                        <h4>Freshly Brewed</h4>
                        <p>Premium beans, grounded fresh for every order.</p>
                    </div>

                    <div className="why-item">
                        <span>🏡</span>
                        <h4>Cozy Ambience</h4>
                        <p>Soft lights, warm interiors, and calm vibes.</p>
                    </div>

                    <div className="why-item">
                        <span>🧁</span>
                        <h4>Handmade Treats</h4>
                        <p>Bakes and bites crafted with love.</p>
                    </div>

                    <div className="why-item">
                        <span>💬</span>
                        <h4>Community Space</h4>
                        <p>A place to work, chat, relax, or just be yourself.</p>
                    </div>
                </div>
            </section>

            {/* OUR SPACE */}
            <section className="our-space">
                <h2 className="section-heading">Inside Our Cozy Space</h2>

                <div className="space-gallery">
                    <img src={cafe1} alt="Cafe Interior 1" />
                    <img src={cafe2} alt="Cafe Interior 2" />
                    <img src={cafe3} alt="Cafe Interior 3" />
                </div>
            </section>

            {/* CTA */}

            <section className="about-cta">
                <h2>Want to Visit Us?</h2>
                <p>Drop by anytime — your perfect cup is waiting.</p>

                <Link to="/table-booking">
                    <button className="btn about-btn">Book a Table</button>
                </Link>
            </section>


        </div>
    );
}

