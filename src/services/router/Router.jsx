import React from 'react';

import {BrowserRouter, Route, Link, Routes, Navigate} from 'react-router-dom';

import {useApi} from '../stateManagement/apiState';
import {HomePage} from '../../pages/HomePage';
import {ProfilePage} from '../../pages/ProfilePage';


const getBasename = () => {
  const {getUserDetails} = useApi();
  const {login} = getUserDetails();
  const basename = login === 'Wesley-Nunes' ? '/me' : `/user/${login}`;

  return basename;
};

const Router = () => {
  return (
    <Routes>
      <Route path={`${getBasename()}/home`} element={<HomePage />} />
      <Route path="*"
        element={<Navigate replace to={`${getBasename()}/home`} />} />
      <Route path={`${getBasename()}/profile`} element={<ProfilePage />} />
    </Routes>
  );
};

export {
  Router,
  getBasename,
  BrowserRouter,
  Link,
};
