import React, {useState,useEffect} from "react";
import styles from "./Offer.module.css";
import img1 from "../../assets/mon1.png";
import img2 from "../../assets/mon2.png";
import img3 from "../../assets/mon3.png";

const Offer = () => {
  const [days, setDays] = useState(10);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          if (hours > 0) {
            setHours(hours - 1);
            setMinutes(59);
            setSeconds(59);
          } else {
            if (days > 0) {
              setDays(days - 1);
              setHours(23);
              setMinutes(59);
              setSeconds(59);
            } else {
              clearInterval(countdownInterval);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [days, hours, minutes, seconds]);


  return (
    <>
    <div className={styles.main_container}>
      <div className={styles.offer_container}>
        <h1 className={styles.heading}>Deals Of The Month</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Scelerisque
          duis ultrices sollicitudin aliquam sem. <br /> Scelerisque duis ultrices
          sollicitudin{" "}
        </p>
        <button>Buy Now</button>
      </div>
      <p>Hurry Before it's to Late</p>
      <div className={styles.counter}>
        <div className={styles.count1}>
          <h1>{days.toString().padStart(2, "0")}</h1>
          <p>Days</p>
        </div>
        <div className={styles.count2}>
          <h1>{hours.toString().padStart(2, "0")}</h1>
          <p>Hours</p>
        </div>
        <div className={styles.count3}>
          <h1>{minutes.toString().padStart(2, "0")}</h1>
          <p>Minutes</p>
        </div>
        <div className={styles.count4}>
          <h1>{seconds.toString().padStart(2, "0")}</h1>
          <p>Seconds</p>
        </div>
      </div>
      <div className={styles.img_container}>
        <img className={img1} src={img1} alt="" />
        <img className={img2} src={img2} alt="" />
        <img className={img3} src={img3} alt="" />
      </div>
      </div>

    </>
  );
};

export default Offer;
