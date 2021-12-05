import React, {useState} from 'react';

import {SearchIcon} from '../../services/icons/icons';
import {useApi} from '../../services/stateManagement/apiState';

import {StyledLabel, StyledInput} from './SearchStyle';

const Search = () => {
  const [visibility, setVisibility] = useState('collapse');
  const [user, setUser] = useState('');
  const {search} = useApi();

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search(user);
    setVisibility('collapse');
  };

  const handleClick = () => {
    if (visibility === 'collapse') {
      setVisibility('visible');
    } else {
      handleSubmit(event);
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledLabel
        htmlFor="search"
        type="submit"
        value="Submit"
        onClick={handleClick}
      >
        <SearchIcon/>
      </StyledLabel>
      <StyledInput
        type="text"
        id="search"
        name="search"
        placeholder="Search for Github user"
        visibility={visibility}
        user={user}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
