import React, {useState} from 'react';
import styled from 'styled-components';
import CalculatorScreen from "./CalculatorScreen/CalculatorScreen";
import CalculatorKeyboard from "./CalculatorKeyboard/CalculatorKeyboard";

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

const ContainerSC = styled("section")`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const WrapperSC = styled("div")`
  width: 100%;
  max-width: 300px;

  padding: 20px;
  border-radius: 30px;

  background-color: lightgray;
  
`;

const CalculatorSC = styled("div")`
`

export default Calculator;