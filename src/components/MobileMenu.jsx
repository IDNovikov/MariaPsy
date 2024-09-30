import styled from "styled-components";

export const MobileMenu = styled.div`
  max-width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  overflow: auto;
  margin-left: auto;
  & div:not(:last-child) {
    margin-top: 40px;
  }
`;
