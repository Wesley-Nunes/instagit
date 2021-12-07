import React from 'react';

import PropTypes from 'prop-types';

import {OptionsIcon, StarUncheckedIcon} from '../../services/icons/icons';

import {StyledSection, EdgeSections, StyledBody} from './RepositoryStyle';

const Hearder = ({title, linkToRepository}) => (
  <EdgeSections>
    <a
      href={linkToRepository}
      target="_blank"
      rel="noreferrer"
      aria-label="Link to repository"
    >
      <h2>{title}</h2>
    </a>
    <button type="button" aria-label="repository options">
      <OptionsIcon />
    </button>
  </EdgeSections>
);
Hearder.propTypes = {
  title: PropTypes.string.isRequired,
  linkToRepository: PropTypes.string.isRequired,
};

const Body = ({about}) => (
  <StyledBody>
    <p><strong>About: </strong>{about}</p>
  </StyledBody>
);
Body.propTypes = {
  about: PropTypes.string.isRequired,
};

const Footer = ({linkToPreview}) => (
  <EdgeSections>
    <button type="button" aria-label="Favorite the current repository">
      <StarUncheckedIcon />
    </button>
    <a
      href={linkToPreview}
      target="_blank"
      rel="noreferrer"
      aria-label="Link to preview"
    >
      Preview
    </a>
  </EdgeSections>
);
Footer.propTypes = {
  linkToPreview: PropTypes.string.isRequired,
};

const Repository = ({title, linkToRepository, about, linkToPreview}) => (
  <StyledSection aria-label="Section with the repository info">
    <Hearder title={title} linkToRepository={linkToRepository}/>
    <Body about={
      about ||
      `Oops, The programmer doesn't say anything about this repository.`
    }
    />
    {/* Add page 404 later */}
    <Footer linkToPreview={linkToPreview || 'https://instagit.vercel.app/404'}/>
  </StyledSection>
);
Repository.propTypes = {
  title: PropTypes.string.isRequired,
  linkToRepository: PropTypes.string.isRequired,
  about: PropTypes.string,
  linkToPreview: PropTypes.string,
};

export default Repository;
