import {useEffect} from "react";

export const useCalculatorKeyboard = ({counts, setCounts, result, setResult}) => {
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
  }, [counts, result]);

  return {refreshOperator, clickPercent, clickNumber, clickOperator, clickDot, clickEquals};
}