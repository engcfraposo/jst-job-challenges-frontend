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
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
  padding: 20px;
  width: 80vw;
`;

export const Title = styled.h1`
  color: #ffbe55;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  margin-top: 20px;
`;

export const ContactBox = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 65vh;
  justify-content: center;
  margin-top: 20px;
  width: 45vw;
  @media (max-width: 768px) {
    width: 320px;
  }
`;

export const Image = styled.img`
  height: 100%;
  margin-top: 10px;
  width: 520px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContactText = styled.h3`
  color: #fff;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 12px;
  margin: 20px 0;
  text-align: center;
`;

export const ContactTitle = styled.h2`
  color: #ffbe55;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 18px;
  margin-top: 20px;
  overflow-y: hidden;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 14px;
  }
`;

export const ContactImput = styled.input`
  background: #004ba8;
  border: 2px solid #fff;
  border-radius: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  height: 3vh;
  margin-top: 20px;
  padding: 0 30px 0 12px;
  width: 20vw;
  ::-webkit-input-placeholder {
    color: #fff;
  }
  &:hover {
    background: #ffbe55;
    color: #004ba8;
    :-webkit-input-placeholder {
      color: #004ba8;
    }
  }
  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const ContactTextArea = styled.textarea`
  background: #004ba8;
  border: 2px solid #fff;
  border-radius: 20px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  height: 30vh;
  margin-top: 20px;
  padding: 0 30px;
  width: 20vw;
  ::-webkit-input-placeholder {
    color: #fff;
  }
  &:hover {
    background: #ffbe55;
    color: #004ba8;
    :-webkit-input-placeholder {
      color: #004ba8;
    }
  }
  @media (max-width: 768px) {
    width: 180px;
  }
`;

export const ContactButton = styled.button`
  background: #ffbe55;
  border: 2px solid #fff;
  border-radius: 50px;
  color: #004ba8;
  font-size: 15px;
  font-weight: bold;
  height: 3vh;
  margin-top: 20px;
  overflow-y: hidden;
  padding: 0 30px 0 12px;
  width: 20vw;
  ::-webkit-input-placeholder {
    color: #fff;
  }
  &:hover {
    background: #004ba8;
    color: #fff;
  }
  @media (max-width: 768px) {
    width: 240px;
    height: 4vh;
  }
`;
