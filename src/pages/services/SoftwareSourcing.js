import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SharedButton from "../../components/button/SharedButton";
import SharedCarousel from "../../components/carousel/SharedCarousel";
import Counter from "../../components/counter/Counter";
import Header from "../../components/header/Header";
import Facts5 from "../../components/Facts/Facts5";
import Footer from "../../components/footer/Footer";
import Process3 from "../../components/process/Process3";
import app11 from "../../assets/app11.jpg";
import ImageProcessor from "../../components/imageprocessor/ImageProcessor";
import app12 from "../../assets/app12.jpg";

const SoftwareSourcing = () => {
  return (
    <>
      <Header />
      <Container className="spacing">
        <Row>
          <Col>
            <p className="heading">Software outsourcing</p>
            <p className="heading-small">
              Grow your business with managed software development teams
            </p>
            <p className="bodytext">
              Growing businesses need development capacity without having to
              hire inflexible, internal employees. Support your business growth
              with flexible, cost-effective resources as an extension of your
              team.
            </p>
            <SharedButton
              label="Get Started >"
              style="buttonstyle"
              link="/project"
            />
          </Col>
          <Col>
            <ImageProcessor label={app11} style="imgstyle" />
          </Col>
        </Row>
        <SharedCarousel />
        <Row>
          <Col>
            <p className="heading-small">
              Why outsource your software development?
            </p>
            <SharedButton
              label="Contact us to get started"
              style="buttonstyle"
              link="/contact"
            />
          </Col>
          <Col>
            <p className="bodytext">
              Outsourcing allows your business to fulfil your software
              requirements using a company that specialises in software
              development. It offers the flexibility to scale up, in skills and
              capacity, for defined time periods, without the cost of bringing
              in additional employees. Outsourcing with Alppoint ensures that
              the correct planning procedures are followed and legal compliance
              is managed correctly. <br></br>
              <br></br>Our extensive experience in software development
              outsourcing means that we can guarantee the standards and
              continuity of the teams we provide for your business.
            </p>
          </Col>
        </Row>

        <Facts5 />
        <Row className="spacing">
          <Col>
            <ImageProcessor label={app12} style="imgstyle" />
          </Col>
          <Col>
            <p className="heading-small">The software support process</p>
            <p className="bodytext">
              You are given access to a live support team that will cater to
              your change requests and any platform issues that might arise.
              These small bugs are part of the software development process but
              you can rest assured knowing our team is there no matter what
              happens. <br></br>
              <br></br>
              We pride ourselves on the way we rapidly resolve issues.
            </p>
            <SharedButton
              label="Contact us to get started >"
              style="buttonstyle"
              link="/contact"
            />
          </Col>
        </Row>

        <Process3 />
      </Container>
      <Container fluid>
        <Row className="spacing softwarediv">
          <Col sm={4}>
            <Counter
              label="500"
              title="Clients Around The World"
              style1="counter"
            />
          </Col>
          <Col sm={4}>
            <Counter label="1200" title="Projects Delivered" style1="counter" />
          </Col>
          <Col sm={4}>
            <Counter label="83" title="Lines Of Unique Code" style1="counter" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SoftwareSourcing;
