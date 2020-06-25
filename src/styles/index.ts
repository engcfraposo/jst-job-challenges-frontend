import { createGlobalStyle } from 'styled-components';

export const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    overflow-x: hidden;


  }
  input, textarea, select, button {
    outline: 0;
  }

  body{
    background: #3e78b2;
  }
  :root {
      font-size: 16;

      @media (max-width: 768px) {
        font-size: 12
      };
  }
`;
