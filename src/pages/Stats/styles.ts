import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  margin-top: 20px;
  position: relative;
`;

export const Search = styled.input`
  height: 5vh;
  width: 20vw;
  border: 2px solid #fff;
  border-radius: 50px;
  font-size: 24px;
  font-weight: bold;
  padding: 0 30px 0 12px;
  color: #fff;
  background: #004ba8;
  ::-webkit-input-placeholder {
    color: #fff;
  }
`;

export const IconButton = styled.button`
    height: 40px;
    width: 40px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: #004ba8;
    cursor: pointer;
  }
`;

export const Icon = styled.img`
    height: 25px;
    width: 25px;
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
  margin-top: 20px;
  height: 5vh;
  width: 20vw;
  border: 2px solid #fff;
  border-radius: 50px;
  font-size: 24px;
  font-weight: bold;
  padding: 0 30px 0 12px;
  color: #fff;
  background: #004ba8;
  ::-webkit-input-placeholder {
    color: #fff;
  }
`;

export const RepositoryOption = styled.option``;
