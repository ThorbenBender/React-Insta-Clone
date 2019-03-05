import React from 'react';
import PostContainer from './PostContainer';

export default function PostsPage(props) {
    return (
        <div>
            {
                props.dummyData.map((data, idx) => 
                <PostContainer data={data} key={idx} id={idx}/> )
            }
        </div>
    )
}