import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./body.css";
import SharedCard2 from "../card/SharedCard2";

const Body = () => {
  return (
    <>
      <Row className="spacing">
        <div className="text-center">
          <h1 className=" heading">How can we Help you</h1>
          <p className="bodytext">
            We provide the tools, knowledge, skills, and network needed to help
            you get from idea to industry leader.
          </p>
        </div>
      </Row>
      <Row>
        <Col>
          <SharedCard2
            cardTitle="Customer software Development"
            cardDescription="High-performance, resilient and scalable software solutions for your business. Built iteratively, using modern programming languages, proven tools and partners."
            cardLink="/software"
          />
        </Col>
        <Col>
          <SharedCard2
            cardTitle="Mobile and web app development"
            cardDescription="Bespoke mobile and web application development with a focus on the user, user experience and functionality, design and built for your scaling user base."
            cardLink="/mobile"
          />
        </Col>
        <Col>
          <SharedCard2
            cardTitle="Professional team augmentation"
            cardDescription="Embed and integrate a new, hand-crafted team into your development process or augment an existing team with highly-specialised, vetted engineers."
            cardLink="/teamaug"
          />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <SharedCard2
            cardTitle="Software outsourcing"
            cardDescription="Dedicated and managed development teams act as a digital extension of your business. Increase your capacity to propel your business growth."
            cardLink="/outsourcing"
          />
        </Col>
        <Col sm={4}>
          <SharedCard2
            cardTitle="Software support"
            cardDescription="Legacy software needs continuous support. Maintain and improve existing software to ensure optimal functionality and user experience."
            cardLink="/support"
          />
        </Col>
        <Col sm={4}>
          <SharedCard2
            cardTitle="Start a project"
            cardDescription="Got an exciting new project idea for your growing business? Need a bespoke solution to your software problem? Contact us and let us help."
            cardLink="project"
          />
        </Col>
      </Row>
    </>
  );
};

export default Body;
