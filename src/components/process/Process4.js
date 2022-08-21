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
import SharedButton from "../button/SharedButton";
import "../../components/Facts/facts.css";

const Process4 = () => {
  return (
    <Container className="factdiv spacing">
      <Row>
        <Col className="text-center" sm={4}>
          <RiNumber1 className="imgfact" />
          <p className="facttext">Start a project</p>
          <p className="bodytext">
            Click that button in the top right corner and submit your details.
            Our dedicated team will be in contact with you within one day.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <RiNumber2 className="imgfact" />
          <p className="facttext">Design</p>
          <p className="bodytext">
            Expert UX designers create seamless UI for your new applications or
            provide user-focused design updates for existing apps.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <RiNumber3 className="imgfact" />
          <p className="facttext">Build</p>
          <p className="bodytext">
            Engineering teams are dedicated to building, improving and iterating
            on your app to ensure a well-functioning piece of software.
          </p>
        </Col>
      </Row>
      <Row className="spacing">
        <Col className="text-center" sm={4}>
          <RiNumber4 className="imgfact" />
          <p className="facttext">Test</p>
          <p className="bodytext">
            Ensure your app is functioning at the highest level. QA testers
            ensure the app works correctly and there are no bugs.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <RiNumber5 className="imgfact" />
          <p className="facttext">Deploy</p>
          <p className="bodytext">
            Ensure an easy deployment. Let us deploy your application into app
            stores.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <RiNumber6 className="imgfact" />
          <p className="facttext">Support</p>
          <p className="bodytext">
            Scalable software calls for continuous support and feature
            improvements.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Process4;
