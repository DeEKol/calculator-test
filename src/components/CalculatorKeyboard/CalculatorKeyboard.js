import React, {useState} from 'react';
import styled from "styled-components";

const CalculatorKeyboard = ({setCounts}) => {
  return (
    <ButtonsBlockSC>
      <ButtonsLineSC>
        <ButtonSC>AC</ButtonSC>
        <ButtonSC>+/-</ButtonSC>
        <ButtonSC>%</ButtonSC>
        <ButtonSC>del</ButtonSC>
      </ButtonsLineSC>
      <ButtonsLineSC>
        <ButtonSC onClick={() => setCounts((prevState) => prevState + "7")}>7</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => prevState + "8")}>8</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => prevState + "9")}>9</ButtonSC>
        <ButtonSC>/</ButtonSC>
      </ButtonsLineSC>
      <ButtonsLineSC>
        <ButtonSC onClick={() => setCounts((prevState) => prevState + "4")}>4</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => prevState + "5")}>5</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => prevState + "6")}>6</ButtonSC>
        <ButtonSC>*</ButtonSC>
      </ButtonsLineSC>
      <ButtonsLineSC>
        <ButtonSC onClick={() => setCounts((prevState) => prevState + "1")}>1</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => prevState + "2")}>2</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => prevState + "3")}>3</ButtonSC>
        <ButtonSC>-</ButtonSC>
      </ButtonsLineSC>
      <ButtonsLineSC>
        <ButtonSC>,</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => prevState + "0")}>0</ButtonSC>
        <ButtonSC>=</ButtonSC>
        <ButtonSC>+</ButtonSC>
      </ButtonsLineSC>
    </ButtonsBlockSC>
  );
};

const ButtonsBlockSC = styled("div")`
  display: flex;
  flex-direction: column;
`

const ButtonsLineSC = styled("div")`
  display: flex;
  justify-content: space-between;

  margin-bottom: 15px;
`

const ButtonSC = styled("button")`
  height: 40px;
  width: 40px;
  color: gray;
  border-radius: 50%;
  border: none;

  :last-child {
    background-color: orange;
    color: white;
  }
`

export default CalculatorKeyboard;