import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { decode, getDataApi, GET_URL_API, Modal } from '../../../../index'
import styles from './repoItemReadme.module.scss'

const RepoReadme = ({ repoName, userName, isOpen, handleClose }) => {
  const [content, setContent] = useState('')
  const [error, setError] = useState(false)
  const getReadMeContent = async () => {
    try {
      const result = await getDataApi(GET_URL_API.readMeUrl(userName, repoName))
      setContent(decode(result.content))
    } catch (error) {
      if (error) {
        setError(true)
      }
    }
  }
  useEffect(() => {
    if (repoName && userName) {
      getReadMeContent()
    }
  }, [])
  if (!isOpen) return null
  return (
    <>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <div className={styles.contentText}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
          {error && <div>No readme content {repoName}</div>}
        </div>
      </Modal>
    </>
  )
}
RepoReadme.propTypes = {
  repoName: PropTypes.string,
  userName: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
}

export default RepoReadme
