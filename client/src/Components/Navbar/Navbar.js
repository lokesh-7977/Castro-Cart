import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoName}>
        CASTRO-CART
      </div>
      <div className={styles.nav_container}>
        <ul>
          <li>Home</li>
          <li>Deals</li>
          <li>New Arrivals</li>
          <li>Packages</li>
          <li><button className={styles.button}>Sign Up</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
