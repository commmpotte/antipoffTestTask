import React, { useEffect, useMemo, useState } from 'react'
import './Home.scss'
import UserCard from './UserCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { removeToken } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { addLike, removeLike } from '../store/actions'
import { RootState } from '../store/reducers/rootReducer'
import { useNavigate } from 'react-router-dom'
import { isUserLiked } from '../store/selectors'

const Home: React.FC = () => {
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const likedUsersState = useSelector((state: RootState) => state.likes)
  const likedUsersStateMemoized = useMemo(
    () => likedUsersState,
    [likedUsersState]
  )
  const token = useSelector((state: RootState) => state.auth.token)
  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://reqres.in/api/users?page=2')
        const data = await response.json()
        setUsers(data.data)
      } catch (error) {
        console.error('Ошибка загрузки пользователей:', error)
      }
    }

    fetchUsers()
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(removeToken())
    console.log('Token removed, we are going back to main')
    navigate('/')
  }

  const handleLike = (userId: number) => {
    const likedUsers = likedUsersStateMemoized.likes.likedUsers
    if (likedUsers && likedUsers.includes(userId)) {
      dispatch(removeLike(userId))
      console.log(userId, 'remove a LIKE!')
    } else {
      dispatch(addLike(userId))
      console.log(userId, 'got a LIKE!')
    }
  }
  return (
    <div className="home-container">
      <header className="header">
        <button className="header__logout" onClick={handleLogout}>
          ВЫХОД
        </button>
        <div className="header__content">
          <div className="team-info">
            <h1 className="team-info__header">Наша команда</h1>
            <h2 className="team-info__text">
              Это опытные специалисты, хорошо разбирающиеся во всех задачах,
              которые ложатся на их плечи, и умеющие находить выход из любых,
              даже самых сложных ситуаций.
            </h2>
          </div>
        </div>
      </header>
      <div className="user-container">
        {users.map((user: any) => (
          <UserCard
            key={user.id}
            id={user.id}
            email={user.email}
            name={`${user.first_name} ${user.last_name}`}
            avatar={user.avatar}
            liked={isUserLiked(likedUsersStateMemoized, user.id) || false}
            onLike={() => handleLike(user.id)}
            onUserClick={(user) =>
              navigate(`/user/${user.id}`, { state: { user } })
            }
          />
        ))}
      </div>
      <button className="show-more-button">
        Показать еще <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>
  )
}

export default Home
