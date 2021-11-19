import React from 'react';
import {render, screen} from '@testing-library/react';
import NavBar from './index';


describe('NavBar component', () => {
  render(
      <NavBar>
        <li><a href="#">Home</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">User</a></li>
      </NavBar>,
  );

  it('Should title be in the document', () => {
    const title = screen.getByText('instagit');
    expect(title).toBeInTheDocument();
  });
});
