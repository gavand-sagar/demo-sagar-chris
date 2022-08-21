import React from "react";
import bg from "../../assets/bg.jpg";
import Row from "react-bootstrap/Row";
import "./body.css";
import SharedButton from "../button/SharedButton";

const Body = () => {
  return (
    <>
      <Row>
        <div style={{ backgroundImage: `url(${bg})` }} className="mainbody">
          <div>
            <div className="">
              <p className="h1 maintext  text-center">
                Digital firm, Focused On Your
                <span style={{ color: "#FB6600" }}>Success</span>
              </p>
            </div>

            <p className="bodytext text-center main-text">
              Alppoint is a custom software development firm, which helps
              companies at any stage of the product software development cycle:
              from R&D and building MVP from scratch, to scaling, UX analyzing,
              improving, management and consultancy.
            </p>

            <div className="text-center">
              <SharedButton
                label="BOOK A CALL >"
                style="buttonstyle"
                link="contact"
              />
              <SharedButton
                label="START A PROJECT >"
                style="buttonstyle-head"
                link="project"
              />
            </div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default Body;
