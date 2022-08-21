import React from "react";
import { Button } from "react-bootstrap";
import "./sharedbutton.css";

const SharedButton2 = ({ labelq, styleq, ...rest }) => {
  return (
    <Button {...rest} className={styleq} type="submit">
      {labelq}
    </Button>
  );
};

export default SharedButton2;
