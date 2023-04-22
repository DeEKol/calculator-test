import React, {useEffect} from 'react';
import styled from "styled-components";
import DeleteIcon from "../../../assets/icons/DeleteIcon/DeleteIcon";
import {useCalculatorKeyboard} from "./useCalculatorKeyboard";
import {CalculatorKeyboardStyles} from "./CalculatorKeyboard.styles";

const CalculatorKeyboard = ({counts, setCounts, result, setResult}) => {
  const {refreshOperator, clickPercent, clickNumber, clickOperator, clickDot, clickEquals} = useCalculatorKeyboard({counts, setCounts, result, setResult});
  return (
    <ButtonsBlockSC>
      <ButtonsLineSC>
        <ButtonSC onClick={() => {setCounts("0"); setResult("0")}}>AC</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState => refreshOperator(prevState)))}>+/-</ButtonSC>
        <ButtonSC onClick={() => clickPercent()}>%</ButtonSC>
        <ButtonSC onClick={() => setCounts("0")}><DeleteIcon /></ButtonSC>
      </ButtonsLineSC>
      <ButtonsLineSC>
        <ButtonSC onClick={() => clickNumber("7")}>7</ButtonSC>
        <ButtonSC onClick={() => clickNumber("8")}>8</ButtonSC>
        <ButtonSC onClick={() => clickNumber("9")}>9</ButtonSC>
        <ButtonSC onClick={() => clickOperator("/")}>÷</ButtonSC>
      </ButtonsLineSC>
      <ButtonsLineSC>
        <ButtonSC onClick={() => clickNumber("4")}>4</ButtonSC>
        <ButtonSC onClick={() => clickNumber("5")}>5</ButtonSC>
        <ButtonSC onClick={() => clickNumber("6")}>6</ButtonSC>
        <ButtonSC onClick={() => clickOperator("*")}>×</ButtonSC>
      </ButtonsLineSC>
      <ButtonsLineSC>
        <ButtonSC onClick={() => clickNumber("1")}>1</ButtonSC>
        <ButtonSC onClick={() => clickNumber("2")}>2</ButtonSC>
        <ButtonSC onClick={() => clickNumber("3")}>3</ButtonSC>
        <ButtonSC onClick={() => clickOperator("-")}>–</ButtonSC>
      </ButtonsLineSC>
      <ButtonsLineSC>
        <ButtonSC onClick={() => clickDot()}>,</ButtonSC>
        <ButtonSC onClick={() => clickNumber("0")}>0</ButtonSC>
        <ButtonSC onClick={() => clickEquals()}>=</ButtonSC>
        <ButtonSC onClick={() => clickOperator("+")}>+</ButtonSC>
      </ButtonsLineSC>
    </ButtonsBlockSC>
  );
};

const {ButtonsBlockSC, ButtonsLineSC, ButtonSC} = CalculatorKeyboardStyles();

export default CalculatorKeyboard;