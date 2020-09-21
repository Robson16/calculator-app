import React, { useState, useEffect } from "react";

import Button from "../Button";
import Display from "../Display";

import "./styles.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState("");
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [operator, setOperator] = useState("");

  // Teste - apagar depois
  useEffect(() => {
    console.log("Display: " + displayValue);
    console.log("First Operand: " + firstOperand);
    console.log("Waiting Second: " + waitingForSecondOperand);
    console.log("Operator: " + operator);
    console.log("------------------------");
  }, [displayValue, firstOperand, waitingForSecondOperand, operator]);

  function calculate(
    firstOperand: number,
    secondOperand: number,
    operator: string
  ) {
    if (operator === "+") {
      return firstOperand + secondOperand;
    }
    if (operator === "-") {
      return firstOperand - secondOperand;
    }
    if (operator === "x") {
      return firstOperand * secondOperand;
    }
    if (operator === "/") {
      return firstOperand / secondOperand;
    }

    return secondOperand;
  }

  function handleClear() {
    if (operator && waitingForSecondOperand) {
      setOperator("");
      setWaitingForSecondOperand(false);
      setDisplayValue(firstOperand);
    } else {
      setDisplayValue("0");
    }
  }

  function handleClearAll() {
    setDisplayValue("0");
    setFirstOperand("");
    setWaitingForSecondOperand(false);
    setOperator("");
  }

  function handleOperation(nextOperator: string) {
    // `parseFloat` converts the string contents of `displayValue`
    // to a floating-point number
    const inputValue = parseFloat(displayValue);

    // If the user whats to change the last operantor they entered
    // The value of the operator property is replaced with the new operator and the function exits
    if (operator && waitingForSecondOperand) {
      setOperator(nextOperator);
      return;
    }

    // verify that `firstOperand` is null and that the `inputValue` is not a `NaN` value
    if (firstOperand === "" && !isNaN(inputValue)) {
      // Update the firstOperand state
      setFirstOperand(String(inputValue));
    } else if (operator) {
      // If the operator state has been assigned, in a previous action, the calculate function is invoked and
      // the result is saved, than set to the display value and to the fist operand
      const result = calculate(parseFloat(firstOperand), inputValue, operator);

      // To a fixed number of decimal places,
      // combine the parseFloat function with the Number.toFixed method
      setDisplayValue(String(parseFloat(result.toFixed(7))));
      setFirstOperand(String(result));
    }

    // Set the state to mark that we expect the second operand now
    setWaitingForSecondOperand(true);
    // And set the next operator for the calculation
    setOperator(nextOperator);
  }

  function handleDecimalPoint() {
    // If digit represents a dot and If the `displayValue` state does not contain a decimal point
    if (!displayValue.includes(".")) {
      // Append the decimal point
      setDisplayValue(displayValue + ".");
    }
  }

  function handleAddDigit(digit: string) {
    if (waitingForSecondOperand === true) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      // Overwrite `displayValue` if the current value is '0' otherwise append to it
      if (displayValue === "0") {
        setDisplayValue(digit);
      } else {
        // Limit up to 8 digits long
        if (displayValue.length < 8) setDisplayValue(displayValue + digit);
      }
    }
  }

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Button className="button dark" label="C" onClick={handleClear} />
      <Button className="button dark" label="AC" onClick={handleClearAll} />
      <Button
        className="button dark"
        label="+/-"
        onClick={() => {
          alert("change the sign");
        }}
      />
      <Button
        className="button operation"
        label="/"
        onClick={() => handleOperation("/")}
      />
      <Button
        className="button"
        label="7"
        onClick={() => handleAddDigit("7")}
      />
      <Button
        className="button"
        label="8"
        onClick={() => handleAddDigit("8")}
      />
      <Button
        className="button"
        label="9"
        onClick={() => handleAddDigit("9")}
      />
      <Button
        className="button operation"
        label="x"
        onClick={() => handleOperation("x")}
      />
      <Button
        className="button"
        label="4"
        onClick={() => handleAddDigit("4")}
      />
      <Button
        className="button"
        label="5"
        onClick={() => handleAddDigit("5")}
      />
      <Button
        className="button"
        label="6"
        onClick={() => handleAddDigit("6")}
      />
      <Button
        className="button operation"
        label="-"
        onClick={() => handleOperation("-")}
      />
      <Button
        className="button"
        label="1"
        onClick={() => handleAddDigit("1")}
      />
      <Button
        className="button"
        label="2"
        onClick={() => handleAddDigit("2")}
      />
      <Button
        className="button"
        label="3"
        onClick={() => handleAddDigit("3")}
      />
      <Button
        className="button operation"
        label="+"
        onClick={() => handleOperation("+")}
      />
      <Button
        className="button double"
        label="0"
        onClick={() => handleAddDigit("0")}
      />
      <Button className="button" label="." onClick={handleDecimalPoint} />
      <Button
        className="button operation"
        label="="
        onClick={() => handleOperation("=")}
      />
    </div>
  );
}

export default Calculator;
