import React, { useState } from "react";
import Card from "../components/UI/Card";
import classes from "./register.module.css";

import * as actions from "../redux/actions/signupActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const SignUpPage = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  ////

  const emailHandler = e => {
    setEmail(e.target.value);
  };
  const passwordHandler = e => {
    setPassword(e.target.value);
  };
  const registerHandlerSubmit = e => {
    e.preventDefault();

    if (email.includes("@") && password.length > 5) {
      props.signupUser(email, password);
    } else {
      setError("Та нууц үг болон емэйл хаягаа шалгана уу");
    }
  };
  return (
    <div className={classes.containerRegister}>
      <div>Register Page</div>
      <div className={classes.register}>
        <h1>Бүртгүүлэх</h1>
        <div className={classes.mainForm}>
          <Card>
            <form onSubmit={registerHandlerSubmit}>
              <div className={classes.formControl}>
                {props.userId && <Redirect to="/" />}
                <div className={classes.formSecond}>
                  <input
                    type="email"
                    id="email"
                    placeholder="Та эмэйл хаягаа оруулна уу"
                    required
                    value={email}
                    onChange={emailHandler}
                  />
                </div>
                <div className={classes.formSecond}>
                  <input
                    type="password"
                    id="password"
                    placeholder="Та нууц үгээ оруулна уу"
                    required
                    value={password}
                    onChange={passwordHandler}
                  />
                </div>
              </div>
              <div className={classes.formSecond}>
                {error && <div style={{ color: "red" }}>{error}</div>}

                {props.firebaseError && (
                  <div style={{ color: "red" }}>{props.firebaseError}</div>
                )}

                {props.saving && <div>Loading ...</div>}
              </div>
              <div className={classes.formButton}>
                <button>Бүртгүүлэх</button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    saving: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
