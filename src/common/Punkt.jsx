import styled from "styled-components";

import sub from "../assets/Subtract.svg";
import { TextRegular } from "./TextRegular";

const Style = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  min-height: 40px;
  height: ${(props) => props.height}px;
  max-width: ${(props) => props.maXwidth}px;
  margin: 7px 0;
  background: #ececec;
  border-radius: 8px;
`;
const Img = styled.img`
  margin: 0 16px;
`;

export const Punkt = ({ width, margin, maXwidth, height, children }) => {
  return (
    <Style width={width} margin={margin} maXwidth={maXwidth} height={height}>
      <Img src={sub} />
      <TextRegular fontSize={14} color={"Black"}>
        {children}
      </TextRegular>
    </Style>
  );
};
