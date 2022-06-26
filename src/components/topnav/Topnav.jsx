import React from 'react'
import UserInfo from '../userinfo/UserInfo'
import data from '../../constants/data.js'
import './topnav.scss'

const Topnav = () => {
  return (
    <div className='topnav'>
          <UserInfo user={data.user} />
          <div className="sidebar-toggle">
              <i className='bx bx-menu-alt-right'></i>
          </div>
      </div>
  )
}

export default Topnav
