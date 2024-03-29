import React from 'react'
import './UserDetails.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeToken } from '../store/actions'
import email_icon from '../assets/email_icon.svg'
import phone_icon from '../assets/phone_icon.svg'

const UserDetails: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useLocation().state
  const { id, email, name, avatar } = user

  const goBack = () => {
    navigate('/home')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(removeToken())
    console.log('Token removed, we are going back to main')
    navigate('/')
  }

  console.log('User ID from URL:', id, name)

  return (
    <div>
      <header className="user-details-header">
        <div className="user-details-header__container">
          <button onClick={goBack} className="back-button">
            Назад
          </button>
          <button onClick={handleLogout} className="logout-button">
            Выход
          </button>
          <div className="user-info">
            <div className="user-avatar">
              <img className="user-avatar__icon" src={avatar} alt={name} />
            </div>
            <div className="user-info-data">
              <h1 className="user-info-name">{name}</h1>
              <h3 className="user-info-description">Партнер</h3>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container-main">
          <div className="user-details-content">
            <p className="user-details-text">
              Клиенты видят в нем эксперта по вопросам разработки комплексных
              решений финансовых продуктов, включая такие аспекты, как
              организационная структура, процессы, аналитика и ИТ-компоненты. Он
              помогает клиентам лучше понимать структуру рисков их бизнеса,
              улучшать процессы за счет применения новейших технологий и
              увеличивать продажи, используя самые современные аналитические
              инструменты.
            </p>
            <p className="user-details-text">
              В работе с клиентами недостаточно просто решить конкретную
              проблему или помочь справиться с трудностями. Не менее важно
              уделять внимание обмену знаниями: "Один из самых позитивных
              моментов — это осознание того, что ты помог клиенту перейти на
              совершенно новый уровень компетентности, уверенность в том, что
              после окончания проекта у клиента есть все необходимое, чтобы
              дальше развиваться самостоятельно".
            </p>
            <p className="user-details-text">
              Помимо разнообразных проектов для клиентов финансового сектора,
              Сорин ведет активную предпринимательскую деятельность. Он является
              совладельцем сети клиник эстетической медицины в Швейцарии,
              предлагающей инновационный подход к красоте, а также инвестором
              других бизнес-проектов.
            </p>
          </div>
          <div className="user-details-contacts">
            <div className="user-details-contact">
              <img src={phone_icon} alt="Телефон" className="contact-icon" />
              <p className="contact-text">+7 (954) 333-44-55</p>
            </div>
            <div className="user-details-contact">
              <img src={email_icon} alt="Email" className="contact-icon" />
              <p className="contact-text">{email}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


export default UserDetails
