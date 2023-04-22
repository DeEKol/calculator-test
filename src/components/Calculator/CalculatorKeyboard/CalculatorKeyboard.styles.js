import styled from "styled-components";

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

export const CalculatorKeyboardStyles = () => ({ButtonsBlockSC, ButtonsLineSC, ButtonSC})