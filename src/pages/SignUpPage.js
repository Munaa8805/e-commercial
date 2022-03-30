import React, { useState } from "react";
import Card from "../components/UI/Card";
import classes from "./register.module.css";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [ovog, setOvog] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  ////
  const nameHandler = e => {
    setName(e.target.value);
  };
  const ovogHandler = e => {
    setOvog(e.target.value);
  };
  const emailHandler = e => {
    setEmail(e.target.value);
  };
  const passwordHandler = e => {
    setPassword(e.target.value);
  };
  const registerHandlerSubmit = e => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <div className={classes.containerRegister}>
      <div>Register Page</div>
      <div className={classes.register}>
        <h1>Бүртгүүлэх</h1>
        <div className={classes.mainForm}>
          <Card>
            <form onSubmit={registerHandlerSubmit}>
              <div>
                <div className={classes.formFirst}>
                  <div className={classes.formInput}>
                    <input
                      placeholder="Та нэрээ оруулна уу"
                      type="text"
                      id="text"
                      required
                      value={name}
                      onChange={nameHandler}
                    />
                  </div>

                  <div className={classes.formInput}>
                    <input
                      placeholder="Та овогоо оруулна уу"
                      type="text"
                      id="text"
                      required
                      value={ovog}
                      onChange={ovogHandler}
                    />
                  </div>
                </div>
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

export default SignUpPage;
