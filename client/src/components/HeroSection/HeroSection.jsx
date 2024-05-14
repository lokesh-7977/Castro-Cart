import React from 'react'
import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
      <>
        <div className={styles.hero_section}>
            <div className={styles.hero_left}>
                    <h2>NEW ARRIVALS ONLY</h2>

            </div>
            <div className={styles.icon}>
                <p>New</p>
                <img src="" alt="" />
            </div>
            <p>Collections</p>
            <p>For EveryOne</p>
        </div>
        <div>
            <div className={styles.latestBtn}>Latest Collections</div>
            <img src="" alt="" />
        </div>
            <div className={styles.hero_right}>
                <img src="" alt="" />
        </div>
      </>
)
}

export default HeroSection