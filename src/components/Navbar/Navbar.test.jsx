import React from "react";

import { render, screen } from "@testing-library/react";
import {
  HomeIcon,
  SearchIcon,
  UserCircleIcon,
} from "../../services/icons/icons";

// import NavBar from './NavBar';

describe("NavBar component", () => {
  beforeEach(() => {
    render(
      <NavBar>
        <li>
          <a href="#" aria-label="home">
            <HomeIcon />
          </a>
        </li>
        <li>
          <a href="#" aria-label="search">
            <SearchIcon />
          </a>
        </li>
        <li>
          <a href="#" aria-label="profile">
            <UserCircleIcon />
          </a>
        </li>
      </NavBar>
    );
  });

  it("renders a banner with the NavBar content", () => {
    const banner = screen.getByRole("banner");
    expect(banner).toBeInTheDocument();
  });

  it('renders a heading with the name "instagit"', () => {
    const title = screen.getByRole("heading", { name: /instagit/i });
    expect(title).toBeInTheDocument();
  });

  it('renders a link with the name "home"', () => {
    const title = screen.getByRole("link", { name: /home/i });
    expect(title).toBeInTheDocument();
  });

  it('renders a link with the name "search"', () => {
    const title = screen.getByRole("link", { name: /search/i });
    expect(title).toBeInTheDocument();
  });

  it('renders a link with the name "profile"', () => {
    const title = screen.getByRole("link", { name: /profile/i });
    expect(title).toBeInTheDocument();
  });
});
