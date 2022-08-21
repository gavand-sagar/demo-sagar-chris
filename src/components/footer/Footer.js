import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";
import SharedCard3 from "../card/SharedCard3";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid>
      <Row className="footerColor spacing" sm={12}>
        <Col sm={2}></Col>
        <Col sm={2}>
          <ul className="footmain">
            <li className="foottitle">Bespoke Services</li>
            <li className="footdetails">
              <Link to="/software">Software Development</Link>
            </li>
            <li className="footdetails">
              <Link to="/mobile">Mobile Development</Link>
            </li>
            <li className="footdetails">
              <Link to="/web">Website Development</Link>
            </li>
          </ul>
        </Col>
        <Col sm={2}>
          <ul className="footmain">
            <li className="foottitle">Support Services</li>
            <li className="footdetails">
              <Link to="/teamaug">Team Augmentation</Link>
            </li>
            <li className="footdetails">
              <Link to="/support">Software Support</Link>
            </li>
            <li className="footdetails">
              <Link to="/outsourcing">Software Outsourcing</Link>
            </li>
            <li className="footdetails">
              <Link to="/support">Software Maintenance</Link>
            </li>
          </ul>
        </Col>
        <Col sm={2}>
          <ul className="footmain">
            <li className="foottitle">Social Media</li>
            <li className="footdetails">
              <a
                href="https://www.linkedin.com/company/alppoint/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="footdetails">
              <a
                href="https://www.facebook.com/alppointtechnologies"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="footdetails">
              <a
                href="https://www.instagram.com/alppointtechnologies/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </Col>
        <Col sm={2}>
          <ul className="footmain">
            <li className="foottitle">Get in touch</li>
            <li className="footdetails">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="footdetails">Live Chat</li>
            <li className="footdetails">
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </Col>
        <Col sm={2}></Col>
      </Row>
      <Row className="mainfooter" sm={12}>
        <hr></hr>
        <Col sm={3} className="privacy2">
          &copy; Copyright 2022 Alppoint, All rights reserved
        </Col>
        <Col sm={9} className="privacy">
          <ul>
            <li className="privacy3">
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
