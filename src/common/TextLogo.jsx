import styled from "styled-components";

export const TextLogo = styled.text`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  font-family: "Shante regular";
  pointer-events: none;
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  white-space: nowrap;
`;
