import React from "react";

const OperatorButton = ({operator}) => {
  return (
    <>
      <button className="operator">{operator}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};
export default OperatorButton;