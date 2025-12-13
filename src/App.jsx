import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar"; // your header/navigation
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Services from "./pages/Services";
import Franchise from "./pages/Franchise";
import TableBooking from "./pages/TableBooking";
import Contact from "./pages/Contact";
import OrderPage from "./pages/OrderPage";
import DonationsPage from "./pages/DonationsPage";
import OrderPlaced from "./pages/OrderPlaced";


function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* or Header if you named it Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/booking" element={<TableBooking />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/table-booking" element={<TableBooking />} />
        <Route path="/donations" element={<DonationsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
