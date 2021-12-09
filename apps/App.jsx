import React from 'react';
import MainNavigator from './components/navigator/mainNavigator';
import Test from './test';
import GraphDetails from './components/screen/graph/graphDetails';
import GraphDetailsMonth from './components/screen/graph/graphDetailsMonth';
import {TokenProvider} from './components/context/tokenContext';

function App() {
  return (
    <TokenProvider>
      <MainNavigator />
    </TokenProvider>
  );
}

export default App;
