import React, {useState} from 'react';

import {SearchIcon} from '../../services/icons/icons';
import {useApi} from '../../services/stateManagement/apiState';

import {StyledLabel, StyledInput} from './SearchStyle';

const Search = () => {
  const [visibility, setVisibility] = useState('collapse');
  const {search} = useApi();

  const handleClick = () => {
    if (visibility === 'collapse') {
      setVisibility('visible');
    } else {
      const input = document.querySelector('#search');
      const user = input.value;
      search(user);
      setVisibility('collapse');
    };
  };

  return (
    <>
      <StyledLabel htmlFor="search" onClick={handleClick}>
        <SearchIcon/>
      </StyledLabel>
      <StyledInput
        type="text"
        id="search"
        name="search"
        placeholder="Search for Github user"
        visibility={visibility}
      />
    </>
  );
};

export default Search;
