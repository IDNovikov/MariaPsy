import React, { useRef } from "react";
import styled from "styled-components";
import { Window } from "../common/Window";
import { TextMedium } from "../common/TextMedium";
import { TextRegular } from "../common/TextRegular";
import { Punkt } from "../common/Punkt";
import { BlackWindow } from "../common/BlackWindow";
import sub from "../assets/Subtract.svg";

const Link = styled.a`
  color: #7ab7ff;
  text-decoration: underline;
  cursor: pointer;
  pointer-events: all;
`;

export const Spec = () => {
  const windowWidth = useRef(window.innerWidth);

  return (
    <Window margin={"30px 0 "} padding={"0px 16px"}>
      <TextMedium fontSize={20} align={"center"} margin={"20px 0 "}>
        С чем я работаю
      </TextMedium>
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Низкая самооценка"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Нет цели, не знаю зачем живу"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Эмоциональная подавленность, ощущение «вакуума»"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Тревога без повода"}
      />
      <Punkt
        src={sub}
        minHeight={50}
        align={"center"}
        color={"#ECECEC"}
        children={"Апатия"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Токсичные отношения, невозможность разрыва"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Нездоровая любовь"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Проблемы в отношениях с партнером"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Поиск ресурса"}
      />
      <Punkt
        src={sub}
        align={"center"}
        color={"#ECECEC"}
        minHeight={50}
        children={"Детско-родительские отношения"}
      />
      <BlackWindow margin={"15px 0"}>
        <TextRegular
          color={"white"}
          align={"left"}
          fontSize={14}
          margin={"14px"}
        >
          Если вы не нашли нужного пункта в списке, то{" "}
          <Link href="https://t.me/tenalponi">свяжитесь со мной</Link> и я
          отвечу работаю ли с этим вопросом.
        </TextRegular>
      </BlackWindow>
    </Window>
  );
};
