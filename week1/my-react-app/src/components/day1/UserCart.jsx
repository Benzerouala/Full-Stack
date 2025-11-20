import React from 'react'
import { Welcom } from './welcom'

export const UserCart = ({name,age,profession}) => {
  return (
    <div>
        <h1><Welcom/> je suis {name} , j'ai {age} ans</h1>
    </div>
  )
}
