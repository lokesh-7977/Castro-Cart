import React from 'react'
import styles from './Styles/Auth.module.css'
const Auth = () => {
  return (
    <>
    <div className={styles.loginSignup}>
        <div className={styles.loginSignup_container}>
            <h1>SignUp</h1>
            <div className={styles.fields}>
                <input type="text" placeholder='Your Full Name' />
                <input type="email"  placeholder='Enter Your Email'/>
                <input type="password" placeholder='*******' />
            </div>
            <button>Continue</button>
            <p className={styles.login}>Already Have an Account ? <span>Login</span></p>
            <div className={styles.agree}>
                <input type="checkbox" name='' id='' />
                <p>By Continuing , I Agree To The Terms Of Use & Privacy Policy.</p>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Auth