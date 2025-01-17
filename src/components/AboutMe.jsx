import React, { useRef } from "react";
import styled from "styled-components";
import { Window } from "../common/Window";
import { TextMedium } from "../common/TextMedium";
import { TextRegular } from "../common/TextRegular";
import { useScroll } from "../ScrollContext";

export const AboutMe = () => {
  const windowWidth = useRef(window.innerWidth);
  const { section3Ref } = useScroll();
  return (
    <Window
      margin={"50px auto 20px"}
      padding={"20px 16px 0px 16px"}
      ref={section3Ref}
    >
      <TextMedium fontSize={20} align={"center"}>
        О себе
      </TextMedium>
      <TextRegular
        lineHeight={"30px"}
        fontSize={18}
        margin={"20px 16px "}
        align={"justify"}
      >
        Свой путь я выбрала еще в школе и ни разу не сомневалась в его
        правильности. Вникать, слушать, слышать и помогать - то, что я умею
        делать и что приносит мне удовольствие. Сейчас я - дипломированный
        гештальт-терапевт, но свой путь я начала 2017 году на факультете
        психологии СПБГУ, а в 2023 закончила его же в степени магистра по
        направлению "Психологическое здоровье". Сейчас обучаюсь там же в
        аспирантуре. Во время учебы ездила на различные конференции и повышения
        квалификации, в том числе в Сочи в университет "Сириус". Я убеждена, что
        в такой непростой сфере нужно постоянно совершенствовать свои навыки,
        поэтому сейчас ещё обучаюсь основам психодрамы :)
      </TextRegular>
    </Window>
  );
};
