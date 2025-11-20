import React, { useState } from 'react'

export const Panier = () => {
    const [cart,setcart]=useState([
        {id:1,name:"Laptop",qty:1},
        {id:2,name:"Phone",qty:2}
    ])
    const handledelete = (id)=>{
        setcart((pro)=>pro.filter((pr)=>pr.id !==id))
    }
    const increment= (pro)=>{
        setcart(pr=>pr.map((p)=>p.id===pro.id ? {...p , qty:p.qty +1} :p))
    }
  return (
    <div className="container mt-4">
        {
            cart.map((pro)=>(
                <>
                <li>name : {pro.name}</li>
                <li>quantité :{pro.qty}</li>
                <button onClick={()=>handledelete(pro.id)} className='btn btn-danger'>delete</button>
                <button onClick={()=>increment(pro)} className="btn btn-success">increment</button>
                </>
            ))
        }
    </div>
  )
}
