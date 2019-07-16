import React, { useState } from "react";
import "./numbers.scss";
//import any components needed
import NumberButton  from './NumberButton'
//Import your array data to from the provided data file
import { numbers } from '../../../data.js'


const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [arrOfNumbers, setNumberValue] = useState(numbers)
  console.log("numbers" + arrOfNumbers)
  return (
    <div className = "number-container">
      {
        arrOfNumbers.map((item, index) =>(
            <NumberButton className="number" number={item} key={{index}} />
        ))}
    </div>
  );
};

export default Numbers;