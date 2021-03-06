import React, { FunctionComponent } from 'react';

import { Screen, List, Item, Header, RouterLink } from './styles';

const Menu: FunctionComponent = () => {
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
