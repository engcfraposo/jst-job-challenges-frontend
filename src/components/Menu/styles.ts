import styled from 'styled-components';

export const Header = styled.div`
  height: 10vh;
  width: 100vw;
  display: fixed;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.8);
  position: relative;
`;

export const Screen = styled.div`
  margin: 0 auto;
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 5vh;
`;

export const List = styled.ul``;

export const Item = styled.li`
  margin-right: 20px;
  display: inline-block;
  color: #004ba8;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    font-weight: 500;
`;
