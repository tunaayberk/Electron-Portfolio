import React from "react";
import { Link, NavLink } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import { NavLink as NavLinka } from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/logo-white.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar_global">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/logo-white.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text text-white">
                        Portfolio
                      </span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <NavLink to="/web-portfolio">
                          <Media
                            className="d-flex align-items-center"
                            style={{ marginBottom: "20px" }}
                          >
                            <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                              <i className="ni ni-spaceship" />
                            </div>
                            <Media body className="ml-3">
                              <h6 className="heading text-primary mb-md-1">
                                Web Portfolio
                              </h6>
                            </Media>
                          </Media>
                        </NavLink>
                        <NavLink to="/design-portfolio">
                          <Media className="d-flex align-items-center">
                            <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                              <i className="ni ni-palette" />
                            </div>
                            <Media body className="ml-3">
                              <h6 className="heading text-primary mb-md-1">
                                Design Portfolio
                              </h6>
                            </Media>
                          </Media>
                        </NavLink>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <NavItem>
                    <a href="/TAOResume.pdf" className="text-white">
                      <span className="nav-link-inner--text">Resume</span>
                    </a>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLinka
                      className="nav-link-icon"
                      href="https://www.linkedin.com/in/tuna-ayberk-ozmen/"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        LinkedIn
                      </span>
                    </NavLinka>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Add me on LinkedIn
                    </UncontrolledTooltip>
                  </NavItem>

                  <NavItem>
                    <NavLinka
                      className="nav-link-icon"
                      href="https://twitter.com/tunaayberk"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLinka>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow me on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLinka
                      className="nav-link-icon"
                      href="https://github.com/tunaayberk"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLinka>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star me on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLinka
                      className="nav-link-icon"
                      href="https://stackoverflow.com/users/11233593/tunaayberk"
                      id="tooltip333589092"
                      target="_blank"
                    >
                      <i className="fa fa-stack-overflow" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Stackoverflow
                      </span>
                    </NavLinka>
                    <UncontrolledTooltip delay={0} target="tooltip333589092">
                      Check me on Stackoverflow
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
