import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const DashboardLayout = () => {
  return (
    <div>

      <nav className='nav '>
        <li className='nav-item mb-2' ><Link to="/dashboard/profil" className='nav-link '>Profil</Link></li>
        <li className='nav-item mb-2' ><Link to="/dashboard/stats " className='nav-link '>Stats</Link></li>
      </nav>
      <Outlet/>
    </div>
  )
}
