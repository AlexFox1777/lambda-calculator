import React, { useState } from "react";

//import any components needed
import OperatorButton  from "./OperatorButton"
//Import your array data to from the provided data file
import { operators } from "../../../data";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [arrOfOperators, setOperatorValue] = useState(operators)
  console.log("operators" + arrOfOperators)
  return (
    <div>
      {
        arrOfOperators.map((item, index)=>(
            <OperatorButton operator={item.char} key={index} />
        ))}
    </div>
  );
};
export default Operators;