/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Reset, FullScreen } from './styles';
import Menu from './components/Menu';
import Stats from './pages/Stats';

function App() {
  return (
    <>
      <Reset />
      <Menu />
      <FullScreen>
        <Stats />
      </FullScreen>
    </>
  );
}

export default App;
