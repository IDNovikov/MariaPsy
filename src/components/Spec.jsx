import React, { useRef } from "react";
import styled from "styled-components";
import { Window } from "../common/Window";
import { TextMedium } from "../common/TextMedium";
import { TextRegular } from "../common/TextRegular";
import { Punkt } from "../common/Punkt";

const Img = styled.img`
  position: absolute;
  z-index: 8;
  top: 30px;
  left: 50%;
  width: 150px;
  transform: translateX(-50%);
`;
const Name = styled.img`
  width: 200px;
`;

export const Spec = () => {
  const windowWidth = useRef(window.innerWidth);

  return (
    <Window margin={"30px 0 "} padding={"0px 16px"}>
      <TextMedium fontSize={20} align={"center"} margin={"20px 0 "}>
        С чем я работаю
      </TextMedium>
      <Punkt children={"Низкая самооценка"} />
      <Punkt children={"Нет цели, не знаю зачем живу"} />
      <Punkt children={"Эмоциональная подавленность, ощущение «вакуума»"} />
      <Punkt children={"Тревога без повода"} />
      <Punkt children={"Апатия"} />
      <Punkt children={"Токсичные отношения, невозможность разрыва"} />
      <Punkt children={"Нездоровая любовь"} />
      <Punkt children={"Проблемы в отношениях с партнером"} />
      <Punkt children={"Поиск ресурса"} />
      <Punkt children={"Детско-родительские отношения"} />
    </Window>
  );
};
