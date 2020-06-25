import styled from 'styled-components';

export const LanguagesBox = styled.div`
  align-items: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 250px;
  @media (max-width: 768px) {
    margin-top: 10px;
    border: 2px solid #fff;
    width: 300px;
  }
`;

export const LanguagesText = styled.h3`
  color: #fff;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 10px;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

export const LanguagesTitle = styled.h2`
  color: #ffbe55;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin: 5px auto;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
