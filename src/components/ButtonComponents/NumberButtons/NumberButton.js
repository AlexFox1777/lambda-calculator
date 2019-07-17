import React, { useState } from "react";

const NumberButton = ({number, incrementCount}) => {

  return (
    <>
      <button className={`num${incrementCount} number`} >{number}</button>
    </>
  );
};
export default NumberButton;