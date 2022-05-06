import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './userInfo.module.scss'

const UserInfo = ({ userName, avatarUrl }) => {
  return (
    <>
      <div className={styles.userInfo}>
        <div className={styles.picture}>
          <img className={styles.imgUser} src={avatarUrl} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.name}>{userName || 'User Name'}</h3>
          <h4 className={styles.location}></h4>
          <div className={styles.repository}>
            <Link to={`/repo/${userName}`}>
              <button className={`${styles.btn} ${styles.btnAnimation}`}>
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

UserInfo.propTypes = {
  userName: PropTypes.string,
  avatarUrl: PropTypes.string
}

export default UserInfo
