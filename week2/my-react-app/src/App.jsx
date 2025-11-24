import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { About } from './Components/About'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Menu from './Components/Menu'
import { Contact } from './Components/Contact'
import Services from './Components/Services'
import { DashboardLayout } from './Components/DashboardLayout'
import { Stats } from './Components/Dashboard/Stats'
import { Profil } from './Components/Dashboard/Profil'
import AdminLayout from './Components/admin/AdminLayout'
import AdminUsers from './Components/admin/AdminUsers'
import AdminRoles from './Components/admin/AdminRoles'
import NotFoundPage from './Components/errors/NotFoundPage'
function App() {
    const routes = {
      '/':<Home/>,
      '/about':<About/>
    }
    // const [path, setPath] = useState(window.location.pathname)
    const [path, setPath] = useState(window.location.hash.replace('#', '') || '/')
    const [fullUrl, setFullUrl] = useState(window.location.href)
     const navigate = (to) => {
    // window.history.pushState({}, '', to) 
    window.location.hash = to
    setPath(to)                           
  }
  return (
  <Router>
    <Menu/> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Services' element={<Services/>}/> 
      <Route path='dashboard' element={<DashboardLayout/>}>
        <Route path='profil' element={<Profil/>}/>
        <Route path='stats' element={<Stats/>}/>
      </Route>
       
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="roles" element={<AdminRoles />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
  
    
    
  )
}

export default App
