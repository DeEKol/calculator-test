import React from 'react';
import styled from "styled-components";
import {CalculatorScreenStyles} from "./CalculatorScreen.styles";

const CalculatorScreen = ({counts}) => {
  return (
    <CalculatorScreenSC>
      <CalculatorNumberSC>
        {counts}
      </CalculatorNumberSC>
    </CalculatorScreenSC>
  );
};

const {CalculatorScreenSC, CalculatorNumberSC} = CalculatorScreenStyles();

export default CalculatorScreen;