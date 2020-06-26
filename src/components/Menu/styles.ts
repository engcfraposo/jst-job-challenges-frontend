import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  align-items: center;
  background: #ffbe55;
  border: 1px solid #ccc;
  display: fixed;
  height: 10vh;
  justify-content: center;
  width: 100vw;
  @media (max-width: 768px) {
    height: 30vh;
  }
`;

export const Screen = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  width: 90vw;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: inline-block;
  @media (max-width: 768px) {
    display: block;
    justify-content: center;
  }
`;

export const RouterLink = styled(Link)`
  color: #3e78b2;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  margin-right: 20px;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;
