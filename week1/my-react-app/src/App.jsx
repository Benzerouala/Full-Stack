import { useState } from 'react'

import './App.css'

import { ProfilCard } from './components/day2/ProfilCard'
import { CounterButton } from './components/day2/CounterButton'
import { HookUseCounter } from './components/day3/HookUseCounter'
import { ThemeSelector } from './components/day3/ThemeSelector'
import { Panier } from './components/day3/Panier'
import { Formulaire } from './components/day4/Formulaire'
function App() {
  const  [users,setusers]=  useState([
  {
    "id": 1,"name": "Youssef El Amrani","role": "Développeur Web","email": "youssef.elamrani@example.ma",urlimg: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    "id": 2,"name": "Fatima Zahra Benali","role": "Designer UX/UI","email": "fatima.benali@example.ma" , urlimg: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    "id": 3,"name": "Othmane Zahidi","role": "Administrateur Système","email": "othmane.zahidi@example.ma" ,urlimg: "https://randomuser.me/api/portraits/men/32.jpg"
  },
])
  const [prod,setprod]=useState([])
  const [name, setname]=useState('')
  const [price, setprice]=useState('')
 const handlesubmit=(e)=>{
        e.preventDefault();
        const nouveauprod = {name,price}
        setprod([nouveauprod]);
    }
    // const handledelte=(e)=>{
    //   setusers((u)=>u.filter((use)=>use!==e))
    // }
 const handledelte = (id) => {
  setusers((prev) => prev.filter((user) => user.id !== id));
};

  return (
    <>
    {/* <form onSubmit={handlesubmit}>
        <input 
          type="text" placeholder="Nom du produit" name='name'  onChange={(e)=>setname(e.target.value)}
        />

        <input 
          type="number" placeholder="Prix" onChange={(e) => setprice(e.target.value)}
        />
        <button>Ajouter</button>
      </form> */}
     {/* { users.map((user)=>(
      <ProfilCard  user={user} handledelte={handledelte}/>
      ))}
      <CounterButton /> */}
      {/* <HookUseCounter/> 
      <ThemeSelector/> 
      <Panier/> */}
      <Formulaire/>
    </>
  )
}

export default App
