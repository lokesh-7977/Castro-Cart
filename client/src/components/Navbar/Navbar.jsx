import React from 'react'
import styles from './Navbar.module.css'
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <p>CASTRO CART</p>
            </div>
            <ul className={styles.nav_menu}>
                <li>SHOP <hr /></li>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
            </ul>
            <div className={styles.login_cart}>
                <button>Login</button>
               <FaShoppingCart className={styles.cart_btn} />
                <div className={styles.cart_count}>
                    0
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar