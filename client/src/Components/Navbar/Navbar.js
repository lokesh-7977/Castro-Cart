import React from 'react'
import  { Link }  from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <div className={styles.navbar}>
        <div className={styles.logoName}>
            CASTRO-CART
        </div>
        <div className={styles.nav_container}>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to= {""}>Deals</Link></li>
                <li><Link to={""}>New Arrivals</Link></li>
                <li><Link to={""}>Packages</Link></li>
                <li><Link to={""}>Sign in</Link></li>
                <li><Link to={""}><button className={styles.button}>Sign Up</button></Link></li>
            </ul>
        </div>
        </div>
    </>
  )
}

export default Navbar