import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"
import { useAppContext } from '../../contexts/AppContext'

export const Navbar = () => {

  return (
    <nav className='navbar'>
        <div className='nav-links'>
        <NavLink to="/">All Habits</NavLink>
        <NavLink to="/archive">Archive</NavLink>
        </div>

        <div className='nav-button'>
            <button>+ Add New Habit</button>
        </div>

    </nav>
  )
}
