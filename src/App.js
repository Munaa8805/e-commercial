import React, { Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "./redux/actions/loginActions";
import * as signupActions from "./redux/actions/signupActions";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Logout from "./components/Logout";

///
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainPage = React.lazy(() => import("./pages/MainPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));

//// import Components
const ProductDetail = React.lazy(() =>
  import("./components/Product/ProductDetail")
);

const App = props => {
  console.log("App props.userId", props.userId);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");

    if (token) {
      if (expireDate > new Date()) {
        // Hugatsaa n duusaaagui token baina, avtomat login hiine
        props.autoLogin(token, userId);

        // Token huchingui bolohod uldej baigaa hugatsaag tootsoolj
        // Ter hugatsaanii daraa avtomataar logout hiine
        props.autoLogoutAfterMillisec(
          expireDate.getTime() - new Date().getTime()
        );
      } else {
        // Token hugatsaa n duussan bainaa, logout hiine
        props.logout();
      }
    }
  }, []);
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/product-detail">
            <ProductDetail />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <SignUpPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
};

const mapStateToProps = state => {
  console.log("App props state", state);
  return {
    userId: state.signupReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    autoLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(signupActions.logout()),
    autoLogoutAfterMillisec: () =>
      dispatch(signupActions.autoLogoutAfterMillisec())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
