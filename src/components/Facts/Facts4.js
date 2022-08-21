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
import { GoPerson } from "react-icons/go";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SharedButton from "../button/SharedButton";
import "./facts.css";

const Facts4 = () => {
  return (
    <Container className="factdiv mt-5">
      <Row>
        <Col className="text-center" sm={4}>
          <GoPerson className="imgfact" />
          <p className="facttext">Proven results</p>
          <p className="bodytext">
            We only hire the top 1% of tech talent. Alppoint enterprise
            developers are rigorously tested.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <FaChartLine className="imgfact" />
          <p className="facttext">Quick to scale</p>
          <p className="bodytext">
            Augment your existing tech team with additional talent, in order to
            take on larger projects or to increase velocity on your current
            projects.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <FaMobileAlt className="imgfact" />
          <p className="facttext">Tech first</p>
          <p className="bodytext">
            We are a development house before anything else. We assemble the
            right team for your project based on our deep tech experience.
          </p>
        </Col>
      </Row>
      <Row className="spacing">
        <p>Why hire a Alppoint engineering team?​</p>
        <Col className="text-center" sm={4}>
          <FaDatabase className="imgfact" />
          <p className="facttext">Supercharge programme</p>
          <p className="bodytext">
            We keep our developers motivated and inspired through our personal
            development programme.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <FaCode className="imgfact" />
          <p className="facttext">Sustainable engagements</p>
          <p className="bodytext">
            We like to build long-term relationships with all our clients, by
            ensuring the perfect fit for your company.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <FaThumbsUp className="imgfact" />
          <p className="facttext">Account managers</p>
          <p className="bodytext">
            Alppoint executive account managers will be your strategic partner
            of choice and ensure your needs are met.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Facts4;
