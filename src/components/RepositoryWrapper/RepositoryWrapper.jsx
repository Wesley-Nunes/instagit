/* eslint-disable camelcase */
import React from 'react';

import {useApi} from '../../services/stateManagement/apiState';

import Repository from '../Repository/Repository';

const RepositoryWrapper = () => {
  const {getRepositories} = useApi();

  return (
    getRepositories().map(({
      id, name, html_url, description, homepage,
    }) => (
      <Repository
        key={id}
        title={name}
        linkToRepository={html_url}
        about={description}
        linkToPreview={homepage}
      />
    ))
  );
};

export default RepositoryWrapper;
