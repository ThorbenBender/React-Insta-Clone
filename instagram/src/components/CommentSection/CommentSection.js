import React from 'react';
import './CommentSection.css';

export default function CommentSection({comment}) {
    return (
        <div className="comment">
            <p className="comment-user">{comment.username}</p>
            <p className="comment-text">{comment.text}</p>
        </div>
    )
}