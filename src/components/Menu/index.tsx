import React from 'react';

import { Screen, List, Item, Header, RouterLink } from './styles';

const Menu: React.FC = () => {
  return (
    <>
      <Header>
        <Screen>
          <List>
            <RouterLink to="/">
              <Item>Home</Item>
            </RouterLink>

            <RouterLink to="/about">
              <Item>Sobre</Item>
            </RouterLink>

            <RouterLink to="/contact">
              <Item>Contato</Item>
            </RouterLink>
          </List>
        </Screen>
      </Header>
    </>
  );
};

export default Menu;
