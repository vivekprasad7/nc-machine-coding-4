import React from 'react'
import "./Home.css"
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/feed'
import { Widgets } from '../../components/widgets/widgets'

export const Home = () => {
  return (
    <div className='home-page'>
        <Sidebar/>
        <Feed/>
        <Widgets/>


    </div>
  )
}
