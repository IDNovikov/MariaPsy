import styled from "styled-components";

export const BlackWindow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1d1d1d;
  overflow: hidden;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border-radius: 12px;
`;
