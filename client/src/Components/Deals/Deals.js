import React from 'react'
import styles from './Deals.module.css';
import img1 from '../../assets/flo1.png';
import img2 from '../../assets/flo2.png';
import img3 from '../../assets/flo3.png';
import img4 from '../../assets/flo4.png';
import img5 from '../../assets/flo15.png';
import img6 from '../../assets/flo16.png';
import img7 from '../../assets/flo7.png';

const Deals = () => {
  return (
    <>
    <div className={styles.main}>
      <div className={styles.dealsContainer}>
      <p className={styles.p1}>Follow Us For More Collections</p>
      <p className={styles.p2}> Indulge in the epitome of style with our fashion collection. <br /> Elevate your wardrobe with timeless pieces and contemporary trends. <br /> From runway to street style, we've got you covered. <br /> Explore our curated selection and redefine your fashion statement. Follow us to stay ahead in the world of fashion. </p>
      </div>
      <div className={styles.dealImgs}> 
        <img className={styles.img1} src={img1} alt="" />
        <img className={styles.img2} src={img2} alt="" />
        <img className={styles.img3} src={img3} alt="" />
        <img className={styles.img4} src={img4} alt="" />
        <img className={styles.img5} src={img5} alt="" />
        <img className={styles.img6} src={img6} alt="" />
        <img className={styles.img7} src={img7} alt="" />
      </div>
      </div>
    </>
  )
}

export default Deals