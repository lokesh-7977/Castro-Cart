import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Auth from "./Pages/Auth";
import Footer from "./Components/Footer/Footer";

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
