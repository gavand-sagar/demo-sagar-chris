import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./sharedcard.css";

const SharedCard4 = ({
  cardTitle,
  cardDescription,
  cardSubTitle,
  cardLink,
  a,
  b,
  c,
}) => {
  return (
    <Card className="maincard3 ">
      <Card.Body>
        <Card.Title
          className="cardtitlex"
          style={{ color: "#fb6600", "font-size": "200%" }}
        >
          {cardTitle}
        </Card.Title>

        <Card.Text>{cardDescription}</Card.Text>

        <Card.Link href="#">{cardLink}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default SharedCard4;
