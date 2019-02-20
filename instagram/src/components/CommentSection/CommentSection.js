import React from 'react';
import './CommentSection.css';


export default function CommentSection({comments}) {
        return (
                comments.map((comment, idx) => {
                    return (
                        <div className="comment" key={idx}>
                            <p className="comment-user">{comment.username}</p>
                            <p className="comment-text">{comment.text}</p>
                        </div>
                    )
                })
        )
}