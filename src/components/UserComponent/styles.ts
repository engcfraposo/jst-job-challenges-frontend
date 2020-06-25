import styled from 'styled-components';

export const UserBox = styled.div`
  align-items: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 140px;
  justify-content: center;
  width: 400px;
  @media (max-width: 768px) {
    border: 2px solid #fff;
    margin-top: 10px;
    width: 300px;
  }
`;

export const UserText = styled.h3`
  color: #fff;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const UserTitle = styled.h2`
  color: #ffbe55;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 16px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const UserLink = styled.a`
  color: #fff;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
