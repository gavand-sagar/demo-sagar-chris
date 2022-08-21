import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./sharedcard.css";
import { useNavigate } from "react-router-dom";

const SharedCard3 = ({ cardTitle, a, b, c, d, e, link }) => {
  const navigateToPage = () => {
    navigate(link);
  };
  const navigate = useNavigate();
  return (
    <Card className="maincard">
      <Card.Body>
        <Card.Title className="cardtitle3">{cardTitle}</Card.Title>

        <ListGroup className="listcolor">
          <ListGroup.Item action onClick={navigateToPage} className="listcolor">
            {a}
          </ListGroup.Item>
          <ListGroup.Item action href="#link2" className="listcolor">
            {b}
          </ListGroup.Item>
          <ListGroup.Item action href="#link2" className="listcolor">
            {c}
          </ListGroup.Item>
          <ListGroup.Item action href="#link2" className="listcolor">
            {d}
          </ListGroup.Item>
          <ListGroup.Item action href="#link2" className="listcolor">
            {e}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default SharedCard3;
