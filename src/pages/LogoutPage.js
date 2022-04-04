import React, { useEffect, useState } from "react";
import Card from "../components/UI/Card";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../redux/actions/signupActions";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import classes from "./loginpage.module.css";

//
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
      <div className={classes.firstsection}></div>
      <div className={classes.secondsection}>
        <h1>Logout</h1>
        <Card>
          <form onFocus={formFocusedHandler} onSubmit={submitFormHandler}>
            <div className="form-control">
              <label htmlFor="email">Э-мэйл хаяг: </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={emailInputHandler}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="text">Нууц үг : </label>
              <input
                type="password"
                id="name"
                required
                value={password}
                onChange={passwordInputHandler}
              />
            </div>
            <div className="form-btn-control">
              <div>
                <button className="btn" onClick={finishEnteringHandler}>
                  ГАРАХ
                </button>
              </div>
            </div>
            <div className="">
              <Link to="/reset-password">Нууц үг сэргээх</Link>
            </div>
            <div>
              <button className="btn">БҮРТГҮҮЛЭХ</button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
