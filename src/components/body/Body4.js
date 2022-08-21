import React from "react";
import app2 from "../../assets/app2.jpg";
import app4 from "../../assets/app4.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./body4.css";
import SharedButton from "../button/SharedButton";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

const Body4 = () => {
  return (
    <>
      <Row>
        <div className="bdiv">
          <img src={app4} width="150" className="head1" />
          <p className="head1">Have An Idea?</p>
          <p className="head1">Ready To Turn It Into Something Great?</p>
          <SharedButton
            label="WORK WITH US >"
            style="buttonstyle1"
            link="contact"
          />
          <div className="icondiv">
            {" "}
            <a href="https://www.facebook.com/alppointtechnologies">
              <FaFacebookSquare className="iconstyle" />
            </a>
            <a href="https://www.linkedin.com/company/alppoint/">
              <FaLinkedin className="iconstyle" />
            </a>
            <a href="https://www.instagram.com/alppointtechnologies/">
              <FaInstagramSquare className="iconstyle" />
            </a>
          </div>
        </div>
      </Row>
    </>
  );
};

export default Body4;
