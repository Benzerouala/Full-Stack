import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { About } from './Components/About'

function App() {
    const routes = {
      '/':<Home/>,
      '/about':<About/>
    }
    const [path, setPath] = useState(window.location.pathname)
    
  return (
    <>
      
    <button onClick={() => setPath('/')} style={{ marginRight: 10 }}>
        Home
      </button>

      <button onClick={() => setPath('/about')} >
         About
      </button>
      {routes[path]}
      
    </>
  )
}

export default App
