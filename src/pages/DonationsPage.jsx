import React from "react";
import "./DonationsPage.css";
import qrImage from "../assets/images/donation-qr.png";

export default function DonationsPage() {
  return (
    <div className="donations-page">
      
      {/* HERO */}
      <section className="donation-hero">
        <div className="donation-hero-overlay"></div>
        <div className="donation-hero-content">
          <h1>Spread Kindness with a Cup</h1>
          <p>
            Your contribution helps us provide meals, warmth, and support 
            to those who need it most. Together, we brew kindness.
          </p>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="donation-purpose container">
        <h2>Why Your Donation Matters</h2>
        <p>
          Every donation goes towards community programs — free meals, 
          café-hosted learning sessions, and support for local shelters. 
          Even a small contribution can brighten someone’s day.
        </p>

        <div className="donation-cards">
          <div className="donation-card">
            <span>🍱</span>
            <h3>Free Meals</h3>
            <p>Help us prepare meals for people in need.</p>
          </div>

          <div className="donation-card">
            <span>📚</span>
            <h3>Learning Programs</h3>
            <p>Support our community workshops and sessions.</p>
          </div>

          <div className="donation-card">
            <span>💝</span>
            <h3>Care Packages</h3>
            <p>We prepare kits with essentials & warm treats.</p>
          </div>
        </div>
      </section>

      {/* DONATION METHODS */}
      <section className="donation-methods">
        <h2 className="section-heading">Choose Your Donation Method</h2>

        <div className="method-boxes">
          <div className="method-box qr-method-box">
  <h3>Donate via UPI</h3>
  <p>Scan the QR or use the UPI ID below.</p>
  <img className="qr-img" src={qrImage} alt="Donation QR" />
  <p className="upi-id">UPI ID: <strong>cafe@upi</strong></p>
</div>

          <div className="method-box secondary-method-box">
            <h3>Donate via Card</h3>
            <p>Complete your payment using any available method.
Your transaction is fully secure and encrypted.
You will receive an instant confirmation after payment.
Thank you for your support!</p>
            <button className="btn donate-btn">Proceed to Payment</button>
          </div>

          <div className="method-box secondary-method-box">
            <h3>In-Person Donations</h3>
            <p>You can always donate directly at the café counter.</p>
            <p>Complete your payment using any available method.
Your transaction is fully secure and encrypted.
You will receive an instant confirmation after payment.
Thank you for your support!</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="donation-cta">
        <h2>Thank You for Making a Difference</h2>
        <p>Your support helps us create a kinder community.</p>
      </section>

    </div>
  );
}
