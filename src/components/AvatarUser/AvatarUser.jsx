import React from 'react';

import {useApi} from '../../services/stateManagement/apiState';

import StyledImg from './AvatarUserStyle';

const AvatarUser = () => {
  const {getUserDetails} = useApi();
  const {imgUrl, name} = getUserDetails();

  return (
    <StyledImg src={imgUrl} alt={name} />
  );
};

export default AvatarUser;
