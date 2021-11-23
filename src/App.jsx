import React, {useState} from 'react';

import {FaHome, FaSearch, FaUserCircle} from 'react-icons/fa';

import GlobalStyles from './GlobalStyles';

import Navbar from './components/Navbar';
import Repository from './components/Repository';
import Profile from './components/Profile';

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
