import React from "react";

const ImageComponent = ({ src }) => {
  return (
    <div>
      <img src={src} alt="Image" className="rounded shadow" />
    </div>
  );
};

export default ImageComponent;
