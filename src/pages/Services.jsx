import React from "react";
import "./Service.css";

export default function Service() {
  const services = [
    {
      title: "Online Coffee Orders",
      desc: "Freshly brewed coffee delivered hot and quick to your doorstep.",
      icon: "☕",
    },
    {
      title: "Table Reservation",
      desc: "Reserve your cozy spot beforehand and enjoy a seamless café experience.",
      icon: "📅",
    },
    {
      title: "Party Table Booking",
      desc: "Book premium spaces for celebrations, small events, and gatherings.",
      icon: "🎉",
    },
    {
      title: "Franchise / Tie-up",
      desc: "Partner with us and bring our cozy café experience to your location.",
      icon: "🤝",
    },
    {
      title: "Free Donation Service",
      desc: "Your donations help us serve warm food & drinks to people in need.",
      icon: "❤️",
    },
  ];

  return (
    <div className="service-page">
      <h1 className="service-title">Our Services</h1>
      <p className="service-subtitle">
        Crafted with warmth, served with love — explore what our café offers.
      </p>

      <div className="service-grid">
        {services.map((item, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
