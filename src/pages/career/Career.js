import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import app5 from "../../assets/app5.jpg";
import SharedButton from "../../components/button/SharedButton";
import OurStory from "../../components/story/OurStory";
import Facts2 from "../../components/Facts/Facts2";
import Team from "../../components/team/Team";
import "./career.css";
import ImageProcessor from "../../components/imageprocessor/ImageProcessor";

const Career = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="spacing">
          <Col>
            <div>
              <p className="heading ">
                Join Our Team,<br></br> Help Build The Future
              </p>
              <div className="bodytext">
                Become part of the global team that is changing the way
                businesses across the world build software.
              </div>
              <div className="im1">
                {" "}
                <SharedButton
                  label="Apply Now >"
                  style="buttonstyle"
                  link="/project"
                />
              </div>
            </div>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <ImageProcessor label={app5} style="imgstyle" />
          </Col>
        </Row>
        <Row className="spacing">
          <Col>
            <div>
              <p className="heading-small">
                We invest in people who can see the future and who work hard to
                achieve it.
              </p>
            </div>
          </Col>
          <Col>
            <p className="bodytext">
              Alppoint has a young, dynamic and fast growing team. We’re only
              looking for outstanding people – those unique individuals who are
              brilliant, are always happy to help, socialise, get involved, work
              hard, and enjoy what they do! We have a continuous learning
              culture that allows our people to grow and develop in the
              opportunities across our various teams.
            </p>
          </Col>
        </Row>
        <Row className="spacing">
          <div>
            <p className="heading-small">Job Openings</p>
            <p className="bodytext">
              There are currently no job openings. We still love to hear from
              you.
            </p>
            <SharedButton
              label="Contact Us"
              style="buttonstyle"
              link="/contact"
            />
          </div>
        </Row>

        <OurStory label={app5} />
        <Row className="spacing">
          <p className="heading">Our Company Values</p>
          <Facts2 />
        </Row>
        <Team label={app5} />
      </Container>
      <Footer />
    </>
  );
};

export default Career;
