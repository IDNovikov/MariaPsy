import React, { useRef } from "react";
import styled from "styled-components";
import { Window } from "../common/Window";
import { TextMedium } from "../common/TextMedium";
import { TextRegular } from "../common/TextRegular";
import { Punkt } from "../common/Punkt";
import { BlackWindow } from "../common/BlackWindow";
import sub from "../assets/Icon.svg";
import SliderComp from "../common/SliderComp";
import { useScroll } from "../ScrollContext";

export const Education = () => {
  const windowWidth = useRef(window.innerWidth);
  const { section2Ref } = useScroll();
  return (
    <Window
      margin={"30px auto "}
      padding={"0px 16px 100px 16px;"}
      ref={section2Ref}
    >
      <TextMedium fontSize={20} align={"center"} margin={"20px 0 "}>
        Образование
      </TextMedium>
      <Punkt
        src={sub}
        align={"start"}
        fontSize={16}
        margin={"10px 16px"}
        children={
          "Санкт-Петербургский Государственный Университет. Факультет психологи, бакалавр (2021)"
        }
      />
      <Punkt
        src={sub}
        align={"start"}
        fontSize={16}
        margin={"10px 16px"}
        children={
          "Санкт-Петербургский Государственный Университет. Факультет психологи, направление «Психическое здоровье», магистр (2023)"
        }
      />

      <Punkt
        src={sub}
        align={"start"}
        fontSize={16}
        margin={"10px 16px"}
        children={
          "Caнкт-Петербургский Государственный Университет, факультет психологии, аспирант (2027)"
        }
      />
      <Punkt
        src={sub}
        align={"start"}
        fontSize={16}
        margin={"10px 16px"}
        children={
          "Университет Сириус. Повышение квалификации по программе «Айтрекинг в нейрокогнитивных исследованиях» (2022)"
        }
      />

      <Punkt
        src={sub}
        align={"start"}
        fontSize={16}
        margin={"10px 16px"}
        children={
          "Основы психодрамы и индивидуальной психотерапии (1-я ступень 2024)"
        }
      />
      <Punkt
        src={sub}
        align={"start"}
        fontSize={16}
        margin={"10px 16px"}
        children={"ВШЭ, летняя школа «Прикладная когнитивная наука» (2023)"}
      />

      <Punkt
        src={sub}
        align={"start"}
        fontSize={16}
        margin={"10px 16px"}
        height={"auto"}
        children={"Мастерская современной психодрамы"}
      />
      <Punkt
        src={sub}
        align={"start"}
        fontSize={16}
        margin={"10px 16px"}
        height={"auto"}
        children={
          "Московский институт психологии. Квалификация «психолог-консультант» с дополнительной специализацией «гештальт-терапевт», 1170 часов (2024)"
        }
      />
      <SliderComp width={300} margin={"20px 0"} />
    </Window>
  );
};
