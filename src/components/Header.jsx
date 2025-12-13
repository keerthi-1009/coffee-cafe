import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Cozy Café</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/services">Services</Link>
        <Link to="/franchise">Franchise</Link>
        <Link to="/donation">Donation</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
