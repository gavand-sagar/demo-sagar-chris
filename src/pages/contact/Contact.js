import React from "react";
import Header from "../../components/header/Header";
import "./contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SharedForm from "../../components/form/SharedForm";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="spacing">
          <Col>
            <div className="heading text-center">
              We'll Get Back To You in 24 Hours
            </div>
            <div className="bodytext mt-4">
              We’d love to hear from you. Leave your details below and a
              dedicated Client Manager will be in touch soon to discuss your
              bespoke software requirements.
            </div>
          </Col>
        </Row>
        <SharedForm />
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
