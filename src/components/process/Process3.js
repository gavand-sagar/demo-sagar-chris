import React from "react";
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Facts/facts.css";

const Process3 = () => {
  return (
    <Container className=" spacing">
      <Row>
        <Col className="text-center" sm={4}>
          <RiNumber1 className="imgfact" />
          <p className="facttext">Global Experience</p>
          <p className="bodytext">
            Our carefully selected talent boasts experience across a number of
            leading global tech stacks and industries. This ensures we deliver a
            wide range of software requirements with ease and speed.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <RiNumber2 className="imgfact" />
          <p className="facttext">High productivity</p>
          <p className="bodytext">
            We adopt streamlined processes which yield highly efficient and
            dynamic development operations throughout the software development
            lifecycle.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <RiNumber3 className="imgfact" />
          <p className="facttext">Autonomous teams</p>
          <p className="bodytext">
            We provide easily adaptable, self-managing teams, giving you the
            opportunity to focus on your business objectives while we build
            seamless software that aligns with your unique business
            requirements.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Process3;
