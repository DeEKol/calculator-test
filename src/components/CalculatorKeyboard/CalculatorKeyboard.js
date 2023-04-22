import React, {useEffect} from 'react';
import styled from "styled-components";
import DeleteIcon from "../../assets/icons/DeleteIcon/DeleteIcon";

const CalculatorKeyboard = ({counts, setCounts, result, setResult}) => {

  const cutFirstZero = (string) => {
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

  const refreshOperator = (string) => {
    if (string.startsWith("-") || string.startsWith("0")) {
      return string.slice(1);
    }
    return "-" + string;
  }

  const clickNumber = (number) => {
    setCounts((prevState) => cutFirstZero(prevState) + number)
  }

  const clickOperator = (operator) => {
    setResult((prevState) => prevState + counts + operator)
    setCounts("0")
  }

  const clickPercent = () => {
    setCounts((prevState) => prevState !== "0" ? (eval(cutExcess(prevState + "/ 100")) + "") : "0")
    setResult("0")
  }

  const clickEquals = () => {
    setCounts(eval(cutExcess(result + counts)) + "")
    setResult("0")
  }

  const clickDot = () => {
    setCounts((prevState) => prevState.indexOf(".") == -1 ? prevState + "." : prevState)
  }

  useEffect(() => {
    const onKeypress = e => {
      switch(e.key) {
        case "1": clickNumber("1");
          break;
        case "2": clickNumber("2");
          break;
        case "3": clickNumber("3");
          break;
        case "4": clickNumber("4");
          break;
        case "5": clickNumber("5");
          break;
        case "6": clickNumber("6");
          break;
        case "7": clickNumber("7");
          break;
        case "8": clickNumber("8");
          break;
        case "9": clickNumber("9");
          break;
        case "0": clickNumber("0");
          break;
        case "/": clickOperator("/");
          break;
        case "*": clickOperator("*");
          break;
        case "-": clickOperator("-");
          break;
        case "+": clickOperator("+")
          break;
        case "%": clickPercent()
          break;
        case "=": clickEquals()
          break;
        case "Enter": clickEquals()
          break;
        case ".": clickDot()
          break;
        case ",": clickDot()
          break;
      }
    }

    document.addEventListener('keypress', onKeypress);

    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [counts]);

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

const ButtonsBlockSC = styled("div")`
  display: flex;
  flex-direction: column;
`

const ButtonsLineSC = styled("div")`
  display: flex;
  justify-content: space-between;

  margin-bottom: 11px;
`

const ButtonSC = styled("button")`
  height: 40px;
  width: 40px;
  color: gray;
  background-color: lightgray;
  border: none;
  border-radius: 50%;

  box-shadow: 1px 1px 2px gray, -1px -1px 2px white;

  :last-child {
    background-color: orange;
    color: white;
  }

  :hover {
    background-color: #e8e8e8;
  }

  :active {
    box-shadow: 1px 1px 2px white, -1px -1px 2px gray;
  }
  
  transition: background-color 0.5s, box-shadow 0.2s;
`

export default CalculatorKeyboard;