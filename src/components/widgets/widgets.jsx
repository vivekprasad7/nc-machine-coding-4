import React from 'react'
import "./widgets.css"
import { useAppContext } from '../../contexts/AppContext'

export const Widgets = () => {
    const { dispatch} = useAppContext();


  return (
    <div className='widgets-area'>

        <div className='sort'>

        <h3>Sort By:</h3>
        <div>
            <h4 onClick={() => {dispatch({type: "SORT_BY_LATEST"})}} >Latest</h4>
            <h4 onClick={() => {dispatch({type: "SORT_BY_LATEST"})}}>Most Upvoted</h4>
        </div>
        </div>

    </div>
  )
}
