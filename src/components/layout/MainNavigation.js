import React, { Fragment } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/signupActions";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const logoutHandler = () => {
    props.logout();
  };
  return (
    <header>
      <Navbar
        bg="primary"
        className={classes.header}
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <div className={classes.logo}>
                <a>E-SHOP</a>
              </div>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={classes.mobileMenu}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
            <Nav className="ml-auto">
              {props.userId ? (
                <Fragment>
                  <LinkContainer to="/">
                    <Nav.Link>
                      <i className="fas fa-shopping-cart"></i>
                      <span className={classes.navbarname}>НҮҮР</span>
                    </Nav.Link>
                  </LinkContainer>
                  <NavDropdown
                    title={"Munaa"}
                    id="username"
                    className={classes.profile}
                  >
                    <NavDropdown.Item onClick={logoutHandler}>
                      ГАРАХ
                    </NavDropdown.Item>
                  </NavDropdown>
                </Fragment>
              ) : (
                <Fragment>
                  <LinkContainer to="/">
                    <Nav.Link>
                      <i className="fas fa-home"></i>
                      <span className={classes.navbarname}>НҮҮР</span>
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i>
                      <span className={classes.navbarname}>НЭВТРЭХ</span>
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>
                      <i className="fas fa-address-card"></i>
                      <span className={classes.navbarname}>БҮРТГҮҮЛЭХ</span>
                    </Nav.Link>
                  </LinkContainer>
                </Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation);
