import styled from "styled-components";
import { TextMedium } from "./TextMedium";
import telegr from "../assets/telegram1.svg";

const ButtonStyle = styled.a`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height}px;
  max-width: ${(props) => props.maXwidth}px;
  margin: ${(props) => props.margin};
  background: #1d1d1d;
`;
const Img = styled.img`
  margin: 0px;
`;

export const Button = ({ width, margin, maXwidth, height }) => {
  return (
    <ButtonStyle
      width={width}
      margin={margin}
      maXwidth={maXwidth}
      height={height}
      href="https://t.me/tenalponi"
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Img src={telegr} />
        <TextMedium color={"white"} margin={"10px"}>
          Связаться со мной
        </TextMedium>
      </div>
    </ButtonStyle>
  );
};
