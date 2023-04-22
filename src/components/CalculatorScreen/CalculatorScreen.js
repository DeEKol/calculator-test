import React from 'react';
import styled from "styled-components";

const CalculatorScreen = ({counts}) => {
  return (
    <CalculatorScreenSC>
      <CalculatorNumberSC>
        {counts}
      </CalculatorNumberSC>
    </CalculatorScreenSC>
  );
};

const CalculatorScreenSC = styled("div")`
  height: 210px;
  
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  
  padding-bottom: 30px;
`

const CalculatorNumberSC = styled("div")`
  font-weight: 400;
  font-size: 70px;
  
  color: orange;

  word-break: break-all;
`

export default CalculatorScreen;