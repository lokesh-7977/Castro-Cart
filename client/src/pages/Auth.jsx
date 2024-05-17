import React from 'react';
import styles from './Styles/Auth.module.css';

const Auth = () => {
  return (
    <div className={styles.loginSignup}>
      <div className={styles.loginSignup_container}>
        <h1>Sign Up</h1>
        <div className={styles.loginSignup_fields}>
          <input type="text" placeholder="Your Full Name" />
          <input type="email" placeholder="Enter Your Email" />
          <input type="password" placeholder="*******" />
        </div>
        <div className={styles.loginSignup_agree}>
          <input type="checkbox" />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>
        <button className={styles.loginSignup_btn}>Continue</button>
        <p className={styles.loginSignup_login}>
          Already have an account? <span>Login</span>
        </p>
        
      </div>
    </div>
  );
};

export default Auth;
