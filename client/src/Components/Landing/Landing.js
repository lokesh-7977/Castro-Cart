import React from "react";
import styles from "./Landing.module.css";
import LeftImg from "../../assets/img1_hero_page.png";
import RightImg from "../../assets/img2_hero_page_side.png";
import centerUp from "../../assets/img_header_up.png";
import centerDown from "../../assets/img_down_bottom.png";
import middle from "../../assets/img_header-sale.png";

const Landing = () => {
  return (
    <>
      <div className={styles.img_container}>
        <div className={styles.left}>
          <img className={styles.leftImg} src={LeftImg} alt="Left Img" />
        </div>

        <div>
          <div className={styles.m_container}>
            <img src={centerUp} alt="Center img" />
          </div>
            <div className={styles.heading}>ULTIMATE</div>
          <div className={styles.middle}>
            <img src={middle} alt="Land Middle" />
          </div>
          <div className={styles.paragraph}>
            <p>NEW COLLECTION</p>
            </div>
          <div className={styles.button}>
          <button>Shop Now</button>
          </div>
          <div className={styles.downImg}>
            <img src={centerDown} alt="Down Img" />
          </div>
        </div>
        <div className={styles.flcontainer}>
          <img className={styles.rightImg} src={RightImg} alt="Right Img" />
        </div>
      </div>
    </>
  );
};

export default Landing;
