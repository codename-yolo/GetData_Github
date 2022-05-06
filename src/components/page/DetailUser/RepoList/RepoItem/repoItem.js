import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Languages from '../LanguagesProgramming/languages'
import RepoReadme from '../RepoItemReadMe/repoItemReadme'
import { DATE_TIME_HANDLER } from '../../../../index'
import styles from './repoItem.module.scss'
import '../../Icon/style.css'

const RepoItem = ({ repo, userName, cloneUrl }) => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    name: repoName,
    description,
    watchers,
    open_issues: openIssues,
    forks,
    languages_url: languagesUrl,
    updated_at: updateRepo,
    size: sizeRepo
  } = repo
  const handleClick = (e) => {
    e.stopPropagation()
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <div className={styles.repoItem}>
        <div onClick={handleClick} className={styles.repoInfo}>
          <h3>{repoName}</h3>
          <div className={styles.top}>
            {sizeRepo !== 0 ? (
              <div>
                <p>
                  {description ||
                    'No description, website, or topics provided.'}
                </p>
                <h5>
                  Updated on{' '}
                  {updateRepo
                    ? DATE_TIME_HANDLER.timeDifference(updateRepo)
                    : ''}
                </h5>
              </div>
            ) : (
              <div>Repository Empty</div>
            )}
          </div>
          <div className={styles.bottom}>
            <Languages languagesUrl={languagesUrl}></Languages>
          </div>
        </div>
        <div className={styles.repoDetail}>
          <div className={styles.detail}>
            <h3> Detail</h3>
            <ul>
              <li>
                <strong>
                  <span className="icon-remove_red_eye"></span>Watchers :{' '}
                  {watchers}
                </strong>
              </li>
              <li>
                <strong>
                  <span className="icon-help_outline"></span>
                  Open issues : {openIssues}
                </strong>
              </li>
              <li>
                <strong>
                  <span className="icon-code-fork"></span>
                  Forks: {forks}
                </strong>
              </li>
              <li>
                <strong>
                  <span className="icon-download3"></span>
                  Clone : <a href={cloneUrl}>Clone Url</a>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpen && (
        <RepoReadme
          isOpen={isOpen}
          userName={userName}
          repoName={repoName}
          handleClose={handleClose}
        ></RepoReadme>
      )}
    </>
  )
}
RepoItem.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    forks: PropTypes.number,
    watchers: PropTypes.number,
    open_issues: PropTypes.number,
    languages_url: PropTypes.string,
    updated_at: PropTypes.string,
    size: PropTypes.number
  }),
  cloneUrl: PropTypes.string,
  userName: PropTypes.string
}
export default RepoItem
