import React from 'react';

import {BrowserRouter, Route, Routes, Link, Navigate} from 'react-router-dom';

import {Navbar, Search} from '../../components/shared';

import {HomeIcon, UserCircleIcon} from '../icons/icons';
import {useApi} from '../stateManagement/apiState';

import {HomePage} from '../../pages/HomePage';
import {ProfilePage} from '../../pages/ProfilePage';

const Router = () => {
  const {getUserDetails} = useApi();
  const {login} = getUserDetails();

  const basename = login === 'Wesley-Nunes' ? '/me' : `/user/${login}`;
  return (
    <BrowserRouter>
      <Navbar>
        <li>
          <Link to={`${basename}/home`} aria-label="home">
            <HomeIcon />
          </Link>
        </li>
        <li aria-label="search" tabIndex="0">
          <Search/>
        </li>
        <li>
          <Link to={`${basename}/profile`} aria-label="profile">
            <UserCircleIcon />
          </Link>
        </li>
      </Navbar>
      <Routes>
        <Route path={`${basename}/home`} element={<HomePage />}/>
        <Route path="*" element={<Navigate replace to={`${basename}/home`} />}/>
        <Route path={`${basename}/profile`} element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
