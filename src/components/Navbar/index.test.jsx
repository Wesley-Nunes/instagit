import React from 'react';

import {render, screen} from '@testing-library/react';

import NavBar from './index';

describe('NavBar component', () => {
  beforeEach(() => {
    render(
        <NavBar>
          <li><a href="#" role="button">Home</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">User</a></li>
        </NavBar>,
    );
  });

  it('renders a banner with the NavBar content', () => {
    const banner = screen.getByRole('banner');
    expect(banner).toBeInTheDocument();
  });

  it('should title be in the document', () => {
    const title = screen.getByText('instagit');
    expect(title).toBeInTheDocument();
  });
});
