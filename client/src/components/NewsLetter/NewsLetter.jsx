import React from "react";
import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <>
      <div className={styles.newsletter}>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>
          Subscribe to our newsletter and get exclusive offers & stay updated
        </p>
      </div>
      <div>
      <input type="email" placeholder="Enter Your Email" />
      <button>Subscribe</button>
      </div>
    </>
  );
};

export default NewsLetter;
