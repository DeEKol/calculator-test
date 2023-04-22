import React from 'react';
import styled from "styled-components";

const CalculatorKeyboard = ({counts, setCounts, result, setResult}) => {

  let cutFirstZero = (string) => {
    return string.startsWith('0') ? string.slice(1) : string;
  };

  const cutLastOperator = (string) => {
    if (string.slice(-1) === "/" || string.slice(-1) === "*" || string.slice(-1) === "-" || string.slice(-1) === "+") {
      return string.slice(0, -1);
    }
    return string;
  }

  const cutExcess = (string) => {
    const newString = cutFirstZero(string);

    return cutLastOperator(newString);
  }

  return (
    <ButtonsBlockSC>
      <ButtonsLineSC>
        <ButtonSC onClick={() => {setCounts("0"); setResult("0")}}>AC</ButtonSC>
        <ButtonSC>+/-</ButtonSC>
        <ButtonSC>%</ButtonSC>
        <ButtonSC onClick={() => setCounts("0")}>del</ButtonSC>
      </ButtonsLineSC>
      <ButtonsLineSC>
        <ButtonSC onClick={() => setCounts((prevState) => cutFirstZero(prevState) + "7")}>7</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => cutFirstZero(prevState) + "8")}>8</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => cutFirstZero(prevState) + "9")}>9</ButtonSC>
        <ButtonSC onClick={() => {setResult((prevState) => prevState + counts + "/"); setCounts("0")}}>/</ButtonSC>
      </ButtonsLineSC>
      <ButtonsLineSC>
        <ButtonSC onClick={() => setCounts((prevState) => cutFirstZero(prevState) + "4")}>4</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => cutFirstZero(prevState) + "5")}>5</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => cutFirstZero(prevState) + "6")}>6</ButtonSC>
        <ButtonSC onClick={() => {setResult((prevState) => prevState + counts + "*"); setCounts("0")}}>*</ButtonSC>
      </ButtonsLineSC>
      <ButtonsLineSC>
        <ButtonSC onClick={() => setCounts((prevState) => cutFirstZero(prevState) + "1")}>1</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => cutFirstZero(prevState) + "2")}>2</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => cutFirstZero(prevState) + "3")}>3</ButtonSC>
        <ButtonSC onClick={() => {setResult((prevState) => prevState + counts + "-"); setCounts("0")}}>-</ButtonSC>
      </ButtonsLineSC>
      <ButtonsLineSC>
        <ButtonSC onClick={() => setCounts((prevState) => prevState + ",")}>,</ButtonSC>
        <ButtonSC onClick={() => setCounts((prevState) => cutFirstZero(prevState) + "0")}>0</ButtonSC>
        <ButtonSC onClick={() => {setCounts(eval(cutExcess(result + counts)) + ""); setResult("0")}}>=</ButtonSC>
        <ButtonSC onClick={() => {setResult((prevState) => prevState + counts + "+"); setCounts("0")}}>+</ButtonSC>
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