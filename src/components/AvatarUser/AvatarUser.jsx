import React from 'react';
import StyledImg from './AvatarUserStyle';

const AvatarUser = ({ imgUrl, imgName }) => {  
  return (
    <StyledImg src={imgUrl} alt={imgName} data-testid="avatar-img" />
  );
};

export default AvatarUser;
