import React from "react";
import "./facts.css";
import {
  FaMobileAlt,
  FaChartLine,
  FaLock,
  FaDatabase,
  FaCode,
  FaThumbsUp,
} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SharedButton from "../button/SharedButton";
import "./facts.css";

const Facts3 = () => {
  return (
    <Container className="factdiv">
      <Row>
        <Col className="text-center" sm={4}>
          <FaMobileAlt className="imgfact" />
          <p className="facttext">Ongoing Support</p>
          <p className="bodytext">
            For ongoing development, delivery and support of your software
            product.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <FaChartLine className="imgfact" />
          <p className="facttext">Monthly improvements</p>
          <p className="bodytext">
            We ensure that your software is adequately improving and upgraded
            every month.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <FaLock className="imgfact" />
          <p className="facttext">Security</p>
          <p className="bodytext">
            To keep your software running smoothly and securely.
          </p>
        </Col>
      </Row>
      <Row className="spacing">
        <Col className="text-center" sm={4}>
          <FaDatabase className="imgfact" />
          <p className="facttext">Data-Driven</p>
          <p className="bodytext">
            Our team ensures all decisions, planning, and execution is
            data-driven.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <FaCode className="imgfact" />
          <p className="facttext">Fully functional</p>
          <p className="bodytext">
            We ensure your software is always readily available and fully
            functional.​
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <FaThumbsUp className="imgfact" />
          <p className="facttext">Experience</p>
          <p className="bodytext">
            Decade of experience means you can rest assured knowing we know
            what's best.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Facts3;
