import React, {useState} from 'react';

import {HomeIcon, UserCircleIcon} from './services/icons/icons';

import {Navbar, RepositoryWrapper, Profile, Search} from './components/shared';

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
        <li><Search/></li>
        <li><a
          href="#"
          aria-label="profile"
          onClick={() => setToHomePage(false)}><UserCircleIcon /></a></li>
      </Navbar>
      {
        isHomePage ? <RepositoryWrapper /> : <Profile />
      }
    </>
  );
};

export default App;
