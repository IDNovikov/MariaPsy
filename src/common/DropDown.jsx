import React, { useState } from "react";
import styled from "styled-components";
import { TextRegular } from "./TextRegular";

const DropdownContainer = styled.div`
  width: 100%;
  position: relative;
`;
const DropdownHeader = styled.div`
  height: auto;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: ${(props) => props.marginHeader};
  border-bottom: 1px solid rgb(192, 192, 192);
`;
const Arrow = styled.div`
  display: flex;
  height: auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.isOpen ? "rotate(360deg)" : "rotate(180deg)")};
`;

const DropdownList = styled.div`
  padding: 0 10px;
  position: relative;
  width: 90%;
  height: auto;
  max-height: ${(props) => (props.isOpen ? "250px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  text-align: justify;
`;

export const DropDown = ({ marginHeader }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer>
      <DropdownHeader marginHeader={marginHeader} onClick={toggleDropdown}>
        <TextRegular fontSize={16} align={"left"} margin={"auto 0"}>
          Работаю в феноменологическом подходе:
        </TextRegular>
        <Arrow isOpen={isOpen}> 𖤂</Arrow>
      </DropdownHeader>
      <DropdownList isOpen={isOpen}>
        <TextRegular fontSize={16} align={"justify"}>
          феноменологический подход акцентирует внимание не на поведении, а на
          том, что происходит у человека в сознании человека: какие образы и
          ощущения возникают у него и как он их чувствует. Под феноменом
          понимаются ощущения, восприятия, представления и мысли
        </TextRegular>
      </DropdownList>
    </DropdownContainer>
  );
};
