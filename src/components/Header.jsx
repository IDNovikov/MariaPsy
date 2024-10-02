import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MobileMenu } from "./MobileMenu";
import Mary from "../assets/Mary.svg";
import { Spin as Hamburger } from "hamburger-react";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  height: 64px;
  margin: 0;
  overflow: hidden;
  background-color: white;
`;
const Img = styled.img`
  margin: 0 16px;
`;
const Burger = styled.div`
  cursor: pointer;
  position: fixed;
  right: 16px;
  z-index: 99;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0px;
  left: 100vw;
  width: 100%;
  height: 100%;
  transition: transform 0.5s linear;
  z-index: 9;
  overflow: auto;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100vw)"};
`;

export const Header = () => {
  const [isOpen, setOpen] = useState(true);
  const windowWidth = useRef(window.innerWidth);
  const handleClose = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <HeaderWrapper>
        <Img src={Mary} />

        <Burger onClick={() => handleClose()}>
          <Hamburger duration={0.8} />
        </Burger>
        <Nav isOpen={isOpen}>
          <MobileMenu handleClose={handleClose}></MobileMenu>
        </Nav>
      </HeaderWrapper>
    </>
  );
};
