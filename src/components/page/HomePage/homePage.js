import React, { useEffect, useState, useRef } from 'react'
import {
  debounceFunction,
  GET_URL_API,
  NUMBER_HANDLER,
  getDataApi,
  CALL_API_TYPE
} from '../../index'
import LoadingImage from '../../../assets/Loading/loading.gif'
import UserInfo from '../UserInfo/userInfo'
import styles from './homePage.module.scss'

const HomePage = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [totalCount, setTotalCount] = useState()
  const [page, setPage] = useState(1)
  const [isEmpty, setIsEmpty] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (search) {
      getUsers()
    }
  }, [search])
  useEffect(() => {
    if (search && page) {
      const handleScroll = () => {
        const bodyHeight = document.querySelector('body').clientHeight
        const scrollHeight = window.scrollY + window.innerHeight
        if (bodyHeight <= NUMBER_HANDLER.roundingNumber(scrollHeight)) {
          if (!isEmpty) {
            getMoreUsers()
            setPage(page + 1)
          }
        }
      }
      const debounceScroll = debounceFunction(handleScroll, 500)
      window.addEventListener('scroll', debounceScroll)
      return () => {
        window.removeEventListener('scroll', debounceScroll)
      }
    }
  }, [search, page])
  const getUsers = async () => {
    try {
      setLoading(true)
      const result = await getDataApi(
        GET_URL_API.searchUrl(CALL_API_TYPE.SEARCH, search, page)
      )
      setLoading(false)
      setPage(page + 1)
      setUsers(result.items)
      setTotalCount(result.total_count)
    } catch (error) {
      throw new Error(error.message)
    }
  }
  const getMoreUsers = async () => {
    try {
      const result = await getDataApi(
        GET_URL_API.searchUrl(CALL_API_TYPE.SEARCH, search, page)
      )
      if (result.items.length === 0) {
        setIsEmpty(true)
      } else {
        setUsers((prev) => [...prev, ...result.items])
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const onChange = (e) => {
    const valueInput = e.target.value
    setPage(1)
    setIsEmpty(false)
    setSearch(valueInput)
  }
  const onChangeDebounce = debounceFunction(onChange, 500)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}></div>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search for username...."
            onChange={onChangeDebounce}
            ref={inputRef}
          ></input>
          {search !== '' && !loading && (
            <>
              <div className={styles.totalCount}>
                There is {totalCount} coincidence result
                {totalCount === 0 && (
                  <div className={styles.empty}>
                    <h4>Oops !!!</h4>
                    <span>
                      Cannot find The You Were Looking For . Try Again
                    </span>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        <div className={styles.listUser}>
          {loading && (
            <div className={styles.loading}>
              <img alt="loading" src={LoadingImage} />
            </div>
          )}
          {search &&
            users.length !== 0 &&
            users.map((item, index) => {
              return (
                <UserInfo
                  key={index}
                  userName={item.login}
                  avatarUrl={item.avatar_url}
                ></UserInfo>
              )
            })}
          {isEmpty ? (
            <div className={styles.empty}>
              <h4>Oops !!!</h4>
              <span>Search data has been exhausted</span>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage
