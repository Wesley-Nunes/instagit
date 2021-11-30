import React from 'react';

import {UserCircleIcon} from '../../services/icons/icons';
import {useApi} from '../../services/stateManagement/apiState';

import {UserDetailsWrapper, ProfileWrapper, RepoWrapper} from './ProfileStyle';

// The context will populate the values of components
const UserDetails = () => {
  const {getUserDetails} = useApi();
  const {name, login, bio} = getUserDetails();

  return (
    <UserDetailsWrapper aria-label="user details">
      <h3><UserCircleIcon /></h3>
      <div>
        <h2 aria-label="name">{name}</h2>
        <h3 aria-label="github user">{login}</h3>
        <p aria-label="bio">{bio}</p>
      </div>
    </UserDetailsWrapper>
  );
};

const MostUsedLanguages = () => {
  return (
    <section aria-label="most used languages">
      <h3>Most Used Languages</h3>
      <ol>
        <li>HTML - 52.05%</li>
        <li>JavaScript - 39.99%</li>
        <li>CSS  - 6.75%</li>
        <li>TypeScript - 1.21%</li>
      </ol>
    </section>
  );
};

const PinRepos = () => (
  <section aria-label="pinned repositories">
    <h3>Pinned Repositories</h3>
    <RepoWrapper>
      <a href="https://github.com/Wesley-Nunes/courses">courses</a>
    </RepoWrapper>
    <RepoWrapper>
      <a href="https://github.com/Wesley-Nunes/fcc-javascript-calculator">fcc-javascript-calculator</a>
    </RepoWrapper>
    <RepoWrapper>
      <a href="https://github.com/Wesley-Nunes/gotta-catch-em-all">gotta-catch-em-all</a>
    </RepoWrapper>
    <RepoWrapper>
      <a href="https://github.com/Wesley-Nunes/jogo-da-memoria">jogo-da-memoria</a>
    </RepoWrapper>
    <RepoWrapper>
      <a href="https://github.com/Wesley-Nunes/Netflix-Clone">Netflix-Clone</a>
    </RepoWrapper>
    <RepoWrapper>
      <a href="https://github.com/Wesley-Nunes/stats-preview-card">stats-preview-card</a>
    </RepoWrapper>
  </section>
);

const Profile = () => (
  <ProfileWrapper aria-label="Section with the user info">
    <UserDetails />
    <MostUsedLanguages />
    <PinRepos />
  </ProfileWrapper>
);

export default Profile;
