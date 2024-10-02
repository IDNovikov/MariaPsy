import React, { useRef } from "react";
import styled from "styled-components";
import { Window } from "../common/Window";
import { TextMedium } from "../common/TextMedium";
import { TextRegular } from "../common/TextRegular";
import { Punkt } from "../common/Punkt";
import { BlackWindow } from "../common/BlackWindow";
import sub from "../assets/Subtract.svg";
import { useScroll } from "../ScrollContext";
const Link = styled.a`
  color: #6ab6ff;
  text-decoration: underline;
  cursor: pointer;
  pointer-events: all;
`;

export const Spec = () => {
  const windowWidth = useRef(window.innerWidth);
  const { section1Ref } = useScroll();
  return (
    <Window margin={"30px auto "} padding={"0px 16px"} ref={section1Ref}>
      <TextMedium fontSize={20} align={"center"} margin={"20px 0 "}>
        С чем я работаю
      </TextMedium>
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Низкая самооценка"}
        margin={"6px 16px"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Нет цели, не знаю зачем живу"}
        margin={"6px 16px"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Эмоциональная подавленность, ощущение «вакуума»"}
        margin={"6px 16px"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Тревога без повода"}
        margin={"6px 16px"}
      />
      <Punkt
        src={sub}
        minHeight={50}
        align={"center"}
        color={"#ECECEC"}
        children={"Апатия"}
        margin={"6px 16px"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Токсичные отношения, невозможность разрыва"}
        margin={"6px 16px"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Нездоровая любовь"}
        margin={"6px 16px"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Проблемы в отношениях с партнером"}
        margin={"6px 16px"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Поиск ресурса"}
        margin={"6px 16px"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Детско-родительские отношения"}
        margin={"6px 16px"}
      />
      <BlackWindow margin={"15px 0"}>
        <TextRegular
          color={"white"}
          align={"left"}
          fontSize={14}
          margin={"14px 14px 20px"}
        >
          Если вы не нашли нужного пункта в списке, то
          <Link href="https://t.me/tenalponi">свяжитесь со мной</Link> и я
          отвечу работаю ли с этим вопросом.
        </TextRegular>
      </BlackWindow>
    </Window>
  );
};
