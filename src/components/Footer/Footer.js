import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footer}>
        <div>
          <h3>Contact Us</h3>
          <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
          <p>415-201-6370</p>
          <p>
            <a href="mailto:hello@shopping.com">hello@shopping.com</a>
          </p>
          <p>Shopping App {year}&copy;</p>
        </div>
        <div>
          <h3>Account</h3>
          <p>Create account</p>
          <p>Sign in</p>
          <p>iOS app</p>
          <p>Android app</p>
        </div>
        <div>
          <h3>Company</h3>
          <p>About Shopping</p>
          <p>For Business</p>
          <p>Shopping partners</p>
          <p>Careers</p>
        </div>
        <div>
          <h3>Resources</h3>
          <p>Recipe directory</p>
          <p>Help center</p>
          <p>Privacy & terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
