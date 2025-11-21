import React from 'react'
import UserRow from './UserRow'

const Dashboard = ({ users, onSelect }) => {
    return (
        <div>
            <ul>
            {users.map(u => (
                <UserRow key={u.id} user={u} onSelect={onSelect} />
            ))}
        </ul></div>
    )
}

export default Dashboard