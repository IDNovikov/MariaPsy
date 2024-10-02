import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Window } from "../common/Window";
import Avatar from "../assets/Avatar.png";
import name from "../assets/otName.svg";
import { TextMedium } from "../common/TextMedium";
import { TextRegular } from "../common/TextRegular";
import { Button } from "../common/Button";
import { TextLogo } from "../common/TextLogo";
import { DropDown } from "../common/DropDown";

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

export const Intro = () => {
  const windowWidth = useRef(window.innerWidth);

  return (
    <>
      <div style={{ padding: "50px 0 0 0", position: "relative" }}>
        <Img src={Avatar} />
        <Window margin={"50px auto 20px"} padding={"100px 16px 16px 16px"}>
          <TextMedium fontSize={20} align={"center"}>
            Привет! Меня зовут{" "}
            <TextLogo fontSize={26} color={"#FEA800"}>
              <i>Мария Новикова</i>
            </TextLogo>
            , я дипломированный гештальт-терапевт, помогаю людям бороться с
            трудностями и находить в себе ресурсы
          </TextMedium>
          <DropDown marginHeader={"20px 0 10px 0"} />
          <Button maXwidth={600} height={44} margin={"15px 0"}></Button>
        </Window>
      </div>
    </>
  );
};
