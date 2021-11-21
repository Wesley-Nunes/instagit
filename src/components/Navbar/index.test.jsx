import React from 'react';

import {render, screen} from '@testing-library/react';
import {FaHome, FaSearch, FaUserCircle} from 'react-icons/fa';

import NavBar from './index';

describe('NavBar component', () => {
  beforeEach(() => {
    render(
        <NavBar>
          <li><a href="#" aria-label="home"><FaHome /></a></li>
          <li><a href="#" aria-label="search"><FaSearch /></a></li>
          <li><a href="#" aria-label="profile"><FaUserCircle /></a></li>
        </NavBar>,
    );
  });

  it('renders a banner with the NavBar content', () => {
    const banner = screen.getByRole('banner');
    expect(banner).toBeInTheDocument();
  });

  it('renders a heading with the name "instagit"', () => {
    const title = screen.getByRole('heading', {name: /instagit/i});
    expect(title).toBeInTheDocument();
  });

  it('renders a link with the name "home"', () => {
    const title = screen.getByRole('link', {name: /home/i});
    expect(title).toBeInTheDocument();
  });
});
