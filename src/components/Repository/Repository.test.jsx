import React from 'react';

import {render, screen} from '@testing-library/react';

import Repository from './Repository';

describe('Repository component', () => {
  beforeEach(() => {
    render(<Repository />);
  });

  xit('the section with all repository content is render', () => {
    const section = screen.getByRole('region',
        {name: /section with the repository info/i});
    expect(section).toBeInTheDocument();
  });

  xit('loads the link to the repository in GitHub', () => {
    const repositoryLink = screen.getByRole('link',
        {name: /link to repository/i});
    expect(repositoryLink).toBeInTheDocument();
  });

  xit('will open the options of the repository', () => {
    const options = screen.getByRole('button', {name: /repository options/i});
    expect(options).toBeInTheDocument();
  });

  xit('loads the main content of the repository', () => {
    const mainContent = screen.getByRole('main');
    expect(mainContent).toBeInTheDocument();
  });

  xit('will favorite the current repository', () => {
    const favorite = screen.getByRole('button',
        {name: /favorite the current repository/i});
    expect(favorite).toBeInTheDocument();
  });

  xit('loads the link to the preview', () => {
    const previewLink = screen.getByRole('link', {name: /link to preview/i});
    expect(previewLink).toBeInTheDocument();
  });
});
