import React from 'react'
import './style.css'

export const ProfilCard = ({ user, handledelte }) => {
  return (
    <div className="profil-card">
      <div><img src={user.urlimg} alt="" /></div>

      <div className="profil-info">
        <h3 className="profil-name">{user.name}</h3>
        <p className="profil-role">{user.role}</p>
        <a className="profil-email" href={`mailto:${user.email}`}>{user.email}</a>
      </div>

      <button onClick={() => handledelte(user.id)} className="delete-btn">
        Delete
      </button>
    </div>
  )
}
