import React from 'react'
import './UserCard.scss'
import heartRegular from '../assets/heart-regular.svg'
import heartSolid from '../assets/heart-solid.svg'


interface UserCardProps {
  id: number
  avatar: string
  name: string
  liked: boolean
  onLike: () => void
  email: string
  onUserClick: (user: any) => void
}

const UserCard: React.FC<UserCardProps> = ({
  id,
  avatar,
  name,
  liked,
  onLike,
  onUserClick,
  email,
}) => {
  // console.log('Name&Avatar from UserCard', avatar, 'and', name)

  return (
    <div className="user-card">
      <img
        src={avatar}
        alt={name}
        className="user-card__avatar"
        onClick={() => onUserClick({ id, avatar, name, email })}
      />
      <h2
        className="user-card__name"
        onClick={() => onUserClick({ id, avatar, name, email })}
      >
        {name}{' '}
      </h2>

      <div
        className={`user-card__like-button ${liked ? 'liked' : ''}`}
        onClick={onLike}
      >
        {liked ? (
          <img src={heartSolid} alt="Liked" className="like-icon fill" />
        ) : (
          <img src={heartRegular} alt="Not Liked" className="like-icon" />
        )}
      </div>
    </div>
  )
}

export default UserCard
