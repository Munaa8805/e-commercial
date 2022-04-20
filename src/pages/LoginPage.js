import React, { useState, useEffect } from "react";
import Card from "../components/UI/Card";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import * as actions from "../redux/actions/loginActions";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import classes from "./loginpage.module.css";

const LoginPage = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("loginPage UserId", props.userId);
  const changeEmail = e => {
    setEmail(e.target.value);
  };

  const changePassword = e => {
    setPassword(e.target.value);
  };

  const loginHandler = () => {
    props.login(email, password);
  };
  let errorMessage;
  // if (props.firebaseError === "INVALID_EMAIL") {
  //   errorMessage = "Та и-мэйл хаягаа шалгана уу.";
  // } else if (props.firebaseError === "WRONG_PASSWORD") {
  //   errorMessage = "Та нууц үгээ шалгана уу.";
  // }

  return (
    <Container className={classes.loginContainer}>
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
            {props.logginIn && (
              <div className={classes.spinner}>
                <LoadingSpinner />
              </div>
            )}
            {props.userId ? <Redirect to="/" /> : null}

            <div className={classes.formControl}>
              <div className={classes.twoFive}>
                <label htmlFor="email">Э-мэйл хаяг : </label>
              </div>
              <div className={classes.sevenFive}>
                <input
                  type="email"
                  value={email}
                  onChange={changeEmail}
                  required
                  placeholder="И-мэйл хаяг"
                />
              </div>
            </div>
            <div className={classes.formControl}>
              <div className={classes.twoFive}>
                <label htmlFor="text">Нууц үг : </label>
              </div>
              <div className={classes.sevenFive}>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={changePassword}
                  placeholder="Нууц үг"
                />
              </div>
            </div>
            <div className={classes.formHorizonal}></div>
            <div className={classes.formButton}>
              <button onClick={loginHandler}>НЭВТРЭХ</button>
            </div>

            <div className={classes.formError}>{errorMessage}</div>

            <div className={classes.signUpButton}>
              <button>
                <Link to="/register">БҮРТГҮҮЛЭХ</Link>
              </button>
            </div>
            <div className={classes.passResetLink}>
              <Link to="/reset-password">Нууц үг сэргээх</Link>
            </div>
            <div className={classes.formButton}>
              {props.userId && <p>{props.userId}</p>}
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  console.log("LoginPage state", state);
  return {
    logginIn: state.signupReducer.logginIn,
    firebaseError: state.signupReducer.firebaseError,
    firebaseErrorCode: state.signupReducer.firebaseErrorCode,
    userId: state.signupReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(actions.loginUser(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
