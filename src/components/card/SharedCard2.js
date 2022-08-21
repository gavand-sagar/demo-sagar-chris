import React from "react";
import Card from "react-bootstrap/Card";
import "./sharedcard.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const SharedCard2 = ({ cardTitle, cardDescription, cardLink }) => {
  const navigate = useNavigate();

  const handlepage = () => {
    navigate(cardLink);
  };
  return (
    <Card className="maincard2 ">
      <Card.Body>
        <Card.Title className="cardtitle2">{cardTitle}</Card.Title>

        <Card.Text>{cardDescription}</Card.Text>

        <Button onClick={handlepage} className="buttonstyle">
          Learn More >
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SharedCard2;
