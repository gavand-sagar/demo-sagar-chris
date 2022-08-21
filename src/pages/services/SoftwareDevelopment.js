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
import app9 from "../../assets/app9.jpg";
import app10 from "../../assets/app10.jpg";

import ImageProcessor from "../../components/imageprocessor/ImageProcessor";
import "./services.css";
import Footer from "../../components/footer/Footer";

const SoftwareDevelopment = () => {
  return (
    <>
      <Header />
      <Container className="spacing">
        <Row>
          <Col>
            <p className="heading">Software Development</p>
            <p className="heading-small">
              engineering tailored to your growing business
            </p>
            <p className="bodytext">
              Bespoke, tailor-made software solutions solve many problems faced
              by scaling companies. Engineer a simple and efficient solution
              that fuels your company’s growth and profitability.
            </p>
            <SharedButton
              label="Get Started >"
              style="buttonstyle"
              link="/project"
            />
          </Col>
          <Col>
            <ImageProcessor label={app9} style="imgstyle" />
          </Col>
        </Row>
        <SharedCarousel />
        <Row>
          <Col>
            <p className="heading-small">Software Development With Alppoint</p>
            <p className="bodytext">
              Alppoint offers end-to-end bespoke development, uniquely tailored
              to your industry and business.
            </p>
            <SharedButton
              label="Contact us to get started >"
              style="buttonstyle"
            />
          </Col>
          <Col className="bodytext">
            Our 10 years of engineering experience, along with a team of tech
            professionals allows us to build you an expertly crafted piece of
            bespoke software that serve both business and user needs. As leaders
            in the software development space, we believe that great software is
            the perfect combination of artistry, engineering, and people, and
            that is how we help our clients grow sustainable and scalable
            businesses.
            <br></br>
            <br></br>
            Our multidisciplinary teams, comprising tech-enthusiasts with elite
            and varied development expertise, are geared towards building
            scalable products that service growth-focused businesses.<br></br>
            <br></br>
            We strive to deliver bespoke solutions that innovate using cutting
            edge technologies and cloud software at competitive and flexible
            rates.
          </Col>
        </Row>
        <Row className="spacing">
          <Col>
            <p className="heading-small mb-4">
              Expert software across industries​ such as
            </p>
            <SharedTabs />
          </Col>
          <Col>
            <ImageProcessor label={app10} style="imgstyle" />
          </Col>
        </Row>

        <Row className="spacing">
          <p className="heading">Software developed the right way</p>
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
        <Row className="spacing">
          <p className="heading">Our expert software development process</p>
          <Col>
            <Process />
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

export default SoftwareDevelopment;
