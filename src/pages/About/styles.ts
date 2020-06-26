import styled from 'styled-components';

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  position: relative;
`;

export const Container = styled.div`
  align-items: center;
  border: 1px solid #fff;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  padding: 20px;
  width: 80vw;
  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  color: #ffbe55;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  margin-top: 20px;
`;

export const AboutBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-top: 20px;
  width: 45vw;
`;

export const Image = styled.img`
  height: 100%;
  margin-top: 10px;
  width: 420px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AboutText = styled.h3`
  color: #fff;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 12px;
  margin: 20px 0;
  text-align: center;
`;

export const AboutTitle = styled.h2`
  color: #ffbe55;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const AboutLink = styled.a`
  color: #fff;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
  text-decoration: none;
`;
