import React from "react";
import Header from "../../components/header/Header";
import "./about.css";
import { FaHandPeace } from "react-icons/fa";
import app5 from "../../assets/app5.jpg";
import app7 from "../../assets/app7.jpg";
import app8 from "../../assets/app8.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Facts from "../../components/Facts/Facts";
import Facts2 from "../../components/Facts/Facts2";
import Footer from "../../components/footer/Footer";
import SharedButton from "../../components/button/SharedButton";
import SharedCard2 from "../../components/card/SharedCard2";
import OurStory from "../../components/story/OurStory";
import Team from "../../components/team/Team";
import SharedCarousel from "../../components/carousel/SharedCarousel";
import ImageProcessor from "../../components/imageprocessor/ImageProcessor";

const About = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <div className="text-center mainabout">
            <div className="middiv">
              <p className="main2">
                Hello there <FaHandPeace /> from
              </p>
              <p className="main3">Alppoint - located in Canada</p>
              <p className="main4">
                A custom software development company like no other
              </p>
            </div>
          </div>
        </Row>
      </Container>
      <div className="spacing">
        <SharedCarousel />
      </div>
      <Container>
        <Row className="spacing" sm={6}>
          <Col style={{ textAlign: "center" }}>
            <ImageProcessor label={app5} style="imgstyle" />
          </Col>
          <Col sm={6}>
            <div>
              <p className="heading">About Us</p>
              <p className="bodytext">
                We are a leading bespoke software development company in the
                Canada. We design and build custom-made web, mobile and cloud
                software solutions that help businesses like yours grow.​{" "}
                <br></br>
                <br></br>With over a decade of success, we understand how
                software works across a multitude of industries. We understand
                that platform growth and development capacity is a pain point
                for many clients. Our multidisciplinary teams, comprising of
                tech-enthusiasts with elite and varied development expertise,
                are geared towards building scalable products that service
                growth-focused businesses.
              </p>
            </div>
          </Col>
        </Row>
        <div className="spacing">
          <Facts />
        </div>

        <Row className="spacing">
          <div className="main5 text-center">
            We build, deploy, iterate and support bespoke software for
            growth-driven businesses.
          </div>
        </Row>
        <OurStory label="app5" />
        <Row className="spacing">
          <div className="main5 text-center">
            We believe great software is the perfect combination of artistry,
            engineering and people
          </div>
        </Row>

        <Row className="spacing">
          <Col>
            <div>
              <p className="heading">Global Delivery</p>
              <p className="bodytext">
                With our digital footprint and offices in the Canada, and our
                closely linked offices in New York, we have dedicated expert
                development team, enabling us to offer world-class software
                development for your growing business.<br></br>
                <br></br>Our extensive experience in software development means
                that we can guarantee the standards and continuity of the
                software we provide for your business. No matter where you and
                your business are in the world.
              </p>
              <SharedButton
                label="Contact Us to Learn More >"
                style="buttonstyle"
                link="/contact"
              />
            </div>
          </Col>
          <Col>
            <div style={{ textAlign: "center", marginTop: "7%" }}>
              <ImageProcessor label={app7} style="imgstyle" />
            </div>
          </Col>
        </Row>
        <Row className="spacing">
          <p className="heading">Our Bespoke Services</p>
          <p className="bodytext mb-5">
            We provide expert software development to our clients in order to
            suit your budgets and timelines.
          </p>
          <Col sm={4}>
            <SharedCard2
              cardTitle="Customer software Development"
              cardDescription="High-performance, resilient and scalable software solutions for your business. Built iteratively, using modern programming languages, proven tools and partners."
              cardLink="/software"
            />
          </Col>
          <Col sm={4}>
            <SharedCard2
              cardTitle="Mobile and web app development"
              cardDescription="Bespoke mobile and web application development with a focus on the user, user experience and functionality, design and built for your scaling user base."
              cardLink="/mobile"
            />
          </Col>
          <Col sm={4}>
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
        <Row className="spacing">
          <p className="heading">Our Core Values</p>
          <Facts2 />
        </Row>
        <Team label={app8} />
      </Container>

      <Footer />

      <div></div>
    </>
  );
};

export default About;
