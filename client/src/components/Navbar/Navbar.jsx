import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <p>CASTRO CART</p>
        </div>
        <ul className={styles.nav_menu}>
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to={"/"}>SHOP {menu === "shop" ? <hr /> : <></>}</Link>
          </li>
          <li
            onClick={() => {
              setMenu("mens");
            }}
          >
            <Link to={"/mens"}>MEN {menu === "mens" ? <hr /> : <></>}</Link>
          </li>
          <li
            onClick={() => {
              setMenu("womens");
            }}
          >
            <Link to={"/womens"}>
              WOMEN {menu === "womens" ? <hr /> : <></>}
            </Link>
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link to={"/kids"}>KIDS {menu === "kids" ? <hr /> : <></>}</Link>
          </li>
          <li
            onClick={() => {
              setMenu("accessories");
            }}
          >
            <Link to={"/accessories"}>
              {" "}
              ACCESSORIES {menu === "accessories" ? <hr /> : <></>}
            </Link>
          </li>
        </ul>
        <div className={styles.login_cart}>
          <Link to={"/login"}>
            {" "}
            <button>Login</button>
          </Link>
          <FaShoppingCart className={styles.cart_btn} />
          <Link to={"/cart"}>
            <div className={styles.cart_count}>0</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
