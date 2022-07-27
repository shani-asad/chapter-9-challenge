import React, { Component, Fragment } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Nav, Link } from "reactstrap";
import "../css/navbar.css";

class Navbarr extends Component {
  
  state = {isAuthenticated: false}
  componentWillMount() { this.checkUser() }

  // req ke server
  checkUser = () => {
      const token = localStorage.getItem('token')
      if(!!token) {
          return this.setState({ isAuthenticated: true});
      }
  }

  handleLogout = () => {
    const { history } = this.props
    localStorage.removeItem('token')
    window.location.href ='/'
  }

  render() {
    const {isAuthenticated}  = this.state
        let navlink;
        console.log(isAuthenticated)

        if (!isAuthenticated) {
            navlink = 
            <Fragment> 
              <NavLink className="navTextColor navFontText navFontSize mx-3" href="/login">
                Sign In
              </NavLink>
              <NavLink className="navTextColor navFontText navFontSize me-5" href="/signup">
                Sign Up
              </NavLink>
            </Fragment>
            console.log(localStorage.getItem('token'));
        }else {
            navlink = 
            <Fragment> 
              <NavLink className="navTextColor navFontText navFontSize mx-3" onClick={this.handleLogout} href='/'>
                Logout
              </NavLink>
            </Fragment>
        }
    return (
      <div>
        <Navbar color="dark" expand="md" className="navHeader">
          <NavbarBrand className="navTextColor navFontText navFontSizeLogo ms-3 mx-5" href="/">
            Game
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink className="navTextColor navFontText navFontSize mx-3" href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navTextColor navFontText navFontSize mx-3" href="/game/list">
                  Game List
                </NavLink>
              </NavItem>
            </Nav>
            {navlink}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navbarr;
