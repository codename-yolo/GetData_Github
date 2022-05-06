const END_POINT_GITHUB_API = 'https://api.github.com/'

export const searchUrl = (type, searchText, page) => {
  return `${END_POINT_GITHUB_API}${type}/users?q=${searchText}&page=${page}&per_page=10`
}
export const repoUrl = (name) => {
  return `${END_POINT_GITHUB_API}users/${name}/repos?&per_page=30`
}

export const readMeUrl = (userName, repoName) => {
  return `${END_POINT_GITHUB_API}repos/${userName}/${repoName}/contents/README.md`
}

export const getUserUrl = (userName) => {
  return `${END_POINT_GITHUB_API}users/${userName}`
}
