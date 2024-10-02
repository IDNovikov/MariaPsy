import styled from "styled-components";
import { TextMedium } from "../common/TextMedium";
import dot from "../assets/VectorDot.svg";
import b17 from "../assets/b17.png";
import telegr from "../assets/telegram1.svg";
import inst from "../assets/inst.png";
import { OrangeButton } from "../common/OrangeButton";
import { useScroll } from "../ScrollContext";
const Menu = styled.div`
  max-width: 65%;
  min-width: 280px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.95);
  overflow: auto;
  margin-left: auto;
  padding: 0px 0px;
  @media (max-width: 500px) {
    min-width: 100%;
    /* padding: 50px 40px; */
  }
  & div:not(:last-child) {
    margin-top: 40px;
  }
`;
const Item = styled.div`
  all: unset;
  pointer-events: all;
  margin: 50px 0 0 0px;
  cursor: pointer;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: start;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
`;
const Block = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-between;
`;
const Link = styled.a`
  all: unset;
  pointer-events: all;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 13px;
  background-image: url(${(props) => props.imgs});
  background-position: center;
  background-size: cover;
  background-color: white;
  margin: 40px 0;
`;

export const MobileMenu = ({ handleClose }) => {
  const { scrollToSection, section1Ref, section2Ref, section3Ref } =
    useScroll();
  return (
    <Menu>
      <Item
        onClick={() => {
          scrollToSection(section1Ref), handleClose();
        }}
      >
        <Img src={dot} />
        <TextMedium margin={"auto 10px"} fontSize={28}>
          С чем я работаю
        </TextMedium>
      </Item>
      <Item
        onClick={() => {
          scrollToSection(section2Ref), handleClose();
        }}
      >
        <Img src={dot} />
        <TextMedium margin={"auto 10px"} fontSize={28}>
          Мое образование
        </TextMedium>
      </Item>
      <Item
        onClick={() => {
          scrollToSection(section3Ref), handleClose();
        }}
      >
        <Img src={dot} />
        <TextMedium margin={"auto 10px"} fontSize={28}>
          О себе
        </TextMedium>
      </Item>

      <OrangeButton
        fontSize={19}
        maXwidth={230}
        height={55}
        margin={"50px 0"}
      ></OrangeButton>
      <Block>
        <Link href="https://t.me/tenalponi" imgs={inst} />
        <Link href="https://www.b17.ru/lykova28/" imgs={b17} />
        <Link href="https://t.me/tenalponi" imgs={telegr} />
      </Block>
    </Menu>
  );
};
