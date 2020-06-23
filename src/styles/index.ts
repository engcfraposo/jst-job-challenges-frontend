import styled, { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    overflow-x: hidden;

  }
  input, textarea, select, button, select {
    outline: 0;
}
`;

export const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const Gradient = styled.div`
  background: linear-gradient(to right, #004ba8, #3e78b2);
  height: 100%;
  width: 100%;
`;

export const Centered = styled.div`
  position: absolute;
  width: 100%;
  margin: auto 0;
  margin-top: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
