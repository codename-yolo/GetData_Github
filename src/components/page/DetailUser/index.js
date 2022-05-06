import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getDataApi, GET_URL_API, CHECK_STYLE } from '../../index'
import RepoItem from './RepoList/RepoItem/repoItem'
import styles from './index.module.scss'
import './Icon/style.css'
<<<<<<< HEAD
=======
import LoadingImage from '../../../assets/Loading/loading.gif'
>>>>>>> a1a0ff9 (Search github api complete)
const RepoList = () => {
  const { name } = useParams()
  const [listRepo, setListRepo] = useState([])
  const [user, setUser] = useState({})
<<<<<<< HEAD

=======
  const [loading, setLoading] = useState(false)
>>>>>>> a1a0ff9 (Search github api complete)
  const {
    name: nameUser,
    login: loginName,
    avatar_url: avatarUrl,
    blog,
    company,
    email,
    followers,
    following,
    location,
    public_repos: publicRepos,
    html_url: githubUrl
  } = user
  useEffect(() => {
    if (name) {
      getRepo()
      getUser()
    }
  }, [])
  const getRepo = async () => {
    try {
      const result = await getDataApi(GET_URL_API.repoUrl(name))
      setListRepo(result)
    } catch (error) {
      throw new Error(error.message)
    }
  }
  const getUser = async () => {
    try {
<<<<<<< HEAD
      const result = await getDataApi(GET_URL_API.getUserUrl(name))
=======
      setLoading(true)
      const result = await getDataApi(GET_URL_API.getUserUrl(name))
      setLoading(false)
>>>>>>> a1a0ff9 (Search github api complete)
      setUser(result)
    } catch (error) {
      throw new Error(error.message)
    }
  }
  return (
    <div className={styles.containerRepo}>
      <Link to="/">
        <button className={styles.backButton}></button>
      </Link>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={avatarUrl}></img>
<<<<<<< HEAD
=======
          {loading && (
            <div className={styles.loading}>
              <img alt="loading" src={LoadingImage} />
            </div>
          )}
>>>>>>> a1a0ff9 (Search github api complete)
        </div>
        <div className={styles.info}>
          <h2 style={CHECK_STYLE.hiddenStyle(nameUser)}>
            {nameUser}
            <small>
              {location ? <span className="icon-location2"></span> : ''}
              {location}
            </small>
          </h2>

          <h3>{loginName}</h3>
          <h4 style={CHECK_STYLE.hiddenStyle(company)}>
            <span className="icon-business"></span>
            {company}
          </h4>
          <h4 style={CHECK_STYLE.hiddenStyle(email)}>
            <span className="icon-email"></span>
            {email}
          </h4>
          <h4>
            <span className="icon-group"></span>
            <span>
              {' '}
              Followers: {followers} - Following: {following}
            </span>
          </h4>
          <h4>
            <span className="icon-book"></span>
            <span>Public Repos: {publicRepos}</span>
          </h4>
          <ul>
            <li style={CHECK_STYLE.hiddenStyle(blog)}>
              <a>
                <span className="icon-link"></span>
              </a>
            </li>
            <li style={CHECK_STYLE.hiddenStyle(githubUrl)}>
              <a>
                {' '}
                <span className="icon-github"></span>{' '}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>
            {listRepo.length} Repositories of the first {publicRepos}{' '}
            repositories
          </h2>
        </div>
        <div className={styles.listRepo}>
          {listRepo.length !== 0 &&
            listRepo.map((repo, index) => (
              <RepoItem
                key={index}
                repo={repo}
                userName={loginName}
                cloneUrl={repo.clone_url}
              ></RepoItem>
            ))}
        </div>
      </div>
    </div>
  )
}

export default RepoList
