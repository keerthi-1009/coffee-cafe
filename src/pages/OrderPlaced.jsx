import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderPlaced.css";

export default function OrderPlaced() {
  const location = useLocation();
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    pincode: "",
  });
  const [errors, setErrors] = useState({});
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Get cart data from navigation state
  const cart = location.state?.cart || [];
  const total = location.state?.total || 0;
  const addressFromOrder = location.state?.address;

  // Redirect if no order data
  useEffect(() => {
    if (!cart || cart.length === 0) {
      navigate("/order");
    }
    // If address was passed from order page, use it
    if (addressFromOrder) {
      setAddress(addressFromOrder);
      setOrderConfirmed(true);
    }
  }, [cart, navigate, addressFromOrder]);

  const deliveryFee = 40;
  const grandTotal = total + deliveryFee;

  const validateAddress = () => {
    const newErrors = {};
    const messages = [];

    // Name validation
    if (!address.name.trim()) {
      newErrors.name = "Name is required";
      messages.push("Name is required");
    } else if (address.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      messages.push("Name must be at least 3 characters");
    } else if (!/^[a-zA-Z\s]+$/.test(address.name)) {
      newErrors.name = "Name should contain only letters";
      messages.push("Name should contain only letters");
    }

    // Phone validation
    if (!address.phone.trim()) {
      newErrors.phone = "Phone number is required";
      messages.push("Phone number is required");
    } else if (!/^[6-9]\d{9}$/.test(address.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number";
      messages.push("Enter a valid 10-digit Indian phone number");
    }

    // Street address validation
    if (!address.street.trim()) {
      newErrors.street = "Street address is required";
      messages.push("Street address is required");
    } else if (address.street.trim().length < 10) {
      newErrors.street = "Please enter complete street address (min 10 characters)";
      messages.push("Please enter complete street address");
    }

    // City validation
    if (!address.city.trim()) {
      newErrors.city = "City is required";
      messages.push("City is required");
    } else if (address.city.trim().length < 3) {
      newErrors.city = "City name must be at least 3 characters";
      messages.push("City name must be at least 3 characters");
    } else if (!/^[a-zA-Z\s]+$/.test(address.city)) {
      newErrors.city = "City should contain only letters";
      messages.push("City should contain only letters");
    }

    // Pincode validation
    if (!address.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
      messages.push("Pincode is required");
    } else if (!/^\d{6}$/.test(address.pincode)) {
      newErrors.pincode = "Enter a valid 6-digit pincode";
      messages.push("Enter a valid 6-digit pincode");
    }

    setErrors(newErrors);

    if (messages.length > 0) {
      setErrorMessages(messages);
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 5000);
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleAddressChange = (field, value) => {
    setAddress((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
    if (showErrorAlert) {
      setShowErrorAlert(false);
    }
  };

  const handleConfirm = () => {
    if (validateAddress()) {
      setOrderConfirmed(true);
    }
  };

  const getFullAddress = () => {
    return `${address.name}, ${address.phone}, ${address.street}, ${address.city} - ${address.pincode}`;
  };

  return (
    <div className="order-placed-page">
      <div className="order-placed-container">
        {!orderConfirmed ? (
          <>
            <h1>Enter Your Address</h1>

            {/* Error Alert Box */}
            {showErrorAlert && (
              <div
                style={{
                  backgroundColor: "#fee2e2",
                  border: "2px solid #dc3545",
                  borderRadius: "8px",
                  padding: "15px",
                  marginBottom: "20px",
                  animation: "slideDown 0.3s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                    color: "#dc3545",
                  }}
                >
                  <strong style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1rem" }}>
                    ⚠ Please fix the following errors:
                  </strong>
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: "24px",
                      color: "#dc3545",
                      cursor: "pointer",
                      padding: 0,
                      width: "30px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                    }}
                    onClick={() => setShowErrorAlert(false)}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "rgba(220, 53, 69, 0.1)")
                    }
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
                  >
                    ×
                  </button>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {errorMessages.map((msg, index) => (
                    <li
                      key={index}
                      style={{
                        color: "#721c24",
                        padding: "5px 0",
                        paddingLeft: "20px",
                        position: "relative",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "5px",
                          fontWeight: "bold",
                          color: "#dc3545",
                        }}
                      >
                        •
                      </span>
                      {msg}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Address Form */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
              >
                Full Name *
              </label>
              <input
                type="text"
                value={address.name}
                onChange={(e) => handleAddressChange("name", e.target.value)}
                placeholder="Enter your full name"
                className="address-input"
                style={{
                  border: errors.name ? "2px solid #dc3545" : "",
                  backgroundColor: errors.name ? "#fff5f5" : "",
                }}
              />
              {errors.name && (
                <span
                  style={{
                    display: "block",
                    color: "#dc3545",
                    fontSize: "0.85rem",
                    marginTop: "5px",
                    fontWeight: 500,
                  }}
                >
                  {errors.name}
                </span>
              )}
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
              >
                Phone Number *
              </label>
              <input
                type="tel"
                value={address.phone}
                onChange={(e) => handleAddressChange("phone", e.target.value)}
                placeholder="Enter 10-digit phone number"
                maxLength="10"
                className="address-input"
                style={{
                  border: errors.phone ? "2px solid #dc3545" : "",
                  backgroundColor: errors.phone ? "#fff5f5" : "",
                }}
              />
              {errors.phone && (
                <span
                  style={{
                    display: "block",
                    color: "#dc3545",
                    fontSize: "0.85rem",
                    marginTop: "5px",
                    fontWeight: 500,
                  }}
                >
                  {errors.phone}
                </span>
              )}
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
              >
                Street Address *
              </label>
              <input
                type="text"
                value={address.street}
                onChange={(e) => handleAddressChange("street", e.target.value)}
                placeholder="House/Flat no, Building name, Street"
                className="address-input"
                style={{
                  border: errors.street ? "2px solid #dc3545" : "",
                  backgroundColor: errors.street ? "#fff5f5" : "",
                }}
              />
              {errors.street && (
                <span
                  style={{
                    display: "block",
                    color: "#dc3545",
                    fontSize: "0.85rem",
                    marginTop: "5px",
                    fontWeight: 500,
                  }}
                >
                  {errors.street}
                </span>
              )}
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
              >
                City *
              </label>
              <input
                type="text"
                value={address.city}
                onChange={(e) => handleAddressChange("city", e.target.value)}
                placeholder="Enter your city"
                className="address-input"
                style={{
                  border: errors.city ? "2px solid #dc3545" : "",
                  backgroundColor: errors.city ? "#fff5f5" : "",
                }}
              />
              {errors.city && (
                <span
                  style={{
                    display: "block",
                    color: "#dc3545",
                    fontSize: "0.85rem",
                    marginTop: "5px",
                    fontWeight: 500,
                  }}
                >
                  {errors.city}
                </span>
              )}
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                }}
              >
                Pincode *
              </label>
              <input
                type="text"
                value={address.pincode}
                onChange={(e) => handleAddressChange("pincode", e.target.value)}
                placeholder="Enter 6-digit pincode"
                maxLength="6"
                className="address-input"
                style={{
                  border: errors.pincode ? "2px solid #dc3545" : "",
                  backgroundColor: errors.pincode ? "#fff5f5" : "",
                }}
              />
              {errors.pincode && (
                <span
                  style={{
                    display: "block",
                    color: "#dc3545",
                    fontSize: "0.85rem",
                    marginTop: "5px",
                    fontWeight: 500,
                  }}
                >
                  {errors.pincode}
                </span>
              )}
            </div>

            {/* Display Cart Items */}
            <div className="order-items">
              <h3>Your Order</h3>
              {cart.map((item) => (
                <div key={item.id} className="order-item">
                  <span>{item.name} x{item.qty}</span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="order-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{total}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee:</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="summary-row total">
                <strong>Total:</strong>
                <strong>₹{grandTotal}</strong>
              </div>
            </div>

            <button onClick={handleConfirm} className="btn confirm-btn">
              Confirm Order
            </button>
          </>
        ) : (
          <>
            <div className="success-icon">✓</div>
            <h1>Thank You!</h1>
            <p>Your order has been successfully placed.</p>
            <p>We are preparing your coffee and it will be ready soon.</p>
            
            {/* Show order details */}
            <div className="order-details">
              <h3>Order Summary</h3>
              {cart.map((item) => (
                <div key={item.id} className="detail-row">
                  <span>{item.name} x{item.qty}</span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              ))}
              <div className="detail-row">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="detail-row total">
                <strong>Total Paid:</strong>
                <strong>₹{grandTotal}</strong>
              </div>
            </div>

            <p><strong>Delivery Address:</strong> {getFullAddress()}</p>
            
            <a href="/menu" className="btn back-btn">
              Back to Menu
            </a>
          </>
        )}
      </div>
    </div>
  );
}