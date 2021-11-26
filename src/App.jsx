import React, {useState} from 'react';

import {HomeIcon, SearchIcon, UserCircleIcon} from './services/icons/icons';

import {Navbar, Repository, Profile} from './components/shared';

import GlobalStyles from './GlobalStyles';

const App = () => {
  const [isHomePage, setToHomePage] = useState(true);

  return (
    <>
      <GlobalStyles />
      <Navbar>
        <li><a
          href="#"
          aria-label="home"
          onClick={() => setToHomePage(true)}><HomeIcon /></a></li>
        <li><a href="#" aria-label="search"><SearchIcon /></a></li>
        <li><a
          href="#"
          aria-label="profile"
          onClick={() => setToHomePage(false)}><UserCircleIcon /></a></li>
      </Navbar>
      {
        isHomePage ? <Repository /> : <Profile />
      }
    </>
  );
};

export default App;
