import React from "react";
import styles from "./Subscribers.module.css";
import leftImg from "../../assets/bottom copy 1.png";
import rightImg from "../../assets/bottom copy 2.png";

const Subscribers = () => {
  return (
    <>
      <div>
        <div className={styles.img_container}>
          <div className={styles.left}>
            <img className={styles.leftImg} src={leftImg} alt="Left Img" />
          </div>

          <div>
            <div className={styles.subsribe}>
              <p>Subscribe To Our Newsletter</p>
            </div>
            <div className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin
            </div>
            <div className={styles.email}>lokeshchowdary902@gmail.com</div>
            <div className={styles.button}>
              <button>Subscribe Now</button>
            </div>
          </div>

          <div className={styles.flcontainer}>
            <img className={styles.rightImg} src={rightImg} alt="Right Img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribers;
