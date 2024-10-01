import React, { useRef, useState } from "react";
import styled from "styled-components";
import { TextMedium } from "../common/TextMedium";
import { TextRegular } from "../common/TextRegular";
import { BlackWindow } from "../common/BlackWindow";

const Star = styled.div`
  width: 60px;
  height: 60px;
  background-image: url("../assets/Star.svg");
`;
export const Sale = () => {
  const windowWidth = useRef(window.innerWidth);

  return (
    <BlackWindow content={"center"} direction={"row"} margin={"50px 0 20px"}>
      <Star> </Star>
      <TextMedium color={"white"} fontSize={20} align={"center"}>
        <i>50%</i>
      </TextMedium>
      <TextRegular
        color={"white"}
        fontSize={16}
        margin={"20px 0 "}
        align={"center"}
      >
        <img src={"../assets/Star.svg"} />
        на вводную консультацию
      </TextRegular>
      <TextMedium color={"white"} fontSize={20} align={"center"}>
        <i>3000 ₽</i>
      </TextMedium>
      <TextMedium color={"white"} fontSize={20} align={"center"}>
        <i>1500 ₽</i>
      </TextMedium>
    </BlackWindow>
  );
};
