import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import sidebarNav from '../../configs/sidebarNav'
import  images  from '../../constants/images'
import './sidebar.scss'

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  

  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1];
    const activePath = sidebarNav.findIndex((item) => (
      item.section === curPath
    ))
    setActiveIndex(() => curPath.length === 0 ? 0 : activePath)
  }, [location])

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__logo">
          <img src={images.logo} alt=""/>
          <div className="sidebar-close">
            <i className='bx bx-x'></i>
          </div>
        </div>
        <div className="sidebar__menu">
          {
            sidebarNav.map((nav, index) => (
              <Link to={nav.link} key={`nav-${index}`}
                className={`sidebar__menu__item ${activeIndex === index && 'active'}`}>
                <div className="sidebar__menu__item__icon">
                    {nav.icon}
                </div>
                <div className="sidebar__menu__item__txt">
                    {nav.text}
                </div>
              </Link>
            ))
          }
          <div className="sidebar__menu__item">
              <div className="sidebar__menu__item__icon">
                  <i className='bx bx-log-out'></i>
              </div>
              <div className="sidebar__menu__item__txt">
                  Logout
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
