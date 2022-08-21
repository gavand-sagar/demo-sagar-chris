import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SharedButton from "../../components/button/SharedButton";
import SharedCarousel from "../../components/carousel/SharedCarousel";
import SharedTabs from "../../components/Tabs/SharedTabs";
import Counter from "../../components/counter/Counter";
import Process from "../../components/process/Process";
import Header from "../../components/header/Header";
import Facts3 from "../../components/Facts/Facts3";
import Footer from "../../components/footer/Footer";
import ImageProcessor from "../../components/imageprocessor/ImageProcessor";
import app8 from "../../assets/app8.jpg";
import app12 from "../../assets/app12.jpg";
import app10 from "../../assets/app10.jpg";

const SoftwareSupport = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="spacing">
          <Col>
            <p className="heading">Software Support</p>
            <p className="heading-small">
              Maintain, support, and improve your software for scale
            </p>
            <p className="bodytext">
              The software life cycle never ends. From technical investigations
              to priority bug fixing and change requests, your software will be
              continuously maintained, even if we didn’t develop it.
            </p>
            <SharedButton
              label="Get Started >"
              style="buttonstyle"
              link="/project"
            />
          </Col>
          <Col>
            <ImageProcessor label={app8} style="imgstyle" />
          </Col>
        </Row>
        <SharedCarousel />
        <Row className="spacing">
          <Col sm={6}>
            <p className="heading-small">
              Why your business needs software support:
            </p>

            <SharedButton
              label="Contact us to get started >"
              style="buttonstyle"
              link="/project"
            />
          </Col>
          <Col className="bodytext" sm={6}>
            As your business grows and changes, and updates in technology roll
            in, you may find that your software doesn't work as well for your
            business as it used to. <br></br>
            <br></br>
            For this reason, it's important to have a live support team catering
            to the upgrades and improvements needed for your software. You need
            to ensure your users continuously gain the maximum benefits from
            your software’s functionality, and that is done through continuous
            support and feature iterations.<br></br>
            <br></br>
            As leaders in the software development space, we believe that great
            software is the perfect combination of artistry, engineering, and
            people, and that is how we help our clients grow sustainable and
            scalable businesses. rates.<br></br>
            <br></br>
          </Col>
        </Row>
        <Facts3 />
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
        <Row className="spacing">
          <Col>
            <p className="heading-small">
              Expert software across industries​ such as
            </p>
            <SharedTabs />
          </Col>
          <Col>
            <ImageProcessor label={app10} style="imgstyle" />
          </Col>
        </Row>

        <Row className="spacing">
          <p className="heading-small">Software developed the right way</p>
          <Col sm={6}>
            <p className="bodytext">
              A test-driven development approach is applied to your project, to
              implement a shared user-developer understanding and reduce the
              risk of rework. Your full-stack development team ensures a robust,
              scalable piece of software that is tried and tested. This means
              peace of mind for you and your growing company with every project
              and piece of code. As leaders in the software development
              industry, we believe that great software is the perfect
              combination of artistry, engineering, and people, and that is how
              we help our clients grow sustainable and scalable businesses.
            </p>
          </Col>
          <Col sm={6}>
            <p className="bodytext">
              Well-built software is a non-negotiable when building a platform
              for a growing business. We ensure your piece of software is built
              using cutting-edge, well-supported technologies and programming
              languages.
              <br></br>
              <br></br> We make use of proven libraries and tools to aid in
              building well-functioning software. Your software is built on good
              practice, using clean, leading code standards.
            </p>
          </Col>
        </Row>
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

export default SoftwareSupport;
