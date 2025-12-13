import React from "react";
import { Link } from "react-router-dom"; // import Link
import "./Specials.css";
import latte from "../assets/images/latte.png";
import mocha from "../assets/images/mocha.png";
import croissant from "../assets/images/croissant.png";

export default function Specials() {

  const items = [
    { id: 1, name: "Caramel Latte", price: "₹180", img: latte },
    { id: 2, name: "Dark Mocha", price: "₹200", img: mocha },
    { id: 3, name: "Butter Croissant", price: "₹120", img: croissant },
  ];

  return (
    <section className="specials">
      <div className="container">
        <h2 className="section-heading">Our Specials</h2>
        <p className="specials-sub">Freshly crafted, served with love.</p>

        <div className="specials-grid">
          {items.map((item) => (
            <div className="special-card" key={item.id}>
              <img src={item.img} alt={item.name} className="special-img" />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <Link to="/order" className="btn">Order Now</Link> {/* updated */}
            </div>
          ))}
        </div>

        <div className="specials-footer">
          <Link to="/menu" className="btn">View Full Menu</Link>
        </div>
      </div>
    </section>
  );
}
