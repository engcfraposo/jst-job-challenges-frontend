import React from 'react';
import { Screen, Logo, List, Item, Header } from './styles';

const Menu: React.FC = () => {
  return (
    <>
      <Header>
        <Screen>
          <Logo src="https://www.justa.com.vc/images/logo_azul1.png" alt="" />
          <List>
            <Item>Home</Item>
            <Item>Sobre</Item>
            <Item>Contato</Item>
          </List>
        </Screen>
      </Header>
    </>
  );
};

export default Menu;
