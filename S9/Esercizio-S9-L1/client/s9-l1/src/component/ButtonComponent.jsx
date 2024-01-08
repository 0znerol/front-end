import React from "react";

const ButtonComponent = ({ text, onClick }) => {
  return (
    <button
      className="btn border border-success text-success m-1 shadow"
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
