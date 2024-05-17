import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="mens" />} />
          <Route path="/womens" element={<ShopCategory category="womens" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route
            path="/accessories"
            element={<ShopCategory category="accessories" />}
          />
          <Route path="/product" element={<Products />} />
          <Route path=":id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={< Auth/>} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
