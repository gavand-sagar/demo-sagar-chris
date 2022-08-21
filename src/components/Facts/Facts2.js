import React from "react";
import "./facts.css";
import {
  FaPeopleCarry,
  FaGlobe,
  FaMobileAlt,
  FaLaptopHouse,
  FaThumbsUp,
  FaTrophy,
  FaRegLightbulb,
} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Facts2 = () => {
  return (
    <Container>
      <Row className="spacing">
        <Col className="text-center bodytext" sm={4}>
          <FaPeopleCarry className="imgfact" />
          <p className="facttext">#Partnership</p>
          <p>
            We are partners to our customers. We don’t expect to exist and
            realise we only do because of our clients.
          </p>
        </Col>
        <Col className="text-center bodytext" sm={4}>
          <FaThumbsUp className="imgfact" />
          <p className="facttext">Sorted</p>
          <p>
            We get things done. We don’t value how something is done only that
            it is.
          </p>
        </Col>
        <Col className="text-center bodytext" sm={4}>
          <FaGlobe className="imgfact" />
          <p className="facttext">#Worldclass</p>
          <p>We are proud to be a world-class, global company.</p>
        </Col>
      </Row>
      <Row className="spacing">
        <Col className="text-center bodytext" sm={4}>
          <FaMobileAlt className="imgfact" />
          <p className="facttext">#Tech</p>
          <p>We believe that tech can solve everything and change the world.</p>
        </Col>
        <Col className="text-center bodytext" sm={4}>
          <FaTrophy className="imgfact" />
          <p className="facttext">#Results</p>
          <p>We value growth. We don't value effort over achievement.</p>
        </Col>
        <Col className="text-center bodytext" sm={4}>
          <FaRegLightbulb className="imgfact" />
          <p className="facttext">Blitz</p>
          <p>We don’t value perfection over moving fast.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Facts2;
