import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SharedCard4 from "../card/SharedCard4";
import SharedButton from "../button/SharedButton";
import app from "../../assets/app.jpg";
import ImageProcessor from "../imageprocessor/ImageProcessor";
import "./body.css";
const Body3 = () => {
  return (
    <>
      <Row className="spacing">
        <Col>
          <ImageProcessor label={app} style="imgstyle" />
        </Col>
        <Col>
          <SharedCard4
            cardTitle="Build Your App Idea."
            cardDescription={`We are an end-to-end custom software development and design company that specialises in delivering high-quality digital products. We work with start-ups, businesses, and corporates to validate, design, build, launch, and maintain custom-built native and web based apps.
            
            Our packages are tailored to suit your business needs. Get in touch today and let's see how we can help you.`}
          />
          <div className="buttoncenter">
            <SharedButton
              label="Work With Us >"
              style="buttonstyle"
              link="/project"
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Body3;
