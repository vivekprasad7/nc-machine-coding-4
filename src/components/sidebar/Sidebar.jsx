import React from 'react'
import { NavLink } from 'react-router-dom'
import "./sidebar.css"

export const Sidebar = () => {
  return (
    

        <div className='sidebar'>
        <NavLink
          className="s-nav"
          to="/"
        >
          <i className="fa-solid fa-grip "></i>{" "}
          <span className="">Feed</span>
        </NavLink>
        <NavLink
          className=""
          to="/explore"
        >
          <i className="fa-regular fa-compass "></i>{" "}
          <span className="">Explore</span>
        </NavLink>
        <NavLink
          className=""
          to="/bookmark"
        >
          <i className="fa-regular fa-bookmark "></i>{" "}
          <span className="">
            Bookmarks{" "}
        
          </span>
        </NavLink>

        <NavLink
          className=""
          to="/bookmark"
        >
          <i className="fa fa-user "></i>{" "}
          <span className="">
            Profile{" "}
        
          </span>
        </NavLink>
        
        
        </div>

    
  )
}
