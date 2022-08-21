import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ImageProcessor from "../imageprocessor/ImageProcessor";

function Team({ label }) {
  return (
    <Container className="spacing">
      <Row>
        <p className="heading">Our Team</p>
        <Col>
          <div className="bodytext">
            Our world-class expert team of developers, designers, product
            managers and software architects are experienced in working together
            to create beautiful, functional software. <br></br>
            <br></br>We invest in people who can see the future and who work
            hard to achieve it. We live by a set of values at Alppoint. Our
            values define who we are and the way we work. They guide us in
            making a positive impact on our clients, our team members, our
            business partners and the communities in which we operate.
          </div>
        </Col>
        <Col style={{ "padding-bottom": "6rem", textAlign: "center" }}>
          <ImageProcessor label={label} style="imgstyle" />
        </Col>
      </Row>
    </Container>
  );
}

export default Team;
