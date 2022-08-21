import React from "react";

const ImageProcessor = ({ label, style }) => {
  return <img src={label} className={style} />;
};

export default ImageProcessor;
