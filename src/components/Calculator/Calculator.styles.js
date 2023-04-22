import styled from "styled-components";

const ContainerSC = styled("section")`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const WrapperSC = styled("div")`
  width: 100%;
  max-width: 285px;

  padding: 35px 23px;
  border-radius: 30px;

  background-color: #e5e5e5;

`;

const CalculatorSC = styled("div")`
`

export const CalculatorStyles = () => ({ContainerSC, WrapperSC, CalculatorSC});