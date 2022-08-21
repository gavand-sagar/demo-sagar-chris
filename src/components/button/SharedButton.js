import React from "react";
import { Button } from "react-bootstrap";
import "./sharedbutton.css";
import { useNavigate } from "react-router-dom";

const SharedButton = ({ label, style, link, ...rest }) => {
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate(link);
  };

  return (
    <Button {...rest} className={style} onClick={navigateToPage}>
      {label}
    </Button>
  );
};

export default SharedButton;
