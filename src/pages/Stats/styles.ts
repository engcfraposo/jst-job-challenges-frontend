import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-top: 20px;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Avatar = styled.img`
  height: 90px;
  width: 90px;
  border: 2px solid #fff;
  border-radius: 50%;
`;

export const ContainerRow = styled.form`
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerColumn = styled.form`
  display: flex;
  width: 450px;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.input`
  height: 3vh;
  width: 20vw;
  border: 2px solid #fff;
  border-radius: 50px;
  font-size: 15px;
  font-weight: bold;
  padding: 0 30px 0 12px;
  color: #fff;
  background: #004ba8;
  ::-webkit-input-placeholder {
    color: #fff;
  }
`;

export const IconButton = styled.button`
    height: 30px;
    width: 30px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #004ba8;
    cursor: pointer;
    &:hover {
    background: #ccc;
  }
  }
`;

export const Icon = styled.img`
    height: 15px;
    width: 15px;
  }
`;

export const Title = styled.h1`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  color: #fff;
`;

export const Content = styled.div`
  display: absolute;
  margin-top: 20px;
  background: #fff;
`;

export const RepositoryList = styled.select`
  margin-top: 5px;
  height: 3vh;
  width: 20vw;
  border: 2px solid #fff;
  border-radius: 50px;
  font-size: 15px;
  font-weight: bold;
  padding: 0 30px 0 12px;
  color: #fff;
  background: #004ba8;
  ::-webkit-input-placeholder {
    color: #fff;
  }
`;

export const RepositoryOption = styled.option``;

export const LanguagesBox = styled.div`
  height: 140px;
  width: 250px;
  border: 2px solid #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center
  border-radius: 10px;
  background: linear-gradient(to right, #004ba8, #3e78b2);
`;

export const LanguagesText = styled.h3`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 5px;
  font-size: 10px;
`;

export const LanguagesTitle = styled.h2`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  color: #fff;
  margin: 5px auto;
  font-size: 16px;
`;

export const UserBox = styled.div`
  height: 140px;
  width: 400px;
  border: 2px solid #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  justify-content:space-between
  border-radius: 10px;
  background: linear-gradient(to right, #004ba8, #3e78b2);
`;

export const UserText = styled.h3`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 5px;
  font-size: 10px;
`;

export const UserTitle = styled.h2`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  color: #fff;
  font-size: 16px;
  text-align: center;
`;
export const UserLink = styled.a`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 5px;
  font-size: 12px;
  text-align: center;
  text-decoration: none;
`;
