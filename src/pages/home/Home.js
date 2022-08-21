import React from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Body2 from "../../components/body/Body2";
import Body3 from "../../components/body/Body3";
import Footer from "../../components/footer/Footer";
import Body4 from "../../components/body/Body4";
import SharedCarousel from "../../components/carousel/SharedCarousel";
import WhyUs from "../../components/why/WhyUs";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Body />
        <Body2 />
        <Body3 />
        <WhyUs />
        <SharedCarousel />
        <Body4 />
      </Container>

      <Footer />
    </>
  );
};

export default Home;
