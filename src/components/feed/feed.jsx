import React from 'react'
import "./feed.css"
import { Post } from '../post/post'
import { useAppContext } from '../../contexts/AppContext'

export const Feed = () => {
    const {posts, newData} = useAppContext();

    // const {username, name, picUrl, post, postDescription, upvotes, tags} = posts;
  return (
    <div className='feed-page'>

        {
            newData.map((item) => {

                const {postId, username, name, picUrl, post, postDescription, upvotes, tags, isBookmarked} = item;


                return(
                    <Post postId={postId} username={username} name={name} picUrl={picUrl} post={post} postDescription={postDescription} upvotes={upvotes} tags={tags} isBookmarked={isBookmarked}/>
                )
            })
        }
        {/* <Post username={username} name={name} picUrl={picUrl} post={post} postDescription={postDescription} upvotes={upvotes} tags={tags}/> */}


    </div>
  )
}
