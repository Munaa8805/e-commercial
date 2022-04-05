import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

import { connect } from "react-redux";

import classes from "./MainNavigation.module.css";

const MainNavigation = props => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">E-SHOP</Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          {props.userId ? (
            <Fragment>
              <li>
                <NavLink exact to="/" activeClassName={classes.active}>
                  НҮҮР
                </NavLink>
              </li>
              <li>
                <NavLink to="/logout" activeClassName={classes.active}>
                  ГАРАХ
                </NavLink>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                <NavLink exact to="/" activeClassName={classes.active}>
                  НҮҮР
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" activeClassName={classes.active}>
                  НЭВТРЭХ
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" activeClassName={classes.active}>
                  БҮРТГҮҮЛЭХ
                </NavLink>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};
const mapStateToProps = state => {
  return {
    userId: state.signupReducer.userId
  };
};

export default connect(mapStateToProps, null)(MainNavigation);
