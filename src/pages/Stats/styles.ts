import styled from 'styled-components';

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  position: relative;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  position: relative;
`;

export const Avatar = styled.img`
  border: 2px solid #fff;
  border-radius: 50%;
  height: 90px;
  width: 90px;
`;

export const SearchContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 10px;
`;

export const Search = styled.input`
  background: #004ba8;
  border: 2px solid #fff;
  border-radius: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  height: 25px;
  padding: 0 30px 0 12px;
  width: 190px;
  ::-webkit-input-placeholder {
    color: #fff;
  }
  &:hover {
    background: #ffbe55;
    color: #004ba8;
  }
`;

export const SearchIconButton = styled.button`
  background: #004ba8;
  border: 2px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  height: 30px;
  width: 30px;
  &:hover {
    background: #ffbe55;
  }
`;

export const SearchIcon = styled.img`
  height: 15px;
  width: 15px;
`;

export const NoContent = styled.img`
  height: 100%;
  margin-top: 10px;
  width: 220px;
`;

export const UpperDashboardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow: hidden;
  width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LowerDashboardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  width: 1200px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: #ffbe55;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const RepositoryList = styled.select`
  background: #004ba8;
  border: 2px solid #fff;
  border-radius: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  height: 25px;
  margin-top: 5px;
  padding: 0 30px 0 12px;
  width: 260px;
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
`;

export const RepositoryOption = styled.option`
  background: #004ba8;
  color: #fff;
`;
