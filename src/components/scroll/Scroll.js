import React, { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useLocation } from "react-router-dom";

const Scroll = (props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <>{props.children}</>;
};

export default Scroll;
