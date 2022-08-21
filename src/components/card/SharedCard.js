import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./sharedcard.css";

const SharedCard = ({
  cardTitle,
  cardDescription,
  cardSubTitle,
  cardLink,
  a,
  b,
  c,
}) => {
  return (
    <Card className="maincard">
      <Card.Body>
        <Card.Title className="cardtitle">{cardTitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {cardSubTitle}
        </Card.Subtitle>
        <Card.Text>{cardDescription}</Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <span className="checkmark">&#10004;</span>
            {a}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="checkmark">&#10004;</span>
            {b}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="checkmark">&#10004;</span>
            {c}
          </ListGroup.Item>
        </ListGroup>
        <Card.Link href="#">{cardLink}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default SharedCard;
