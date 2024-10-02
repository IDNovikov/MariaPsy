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
  background: #7ab7ff;
  border-radius: 8px;
  opacity: 1;
`;
const Img = styled.img`
  margin: 0px;
`;

export const OrangeButton = ({ width, margin, maXwidth, height, fontSize }) => {
  return (
    <ButtonStyle
      width={width}
      margin={margin}
      maXwidth={maXwidth}
      height={height}
      href="https://t.me/tenalponi"
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextMedium fontSize={fontSize} color={"white"} margin={"10px"}>
          <i>
            <b>Записаться</b>
          </i>
        </TextMedium>
      </div>
    </ButtonStyle>
  );
};
