import React from 'react';
import PropTypes from 'prop-types';
import StyledImg from './AvatarUserStyle';

const AvatarUser =({imgUrl, imgName})=> {
  return (
    <StyledImg src={imgUrl} alt={imgName} data-testid="avatar-img" />
  );
};

AvatarUser.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  imgName: PropTypes.string.isRequired,
};

export default AvatarUser;
