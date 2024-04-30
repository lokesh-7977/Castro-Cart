import React, { useState } from "react";
import styles from "./Header.module.css";
import { IoMdCall } from "react-icons/io";
import { MdPayments } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

const Header = () => {
  const [mobile] = useState(true);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.bar}>
          <p>
            <MdPayments className={styles.icons} />
            We Accept International Payments
          </p>
          <p>
            <BiSolidOffer />
            Super Deal! Free Shipping on Orders Over 500Rs
          </p>
          <p>
            <IoMdCall /> Call us +91 9194939290
          </p>
        </div>
        <div className={styles.mobileBar}>
          {mobile ? (
            <p className={styles.mobile}>
              Need Advice ? <IoMdCall /> Call us 91 9191919191
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
