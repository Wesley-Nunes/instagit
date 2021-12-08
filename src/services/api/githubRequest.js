import axios from 'axios';

/**
 * Get the user details of GitHub API using fetch.
 * @param   {String}  username
 * @return  {JSON<Object>}   response
 */
async function getProfileInfo(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return await response.json();
}

/**
 * Get the repositories of the user of the Github API.
 * @param   {String}            username
 * @return  {Promise<Object>}   response
 */
async function getRepos(username) {
  // The function will return only ten repositories
  // until implemented the infinite scroll.
  return await axios.get(`https://api.github.com/users/${username}/repos?per_page=10`);
}

export {getProfileInfo, getRepos};
