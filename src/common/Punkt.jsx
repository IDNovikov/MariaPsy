import styled from "styled-components";

import { TextRegular } from "./TextRegular";

const Style = styled.div`
  display: flex;
  justify-content: start;
  align-items: ${(props) => props.align};
  width: 100%;
  min-height: ${(props) => props.minHeight}px;
  height: ${(props) => props.height};
  max-width: ${(props) => props.maXwidth}px;
  margin: 7px 0;
  background: ${(props) => props.color};
  border-radius: 8px;
`;
const Img = styled.img`
  margin: 0 16px;
`;

export const Punkt = ({
  width,
  margin,
  maXwidth,
  height,
  children,
  src,
  color,
  align,
  fontSize,
  minHeight,
}) => {
  return (
    <Style
      width={width}
      margin={margin}
      maXwidth={maXwidth}
      height={height}
      color={color}
      align={align}
      minHeight={minHeight}
    >
      <Img src={src} />
      <TextRegular fontSize={fontSize} color={"Black"} align={"left"}>
        {children}
      </TextRegular>
    </Style>
  );
};
