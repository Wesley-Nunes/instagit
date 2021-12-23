import React from 'react';

import {render, screen} from '@testing-library/react';

import Profile from './Profile';

describe('Profile component', () => {
  beforeEach(() => render(<Profile />));

  xit('should render the profile content', () => {
    const section = screen.getByRole('region',
        {name: /section with the user info/i});
    expect(section).toBeInTheDocument();
  });

  xit('should render the UserDetails component', () => {
    const userDetails = screen.getByRole('region',
        {name: /user details/i});
    expect(userDetails).toBeInTheDocument();
  });

  xit('should render the name of the user', () => {
    const name = screen.getByRole('heading', {name: /name/i});
    expect(name).toBeInTheDocument();
  });

  xit('should render the github username', () => {
    const githubUser = screen.getByRole('heading',
        {name: /github user/i});
    expect(githubUser).toBeInTheDocument();
  });

  xit('should render the bio of the user', () => {
    const bio = screen.getByLabelText(/bio/i);
    expect(bio).toBeInTheDocument();
  });

  xit('should render the MostUsedLanguages component', () => {
    const mostUsedLanguages = screen.getByRole('region',
        {name: /most used languages/i});
    expect(mostUsedLanguages).toBeInTheDocument();
  });

  xit('should render the PinRepos component', () => {
    const PinRepos = screen.getByRole('region',
        {name: /pinned repositories/i});
    expect(PinRepos).toBeInTheDocument();
  });
});
