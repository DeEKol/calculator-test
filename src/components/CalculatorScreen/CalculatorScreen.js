import React from 'react';
import styled from "styled-components";

const CalculatorScreen = ({counts}) => {
  return (
    <CalculatorNumberSC>
      {counts}
    </CalculatorNumberSC>
  );
};

const CalculatorNumberSC = styled("div")`
  color: orange;
`

export default CalculatorScreen;