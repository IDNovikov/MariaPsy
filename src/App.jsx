import { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { TextMedium } from "./common/TextMedium";
import { TextRegular } from "./common/TextRegular";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Spec } from "./components/Spec";
import { Education } from "./components/Educatiom";
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
    font-weight: 100;
    font-style: normal;
  }
`;

const themes = {
  backround: "#EBEDEE",
  mainBlack: "#1D1D1D",
  blue: "#7AB7FF",
  listBack: "#ECECEC",
};
const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-color: #ececec;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header themes={themes} />
        <Intro />
        <Spec />
        <Education />
      </Wrapper>
    </>
  );
}

export default App;
