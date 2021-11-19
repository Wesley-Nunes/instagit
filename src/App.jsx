import React from 'react';
import GlobalStyles from './GlobalStyles';
import Navbar from './components/Navbar';
import {FaHome, FaSearch, FaUserCircle} from 'react-icons/fa';

// bckg: #fafafa

const App = () => (
  <>
    <GlobalStyles />
    <Navbar>
      <li><a href="#"><FaHome /></a></li>
      <li><a href="#"><FaSearch /></a></li>
      <li><a href="#"><FaUserCircle /></a></li>
    </Navbar>
  </>
);

export default App;
