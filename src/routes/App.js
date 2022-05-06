import React from 'react'
import { Routes, Route } from 'react-router-dom'
import '../styles/reset.scss'
import '../styles/globalCss.scss'
import { HomePage, RepoList, NotFoundPage } from '../components'
import backgroundImage from '../assets/Background/background.png'

const App = () => {
  return (
    <>
      <div className="backgroundContainer">
        <img src={backgroundImage} alt="" />
        <div className="stars"></div>
        <div className="clouds"></div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repo/:name" element={<RepoList />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
