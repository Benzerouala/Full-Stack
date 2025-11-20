import React from 'react'

export default function ProductList({prod =[]}) {
  return (
    <div>
      { prod.map((pro)=>(
        <>
                <li>{pro.name}</li>
                <li>{pro.price}</li>
        </>
            ))}
    </div>
  )
}
