import React from "react";
import styles from "./Items.module.css";
const Items = (props) => {
  return (
    <>
      <div className={styles.items}>
        <img src={props.img} alt="" />
        <p>{props.name}</p>
        <div className={styles.item_prices}>
          <div className={styles.item_prices_new}>{props.price_new_price}</div>
          <div className={styles.item_prices_old}>{props.price_old_price}</div>
        </div>
      </div>
    </>
  );
};

export default Items;
