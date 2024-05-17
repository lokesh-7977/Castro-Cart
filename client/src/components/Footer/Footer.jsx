import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <img src="" alt="" />
          <p>CASTRO CART</p>
        </div>
        <ul className={styles.footer_links}>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className={styles.footer_icons}>
          <div className={styles.footer_icons_container}>
            <i class="fab fa-facebook-f"></i>
          </div>
          <div className={styles.footer_icons_container}>
            <i class="fab fa-facebook-f"></i>
          </div>
          <div className={styles.footer_icons_container}>
            <i class="fab fa-facebook-f"></i>
          </div>
          <div className={styles.footer_icons_container}>
            <i class="fab fa-facebook-f"></i>
          </div>
        </div>

        <div className={styles.footer_copyright}>
            <hr />
          <p>&copy; 2024 Castro Cart. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
