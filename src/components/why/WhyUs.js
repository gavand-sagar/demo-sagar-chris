import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SharedButton from "../button/SharedButton";
import "./whyus.css";

const WhyUs = () => {
  return (
    <Container>
      <Row className="whyusmain spacing">
        <Col
          sm={6}
          style={{
            "flex-wrap": "wrap",
            "align-content": "center",
            display: "flex",
            "flex-direction": "row",
          }}
        >
          <p className="whyustitle">
            Why Choose us for your bespoke software?{" "}
          </p>
          <div style={{ width: "100%", "padding-bottom": "13%" }}>
            <SharedButton
              label="Contact us to get started >"
              style="buttonstyle"
              link="contact"
            />
          </div>
        </Col>
        <Col sm={6}>
          With over a decade of experience, we understand how software works
          across a multitude of industries. We understand that platform growth
          and development capacity is a pain point for many of clients.{" "}
          <br></br>
          <br></br>
          Our multidisciplinary teams, comprising tech-enthusiasts with elite
          and varied development expertise, are geared towards building scalable
          products that service growth-focused businesses. We strive to deliver
          bespoke solutions that innovate using cutting edge technologies and
          cloud software at competitive and flexible rates.
        </Col>
      </Row>
    </Container>
  );
};

export default WhyUs;
