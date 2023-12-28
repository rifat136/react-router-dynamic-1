import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetail= useLoaderData();
    const{id, title, body,} =postDetail;
   
    const nevigate= useNavigate();
 

    const handleGoBack =()=>{
        nevigate(-1);
    }

    return (
        <div>
            <h1>{id}</h1>
            <h2>Name: {title}</h2>
            <h5>{body}</h5>

            <button onClick={handleGoBack}>Go Back</button>

        </div>
    );
};

export default PostDetails;