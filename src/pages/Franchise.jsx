
import React, { useState } from "react";
import "./Franchise.css";

export default function Franchise() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const messages = [];

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      messages.push("Name is required");
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
      messages.push("Name must be at least 3 characters");
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters";
      messages.push("Name should contain only letters");
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      messages.push("Email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
      messages.push("Enter a valid email address");
    }

    // Location validation
    if (!formData.location.trim()) {
      newErrors.location = "City/Location is required";
      messages.push("City/Location is required");
    } else if (formData.location.trim().length < 3) {
      newErrors.location = "Location must be at least 3 characters";
      messages.push("Location must be at least 3 characters");
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      messages.push("Message is required");
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters";
      messages.push("Message must be at least 20 characters");
    } else if (formData.message.trim().length > 500) {
      newErrors.message = "Message must not exceed 500 characters";
      messages.push("Message must not exceed 500 characters");
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Hide error alert when user starts correcting
    if (showErrorAlert) {
      setShowErrorAlert(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setInquirySubmitted(true);
    }
  };

  const handleNewInquiry = () => {
    setInquirySubmitted(false);
    setFormData({
      name: "",
      email: "",
      location: "",
      message: "",
    });
    setErrors({});
    setShowErrorAlert(false);
    setErrorMessages([]);
  };

  if (inquirySubmitted) {
    return (
      <div className="franchise-page">
        <div className="franchise-form-section">
          <div className="success-container">
            <div className="success-icon">✓</div>
            <h1>Thank You for Your Interest!</h1>
            <p className="success-message">
              We have received your franchise inquiry, <strong>{formData.name}</strong>.
            </p>
            <p className="success-message">
              Our team will review your application and get back to you within 2-3 business days at <strong>{formData.email}</strong>.
            </p>

            <div className="inquiry-details">
              <h3>Your Inquiry Details</h3>
              <div className="detail-row">
                <strong>Name:</strong> {formData.name}
              </div>
              <div className="detail-row">
                <strong>Email:</strong> {formData.email}
              </div>
              <div className="detail-row">
                <strong>Preferred Location:</strong> {formData.location}
              </div>
              <div className="detail-row message-row">
                <strong>Message:</strong>
                <p>{formData.message}</p>
              </div>
            </div>

            <button onClick={handleNewInquiry} className="btn">
              Submit Another Inquiry
            </button>
            <a href="/menu" className="btn back-btn" style={{ marginTop: "15px", display: "inline-block" }}>
              Back to Menu
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="franchise-page">
      {/* Header */}
      <section className="franchise-header">
        <h1>Partner With Us</h1>
        <p>
          Join our cozy café family and bring a premium coffee experience to your city.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="franchise-benefits">
        <h2>Why Become a Franchise?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <span>☕</span>
            <h3>Premium Coffee Brand</h3>
            <p>Leverage our well-loved brand and attract coffee lovers.</p>
          </div>
          <div className="benefit-card">
            <span>📈</span>
            <h3>Business Growth</h3>
            <p>Receive full support to scale your café and maximize profits.</p>
          </div>
          <div className="benefit-card">
            <span>🛠️</span>
            <h3>Complete Setup Support</h3>
            <p>Guidance on interiors, equipment, and operations.</p>
          </div>
          <div className="benefit-card">
            <span>💡</span>
            <h3>Marketing & Training</h3>
            <p>Get training and marketing strategies to keep customers happy.</p>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="franchise-form-section">
        <h2>Interested? Reach Out to Us</h2>

        {/* Error Alert Box */}
        {showErrorAlert && (
          <div
            style={{
              backgroundColor: "#fee2e2",
              border: "2px solid #dc3545",
              borderRadius: "8px",
              padding: "15px",
              marginBottom: "20px",
              maxWidth: "600px",
              margin: "0 auto 20px",
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

        <form className="franchise-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
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

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              style={{
                border: errors.email ? "2px solid #dc3545" : "",
                backgroundColor: errors.email ? "#fff5f5" : "",
              }}
            />
            {errors.email && (
              <span
                style={{
                  display: "block",
                  color: "#dc3545",
                  fontSize: "0.85rem",
                  marginTop: "5px",
                  fontWeight: 500,
                }}
              >
                {errors.email}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              name="location"
              placeholder="City / Location *"
              value={formData.location}
              onChange={handleChange}
              style={{
                border: errors.location ? "2px solid #dc3545" : "",
                backgroundColor: errors.location ? "#fff5f5" : "",
              }}
            />
            {errors.location && (
              <span
                style={{
                  display: "block",
                  color: "#dc3545",
                  fontSize: "0.85rem",
                  marginTop: "5px",
                  fontWeight: 500,
                }}
              >
                {errors.location}
              </span>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message / Questions (Minimum 20 characters) *"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              style={{
                border: errors.message ? "2px solid #dc3545" : "",
                backgroundColor: errors.message ? "#fff5f5" : "",
              }}
            ></textarea>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
              {errors.message && (
                <span
                  style={{
                    color: "#dc3545",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                >
                  {errors.message}
                </span>
              )}
              <span
                style={{
                  color: formData.message.length > 500 ? "#dc3545" : "#999",
                  fontSize: "0.85rem",
                  marginLeft: "auto",
                }}
              >
                {formData.message.length}/500
              </span>
            </div>
          </div>

          <button type="submit" className="btn">
            Submit Inquiry
          </button>
        </form>
      </section>
    </div>
  );
}