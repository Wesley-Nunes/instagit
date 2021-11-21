import React from 'react';

import {FaHome, FaSearch, FaUserCircle} from 'react-icons/fa';

import GlobalStyles from './GlobalStyles';

import Navbar from './components/Navbar';
import Repository from './components/Repository';

const App = () => (
  <>
    <GlobalStyles />
    <Navbar>
      <li><a href="#" aria-label="home"><FaHome /></a></li>
      <li><a href="#" aria-label="search"><FaSearch /></a></li>
      <li><a href="#" aria-label="profile"><FaUserCircle /></a></li>
    </Navbar>
    <Repository />
    <Repository />
  </>
);

export default App;
