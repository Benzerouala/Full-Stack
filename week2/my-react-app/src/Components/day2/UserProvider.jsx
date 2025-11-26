import React, { createContext, useState } from 'react'
import { UserContext } from './UserContext'
export const UserContext =createContext()
export const UserProvider = () => {
    const [user,setuser]=useState({name:'ossama'})
  return (
    <div>
        <UserContext.Provider value={{user,setuser}}>
          {children}
        </UserContext.Provider>
    </div>
  )
}
