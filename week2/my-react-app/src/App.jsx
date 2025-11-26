import { useState } from 'react'
import './App.css'
import Home from './Components/day1/Home'
import { About } from './Components/day1/About'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Menu from './Components/day1/Menu'
import { Contact } from './Components/day1/Contact'
import Services from './Components/day1/Services'
import { DashboardLayout } from './Components/day1/DashboardLayout'
import MainLayout from './Components/day1/MainLayout'
import { Stats } from './Components/day1/Dashboard/Stats'
import { Profil } from './Components/day1/Dashboard/Profil'
import AdminLayout from './Components/day1/admin/AdminLayout'
import AdminUsers from './Components/day1/admin/AdminRoles'
import AdminRoles from './Components/day1/admin/AdminRoles'
import NotFoundPage from './Components/day1/errors/NotFoundPage'
import { Users } from './Components/day1/User/Users'
import Userid from './Components/day1/User/Userid'
import { CounterProvider } from './Components/day2/CounterContext'
import CounterButtons from './Components/day2/CounterButtons'
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
      <Route path='/dashboard' element={<DashboardLayout/>}>
        <Route path='profil' element={<Profil/>}/>
        <Route path='stats' element={<Stats/>}/>
      </Route>
       
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<Users />} />
          <Route path="roles" element={<AdminRoles />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/users" element={<Users />} />
        <Route path='/user/:id' element={<Userid/>} />
    </Routes>
      <CounterProvider>
        <Routes>
          <Route path='/ConterButtons' element={<CounterButtons/>} />
        </Routes>
      </CounterProvider>
  </Router>
  )
}

export default App
