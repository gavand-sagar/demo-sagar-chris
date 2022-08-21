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
import SharedCarousel from "../carousel/SharedCarousel";
import "../../components/Facts/facts.css";

const Process2 = () => {
  return (
    <Container className="factdiv">
      <Row>
        <Col className="text-center" sm={4}>
          <RiNumber1 className="imgfact" />
          <p className="facttext">Start a project</p>
          <p className="bodytext">
            Submit your details, through our on-page forms. Tell us about your
            web development idea. Rest easy, knowing that your project is in the
            hands of the experts.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <RiNumber2 className="imgfact" />
          <p className="facttext">Meet your team</p>
          <p className="bodytext">
            Meet your dedicated team of elite Engineers, Analysts, Scrum Masters
            and QA Testers. Get comfortable with them, as they will work hand in
            hand with you to bring your unique vision to life.
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
      <Row className="spacing">
        <Col className="text-center" sm={4}>
          <RiNumber4 className="imgfact" />
          <p className="facttext">Web Development & Testing</p>
          <p className="bodytext">
            Your team of experienced software engineers bring the design to life
            using the latest Silicon Valley technologies. Our Quality Assurance
            Team rigorously tests your new web development to ensure that your
            users will be thrilled with the final product.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <RiNumber5 className="imgfact" />
          <p className="facttext">Web App Deployment</p>
          <p className="bodytext">
            Your dedicated project manager will keep you informed and up to date
            with continuous project improvements and progress. With our
            knowledge of the most direct routes to market, SovTech will handle
            every step of your new product's deployment.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <RiNumber6 className="imgfact" />
          <p className="facttext">Continuous Software Maintenance & Support</p>
          <p className="bodytext">
            Manage the quality of your new web app with our premium ongoing
            support and high-touch maintenance packages. Software needs
            continuous development and thus our support and maintenance allows
            for continuous improvements on your software every month.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Process2;
