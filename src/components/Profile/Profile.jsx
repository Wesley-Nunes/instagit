import React from 'react';

import {useApi} from '../../services/stateManagement/apiState';

import {AvatarUser} from '../';

import {
  UserDetailsWrapper,
  ProfileWrapper,
} from './ProfileStyle';

// The context will populate the values of components
const UserDetails = () => {
  const {getUserDetails} = useApi();
  const {name, login, bio} = getUserDetails();

  return (
    <UserDetailsWrapper aria-label="user details">
      <h1><AvatarUser /></h1>
      <div>
        <h2 aria-label="name">{name}</h2>
        <h3 aria-label="github user">{login}</h3>
        <p aria-label="bio">{bio}</p>
      </div>
    </UserDetailsWrapper>
  );
};

const MostUsedLanguage = () => {
  const {getRepositories} = useApi();
  const obj = {};
  let mostUsedLanguage = '';
  let quantity = 0;

  getRepositories().forEach(({language}) => {
    if (obj.hasOwnProperty(language)) {
      obj[language] += 1;
    } else {
      obj[language] = 1;
    }

    if (obj[language] > quantity) {
      quantity = obj[language];
      mostUsedLanguage = language;
    }
  });

  return (
    <section aria-label="most used languages">
      <h3>The most used language is {mostUsedLanguage}.</h3>
      <h3>This language is present in {quantity} repositories.</h3>
    </section>
  );
};

const Profile = () => (
  <ProfileWrapper aria-label="Section with the user info">
    <UserDetails />
    <MostUsedLanguage />
  </ProfileWrapper>
);

export default Profile;
