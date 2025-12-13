import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import latte from "../assets/images/latte.png";
import cappuccino from "../assets/images/cappuccino.png";
import espresso from "../assets/images/espresso.png";
import caramel_latte from "../assets/images/caramel_latte.png";
import cold_brew from "../assets/images/cold_brew.png";
import dark_mocha from "../assets/images/mocha.png";
import croissant from "../assets/images/croissant.png";
import "./OrderPage.css";

const products = [
  { id: 1, name: "Espresso", price: 120, img: espresso },
  { id: 2, name: "Cappuccino", price: 180, img: cappuccino },
  { id: 3, name: "Latte", price: 190, img: latte },
  { id: 4, name: "Caramel Latte", price: 230, img: caramel_latte },
  { id: 5, name: "Cold Brew", price: 200, img: cold_brew },
  { id: 6, name: "Dark mocha", price: 200, img: dark_mocha },
  { id: 7, name: "Butter Croissant", price: 200, img: croissant },
];

export default function OrderPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // initialize navigate

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, amount) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id
            ? { ...p, qty: Math.max(1, p.qty + amount) }
            : p
        )
        .filter((p) => p.qty > 0)
    );
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.qty, 0);

const handleCheckout = () => {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  // Pass cart and total to OrderPlaced page via state
  navigate("/order-placed", { 
    state: { 
      cart: cart,
      total: total 
    } 
  });
};

  return (
    <div className="order-page">
      <h1 className="order-title">Order Your Coffee</h1>

      <div className="order-container">
        {/* Products */}
        <div className="product-list">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p className="price">₹{p.price}</p>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="cart-box">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p className="empty">Cart is empty</p>
          ) : (
            cart.map((p) => (
              <div key={p.id} className="cart-item">
                <span>{p.name}</span>

                <div className="qty-controls">
                  <button onClick={() => updateQty(p.id, -1)}>-</button>
                  <span>{p.qty}</span>
                  <button onClick={() => updateQty(p.id, 1)}>+</button>
                </div>

                <span className="price">₹{p.price * p.qty}</span>
              </div>
            ))
          )}

          <h3 className="total">Total: ₹{total}</h3>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
