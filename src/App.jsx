import React from "react";
import { ScrollProvider, useScroll } from "./ScrollContext";
import styled, { createGlobalStyle } from "styled-components";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Spec } from "./components/Spec";
import { Education } from "./components/Educatiom";
import { AboutMe } from "./components/AboutMe";
import { Sale } from "./components/Sale";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family:"Ubuntu medium" ;
    src: url('/fonts/Ubuntu-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
    @font-face {
    font-family:"Ubuntu regular" ;
    src: url('/fonts/Ubuntu-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family:"Shante regular" ;
    src: url('/fonts/ShantellSans-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  overflow: auto;
  background-color: #ececec;
`;
function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  return (
    <>
      <ScrollProvider>
        <GlobalStyle />
        <Wrapper>
          <Header />
          <Intro />
          <Spec />
          <Education />
          <AboutMe />
          <Sale />
        </Wrapper>
      </ScrollProvider>
    </>
  );
}

export default App;
