import React from 'react'

const Status = ({ loggedIn, handleLogin }) => {
    return (
        <>
            <h3>Bienvenue</h3>
            {loggedIn ? (<button onClick={handleLogin}>Déconnexion</button>) : (<button onClick={handleLogin}>Connexion</button>)}
        </>
    )
}

export default Status