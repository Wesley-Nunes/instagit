import React, {useState} from 'react';

import {FaHome, FaSearch, FaUserCircle} from 'react-icons/fa';

import GlobalStyles from './GlobalStyles';

import {Navbar, Repository, Profile} from './components/shared';

const App = () => {
  const [isHomePage, setToHomePage] = useState(true);

  return (
    <>
      <GlobalStyles />
      <Navbar>
        <li><a
          href="#"
          aria-label="home"
          onClick={() => setToHomePage(true)}><FaHome /></a></li>
        <li><a href="#" aria-label="search"><FaSearch /></a></li>
        <li><a
          href="#"
          aria-label="profile"
          onClick={() => setToHomePage(false)}><FaUserCircle /></a></li>
      </Navbar>
      {
        isHomePage ? <Repository /> : <Profile />
      }
    </>
  );
};

export default App;
