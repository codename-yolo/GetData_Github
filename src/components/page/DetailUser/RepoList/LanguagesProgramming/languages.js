import React, { useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { setClassName, getDataApi } from '../../../../index'
import styles from './languages.module.scss'

const Languages = ({ languagesUrl }) => {
  const [languages, setLanguages] = useState({})

  const getLanguages = async () => {
    try {
      const result = await getDataApi(languagesUrl)
      setLanguages(result)
    } catch (error) {
      throw new Error('Repository has been removed')
    }
  }
  const listLanguages = useMemo(() => {
    if (languages) {
      let total = 0
      const arr = []
      for (const language in languages) {
        total += languages[language]
      }
      for (const lang in languages) {
        arr.push({ [lang]: (languages[lang] / total) * 100 })
      }
      return arr
    }
  }, [languages])

  useEffect(() => {
    if (languagesUrl) {
      getLanguages()
    }
  }, [])

  if (listLanguages.length === 0) {
    return <h4>No Language</h4>
  }
  return (
    <>
      <h4>Languages</h4>
      <div className={styles.progress}>
        {listLanguages.map((language, index) => {
          const value = Object.values(language)
          const nameLanguage = Object.keys(language)
          const classes = clsx(setClassName(nameLanguage))
          const style = { width: value[0] + '%' }
          return (
            <span className={styles[classes]} key={index} style={style}></span>
          )
        })}
      </div>
      <div className={styles.listNameLanguage}>
        {listLanguages.map((language, index) => {
          const value = Object.values(language)
          const nameLanguage = Object.keys(language)
          const classes = clsx(setClassName(nameLanguage))
          return (
            <div key={index}>
              <span className={clsx(styles.dot, styles[classes])}></span>
              {nameLanguage}:{' '}
              {value[0] !== 100 ? value[0].toFixed(2) : value[0]}%
            </div>
          )
        })}
      </div>
    </>
  )
}
Languages.propTypes = {
  languagesUrl: PropTypes.string
}
export default Languages
