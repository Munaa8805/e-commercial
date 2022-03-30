import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">E-SHOP</Link>
      </div>
      <nav className={classes.nav}>
        <ul>
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
            <NavLink to="/logout" activeClassName={classes.active}>
              ГАРАХ
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
