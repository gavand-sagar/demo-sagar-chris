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

const Process = () => {
  return (
    <Container className="factdiv spacing">
      <Row>
        <Col className="text-center" sm={4}>
          <RiNumber1 className="imgfact" />
          <p className="facttext">Start a project</p>
          <p className="bodytext">
            Click that button in the top right corner and submit your details.
            Our team will be in contact with you within 1 day. We will chat
            around your project and its requirements and make the right
            decisions about how we execute your build.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <RiNumber2 className="imgfact" />
          <p className="facttext">Meet your team</p>
          <p className="bodytext">
            Meet your dedicated team of elite Engineers, Solution Analysts,
            Scrum Masters and QA Testers. Get comfortable with them, as they
            will work hand in hand with you to bring your unique vision to life.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <RiNumber3 className="imgfact" />
          <p className="facttext">Design a protype</p>
          <p className="bodytext">
            If you need to go back to basics, we are here to support your
            journey. Your design team will put together a clickable prototype to
            give you an overall look and feel of your end product.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center" sm={4}>
          <RiNumber4 className="imgfact" />
          <p className="facttext">Development</p>
          <p className="bodytext">
            Bring your project to life or iterate on your existing software
            features using the latest Silicon Valley technologies.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <RiNumber5 className="imgfact" />
          <p className="facttext">Product delivery</p>
          <p className="bodytext">
            Work with your project manager to decide on the best way to launch
            your product. Whether its into the app store or staggered feature
            releases, your PM will keep you informed and ensure seamless
            delivery.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <RiNumber6 className="imgfact" />
          <p className="facttext">Maintenance and support</p>
          <p className="bodytext">
            Manage the quality and usability of your software. Ensure there are
            no bugs and your software functions well for the end user.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Process;
