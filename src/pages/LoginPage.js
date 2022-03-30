import React, { useState } from "react";
import Card from "../components/UI/Card";
import { Link } from "react-router-dom";

import LoadingSpinner from "../components/UI/LoadingSpinner";
import classes from "./loginpage.module.css";
const LoginPage = () => {
  const [isEntering, setIsEntering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  ////
  const emailInputHandler = e => {
    setEmail(e.target.value);
  };
  const passwordInputHandler = e => {
    setPassword(e.target.value);
  };

  ////
  const formFocusedHandler = () => {
    setIsEntering(true);
  };
  const finishEnteringHandler = () => {
    setIsEntering(false);
  };
  const submitFormHandler = e => {
    e.preventDefault();
    if (email.includes("@") && password.trim().length >= 6) {
      console.log("submited");
    } else {
      //   setError("Таны нууц үг, эсвэл е-мэйл хаяг буруу байна.");
      window.alert("Таны нууц үг, эсвэл е-мэйл хаяг буруу байна.");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <section className={classes.loginpageSection}>
      <div className={classes.firstsection}>
        <div className={classes.words}>
          <p>Өөрийнхөө хүссэн зүйлийг</p>
          <p className={classes.wordsBold}>АРИУН ЦАГААН ХӨДӨЛМӨРӨӨРӨӨ</p>
          <p>олсон мөнгөөр худалдан авч бай!</p>
        </div>
        <div className={classes.author}>
          <p>-- Жэк Ма --</p>
        </div>
      </div>
      <div className={classes.secondsection}>
        <div className={classes.form}>
          <Card>
            <form onFocus={formFocusedHandler} onSubmit={submitFormHandler}>
              <div className={classes.formControl}>
                <label htmlFor="email">Э-мэйл хаяг: </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={emailInputHandler}
                  required
                  placeholder="Та имэйл хаягаа оруулна уу"
                />
              </div>
              <div className={classes.formControl}>
                <label htmlFor="text">Нууц үг : </label>
                <input
                  type="password"
                  id="name"
                  required
                  value={password}
                  onChange={passwordInputHandler}
                  placeholder="Та нууц үгээ оруулна уу"
                />
              </div>
              <div className={classes.formButton}>
                <button onClick={finishEnteringHandler}>НЭВТРЭХ</button>
              </div>
              <div className={classes.passResetLink}>
                <Link to="/reset-password">Нууц үг сэргээх</Link>
              </div>
              <div className={classes.signUpButton}>
                <button>
                  <Link to="/register">БҮРТГҮҮЛЭХ</Link>
                </button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
