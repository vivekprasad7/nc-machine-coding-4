import React from 'react'
import "./post.css"
import { useAppContext } from '../../contexts/AppContext'
import { useNavigate } from 'react-router-dom'

export const Post = ({postId, username, name, picUrl, post, postDescription, upvotes, tags, isBookmarked}) => {


    const {upvoteHandler, downvoteHandler, bookmarkHandler} = useAppContext()

    const navigate = useNavigate();


  return (
    <div className='post'>
        <div className='votes'>
        <i onClick={() => upvoteHandler(postId)} class="fa-solid fa-caret-up"></i>
        <p>{upvotes}</p>
        <i onClick={() => downvoteHandler(postId)}class="fa-solid fa-caret-down"></i>
        </div>

        <div className='post-info'>
            <div className='post-top'>
            <i class="fa fa-circle"></i>
            <p>Posted By <span>@{username}</span></p>
            </div>

            <div className='post-bottom'>
                <div className='post-title'>
                <h3>{post}</h3>
                </div>

                <div className='post-tags'>
                    {
                        tags.map((item,i) => {

                            return(<div key={i}>
                            <span>{item}</span>
                            </div>)
                        })
                    }
                </div>

                <div className='post-para'>
                    <p>{postDescription}</p>
                </div>

                <div className='post-links'>
                <i onClick={() => navigate(`/posts/${postId}`)}  class="fa-sharp fa-regular fa-comment"></i>
                <i class="fa-solid fa-share"></i>
                { isBookmarked ? <i  onClick={() => bookmarkHandler(postId)} class="fa fa-bookmark"></i> :                 <i  onClick={() => bookmarkHandler(postId)} class="fa-regular fa-bookmark"></i>

}
                </div>

            </div>



        </div>

    </div>
  )
}
