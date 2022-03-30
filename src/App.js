import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

///
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainPage = React.lazy(() => import("./pages/MainPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const LogoutPage = React.lazy(() => import("./pages/LogoutPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));

function App() {
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
          {/* <Route exact path="/">
            <Redirect to="/quotes" />
          </Route> */}
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <SignUpPage />
          </Route>
          <Route exact path="/logout">
            <LogoutPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
