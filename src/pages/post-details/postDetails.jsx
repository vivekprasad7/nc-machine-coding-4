import React, { useEffect, useState } from 'react'
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Feed } from '../../components/feed/feed'
import { Widgets } from '../../components/widgets/widgets'
import { useAppContext } from '../../contexts/AppContext'
import { useParams } from 'react-router-dom'

export const PostDetails = () => {
  const [singlePost, setSinglePost] = useState({})

  const {postId} = useParams()

  const {posts} = useAppContext();

  const getSinglePost = () => {
    const singlePost = posts.find(({postId}) => postId === postId)

    return singlePost;
  }

  useEffect(()=>{
    getSinglePost();
        // eslint-disable-next-line
  },[])


  return (
    <div className='home-page'>
        <Sidebar/>
        {/* < SinglePost  /> */}
        <Widgets/>
    </div>
  )
}
