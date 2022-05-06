import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.scss'
const NotFoundPage = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.wrapper}>
          <img src="https://wallpaperaccess.com/full/3275697.jpg" alt="" />
          <h5>
            Tester mãi đỉnh,
            <br />
            Bún đậu nước mắm....{' '}
          </h5>
          <h3>Thích thì quay lại</h3>
          <h1> 4 4</h1>
          <Link to="/">
            <span> Let Go Back</span>{' '}
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
