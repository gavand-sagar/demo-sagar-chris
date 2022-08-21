import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { RiAngularjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import {
  FaBootstrap,
  FaNodeJs,
  FaReact,
  FaPhp,
  FaPython,
  FaAws,
  FaMicrosoft,
  FaReacteurope,
} from "react-icons/fa";
import "./sharedcarousel.css";

function SharedCarousel2({ style }) {
  return (
    <Container className="spacing mb-5">
      <Row className={style}>
        <p className="text-center heading spacing">Languages We Speak</p>
        <Slide slidesToScroll={2} slidesToShow={5}>
          <div className="sharedCarousel">
            <RiAngularjsFill className="imgfact" />
          </div>
          <div className="sharedCarousel">
            <FaReact className="imgfact" />
          </div>
          <div className="sharedCarousel">
            <FaBootstrap className="imgfact" />
          </div>
          <div className="sharedCarousel">
            <FaNodeJs className="imgfact" />
          </div>
          <div className="sharedCarousel">
            <FaPhp className="imgfact" />
          </div>
          <div className="sharedCarousel">
            <FaPython className="imgfact" />
          </div>

          <div className="sharedCarousel">
            <FaAws className="imgfact" />
          </div>
          <div className="sharedCarousel">
            <SiMongodb className="imgfact" />
          </div>
          <div className="sharedCarousel">
            <FaMicrosoft className="imgfact" />
          </div>
          <div className="sharedCarousel">
            <FaReacteurope className="imgfact" />
          </div>
        </Slide>
      </Row>
    </Container>
  );
}

export default SharedCarousel2;
