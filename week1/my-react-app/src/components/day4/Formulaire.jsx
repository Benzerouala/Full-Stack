import React, { useState ,useRef } from 'react'

export const Formulaire = () => {
  const [mess,setmess]=useState('')
  const [prenom, setprenom] = useState('')
  const [message, setmessage] = useState('')
  const [email, setemail] = useState('')
  const [vert,setvert]=useState('')

  const handleenvoi =(e)=>{
    e.preventDefault()
    // if(prenom===''){
    //   setmess('le prenom et vide')
    // }
    // else{
    //   setmess(`le prenom est ${prenom} et votre message est ${message}`)
    // }
    if(email===''){
      setmess('email requis')
      setvert('bg-danger text-white')
    }
    else{
      setmess('email est envoi');
      setvert('bg-success text-white')
    }
  }
    const inputRef = useRef(null) 
    const afiicheAlert = () => {
    const value = inputRef.current.value
    alert("Vous avez tapé : " + value)
  }

  const Focus = () => {
    inputRef.current.focus()
  }
  return (
    <div>
        {/* <form action="" onSubmit={handleenvoi}> */}
          {/* <div className='form-group'>
            <label htmlFor="">Prenom</label>
            <input type="text" onChange={(e)=>setprenom(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="">Message</label>
          <textarea name="" id="" onChange={(e)=>setmessage(e.target.value)} ></textarea>
          </div> */}
          {/* <div>
            <label htmlFor="">Email</label>
            <input type='email' onChange={(e)=>setemail(e.target.value)} />
            </div>
            <button>Envoi</button>
            <div className={vert}>
            {mess}
            </div> */}
            {/* </form> */}
         <div className="container mt-3">
          <input type="text" ref={inputRef} className="form-control" placeholder="Tapez quelque chose..."/>

          <button className="btn btn-success mt-3 me-2" onClick={afiicheAlert}>
             Afficher une alerte
          </button>

          <button className="btn btn-primary mt-3" onClick={Focus}>
              Focus
          </button>
    </div>
    </div>
  )
}
