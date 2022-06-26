import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/sidebar/Sidebar'
import Topnav from '../components/topnav/Topnav'
import './main-layout.scss'

const MainLayout = () => {
  return (
    <>
      <Sidebar/>
      <div className='main'>
        <div className="main__content">
          <Topnav/>
          <Outlet/>
        </div>
      </div>

    </>
  )
}

export default MainLayout
