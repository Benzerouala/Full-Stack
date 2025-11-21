import React from 'react'

const UserRow = ({ user, onSelect }) => {
    return (
        <div>
            <li onClick={() => onSelect(user)}>
                {user.name}
            </li>
        </div>
    )
}

export default UserRow