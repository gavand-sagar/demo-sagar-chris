import React from "react";
import "./facts.css";
import {
  FaMobileAlt,
  FaChartLine,
  FaDesktop,
  FaDatabase,
  FaCode,
  FaCheckCircle,
  FaSoundcloud,
} from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SharedButton from "../button/SharedButton";

const Facts5 = () => {
  return (
    <Container className=" spacing">
      <p className="heading">Our Team's Specialities</p>
      <Row>
        <Col className="text-center" sm={3}>
          <FaDesktop className="imgfact" />
          <p>Web frontend</p>
        </Col>
        <Col className="text-center" sm={3}>
          <FaMobileAlt className="imgfact" />
          <p>Mobile application</p>
        </Col>
        <Col className="text-center" sm={3}>
          <FaDatabase className="imgfact" />
          <p>Web backend</p>
        </Col>
        <Col className="text-center" sm={3}>
          <FaCheckCircle className="imgfact" />
          <p>Scalable infrastructure</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center" sm={3}>
          <FaDatabase className="imgfact" />
          <p>Reporting and analytics</p>
        </Col>
        <Col className="text-center" sm={3}>
          <FaCode className="imgfact" />
          <p>Solutions architect</p>
        </Col>
        <Col className="text-center" sm={3}>
          <FaSoundcloud className="imgfact" />
          <p>Cloud infrastructure</p>
        </Col>
        <Col className="text-center" sm={3}>
          <FaChartLine className="imgfact" />
          <p>DevOps</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Facts5;
