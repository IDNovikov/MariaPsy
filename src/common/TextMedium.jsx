import styled from "styled-components";

export const TextMedium = styled.text`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  font-family: "Ubuntu medium";
  pointer-events: none;
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
`;
