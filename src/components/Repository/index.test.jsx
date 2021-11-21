import React from 'react';

import {render, screen} from '@testing-library/react';

import Repository from './index';

describe('Repository component', () => {
  beforeEach(() => {
    render(<Repository />);
  });

  it('The section with all repository content is render', () => {
    const section = screen.getByRole('region',
        {name: /section with the repository info/i});
    expect(section).toBeInTheDocument();
  });
});
