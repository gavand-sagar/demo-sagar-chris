import React from "react";
import "./facts.css";
import {
  FaPeopleCarry,
  FaMoneyBillAlt,
  FaMobileAlt,
  FaLaptopHouse,
  FaThumbsUp,
} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Facts = () => {
  return (
    <Container className="spacing">
      <Row>
        <Col className="text-center" sm={2.4}>
          <FaPeopleCarry className="imgfact" />
          <p className="facttext">7+ software developer</p>
        </Col>
        <Col className="text-center" sm={2.4}>
          <FaMoneyBillAlt className="imgfact" />
          <p className="facttext">Competitive rates</p>
        </Col>
        <Col className="text-center" sm={2.4}>
          <FaMobileAlt className="imgfact" />
          <p className="facttext">Web, mobile, cloud</p>
        </Col>
        <Col className="text-center" sm={2.4}>
          <FaLaptopHouse className="imgfact" />
          <p className="facttext">2 Countries</p>
        </Col>
        <Col className="text-center" sm={2.4}>
          <FaThumbsUp className="imgfact" />
          <p className="facttext">Decade of success</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Facts;
