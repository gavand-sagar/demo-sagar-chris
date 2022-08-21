import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.svg";
import "./header.css";
import { NavLink } from "react-router-dom";
import SharedButton from "../button/SharedButton";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="navp gap-5 px-5"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            <NavLink to="/" className="link">
              <Image src={logo} fluid className="mylogo" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link className="">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "linkx" : "link")}
                >
                  Home
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "linkx" : "link")}
                >
                  Who we are
                </NavLink>
              </Nav.Link>

              <NavDropdown title="What we do" id="basic-nav-dropdown">
                <NavDropdown.Item className="link2">
                  <NavLink to="/software" className=" dropdown-item">
                    Software Development
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className="link2">
                  <NavLink to="/mobile" className=" dropdown-item">
                    Mobile App Development
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className="link2">
                  <NavLink to="/web" className=" dropdown-item">
                    Web App Development
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item className="link2">
                  <NavLink to="/support" className=" dropdown-item">
                    Software Support
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className="link2">
                  <NavLink to="/teamaug" className=" dropdown-item">
                    Team Augmentation
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item className="link2">
                  <NavLink to="/outsourcing" className=" dropdown-item">
                    Project Outsourcing
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                {" "}
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "linkx" : "link")}
                >
                  Contact us
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  to="/career"
                  className={({ isActive }) => (isActive ? "linkx" : "link")}
                >
                  Work with us
                </NavLink>
              </Nav.Link>
              <SharedButton
                label="START A CONVERSATION >"
                link="/project"
                style="headerstyle"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
