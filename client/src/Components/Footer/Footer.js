import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <>
    <hr />
      <div>
        <footer className={styles.footer}>
          <div className={styles.content}>
            <p className={styles.brandName}>CASTRO-CART</p>
            <p>Support Center</p>
            <p>Invoicing</p>
            <p>Contract</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>FAQs</p>
          </div>
          <div className={styles.copyright}>
            Copyright &copy; {currentYear} CASTRO-CART . All Rights Reseved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
