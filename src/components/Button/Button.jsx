// import React from "react";

const Button = ({ title, onClick, className }) => {
  return (
    <div className={className}>
      <button onClick={onClick}>{title}</button>
    </div>
  );
};

export default Button;
