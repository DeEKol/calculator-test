import React, {useState} from 'react';
import styled from 'styled-components';
import CalculatorScreen from "./CalculatorScreen/CalculatorScreen";
import CalculatorKeyboard from "./CalculatorKeyboard/CalculatorKeyboard";
import {CalculatorStyles} from "./Calculator.styles";

const Calculator = () => {
  const [counts, setCounts] = useState("0");
  const [result, setResult] = useState("0");

  return (
    <ContainerSC>
      <WrapperSC>
        <CalculatorSC>
          <CalculatorScreen counts={counts} />
          <CalculatorKeyboard counts={counts} setCounts={setCounts} result={result} setResult={setResult} />
        </CalculatorSC>
      </WrapperSC>
    </ContainerSC>
  );
};

const {ContainerSC, WrapperSC, CalculatorSC} = CalculatorStyles()


export default Calculator;