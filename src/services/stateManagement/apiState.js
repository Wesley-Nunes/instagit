/* eslint-disable camelcase */

import React, {createContext, useContext, useState, useEffect} from 'react';

import PropTypes from 'prop-types';

import {getProfileInfo, getRepos} from '../api/githubRequest';

const ApiContext = createContext({});

/**
 * Provide the state actions
 * @param   {Array<Component>}  children
 * @return  {Provider}
 */
function ApiProvider({children}) {
  const [username, setUsername] = useState('Wesley-Nunes');
  const [userDetails, setUserDetails] = useState({
    name: '',
    login: '',
    bio: '',
    imgUrl: '',
  });
  const [respositories, setRepositories] = useState([]);

  useEffect(() => {
    getProfileInfo(username)
        .then((profile) => {
          console.log(profile);
          const {name, login, bio, avatar_url} = profile;
          setUserDetails({name, login, bio, imgUrl: avatar_url});
        });

    getRepos(username)
        .then((response) => {
          setRepositories(response.data);
        });
  }, [username]);

  const getUserDetails = () => {
    return userDetails;
  };

  const getRepositories = () => {
    return respositories;
  };

  const search = (name) => {
    setUsername(name);
  };

  const publicActions = {
    getUserDetails,
    getRepositories,
    search,
  };

  return (
    <ApiContext.Provider value={publicActions}>
      {children}
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

/**
 * Hooks the action of the context
 * @return {hook} useApi
 */
function useApi() {
  return useContext(ApiContext);
}

export {ApiProvider, useApi};
