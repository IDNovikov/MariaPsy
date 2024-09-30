import styled from "styled-components";

export const Window = styled.div`
  position: relative;
  max-width: 1232px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  overflow: auto;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border-radius: 28px;
`;
