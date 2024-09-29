import { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { TextMedium } from "./common/TextMedium";
import { TextRegular } from "./common/TextRegular";
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
  listBack: "ECECEC",
};
const Wrapper = styled.div`
  width: 100vw;
  height: auto;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <TextMedium
        fontSize={28}
        color={"black"}
        align={""}
        margin={""}
        width={""}
      >
        React is working
      </TextMedium>
      <TextRegular
        fontSize={24}
        color={"black"}
        align={""}
        margin={""}
        width={""}
      >
        React is working
      </TextRegular>
    </>
  );
}

export default App;
