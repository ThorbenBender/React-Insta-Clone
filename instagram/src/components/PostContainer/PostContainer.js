import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

export default function PostContainer({data, comments}) {
    return (
        <div className="Post">
            <div className="User">
                <img src={data.thumbnailUrl} alt="user"></img>
                <p>{data.username}</p>
            </div>
            <div>
                <div className="postImage">
                    <img src={data.imageUrl} alt="post"></img>
                </div>
            </div>
            <div className="comment-section">
                {
                    comments.map((comment, idx) => {
                        return <CommentSection comment={comment} key={idx}/>
                    })
                }
                <form>
                    <input type="text" placeholder="Add a comment..."></input>
                </form>
            </div>
        </div>
    )
}
