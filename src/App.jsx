import React from 'react';

import {Router, BrowserRouter} from './services/router/Router';
import {Navbar} from './components';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
