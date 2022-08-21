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
import SharedCard2 from "../../components/card/SharedCard2";
import ListGroup from "react-bootstrap/ListGroup";
import app14 from "../../assets/app14.jpg";
import app12 from "../../assets/app12.jpg";
import app13 from "../../assets/app13.jpg";

import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
  RiNumber6,
} from "react-icons/ri";
import Footer from "../../components/footer/Footer";
import Process2 from "../../components/process/Process2";
import SharedCarousel2 from "../../components/carousel/SharedCarousel2";
import "../../components/Facts/facts.css";
import app10 from "../../assets/app10.jpg";
import ImageProcessor from "../../components/imageprocessor/ImageProcessor";

const Web = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="spacing">
          <Col>
            <p className="heading">Bespoke Web Development.</p>
            <p className="heading-small">
              Bespoke, user-focused and industry specific
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
            <ImageProcessor label={app14} style="imgstyle" />
          </Col>
        </Row>
        <SharedCarousel />
        <Row className="spacing">
          <p className="heading-small">
            Leading Web Development Company Let Us Grow Your Business.
          </p>
          <p className="bodytext">
            Alppoint is an premier web development and custom software
            development company that offers end-to-end development of enterprise
            software, uniquely tailored to your industry. We build user-friendly
            web apps that get noticed. Our 10 years of engineering experience,
            along with over 30 tech professionals, allows us to build you an
            expertly crafted custom web app.<br></br>
            <br></br> As leaders in the website development space, we believe
            that great software is the perfect combination of artistry,
            engineering, and people, and that is why we commit to a totally
            hands-on, high-touch approach to development. We develop progressive
            web apps that have helped our clients to start, run & grow
            world-class businesses. Let us do the same for you.
          </p>
        </Row>
        <Row className="spacing">
          <p className="heading-small">Our Web Development Services</p>

          <Col className="text-center" sm={6}>
            <RiNumber1 className="imgfact" />
            <p className="facttext">We Design Progress Web Apps</p>
            <p className="bodytext">
              Our design experts research, design, plan and architect beautiful
              UI/UX blueprints for world-class web applications.
            </p>
          </Col>
          <Col className="text-center" sm={6}>
            <RiNumber2 className="imgfact" />
            <p className="facttext">We Develop Progress Web Apps</p>
            <p className="bodytext">
              Our expert software engineers are ready to build, code and develop
              the frontend and backend of your scalable web apps.
            </p>
          </Col>
        </Row>
        <Row className="spacing">
          <Col className="text-center" sm={6}>
            <RiNumber3 className="imgfact" />
            <p className="facttext">We Deploy Progressive Web Apps</p>
            <p className="bodytext">
              Quality assurance (QA) on your web app ensures your software is
              running optimally via implementation, deploy-testing and
              reliability tools.
            </p>
          </Col>
          <Col className="text-center" sm={6}>
            <RiNumber4 className="imgfact" />
            <p className="facttext">We Run Progressive Web Apps</p>
            <p className="bodytext">
              Once your app has launched we host, manage, scale, support,
              optimise and continuously improve your web application..
            </p>
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

        <Row className="spacing">
          <p className="heading">
            Why Choose Alppoint For Your Web Development?
          </p>
          <Col sm={4}>
            <SharedCard2
              cardTitle="Global Experience"
              cardDescription="With 10 years experience, Alppoint are global leaders in website development. We boast a brilliant team of expert software designers, developers and engineers, and are proud of the awards we have to show for it."
              link="/contact"
            />
          </Col>
          <Col sm={4}>
            <SharedCard2
              cardTitle="Passionate Team"
              cardDescription="At Alppoint, we are proud of the work we do. We love all things software and web development and believe that our genuine passion is clear in our work. We always strive for greatness and thus, spend time polishing every detail of your web app until it is flawless and inline with our standards of perfection."
              link="/contact"
            />
          </Col>
          <Col sm={4}>
            <SharedCard2
              cardTitle="User-focused"
              cardDescription="We know that your application is a reflection of your business, and that your users should be at the forefront of the development process. We focus on your customer's needs first, and this ensures that what we create works. This has warranted a 100% success rate with our clients.
"
              link="/contact"
            />
          </Col>
        </Row>
        <Process2 />
        <SharedCarousel2 />
        <Row className="spacing">
          <Col>
            {" "}
            <SharedCard2
              cardTitle="From Design To Code To Deployment, Easily."
              cardDescription="If you are looking to hire a team for your website development, you have come to the right place. We strive for 100% client satisfaction along with integrity and transparency. With sprint velocity optimisation guaranteed through planning, design, code, test, deploy and run. We will change out any team member on request."
            />
          </Col>
          <Col>
            {" "}
            <ImageProcessor label={app12} style="imgstyle" />
          </Col>
        </Row>
        <Row className="spacing">
          <Col>
            A<ImageProcessor label={app13} style="imgstyle" />
          </Col>
          <Col>
            <SharedCard2
              cardTitle="Ready To Get Started With Your Website Development?"
              cardDescription="No matter where you are in the planning process, our product experts are happy to help you. Our expert website development consultants will discuss your plans and challenges, evaluate your existing web or mobile apps or even make some initial recommendations. We will work with you to ensure your 100% satisfaction."
            />
          </Col>
        </Row>
        <Row className="spacing">
          <Col sm={6}>
            <p className="heading-small">What We Will Do For Your Business</p>
            <p className="bodytext">
              Alppoint will walk the custom software development journey with
              you. We pride ourselves on our expertise in developing
              applications for any industry. We are here to become your expert
              partner in solving complex problems.
            </p>
          </Col>
          <Col sm={6}>
            <ListGroup>
              <ListGroup.Item>Streamline internal processes.</ListGroup.Item>
              <ListGroup.Item>
                Digitise aspects of your business, or your business as a whole.
              </ListGroup.Item>
              <ListGroup.Item>
                Build your custom software development.
              </ListGroup.Item>
              <ListGroup.Item>
                Rebuild and rescue your existing developments.
              </ListGroup.Item>
              <ListGroup.Item>Automate manual systems.</ListGroup.Item>
              <ListGroup.Item>Maintain and scale your software.</ListGroup.Item>
              <ListGroup.Item>Connect employees with software.</ListGroup.Item>
            </ListGroup>
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

export default Web;
