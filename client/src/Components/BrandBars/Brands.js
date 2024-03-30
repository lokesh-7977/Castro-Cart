import React from "react";
import BrandImages from "../../assets/logos-after_header.png";
import styles from "./Brand.module.css";

const Brands = () => {
  return (
    <>
      <div className={styles.brands_container}>
          <img src={BrandImages} alt="Brands" />
      </div>
    </>
  );
};

export default Brands;
