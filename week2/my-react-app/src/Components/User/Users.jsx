import React from 'react'
import { userss } from './userss'
import { Link } from 'react-router-dom'
export const Users = () => {
  return (
    <div className="d-flex flex-wrap">
        {userss.map((user) => (
            <div key={user.id} className="card m-1" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{user.nom}</h5>
                <p className="card-text">{user.message}</p>
                <Link to={`/user/${user.id}`} className="btn btn-primary">
                Plus de détails
                </Link>
            </div>
            </div>
            ))}
    </div>
  )
}
