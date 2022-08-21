import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageProcessor from "../imageprocessor/ImageProcessor";
import app6 from "../../assets/app6.jpg";

const OurStory = ({ label }) => {
  return (
    <Container>
      <Row className="spacing">
        <Col>
          <div>
            <p className="heading">Our Story</p>
            <p className="bodytext">
              We are a bespoke software company that, like any great tech
              startup, was founded in a garage. Alppoint has now grown to more
              than 200 of the best software engineering experts, building
              world-class platforms for growing businesses across five cities on
              three continents.​{" "}
            </p>
            <p className="heading">Our Mission</p>
            <p className="bodytext">
              We design, build, deploy and maintain innovative custom software
              that gives our clients the opportunity to start, run and grow
              world-class businesses.
            </p>
          </div>
        </Col>
        <Col>
          <ImageProcessor label={app6} style="imgstyle" />
        </Col>
      </Row>
    </Container>
  );
};

export default OurStory;
