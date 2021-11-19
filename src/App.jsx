import React from 'react';

import GlobalStyles from './GlobalStyles';

import Navbar from './components/Navbar';
import Repository from './components/Repository';
import {FaHome, FaSearch, FaUserCircle} from 'react-icons/fa';

const App = () => (
  <>
    <GlobalStyles />
    <Navbar>
      <li><a href="#"><FaHome /></a></li>
      <li><a href="#"><FaSearch /></a></li>
      <li><a href="#"><FaUserCircle /></a></li>
    </Navbar>
    <Repository />
    <Repository />
  </>
);

export default App;
