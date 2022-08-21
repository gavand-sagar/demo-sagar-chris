import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SharedButton from "../../components/button/SharedButton";
import SharedCarousel from "../../components/carousel/SharedCarousel";
import SharedTabs from "../../components/Tabs/SharedTabs";
import Counter from "../../components/counter/Counter";
import Process4 from "../../components/process/Process4";
import Header from "../../components/header/Header";
import ListGroup from "react-bootstrap/ListGroup";
import SharedCarousel2 from "../../components/carousel/SharedCarousel2";
import Process5 from "../../components/process/Process5";
import app13 from "../../assets/app13.jpg";
import app20 from "../../assets/app20.jpg";
import app19 from "../../assets/app19.jpg";
import ImageProcessor from "../../components/imageprocessor/ImageProcessor";
import Footer from "../../components/footer/Footer";

const Mobile = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="spacing">
          <Col>
            <p className="heading">Bespoke Mobile App Development</p>
            <p className="heading-small">
              Bespoke, user-focused and industry-specific
            </p>
            <p className="bodytext">
              Mobile and web applications increase your business’ ability to
              scale internal business processes and engage with more customers.
            </p>
            <SharedButton
              label="Get Started >"
              style="buttonstyle"
              link="/project"
            />
          </Col>
          <Col>
            <ImageProcessor label={app13} style="imgstyle" />
          </Col>
        </Row>
        <SharedCarousel />
        <Row className="spacing">
          <Col>
            <ImageProcessor label={app20} style="imgstyle" />
          </Col>
          <Col>
            <p className="heading-small">iPhone and Android App Developers</p>
            <p className="bodytext">
              Our teams of expert mobile developers and designers execute the
              perfect combination of artistry, engineering and people to bring
              your app to life. Whether it's creating and developing mobile apps
              for iPhone (iOS), Huawei and Android or executing strategic
              strategies that deliver in digital, we're here to grow your
              business.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="heading">
              Web and mobile apps developed the right way​
            </p>
            <p className="heading-small">Mobile development</p>
            <p className="bodytext">
              A mobile app requires the perfect combination of artistry,
              engineering and people to compete in the current technology
              landscape. Our team of expert mobile developers and designers
              craft the perfect combination of art and engineering to bring your
              mobile app to life. Whether for iOS or Android, we're ready to
              grow your business.
            </p>
            <SharedButton
              label="Contact us to get started >"
              style="buttonstyle"
              link="/contact"
            />
          </Col>
          <Col>
            <p className="heading-small">Web app development</p>
            <p className="bodytext">
              {" "}
              Build a responsive web application that functions perfectly on any
              screen and across multiple browsers. Your users are able to access
              your application easily, without need for installation. We strive
              to deliver bespoke solutions that innovate using cutting edge
              technologies and cloud software at competitive and flexible rates.
            </p>
          </Col>
        </Row>

        <Row className="spacing">
          <Col>
            <ImageProcessor label={app19} style="imgstyle" />
          </Col>
          <Col>
            <p className="heading-small">Hybrid applications</p>
            <p className="bodytext">
              Hybrid apps are the perfect blend of mobile and web applications.
              Web code is embedded into the mobile application, which allows for
              a seamless application with much functionality. Picking the right
              solution is important for the goal of your business. As leaders in
              the software development industry, we believe that great software
              is the perfect combination of artistry, engineering, and people,
              and that is how we help our clients grow sustainable and scalable
              businesses.
            </p>
          </Col>
        </Row>
        <Row className="spacing">
          <p className="heading">Our expert app development process</p>

          <Process4 />
        </Row>
        <Row className="spacing">
          <Col sm={6}>
            <p className="heading-small">What We Will Do For Your Business</p>
            <p className="bodytext">
              SovTech will walk the custom software development journey with
              you. We pride ourselves on our expertise in developing
              applications for any industry. We are here to become your expert
              partner in solving complex problems.
            </p>
          </Col>
          <Col sm={6}>
            <ListGroup as="ol" numbered style={{ border: "none" }}>
              <ListGroup.Item as="li" style={{ border: "none" }}>
                Streamline internal processes.
              </ListGroup.Item>
              <ListGroup.Item as="li" style={{ border: "none" }}>
                Digitise aspects of your business, or your business as a whole.
              </ListGroup.Item>
              <ListGroup.Item as="li" style={{ border: "none" }}>
                Build your custom software development.
              </ListGroup.Item>
              <ListGroup.Item as="li" style={{ border: "none" }}>
                Rebuild and rescue your existing developments.
              </ListGroup.Item>
              <ListGroup.Item as="li" style={{ border: "none" }}>
                Automate manual systems.
              </ListGroup.Item>
              <ListGroup.Item as="li" style={{ border: "none" }}>
                Maintain and scale your software.
              </ListGroup.Item>
              <ListGroup.Item as="li" style={{ border: "none" }}>
                Connect employees with software.
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Process5 />
        <Row className="spacing">
          <SharedCarousel2 />
        </Row>
      </Container>
      <Container fluid>
        <Row className="spacing softwarediv">
          <Col>
            <Counter
              label="500"
              title="Clients Around The World"
              style1="counter"
            />
          </Col>
          <Col>
            <Counter label="1200" title="Projects Delivered" style1="counter" />
          </Col>
          <Col>
            <Counter label="83" title="Lines Of Unique Code" style1="counter" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Mobile;
