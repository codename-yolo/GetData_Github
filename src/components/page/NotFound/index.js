import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.scss'
import backgroundImage from '../../../assets/Background/backgroundPageNotFound.jpeg'

const NotFoundPage = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.wrapper}>
          <img src={backgroundImage} alt="" />
          <h5>
            Black hole is ahead
            <br />
          </h5>
          <h1> 4 4</h1>
          <Link to="/">
            <span> Go back NOW</span>{' '}
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
