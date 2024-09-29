import styled from "styled-components";

export const TextRegular = styled.text`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  font-family: "Ubuntu regular";
  pointer-events: none;
  text-align: ${(props) => props.align};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
`;
