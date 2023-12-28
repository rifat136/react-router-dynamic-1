import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';


const Post = ({post}) => {
    //  const {id,title, body}= post;
    return (
        <div className='content'>
            <h2>{post.id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`}>Show Details</Link>
            <Link to={`/post/${post.id}`}> <button>Read More</button> </Link>
            

        </div>
    );
};

export default Post;