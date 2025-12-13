import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav style={{
        ...styles.navbar,
        ...(scrolled ? styles.navbarScrolled : {}),
      }}>
        <div style={styles.navContainer}>

          {/* Logo */}
          <div style={styles.navLogo}>
            <span style={styles.logoIcon}>☕</span>
            <span style={styles.logoText}>CozyCafe</span>
          </div>

          {/* Desktop Links */}
          <ul style={{
            ...styles.navLinks,
            ...(open ? styles.navActive : {}),
          }}>
            <li style={styles.navItem}>
              <a href="/" style={styles.navLink}>Home</a>
            </li>
            <li style={styles.navItem}>
              <a href="/about" style={styles.navLink}>About</a>
            </li>
            <li style={styles.navItem}>
              <a href="/services" style={styles.navLink}>Services</a>
            </li>
            <li style={styles.navItem}>
              <a href="/menu" style={styles.navLink}>Menu</a>
            </li>
            <li style={styles.navItem}>
              <a href="/order" style={styles.navLink}>Order</a>
            </li>
            <li style={styles.navItem}>
              <a href="/table-booking" style={styles.navLink}>Booking</a>
            </li>
            <li style={styles.navItem}>
              <a href="/franchise" style={styles.navLink}>Franchise</a>
            </li>
            <li style={styles.navItem}>
              <a href="/donations" style={styles.navLink}>Donations</a>
            </li>
            <li style={styles.navItem}>
              <a href="/contact" style={styles.navLinkCTA}>Contact</a>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <div 
            style={styles.navToggle} 
            onClick={() => setOpen(!open)}
          >
            <div style={{
              ...styles.bar,
              ...(open ? styles.bar1Open : {}),
            }}></div>
            <div style={{
              ...styles.bar,
              ...(open ? styles.bar2Open : {}),
            }}></div>
            <div style={{
              ...styles.bar,
              ...(open ? styles.bar3Open : {}),
            }}></div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content jump */}
      <div style={{ height: "80px" }}></div>
    </>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "rgba(26, 26, 26, 0.95)",
    backdropFilter: "blur(10px)",
    padding: "20px 0",
    zIndex: 1000,
    transition: "all 0.3s ease",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid rgba(212, 165, 116, 0.1)",
  },
  navbarScrolled: {
    padding: "12px 0",
    background: "rgba(26, 26, 26, 0.98)",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  },
  navContainer: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navLogo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#d4a574",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    fontFamily: "'Georgia', serif",
  },
  logoIcon: {
    fontSize: "2rem",
    animation: "rotate 3s ease-in-out infinite",
  },
  logoText: {
    letterSpacing: "1px",
  },
  navLinks: {
    display: "flex",
    gap: "5px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  navItem: {
    position: "relative",
  },
  navLink: {
    color: "#e6e6e6",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    padding: "10px 20px",
    display: "block",
    position: "relative",
    transition: "color 0.3s ease",
    letterSpacing: "0.5px",
  },
  navLinkCTA: {
    color: "#1a1a1a",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "600",
    padding: "10px 25px",
    display: "block",
    background: "linear-gradient(135deg, #d4a574 0%, #c59d5f 100%)",
    borderRadius: "25px",
    transition: "all 0.3s ease",
    letterSpacing: "0.5px",
    marginLeft: "10px",
  },
  navToggle: {
    display: "none",
    flexDirection: "column",
    gap: "6px",
    cursor: "pointer",
    padding: "10px",
    zIndex: 1001,
  },
  bar: {
    width: "28px",
    height: "3px",
    background: "#d4a574",
    borderRadius: "3px",
    transition: "all 0.3s ease",
  },
  bar1Open: {
    transform: "rotate(45deg) translate(8px, 8px)",
  },
  bar2Open: {
    opacity: 0,
  },
  bar3Open: {
    transform: "rotate(-45deg) translate(8px, -8px)",
  },
  navActive: {
    transform: "translateX(0)",
  },
};

// Add responsive styles and hover effects via style tag
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes rotate {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(15deg); }
  }

  nav a:hover {
    color: #d4a574 !important;
  }

  nav a:not([style*="background"])::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #d4a574, transparent);
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  nav a:hover::after {
    width: 80%;
  }

  nav a[style*="background"]:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(212, 165, 116, 0.4);
  }

  @media (max-width: 968px) {
    nav ul {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      background: rgba(26, 26, 26, 0.98);
      backdrop-filter: blur(20px);
      flex-direction: column;
      align-items: flex-start;
      padding: 100px 40px 40px 40px;
      gap: 0;
      transform: translateX(100%);
      transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      box-shadow: -5px 0 20px rgba(0, 0, 0, 0.5);
      border-left: 1px solid rgba(212, 165, 116, 0.2);
    }

    nav ul li {
      width: 100%;
      opacity: 0;
      transform: translateX(50px);
      animation: slideIn 0.3s forwards;
    }

    nav ul li:nth-child(1) { animation-delay: 0.1s; }
    nav ul li:nth-child(2) { animation-delay: 0.15s; }
    nav ul li:nth-child(3) { animation-delay: 0.2s; }
    nav ul li:nth-child(4) { animation-delay: 0.25s; }
    nav ul li:nth-child(5) { animation-delay: 0.3s; }
    nav ul li:nth-child(6) { animation-delay: 0.35s; }
    nav ul li:nth-child(7) { animation-delay: 0.4s; }
    nav ul li:nth-child(8) { animation-delay: 0.45s; }
    nav ul li:nth-child(9) { animation-delay: 0.5s; }

    nav ul li a {
      width: 100%;
      padding: 15px 0;
      font-size: 1.1rem;
      border-bottom: 1px solid rgba(212, 165, 116, 0.1);
    }

    nav ul li a[style*="background"] {
      margin-left: 0;
      margin-top: 20px;
      text-align: center;
      border: none;
    }

    .nav-toggle {
      display: flex !important;
    }
  }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
document.head.appendChild(styleSheet);