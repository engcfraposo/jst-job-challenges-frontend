import styled, { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    overflow: hidden;


  }
  input, textarea, select, button {
    outline: 0;
}
`;

export const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #004ba8, #3e78b2);
`;
