import React from "react";
import { FaMobileAlt, FaChartLine, FaPenFancy } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SharedCarousel from "../carousel/SharedCarousel";
import "../../components/Facts/facts.css";

const Process5 = () => {
  return (
    <Container className="factdiv spacing">
      <Row>
        <Col className="text-center" sm={4}>
          <FaMobileAlt className="imgfact" />
          <p className="facttext">Simple functionality</p>
          <p className="bodytext">
            Users react very well to slick, easy-to use applications. Build an
            app that makes your user’s life easier.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <FaPenFancy className="imgfact" />
          <p className="facttext">Engaging UX</p>
          <p className="bodytext">
            Apps need to be built with the end user in mind. Slick, user-centric
            design will keep them coming back from more.
          </p>
        </Col>
        <Col className="text-center" sm={4}>
          <FaChartLine className="imgfact" />
          <p className="facttext">Scalability</p>
          <p className="bodytext">
            Applications need to be developed to withstand multiple users at all
            times. Building an app that allows for user and feature growth
            allows your business to scale.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Process5;
