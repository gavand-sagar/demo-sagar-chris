import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import wesellam from "../../assets/1.1.jpg";
import zendus from "../../assets/2.jpg";
import basepoint from "../../assets/3.jpg";
import talentsquare from "../../assets/4.1.jpg";
import winyline from "../../assets/5.1.jpg";
import "./sharedcarousel.css";

function SharedCarousel() {
  return (
    <Container fluid className="spacing">
      <Row>
        <p className="text-center heading">Our Recent Partners</p>
        <Slide slidesToScroll={2} slidesToShow={5}>
          <div className="sharedCarousel">
            <img src={wesellam} className="imgcaro" />
          </div>
          <div className="sharedCarousel">
            <img src={zendus} className="imgcaro" />
          </div>
          <div className="sharedCarousel">
            <img src={basepoint} className="imgcaro" />
          </div>
          <div className="sharedCarousel">
            <img src={winyline} className="imgcaro" />
          </div>
          <div className="sharedCarousel">
            <img src={talentsquare} className="imgcaro" />
          </div>
        </Slide>
      </Row>
    </Container>
  );
}

export default SharedCarousel;
