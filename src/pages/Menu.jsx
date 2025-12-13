import React, { useState } from "react";
import { Coffee, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Menu.css"; // contains your keyframes and hover styles

const menuData = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", price: 120, desc: "Rich and intense" },
      { name: "Cappuccino", price: 180, desc: "Creamy perfection" },
      { name: "Latte", price: 190, desc: "Smooth and silky" },
      { name: "Caramel Latte", price: 230, desc: "Sweet indulgence" },
    ],
  },
  {
    category: "Cold Drinks",
    items: [
      { name: "Iced Coffee", price: 170, desc: "Refreshingly bold" },
      { name: "Cold Brew", price: 200, desc: "Smooth & chilled" },
      { name: "Iced Latte", price: 180, desc: "Cool and creamy" },
    ],
  },
  {
    category: "Snacks",
    items: [
      { name: "Garlic Bread", price: 110, desc: "Buttery and crispy" },
      { name: "Cheese Croissant", price: 130, desc: "Flaky delight" },
      { name: "Brownie", price: 90, desc: "Chocolate heaven" },
    ],
  },
];

export default function Menu() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const navigate = useNavigate();

  const nextPage = () => {
    if (currentPage < menuData.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const handleOrderNow = () => {
    // Redirect to OrderPlaced page
    navigate("/order-placed");
  };

  return (
    <div style={styles.container}>
      {/* Decorative Background */}
      <div style={styles.bgDecor}>
        <Coffee size={100} style={styles.decorIcon1} />
        <Sparkles size={60} style={styles.decorIcon2} />
      </div>

      <h1 style={styles.title}>
        <span style={styles.titleIcon}>☕</span>
        Our Menu
        <span style={styles.titleIcon}>☕</span>
      </h1>
      <p style={styles.subtitle}>Turn the pages to explore our delicious offerings</p>

      <div style={styles.bookWrapper}>
        <button
          style={{
            ...styles.arrow,
            ...styles.leftArrow,
            opacity: currentPage === 0 ? 0.3 : 1,
            cursor: currentPage === 0 ? "not-allowed" : "pointer",
          }}
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          <span style={styles.arrowText}>‹</span>
        </button>

        <div style={styles.bookContainer}>
          <div style={styles.book}>
            {menuData.map((page, idx) => {
              const isActive = idx === currentPage;
              const isPast = idx < currentPage;

              return (
                <div
                  key={idx}
                  style={{
                    ...styles.page,
                    transform: isPast ? "rotateY(-180deg)" : "rotateY(0deg)",
                    zIndex: menuData.length - idx,
                    opacity: isActive ? 1 : isPast ? 0.7 : 0.9,
                  }}
                >
                  <div style={styles.pageContent}>
                    <div style={styles.categoryHeader}>
                      <div style={styles.categoryLine}></div>
                      <h2 style={styles.category}>{page.category}</h2>
                      <div style={styles.categoryLine}></div>
                    </div>

                    <ul style={styles.itemsList}>
                      {page.items.map((item, i) => (
                        <li key={i} style={styles.item}>
                          <div style={styles.itemContent}>
                            <div>
                              <div style={styles.itemName}>{item.name}</div>
                              <div style={styles.itemDesc}>{item.desc}</div>
                            </div>
                            <div style={styles.itemPrice}>₹{item.price}</div>
                          </div>
                          <div style={styles.itemDivider}></div>
                        </li>
                      ))}
                    </ul>

                    <div style={styles.pageDecor}>
                      <div style={styles.cornerDecor}>✦</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Book Shadow */}
          <div style={styles.bookShadow}></div>
        </div>

        <button
          style={{
            ...styles.arrow,
            ...styles.rightArrow,
            opacity: currentPage === menuData.length - 1 ? 0.3 : 1,
            cursor: currentPage === menuData.length - 1 ? "not-allowed" : "pointer",
          }}
          onClick={nextPage}
          disabled={currentPage === menuData.length - 1}
        >
          <span style={styles.arrowText}>›</span>
        </button>
      </div>

      <div style={styles.pageIndicator}>
        {menuData.map((_, idx) => (
          <span
            key={idx}
            style={{
              ...styles.dot,
              backgroundColor: idx === currentPage ? "#d4a574" : "#4a4a4a",
            }}
          ></span>
        ))}
      </div>

      <div style={styles.ctaSection}>
        <button
          style={styles.orderButton}
          onClick={handleOrderNow}
          className="order-button"
        >
          <span>Order Now</span>
          <span style={styles.buttonArrow} className="buttonArrow">→</span>
        </button>
      </div>
    </div>
  );
}

// --- Styles object (unchanged) ---
const styles = {
  container: { background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)", minHeight: "100vh", padding: "60px 20px", color: "#e6e6e6", textAlign: "center", position: "relative", overflow: "hidden", fontFamily: "'Georgia', serif" },
  bgDecor: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.03 },
  decorIcon1: { position: "absolute", top: "10%", left: "5%", color: "#d4a574", animation: "float 6s ease-in-out infinite" },
  decorIcon2: { position: "absolute", bottom: "15%", right: "8%", color: "#d4a574", animation: "float 8s ease-in-out infinite" },
  title: { fontSize: "3.5rem", color: "#d4a574", marginBottom: "10px", fontWeight: "700", textShadow: "2px 2px 4px rgba(0,0,0,0.5)", letterSpacing: "2px" },
  titleIcon: { margin: "0 15px", display: "inline-block", animation: "bounce 2s ease-in-out infinite" },
  subtitle: { fontSize: "1.1rem", color: "#b3b3b3", marginBottom: "50px", fontStyle: "italic" },
  bookWrapper: { display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", perspective: "2000px", marginBottom: "40px" },
  arrow: { background: "linear-gradient(135deg, #d4a574 0%, #c59d5f 100%)", border: "none", borderRadius: "50%", width: "60px", height: "60px", fontSize: "2.5rem", color: "#1a1a1a", cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 4px 15px rgba(212, 165, 116, 0.3)", display: "flex", alignItems: "center", justifyContent: "center" },
  leftArrow: {}, rightArrow: {}, arrowText: { display: "block", lineHeight: 1 },
  bookContainer: { position: "relative" }, book: { width: "400px", height: "550px", position: "relative", transformStyle: "preserve-3d" }, page: { width: "100%", height: "100%", background: "linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)", borderRadius: "12px", position: "absolute", top: 0, left: 0, transformOrigin: "left center", transition: "transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.8s ease", boxShadow: "0 10px 40px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(212, 165, 116, 0.05)", backfaceVisibility: "hidden", border: "1px solid #3a3a3a" },
  pageContent: { padding: "40px 30px", height: "100%", position: "relative" },
  categoryHeader: { display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px" },
  categoryLine: { flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #d4a574, transparent)" },
  category: { color: "#d4a574", fontSize: "2rem", fontWeight: "600", letterSpacing: "3px", textTransform: "uppercase", margin: 0 },
  itemsList: { listStyle: "none", padding: 0, margin: 0 },
  item: { marginBottom: "20px" },
  itemContent: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" },
  itemName: { fontSize: "1.3rem", fontWeight: "500", color: "#e6e6e6", marginBottom: "5px" },
  itemDesc: { fontSize: "0.9rem", color: "#999", fontStyle: "italic" },
  itemPrice: { fontSize: "1.2rem", color: "#d4a574", fontWeight: "600", marginLeft: "20px", minWidth: "80px", textAlign: "right" },
  itemDivider: { height: "1px", background: "linear-gradient(90deg, transparent, #4a4a4a, transparent)" },
  pageDecor: { position: "absolute", bottom: "20px", right: "20px" }, cornerDecor: { color: "#d4a574", fontSize: "1.5rem", opacity: 0.3 },
  bookShadow: { position: "absolute", bottom: "-20px", left: "10%", width: "80%", height: "20px", background: "radial-gradient(ellipse, rgba(0,0,0,0.5), transparent)", filter: "blur(10px)" },
  pageIndicator: { display: "flex", justifyContent: "center", gap: "12px", marginBottom: "40px" },
  dot: { width: "12px", height: "12px", borderRadius: "50%", transition: "all 0.3s ease", cursor: "pointer" },
  ctaSection: { marginTop: "50px" },
  orderButton: { background: "linear-gradient(135deg, #d4a574 0%, #c59d5f 100%)", border: "none", borderRadius: "50px", padding: "18px 45px", fontSize: "1.2rem", fontWeight: "600", color: "#1a1a1a", cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 6px 25px rgba(212, 165, 116, 0.4)", display: "inline-flex", alignItems: "center", gap: "10px", letterSpacing: "1px" },
  buttonArrow: { transition: "transform 0.3s ease" },
};
