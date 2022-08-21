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
import Facts4 from "../../components/Facts/Facts4";
import Footer from "../../components/footer/Footer";
import SharedCarousel2 from "../../components/carousel/SharedCarousel2";
import app15 from "../../assets/app15.jpg";
import app6 from "../../assets/app6.jpg";
import app7 from "../../assets/app7.jpg";
import ImageProcessor from "../../components/imageprocessor/ImageProcessor";

const TeamAug = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="spacing">
          <Col>
            <p className="heading">Team augmentation</p>
            <p className="heading-small">
              Scale and augment your existing team with vetted engineers
            </p>
            <p className="bodytext">
              Embed experienced and trusted engineers right into your
              development teams. Upskill your existing team by hiring the right
              person, with the right expertise and experience at the right time.
            </p>
            <SharedButton
              label="Get Started >"
              style="buttonstyle"
              link="/project"
            />
          </Col>
          <Col>
            <ImageProcessor label={app15} style="imgstyle" />
          </Col>
        </Row>
        <SharedCarousel />
        <Row className="spacing">
          <Col>
            <p className="heading">Talented staff on demand</p>
            <p className="heading-small">Finding the right tech talent</p>
            <p className="bodytext">
              Whether you are looking for capacity in terms of internal
              resources or specialised skills for a certain project, finding the
              right tech talent proves to be very challenging. For businesses
              looking to grow quickly, recruiting the right people, with the
              right expertise for the right price is extremely important,
              however, the process can be costly and time-consuming.
            </p>
          </Col>
          <Col>
            <ImageProcessor label={app7} style="imgstyle" />
          </Col>
        </Row>
        <Row className="spacing">
          <Col>
            {" "}
            <ImageProcessor label={app6} style="imgstyle" />
          </Col>
          <Col>
            <p className="heading">The Alppoint solution</p>
            <p className="bodytext">
              Alppoint will assist you by providing on-demand, vetted expert
              developers that will seamlessly integrate into your existing
              development and engineering team. Our talent acquisition team
              selects only the highest quality candidates, with a wealth of
              varied experience. Whatever your business needs may be, Alppoint
              can assist.
            </p>
            <SharedButton
              label="Contact us to get started >"
              style="buttonstyle"
              link="/contact"
            />
          </Col>
        </Row>
        <Facts4 />
        <Row className="spacing">
          <Col>
            <p className="heading">The software support process</p>
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
          <p className="heading">Why augment with Alppoint?</p>
          <Col sm={6}>
            <p className="heading-small">We are people centric</p>
            <p className="bodytext">
              We believe that we cannot exist without our employees, and believe
              the same for our clients. We ensure that your team member is
              highly skilled and will slot right into the culture of your team
              and business.
            </p>
          </Col>
          <Col sm={6}>
            <p className="heading-small">We are the experts</p>
            <p className="bodytext">
              You do not need to be the tech experts. That's what we're here
              for. Alppoint will provide you with the right team member for your
              project and business based on our deep knowledge of tech
              requirements.
            </p>
          </Col>
        </Row>
        <SharedCarousel2 style="cardiv" />
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

export default TeamAug;
