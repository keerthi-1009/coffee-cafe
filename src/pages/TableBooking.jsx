import React, { useState } from "react";
import "./TableBooking.css";

export default function TableBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    type: "single",
  });
  const [errors, setErrors] = useState({});
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

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

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      messages.push("Phone number is required");
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number";
      messages.push("Enter a valid 10-digit Indian phone number");
    }

    // Date validation
    if (!formData.date) {
      newErrors.date = "Date is required";
      messages.push("Date is required");
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        newErrors.date = "Date cannot be in the past";
        messages.push("Date cannot be in the past");
      }
    }

    // Time validation
    if (!formData.time) {
      newErrors.time = "Time is required";
      messages.push("Time is required");
    } else {
      const [hours, minutes] = formData.time.split(':').map(Number);
      
      // Check if café is open (8 AM to 10 PM)
      if (hours < 8 || hours >= 22) {
        newErrors.time = "Bookings available only between 8 AM and 10 PM";
        messages.push("Bookings available only between 8 AM and 10 PM");
      }
      
      // If date is today, check if time is in future
      if (formData.date) {
        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate.getTime() === today.getTime()) {
          const now = new Date();
          const selectedTime = new Date();
          selectedTime.setHours(hours, minutes, 0, 0);
          
          if (selectedTime <= now) {
            newErrors.time = "Time must be in the future for today's bookings";
            messages.push("Time must be in the future for today's bookings");
          }
        }
      }
    }

    // Number of people validation
    if (!formData.people) {
      newErrors.people = "Number of people is required";
      messages.push("Number of people is required");
    } else if (formData.people < 1) {
      newErrors.people = "At least 1 person is required";
      messages.push("At least 1 person is required");
    } else if (formData.people > 50) {
      newErrors.people = "Maximum 50 people allowed per booking";
      messages.push("Maximum 50 people allowed per booking");
    }

    // Table type validation based on number of people
    if (formData.people && formData.type === "single" && formData.people > 4) {
      newErrors.type = "Single table is for maximum 4 people. Please select Party/Group table";
      messages.push("Single table is for maximum 4 people. Please select Party/Group table");
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
      setBookingConfirmed(true);
    }
  };

  const handleNewBooking = () => {
    setBookingConfirmed(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      people: "",
      type: "single",
    });
    setErrors({});
    setShowErrorAlert(false);
    setErrorMessages([]);
  };

  if (bookingConfirmed) {
    return (
      <div className="booking-page">
        <div className="booking-form-container">
          <div className="success-icon">✓</div>
          <h1>Booking Confirmed!</h1>
          <p className="success-message">
            Thank you, <strong>{formData.name}</strong>! Your table has been successfully booked.
          </p>
          
          <div className="booking-details">
            <h3>Booking Details</h3>
            <div className="detail-row">
              <strong>Name:</strong> {formData.name}
            </div>
            <div className="detail-row">
              <strong>Email:</strong> {formData.email}
            </div>
            <div className="detail-row">
              <strong>Phone:</strong> {formData.phone}
            </div>
            <div className="detail-row">
              <strong>Date:</strong> {new Date(formData.date).toLocaleDateString('en-IN', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="detail-row">
              <strong>Time:</strong> {formData.time}
            </div>
            <div className="detail-row">
              <strong>Number of People:</strong> {formData.people}
            </div>
            <div className="detail-row">
              <strong>Table Type:</strong> {formData.type === "single" ? "Single Table" : "Party / Group Table"}
            </div>
          </div>
          
          <p className="confirmation-note">
            A confirmation email has been sent to <strong>{formData.email}</strong>
          </p>
          
          <button onClick={handleNewBooking} className="btn">
            Make Another Booking
          </button>
          <a href="/menu" className="btn back-btn" style={{ marginTop: "10px", display: "inline-block" }}>
            Back to Menu
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <h1 className="booking-title">Table Booking</h1>
      <p className="booking-subtitle">
        Reserve your cozy spot or book a table for a party and enjoy a seamless café experience.
      </p>

      <div className="booking-form-container">
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

        <form className="booking-form" onSubmit={handleSubmit}>
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
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              maxLength="10"
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

          <div>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              style={{
                border: errors.date ? "2px solid #dc3545" : "",
                backgroundColor: errors.date ? "#fff5f5" : "",
              }}
            />
            {errors.date && (
              <span
                style={{
                  display: "block",
                  color: "#dc3545",
                  fontSize: "0.85rem",
                  marginTop: "5px",
                  fontWeight: 500,
                }}
              >
                {errors.date}
              </span>
            )}
          </div>

          <div>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              style={{
                border: errors.time ? "2px solid #dc3545" : "",
                backgroundColor: errors.time ? "#fff5f5" : "",
              }}
            />
            {errors.time && (
              <span
                style={{
                  display: "block",
                  color: "#dc3545",
                  fontSize: "0.85rem",
                  marginTop: "5px",
                  fontWeight: 500,
                }}
              >
                {errors.time}
              </span>
            )}
          </div>

          <div>
            <input
              type="number"
              name="people"
              placeholder="Number of People *"
              value={formData.people}
              onChange={handleChange}
              min="1"
              max="50"
              style={{
                border: errors.people ? "2px solid #dc3545" : "",
                backgroundColor: errors.people ? "#fff5f5" : "",
              }}
            />
            {errors.people && (
              <span
                style={{
                  display: "block",
                  color: "#dc3545",
                  fontSize: "0.85rem",
                  marginTop: "5px",
                  fontWeight: 500,
                }}
              >
                {errors.people}
              </span>
            )}
          </div>

          <div style={{ marginTop: "10px" }}>
            <label style={{ display: "block", marginBottom: "10px" }}>
              <input
                type="radio"
                name="type"
                value="single"
                checked={formData.type === "single"}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              Single Table (Max 4 people)
            </label>

            <label style={{ display: "block" }}>
              <input
                type="radio"
                name="type"
                value="party"
                checked={formData.type === "party"}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              Party / Group Table (5+ people)
            </label>
            {errors.type && (
              <span
                style={{
                  display: "block",
                  color: "#dc3545",
                  fontSize: "0.85rem",
                  marginTop: "5px",
                  fontWeight: 500,
                }}
              >
                {errors.type}
              </span>
            )}
          </div>

          <button type="submit" className="btn">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}