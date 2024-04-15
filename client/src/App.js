import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Brands from "./components/BrandBars/Brands";
import Offers from "./components/Offers/Offer";
import Deals from "./components/Deals/Deals";
import Subscribers from "./components/Subsribers/Subscribers";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Brands />
      <Offers />
      <Deals />
      <Subscribers />
      <Footer />
    </>
  );
};

export default App;
